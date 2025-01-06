

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


const userSchema = new mongoose.Schema(
  {
    Name: { type: String, required: [true, 'Please Enter the Name...'] },
    email: {
      type: String,
      required: [true, 'Please Enter Email.. '],
      unique: [true, 'Please enter Unique Email Address'],
    },
    password: {
      type: String,
      required: [true, 'Please enter the password...'],
    },
    address: [
      { city: String },
      { country: String },
      { add1: String },
      { add2: String },
      { zipCode: String },
      { addressType: String },
    ],

    role: {type:String,default:'user'},
    avatar: {
        url: {type:String,require:true},
        public_id: {type:String,require:true},

    },
    resetPaswordToken: String,
    resetPasswordTime: Date,
  },
  { versionKey: false }
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;