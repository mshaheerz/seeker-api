import mongoose from 'mongoose';



const jobappliySchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        required:true
        },
    job:{
        type:mongoose.Types.ObjectId,
        ref:'jobs',
        required:true
        },
    company:{
        type:mongoose.Types.ObjectId,
        ref:'company',
        required:true
        },
    status:{
        type:String,
        default:'pending',
    }                    
        
},
{
  timestamps:true,
}
);


const jobapplymodel = mongoose.model("applyjob",jobappliySchema )
export default jobapplymodel