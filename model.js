const {
    Schema,model
} = require('mongoose')



const Schema = new Schema({
    nmae:{
        type: String,
        required: true,
        maxlength: 30
    },

    email:{
        type:String,
        required :true ,
        maxlength: 30
    },

    phoneNumber:{
        type: int,
        required: true,
        maxlength:11

    },
});

const TaskModel = model(test, MySchema)
module.exports=TaskModel;