const Story = require("../models/Story");
const User = require("../models/Story");

module.exports = async function (req, res, next) {

 try{
   
    let story = await Story.findById(req.params.id)
    
    console.log(req.body)
   /*  console.log(req.user.id) */
    console.log(story.user.toString())
    if(story.user.toString()){
        story.views++
        story.save()
    }else if(story.user.toString()){
        story.views++
        story.save()
    }else{
        next()
    }
 }catch (err) {
    console.error(err.message);
    res.status(507).send("keine ID");
  }


}

