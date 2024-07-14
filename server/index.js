const express=require('express');
const app=express();
const connectDB=require('./database/database');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
try {
    app.listen(port, async (req,res) => {
        try {
            await connectDB();
            console.log("Server is running on port and database is connected", port);
        } catch (error) {
            console.log("Error connecting to the database:", error);
        }
    });
} catch (error) {
    console.log("Error starting the server:", error);
}