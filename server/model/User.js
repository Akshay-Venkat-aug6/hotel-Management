var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    emailId: {
      unique: true,
      type: Schema.Types.ObjectId,
      required: true,
      trim: true
    },
    phoneno:{
      type: String,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    address:{
      type: String,
      trim: true
    },
    token: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

userSchema.statics.findByEmailAndPassword = function(email, password) {
  var userObj = null;
  return new Promise(function(resolve, reject) {
    User.findOne({ emailId: email })
      .then(function(user) {
        if (!user) reject("Incorrect credentials");
        userObj = user;
        return bcrypt.compare(password, user.password);
      })
      .then(function(isMatched) {
        if (!isMatched) reject("Incorrect credentials");
        resolve(userObj);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

var User = mongoose.model("user", userSchema);

module.exports = User;
