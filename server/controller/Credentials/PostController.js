const Email = require('../../model/EmailSchema');
const User = require('../../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const privateKey = "skdgfusgfiugswigflwegfudsgf]i";

const { sendOtp } = require('../../utils/email/OtpEmail');

const otp = () => {
  const num = Math.floor(100000 + Math.random() * 900000)
  return num
}

const RegisterEmail = async (req, res) => {
  var email = req.body.email;
  const email_find = await Email.findOne({email: email})

  if(email_find){
    return res.send({Message: "Email is Already Registered"})
  }

  const otp_num = await sendOtp(email, otp())
  var db_email = new Email({
    email: email,
    otpnum: otp_num
  });
  const emails = await db_email.save()
  return res.send({isOtpsend: true, email_id: emails._id})
};

const checkOtp = async (req, res) => {
  const { otp } = req.body;
  const { emailId } = req.params
  
  const check_emailid = await Email.findOne({_id: emailId});
  if(check_emailid){
    if(check_emailid.otpnum === otp){
      await Email.update(
        { _id: emailId },
        { $set: { otpnum : " " } }
      )
      return res.send({isOtpvalid: true, isVerified: true, emailId: emailId})
    }
    return res.send({isOtpvalid: false, isVerified: true})
  }
  return res.json({isVerified: false, isOtpvalid: false})
}

const registerDetails = async (req, res) =>{
  const { name, mobile, password, address } = req.body;
  const { emailId }  =req.params
  const passwords = await bcrypt.hash(password, 10);
  const userDetails = {
    username: name,
    emailId: emailId,
    phoneno: mobile,
    address: address,
    password: passwords
  }
  const users = await User.create({ ...userDetails});

  return jwt.sign({id: users._id}, privateKey, async (err, token)=>{
    await User.update({_id: users._id}, { $set: { token: token }})
    res.json({isSuccess: true, token: token}).status(200) 
  });
}

const login = async (req, res) => {
  const { email, password } = req.body

  const email_id = await Email.findOne({email: email})
  if(!email_id){
    return res.send({message: "Credentials are Invalid"}).status(401)
  }
  const user = await User.findByEmailAndPassword(email_id._id, password)
  if(user){
    jwt.sign({id: user._id}, privateKey, async (err, token)=>{
      await User.update({emailId: email_id._id}, { $set: { token: token }})
      return res.send({token: token}).status(200)
    });
  }
  else{
    return res.send({message: "Credentials are Invalid"}).status(401)
  }
};

module.exports = {
  RegisterEmail,
  checkOtp,
  registerDetails,
  login
}