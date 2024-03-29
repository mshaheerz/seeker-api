import messagemodel from "../model/messageModel.js";


export const addMessage = async(req, res)=> {
    const {chatId, senderId, text} = req.body;
    const message = new messagemodel({
        chatId,
        senderId,
        text
    });
    try {
        const result = await message.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getMessages = async(req, res)=> {
    const {chatId} = req.params;

    try {
        const result = await messagemodel.find({chatId});
        await messagemodel.updateMany({chatId:chatId},{readed:true})
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}