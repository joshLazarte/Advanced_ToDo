require("dotenv").config();
const express = require('express');
const app = express();
const databaseConfig = require("./config/database");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');



if(process.env.WORKSPACE != 'home') {
  const corsOptions = {
    origin: process.env.CLIENT,
    optionsSuccessStatus: 200 
  };
  
  app.use(cors(corsOptions));
}

mongoose.connect(databaseConfig.database, databaseConfig.options);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/todo', require('./routes/api/todo'));

app.listen(process.env.PORT, () => console.log('server is running on port ' + process.env.PORT));