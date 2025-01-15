const jwt = require("jsonwebtoken");
if (process.env.NODE !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}
console.log("hiii")

const verifyUser = ( req, res, next) => {
  console.log(process.env.SECRET_KEY)
  const data = jwt.verify(req.body.token, process.env.SECRET_KEY);
  console.log(data);
  req.userEmailAddress = data.email;
  console.log(req, req.userEmailAddress, data)
  //   req.body.userEmailAddress
  // return res.status(404).send(req.userEmailAddress)
  next();
};

module.exports = verifyUser;
