const express=require('express');
const app=express();
const connectDB=require('./database/database');
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const PORT=process.env.PORT || 4000
app.use(express.json());
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000', // specify your frontend URL
    credentials: true // This is needed to allow cookies to be sent with requests
  };
  
  app.use(cors(corsOptions));
// app.use(cors());
const route=require('./routes/route');
app.use('/', route);
app.use(express.urlencoded({ extended: true }));
try {
    app.listen(PORT, async (req,res) => {
        try {
            await connectDB();
            console.log("Server is running on port and database is connected", PORT);
        } catch (error) {
            console.log("Error connecting to the database:", error);
        }
    });
} catch (error) {
    console.log("Error starting the server:", error);
}