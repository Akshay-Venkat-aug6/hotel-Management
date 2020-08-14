const mongoose = require('mongoose');

const schema = mongoose.Schema;

var emailSchema = new schema({
  email:{
    type: String,
    required: true
  },
  otpnum: {
    type: String
  }
});

var Email = mongoose.model('Email', emailSchema);

module.exports = Email