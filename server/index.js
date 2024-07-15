const express=require('express');
const app=express();
const cors=require('cors');
const connectDB=require('./database/database');
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const PORT=process.env.PORT || 4000
app.use(express.json());
app.use(cors());
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