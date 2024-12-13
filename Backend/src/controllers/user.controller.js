const userModel=require('../models/user.model.js')
const ErrorHandler=require("../utils/ErrorHandler.js")
const transporter=require("../utils/sendmail.js")
async function createUser(req,res){
    const {Name,email,password}=req.body
    const checkUserPresent=await userModel.findOne({
        email:email,
    })
    if (checkUserPresent){
        return new ErrorHandler("Already present in database",400)
    }
    const newUser=new userModel({
        Name:Name,
        email,email,
        password:password
    })
    await transporter.sendMail({
        to:'isaac.reji@kalvium.community',
        from: 'gowrishankar.s@kalvium.community',
        subject:'verification email',
        text:'Text',
        html:'<h1>Hello world</h1>'
    })
 const data = {
    Name,
    email,
    password,
 }
 const token  = generateToken(data)


    await newUser.save()
    return res.send("User Created Succesfully")
}
const generateToken = (data)=>{
    const token  = jwt.sign({name:data.name,email:data.email},process.env)
    return token
}
module.exports=createUser