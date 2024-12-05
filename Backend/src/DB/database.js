if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "../config/.env",
    });
  }

const mongoose = require('mongoose');

const connectDatabase = ()=>{

mongoose.connect("mongodb+srv://gowrish3:gowrish3107@cluster0.0ipca.mongodb.net/")
.then((data)=>{
    console.log(
        `Database i sconnected successfully: ${data.connection.host}`
    )
})
.catch((er)=>{
    console.log('database connection failed..',er.message)
});
}

module.exports = connectDatabase 