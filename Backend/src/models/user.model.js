const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema({
    Name: {type: String,require: [true,'please enter the name...']},
    email: {type: String ,
        require: [true,'please enter the email..'], 
        unique:[true,'please enter unique email address...']},
    password: {type: String,require: [true,'please enter the password...']},
    address: [
        {city:String},
        {country:String},
        {add1:String},
        {add2:String},
        {zipcode:String},
        {addressType:String},

    ],
    role: {type:String,default:'user'},
    avatar: {
        url: {type:String,require:true},
        public_id: {type:String,require:true},
    },
    resetPasswordToken : String,
    resetPasswrodDate: Date,    

 },
 { versionKey:false}
); 
 const UserModel = mongoose.model('user',userSchema)
 module.exports = UserModel