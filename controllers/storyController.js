const Story = require("../models/Story");



//create sroty

exports.create = async (req, res) => {
  try {   
    
      const newStory = new Story({...req.body , user: req.user.id});
      const story = await newStory.save();
      res.json({ msg: "A new Story has been added :)" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

//////////////////////////////////////////////////////////////////////

//publishe sroty

exports.published = async (req, res) => {
  try {
    const publicStories = await Story.find()
        .sort({
        date: -1,
      });
      res.json(publicStories );
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

exports.show = async  (req, res) => {      
  try {
      let story = await Story.findById(req.params.id);
      res.json(story);
      // console.log(data)
  } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');      
      }    
  }
//////////////////////////////////////////////////////////////////////

//edit sroty

exports.edit = async (req, res) => {

  const { text, title, genre, createdBy } = req.body;
  
  const editedStory = {};
  if (text) editedStory.text = text;
  if (title) editedStory.title = title;
  if (genre) editedStory.genre= genre;
  if (createdBy) editedStory.createdBy = createdBy;

  try {
    let story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ msg: 'Story not found' });
    
     // Make sure user owns contact
    if (story.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }


    story = await Story.findByIdAndUpdate(
      req.params.id,
      {$set: editedStory},
      {new: true},
    );

    res.json(story );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');

  }
 }
//////////////////////////////////////////////////////////////////////

//delete sroty

exports.deleteStorie = async (req, res) => {
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
      return res.status(401).json({msg: 'Not authorized'});
    }
    await Story.findByIdAndRemove(req.params.id);

    res.json({msg: 'Story removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
 };

