import mongoose from 'mongoose';



const ChatSchema = new mongoose.Schema({
    members: {
        type: Array,

    },
    sorter:{
        type:String
    }
},
    {
        timestamps: true,
    }
);


const chatmodel = mongoose.model("chat", ChatSchema)
export default chatmodel 