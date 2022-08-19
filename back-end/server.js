//dotenv
require('dotenv').config();
//connect DB
const {connectDB} = require('./configs/db.js');

connectDB();


const express = require("express");
const cors = require("cors");
const authRoute  = require("./routes/authRoute.js");

const app = express();

const port = process.env.APP_PORT; // default port

// Cors
app.use(cors()); 

// Bodyparser
app.use(express.json());

//Mount the route 
app.use('/api/v1/auth',authRoute);

//

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
