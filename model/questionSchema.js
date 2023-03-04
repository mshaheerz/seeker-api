import mongoose from 'mongoose';



const questionSchema = new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,
        ref:'user',
        required:true
        },
  
    company:{
        type:mongoose.Types.ObjectId,
        ref:'company',
    },
    question:String,
    answer:String
},
    {
    timestamps:true,
    }
);


const questionModel = mongoose.model("questions",questionSchema )
export default questionModel