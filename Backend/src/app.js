if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "./src/config/.env",
    });
  }
  
  const express = require("express");
  
  const app = express();
  app.use(express.json());
  
  app.get("/", (req, res) => {
    res.send("Welcome to backend");
  });
 
  app.get("/user/squad", (req, res) => {
    return res.send({message:'good afternoon'});
  });
 
  
  module.exports = app;