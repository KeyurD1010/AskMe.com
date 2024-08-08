const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const questionDB = require("../models/Question");


router.post("/",async (req,res) => {

    const filter = req.body.history;
    console.log(filter);
   const collection =  await questionDB.find({questionCategory:filter})

    if(collection.length > 0){
        res.status(200).send({
            status:true,
            message:"All collections",
            collection:collection,
        })
    }

})


module.exports = router;