import express from "express";
import dotenv from "dotenv";
import initDB from "./backend/config/db.js";
import userRouts from "./backend/routes/userRoutes.js";
import categoryRoutes from "./backend/routes/categoryRoutes.js"
import productRouters from "./backend/routes/productRoutes.js"
import shippingRouters from "./backend/routes/shippingRoutes.js"
import cors from 'cors';

dotenv.config();



// this line of code is responsible for taking all the elements of express in the app 
const app = express();
app.use(express.json())
app.use(cors());
// this code will connect you backend with your mongoDB
initDB()

// this part of code means ( if we surve on "/" url then " res.send" will be display ) testing api
app.get("/" , (req,res)=>{
    res.send("hello from node surver")
})

// this is our all user routs raping 
app.use('/api/users', userRouts );
app.use('/api/category', categoryRoutes );
app.use('/api/product', productRouters);
app.use('/api/shipping', shippingRouters);




// this line of code define port 
const port = process.env.port || 8000

// this part is reaponsible to run the surver 
app.listen(port, ()=>{
    console.log(`surver is runing on port ${port}`)
})
