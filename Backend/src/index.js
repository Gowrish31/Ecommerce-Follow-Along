if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "./config/.env",
    });
  }
  
  const connectDatabase = require("./DB/database.js");
  
  const app = require("./app.js");
  const Port = process.env.PORT;
  const server = app.listen(Port, async () => {
    connectDatabase();
    console.log("The server is running on Port:8080 URL: http://localhost:8080");
  });