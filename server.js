const express = require('express');

const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//dot config
dotenv.config();
//mongodb connection
connectDB();

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));


const PORT = process.env.PORT || 8080 ;

app.listen(PORT, () => {
    console.log(
        `Node server running on port ${PORT}`
        .bgBlue
    );
});
