const { mailTransport } = require('../../config/emailconfig');

module.exports = {
  async sendOtp(email,otp){
    try{
      await mailTransport.sendMail({
        from: 'akshay28venkat1@gmail.com',
        to: email,
        subject: `AS Hotel - Verify your email address`,
        text: `Your OTP Code for signing into JLPT Online Application Exam is ${otp}.`
      })
      return otp
    }catch(err){
      res.json({message: err.message})
    }
  }
}