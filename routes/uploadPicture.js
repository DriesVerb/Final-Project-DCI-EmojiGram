
const router = require('express').Router();
const Picture = require('../models/Picture');
const multer = require('multer');

// Storing the picture with Multer method
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/image');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '_' + file.filename);
  },
});

//uplaoding the picture
const upload = multer({ storage });

//adding the picture

router.post('/profile', upload.single('profilePics'), (req, res) => {
  const newPicture = new Picture({
    profilePics: '/image/' + req.file.filename,
  });
  console.log(req.body);
  newPicture.save((err, doc) => {
    // res.json('A new picture has been added to the profile')
    res.json(doc);
  });
});

module.exports = router;
