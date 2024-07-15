// require('dotenv').config();
const mongoose = require('mongoose');
// const dbConnection=process.env.MONGODB_URL;
const dbConnection="mongodb://localhost:27017/Auth-mern";
const connectDB=async()=>{
try {
  await mongoose.connect(dbConnection,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
    });
    console.log("database is connected");
} catch (error) {
    console.log("error");
}
};
module.exports=connectDB;