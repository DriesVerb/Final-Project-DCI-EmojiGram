const express = require('express')
const router = express.Router();
const Story = require('../models/Story')

router.post("/create", (req,res)=>{
    console.log(req.body)
    const newStory = new Story({
       /*  Here req.body */
    })
    newStory.save((req,res)=>{
        res.json('New Story added')
    })
})

router.get("/publishedStory", (req,res)=>{
    
})

module.exports = router;