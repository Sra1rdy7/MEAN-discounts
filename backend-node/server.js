import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import groupDiscountRouter from './routes/group_discounts';
import userRouter from './routes/user';



const app = express();

const router = express.Router();

//configuration of environment variables
dotenv.config();



//handling cors related errors
app.use(cors());

//middleware to parse requests
app.use(express.json());
app.use(express.urlencoded({extended:false}));


/**
 * Handling Routes
 * /discounts -> For admin to be able to configure the group discounts
 * /user -> To add the user to the database
 *  * 
 */

app.use('/discounts', groupDiscountRouter);
app.use('/user', userRouter);



mongoose.set('useFindAndModify', false);

//database connection
mongoose.connect(`mongodb+srv://sra1_rdy7:${process.env.MONGO_ATLAS_DB_PWD}@clusteratdoor-w2ge8.mongodb.net/test?retryWrites=true&w=majority`,
{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('database connection successfully established!'))
.catch(err => console.log('database connection failed!' , err));


const port = process.env.PORT || 3000;

app.listen(port, (err)=>console.log(`app is running on ${port}`));
