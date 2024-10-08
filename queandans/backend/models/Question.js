const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    questionName : String,
    questionUrl : String,
    questionCategory: String,
    likeCounter: {type:Number,default:0},
    createdAt:{
        type: Date,
        default : Date.now()
    },
    answers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answers"
    },
    user: Object,
})

module.exports = mongoose.model("Questions", QuestionSchema);