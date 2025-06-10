const mongoose=require("mongoose");

const user=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    avatar:{
        type: String,
        default: "https://tse4.mm.bing.net/th?id=OIP.1GfJ9hP54VUW64tDRt6aYQHaHa&pid=Api&P=0&h=180"
    },
    role:{
        type: String,
        default: "user",
        enum: ["user","admin"]
    },
    favourites: [{
        type: mongoose.Types.ObjectId,
        ref: "books"
    }],
    cart: [{
        type: mongoose.Types.ObjectId,
        ref: "books"
    }],
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: "books"
    }],
},
{timestamps:true}
);

module.exports=mongoose.model("user",user);