const mongoose = require("mongoose");

const toDoSchema =new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    status:{type:Boolean,default:false},
});
const todos=mongoose.model("todos",toDoSchema);
module.exports=todos;
