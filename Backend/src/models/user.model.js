const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema({
    Name: {type: string,require: [true,'please enter the name...']},
    email: {type: string ,
        require: [true,'please enter the email..'], 
        unique:[true,'please enter unique email address...']},
    password: {type: string,require: [true,'please enter the password...']},
    address: [
        {city:string},
        {country:string},
        {add1:string},
        {add2:string},
        {zipcode:string},
        {addressType:string},

    ],
    role: {type:string,default:'user'},
    avatar: {
        url: {type:string,require:true},
        public_id: {type:string,require:true},
    },
    resetPasswordToken : String,
    resetPasswrodDate: Date,    

 },
 { versionKey:false}
); 
 const UserModel = mongoose.model('user',userSchema)
 module.exports = UserModel