const express=require('express');
const router=require('./src/routes/api');
const helmet = require('helmet');
const app=new express();




// Global Middleware
app.use(helmet());

app.use("/",router);


module.exports=app;
