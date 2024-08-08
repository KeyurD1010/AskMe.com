// const express = require("express");
// const router = express.Router();
// const mongoose = require('mongoose');
// const questionDB = require("../models/Question");

// router.post("/",async (req,res) => {
//     try{
//         console.log(res);
//         const like = await questionDB.findById(req.params.id);
//         console.log(like);
//         like.likeCounter++;

//         await like.save();

//         res.json(save);
//     }catch(err){
//         console.log(err.message);
//     }
// })


// module.exports = router;