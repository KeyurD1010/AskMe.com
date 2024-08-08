const mongoose = require('mongoose');

const url = "mongodb://keyurdhanani:7572891499@ac-rzeoehm-shard-00-00.0e3l6xb.mongodb.net:27017,ac-rzeoehm-shard-00-01.0e3l6xb.mongodb.net:27017,ac-rzeoehm-shard-00-02.0e3l6xb.mongodb.net:27017/?ssl=true&replicaSet=atlas-10frq0-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect = () =>{
    mongoose.connect(url , {
        useNewUrlParser : true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfuly")
    }).catch((e) => console.log("Erorr : " , e));
}