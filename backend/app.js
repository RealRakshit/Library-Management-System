const express=require("express");
const app=express();
const cors =require("cors");
require("dotenv").config();
require("./conn/conn");
const User = require("./routes/user");
app.use(cors());
app.use(express.json());

app.use("/api/v1",User);

app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`);
});
