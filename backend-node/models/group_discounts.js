import mongoose from "mongoose";

const Schema = mongoose.Schema;

let groupDiscountSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    university: String,
    endDate: {
        type: Date,
        default: Date.now()
    },
    discountRules: [{
        _id: mongoose.Schema.Types.ObjectId,
        numberOfUsers: Number,
        discountPercent: Number
    }],
    userMeta: [{
         type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

// groupDiscountSchema.endDate instanceof Date;

export default mongoose.model('GroupDiscount', groupDiscountSchema);

