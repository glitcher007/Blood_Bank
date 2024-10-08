const express = require('express');

const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path =require('path')


const app = express();


//dot config
dotenv.config();
//mongodb connection
connectDB();

// middlleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));


// static path
app.use(express.static(path.join(__dirname,'./client/build')))
 // static routes

 app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
 });

const PORT = process.env.PORT || 8080 ;

app.listen(PORT, () => {
    console.log(
        `Node server running on port ${PORT}`
        .bgBlue
    );
});
