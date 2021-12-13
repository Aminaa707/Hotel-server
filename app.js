const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// router middleware
app.use("/api", require("./routes"));

const port = process.env.require || 8000;

app.listen(port, console.log(`server is running in port: ${port}`));
