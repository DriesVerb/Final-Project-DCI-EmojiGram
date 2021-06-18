const User = require('../models/User')

// test
exports.test = (req, res) => {
  res.json({ msg: "this route works" });
};

exports.testPrivate = (req, res) => {
  res.json({ msg: "this route works in private" });
};


exports.create =  (req,res)=>{
  console.log(req.body)
  const newUser = new User(
     req.body
  )
  newUser.save((err,data)=>{
      if(err) throw err.message
      res.json(data)
  })
}



exports.editProfile = (req,res) =>{
    console.log(req.body)

    User.findByIdAndUpdate(req.params.id, req.body, (err,doc)=>{
      if(err) throw err.message
      res.json(date)
    })
}