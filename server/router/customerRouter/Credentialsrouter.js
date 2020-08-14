const express = require('express');
const { RegisterEmail, checkOtp, registerDetails, login }  = require('../../controller/Credentials/PostController');

const router = express.Router();

router.post('/api/customer/signup/email', RegisterEmail)

router.post('/api/customer/signup/otp/:emailId', checkOtp)

router.post('/api/customer/signup/details/:emailId', registerDetails)

router.post('/api/customer/login', login)

module.exports = router;