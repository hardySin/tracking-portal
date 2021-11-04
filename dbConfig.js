const db= require('./keyurl').mongoURI;
const mongoose = require('mongoose');

    const dbconnect= async()=>
    {
       await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
             useFindAndModify: false 
        });

 
    }
    // in the mongoose we can call the pre post call as callback function  in the database base 
    // in the jwt we send the cookies to header set in header
    
module.exports=dbconnect;