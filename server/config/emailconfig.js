const nodemailer = require('nodemailer');

const transportOptions = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  debug: 'development',
  auth:{
    user:'akshay28venkat1@gmail.com',
    pass:'sscdvkiqtvctgsee'
  }
};

const mailTransport =  nodemailer.createTransport(transportOptions);

module.exports = {
  mailTransport
}