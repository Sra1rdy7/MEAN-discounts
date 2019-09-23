import express from 'express';
import GroupDiscount from "../models/group_discounts";
import  {itemNotFound} from "../helper_functions/handling_errors";
import mongoose from 'mongoose';
import group_discounts from '../models/group_discounts';



const groupDiscountRouter = express.Router();

var status = [];
//Handling get requests to group discounts
groupDiscountRouter.get('/', (req,res,next)=>{
    GroupDiscount.find()
    .select('university endDate dicountRules userMeta')
    .exec()
    .then(discountRes => {
     
       res.status(200).json({
            discounts: discountRes.map(doc => {
                let dateNow = new Date(Date.now());
                let endDate = new Date(doc.endDate);

                //For simplicity, comparing date only here, todo compare the date with year and month too
                if(dateNow.getDate() <= endDate.getDate()){
                    status = 'open';
                } else if(dateNow.getDate() > endDate.getDate()) {
                    status = 'closed';
                }
               return {...doc._doc,
                   status: status,
               }
            })
        });
    }).catch(err => {
        res.status(500).json({error: err});
    });
});
groupDiscountRouter.get('/userinfo/:id', (req,res, next) => {
    const id = String(req.params.id);
    GroupDiscount.findOne({_id: id}).populate({path: 'userMeta', select:'name email'}).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    console.log(id);
})
//Handling get requests to a single discount
groupDiscountRouter.get('/:id', (req,res,next)=>{
    GroupDiscount.findById(req.params.id, (err, discount) =>{
        
        if(!discount) {
            itemNotFound(req.params.id, res);
        } else{

            res.status(200).json({
                existingDiscount: discount});
        }

    });
});
//creating a new group discount  
groupDiscountRouter.post('/',(req,res,next)=>{
    console.log('university', req.body.university);
    let groupDiscount = new GroupDiscount({
        _id: new mongoose.Types.ObjectId(),
        university: req.body.university,
        endDate: req.body.endDate,
        discountRules: [req.body.discountRules]
    });
    groupDiscount.save()
    .then(discountDoc => {
        res.status(200).json({
            msg: `group discount for ${discountDoc.university} university added successfully`,
            createdGroupDiscount: discountDoc
         })
    })
    .catch(err => {
        res.status(400).json('failed to add article ')
    })

});

//updating the user list upon user creation on existing group discount

groupDiscountRouter.patch('/adduser', (req, res, next) => {
    const gId = req.body.id;
    const userMeta = req.body.userId;
    console.log('userMeta in gd', userMeta);
    GroupDiscount.findOneAndUpdate(
        {_id: req.body.id},  {$push: {userMeta: userMeta}},  {safe: true, new: true}, (err, response) => {
           console.log(response)
            res.status(200).json(response);
        });
})

//Deleting the groupdiscount entry in database
groupDiscountRouter.delete('/:id', (req,res,next) =>{
    GroupDiscount.findByIdAndRemove(req.params.id, (err, discountRes) =>{
        if(!discountRes){
            itemNotFound(req.params.id, res);
        }else{
            res.status(200).json('Group discount removed successfully')
        }
    });
});




export default groupDiscountRouter;