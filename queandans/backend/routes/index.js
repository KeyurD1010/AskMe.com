const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const  ObjectId = require('mongodb').ObjectId;
const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const searchRouter = require("./Search");
const sidebarOptionRouter = require("./SidebarOption");

const LikeDislikeRouter = require("./LikeDislike");

router.get("/", (req, res) => {
  res.send("This api is reserved");
});



router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use("/searchs",searchRouter);


const questionDB = require("../models/Question");
router.post("/like/:id",async (req,res) =>{
  try{
    console.log(req.params.id);
    // const qid = new mongoose.Types.ObjectId(req.params.id);
   const qid = mongoose.Schema.Types.ObjectId(req.params.id);
    const like = await questionDB.findById({_id: qid});
    console.log("asd",like);
    like.likeCounter++;

    await like.save();

    res.json(save);
}catch(err){
    console.log(err.message);
}
});

router.use("/sidebarOption",sidebarOptionRouter);

module.exports = router;