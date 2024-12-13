const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    auth: {
        user:'gowrishankar.s@kalvium.community',
        pass:'viux zzng sosl eazd ',
    },
});
module.exports= transporter;