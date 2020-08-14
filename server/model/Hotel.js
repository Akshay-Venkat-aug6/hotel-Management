const mongoose = require('mongoose');

const schema = mongoose.Schema;

var hotelSchema = new schema({
  name: {
   type: String,
   required: true
  },
  address:{
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  },
  rating:{
    type: Number,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  country:{
    type:String,
    required: true
  },
  Amenities:{
    type: String,
    required: true
  },
  imageUrl:{
    type:String,
    required: true
  }
});

var Hotel = mongoose.model('hotel', hotelSchema);

module.exports = Hotel