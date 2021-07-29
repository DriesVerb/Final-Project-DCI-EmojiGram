const Story = require('../models/Story');
const User = require('../models/User');

//create sroty

exports.create = async (req, res) => {
  try {
    const newStory = new Story({ ...req.body, user: req.user.id })
    const story = await newStory.save();
    res.json({ msg: 'A new Story has been added :)' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//////////////////////////////////////////////////////////////////////

//publishe sroty

exports.published = async (req, res) => {
  try {
    const publicStories = await Story.find()
      .populate('user')

      .sort({
        createdAt: -1,
      })
      .populate('user')
      .limit(5);
    res.json(publicStories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

//////////////////////////////////////////////////////////////////////

//show sroty

// exports.show = (req, res) => {
//   Story.findById(req.params.id, (err,data)=>{
//     res.json(data)
//   })
// }

exports.show = async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).populate('user');
    res.json(story);
    // console.log(data)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
//////////////////////////////////////////////////////////////////////

//edit sroty

exports.edit = async (req, res) => {
  const { text, title, genre, createdBy } = req.body;

  const editedStory = {};
  if (text) editedStory.text = text;
  if (title) editedStory.title = title;
  if (genre) editedStory.genre = genre;
  if (createdBy) editedStory.createdBy = createdBy;

  try {
    let story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ msg: 'Story not found' });

    // Make sure user owns contact
    if (story.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    story = await Story.findByIdAndUpdate(
      req.params.id,
      { $set: editedStory },
      { new: true }
    );

    res.json(story);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
//////////////////////////////////////////////////////////////////////

//delete sroty

exports.deleteStory = async (req, res) => {
  try {
    // let story = await Story.findById(req.params.id);

    // if (!story) return res.status(404).json({ msg: 'Story not found' });

    // Make sure user owns contact
    // if (story.user.toString() !== req.user.id) {
    //   return res.status(401).json({msg: 'Not authorized'});
    // }

    let story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ msg: 'Story not found' });

    // Make sure user owns contact
    if (story.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    await Story.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Story removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////
//Filter Alphabetically
exports.alphabetical = async (req, res) => {
  try {
    await Story.find((err, story) => {
      res.json(story);
    })
      .populate('user')
      .sort({ title: 1 })
      .limit(5);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
exports.views = async (req, res) => {
  try {
    await Story.find((err, story) => {
      res.json(story);
    })
      .populate('user')
      .sort({ views: -1 })
      .limit(5);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Sort By Time
exports.sortTime = async (req, res) => {
  try {
    await Story.find((err, time) => {
      res.json(time);
    }).sort({ createdAt: -1 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getGenre = async (req, res) => {
  await Story.find((err, stories) => {
    res.json(stories);
  })
    .populate('user')
    .where('genre')
    .equals(req.params.genre);
};

exports.sortBylikes = async (req, res) => {
  try {
    const storyLikes = await Story.aggregate(
      [
        {
          $project: {
            title: 1,
            emojis: 1,
            text: 1,
            author: 1,
            user: 1,
            genre: 1,
            likes: 1,
            length: { $size: '$likes' },
          },
        },
        { $sort: { length: -1 } },
        { $limit: 10 },
      ]
      /*   function(err,results) {
    console.log(results)
      res.json(results)
  } */
    );
    await User.populate(storyLikes, { path: 'user' }, (err, results) => {
      res.json(results);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////
exports.likeStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    // Check if the post has already been liked
    //some is like filtere but return boolean
    if (story.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post already liked' });
    }
    // unshhift is as push method but will put it on the begining
    story.likes.unshift({ user: req.user.id });

    await story.save();

    return res.json(story.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////
exports.unlikeStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    // Check if the post has not yet been liked
    // some is like filtere but return boolean
    if (!story.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }
    // remove the like
    story.likes = story.likes.filter(
      ({ user }) => user.toString() !== req.user.id
     
    );
   
   
    await story.save();

    return res.json(story.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////
exports.addComment = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    const story = await Story.findById(req.params.id).populate('user');
console.log (user)
    const newComment = {
      text: req.body.text,
      username: user.username,
      avatar: user.avatar,
      user: req.user.id,
    };
    console.log(newComment);
    story.comments.unshift(newComment);

    await story.save();

    res.json(story.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////
exports.removeComment = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    // Pull out comment
    const comment = story.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    console.log (story)
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }
    // Check user
    if (comment.user.toString() !== req.user.id  ) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
   
 
    story.comments = story.comments.filter(
      ({ id }) => id !== req.params.comment_id
    );

    await story.save();

    return res.json(story.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
};
