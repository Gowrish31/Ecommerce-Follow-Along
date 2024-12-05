
const UserModel = require('../models/user.model')

export async function createUser(req,res){
    const {Name,email,password} = req.body;
    const CheckUserPresent = await UserModel.findOne({
        email:  email,
    })
    if(CheckUserPresent){
        return res.send('User already exists')
    }
    new UserModel({
        Name: Name,
        email: email,
        password: password,

    })
    await UserModel.save();
    return res.send('user created sauccesfully');
}
