const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const questionDB = require("../models/Question");

router.post("/", async (req, res) => {
  // console.log("res from backend", req.body);

  const searchString = req.body.search;
  // console.log("Sas", searchString, typeof searchString);
  try {
    const collection = await questionDB.find({ questionName: searchString });

    // console.log("Size", collection.length);
    if (collection.length !== 0) {
      res.status(201).send({
        status: true,
        message: "searched found",
        collection: collection,
      })
    }else {
        res.status(404).send({
            status:false,
            message:"Searched Item not found",
            collection:collection,
            
        })
    }
  } catch (e) {
    console.log(e);
  }


    // console.log("req",req);
    
    // try {
    //     await questionDB
    //       .aggregate([
    //         {
    //           $lookup: {
    //            from: "answers", //collection to join
    //             localField: "_id", //field from input document
    //             foreignField: "questionId",
    //             as: "allAnswers", //output array field
    //           },
    //         },
    //       ])
    //       .exec()
    //       .then((doc) => {
    //     //    console.log(doc);
    //         res.status(200).send(doc);
    //       })
    //       .catch((error) => {
    //         res.status(500).send({
    //           status: false,
    //           message: "Unable to get the question details",
    //         });
    //       });
    //   } catch (e) {
    //     res.status(500).send({
    //       status: false,
    //       message: "Unexpected error",
    //     });
    //   }

});

// router.get("/", async (req, res) => {
//   console.log("get",req.body);
// });

module.exports = router;
