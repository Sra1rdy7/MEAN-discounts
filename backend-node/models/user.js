import mongoose from "mongoose";

const Schema = mongoose.Schema;


let userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    groupDiscount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GroupDiscount'
    }
});


export default mongoose.model('User', userSchema);

