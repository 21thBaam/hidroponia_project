const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes


//starting the server
app.listen(app.get("port"), () => {
    console.log("Server on PORT: ",app.get("port"));
});