
const Story = require('../models/Story')


exports.create =  (req,res)=>{
    console.log(req.body)
    const newStory = new Story(
       req.body
    )
    newStory.save((err,data)=>{
        if(err) throw err.message
        res.json(data)
    })
}


exports.published = (req,res)=>{
    Story.findById(req.params.id, (err, data)=>{
        res.json(data)
    }).populate('')
}

exports.edit = (req,res)=>{
    
    console.log(req.body)
   
    Story.findByIdAndUpdate(req.params.id, req.body, (err,doc)=>{
        if(err) throw err.message
        res.json(doc)
    })
}