import express from 'express';
import nodemailer  from 'nodemailer';
import User from "../models/user";
import {sendMail} from '../mail/mail';
import  {itemNotFound} from "../helper_functions/handling_errors";
import mongoose from 'mongoose';


const userRouter = express.Router();

// get the user list
userRouter.get('/', (req,res,next)=>{
    User.find()
    .exec()
    .then( userRes => {
        if(!userRes){
            next(new Error(`Group Discount not found`))
        }else{
        res.status(200).json({
                msg: 'list of existing users',
                existingUsers: userRes});
        }
    })
    .catch(err =>{
        res.status(500).json({error: err});
    })    
});

// get the single user
userRouter.get('/:id', (req,res,next)=>{
    User.findById(req.params.id)
    .exec()
    .then( userDoc => {
        if(!userDoc) {
            itemNotFound(req.params.id, res);
        }
        res.status(200).json({
            msg: 'existing user info!',
            existingUser: userRes});
    })
    .catch(err => res.status(500).json({error: err}));

           
});
// adding user to the database
userRouter.post('/', (req,res,next) => {
let user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    groupDiscount: req.body.groupDiscount

});

let emailInfo = `<h1>Hi ${req.body.name},</h1>
<p>You have sccessfully signed up for the group discount</p>`;

//validate user details and save in  db and send an email to user 
 user.save()
            .then( (userDoc) => {
                 console.log("user registered",userDoc);
                 //sending confirmation email to user on signup
// sendMail(req.body.email,'Group Discount Info','Hii', emailInfo, function(err, data) {
//     if (err) {
//         console.log('ERROR: ', err);
//         return res.status(500).json({ message: err.message || 'Internal Error' });
//     }
//     console.log('Email sent!!!');
//     return res.json({ message: 'Email sent!!!!!' });
// });

        res.status(200).json({
            msg: `user registerd successfully`,
            createdUser: userDoc
 });
   })
.catch(err => {
    res.status(500).json({error: err})
});

});

//remove the user: test purpose
userRouter.delete('/:id', (req,res,next) =>{
    const id = req.params.id;
    User.deleteOne({_id: id})
    .exec()
    .then(userRes =>{
        if(!userRes){
            itemNotFound(req.params.id, res);
        } else {
            res.status(200).json({msg:'User removed successfully', userRes});
     }})
     .catch(err =>{
            res.status(500).json({error: err});
        });
});



export default userRouter;