const Hotel = require('../../model/Hotel');

const Search = async (req, res) => {
  const { partcode } = req.query;
  // console.log(partcode)
  let hotels = await Hotel.find({city: partcode})
  if(!hotels.length){
    hotels = await Hotel.find({Country: partcode})
  }
  // console.log(hotels)
  return res.send({hotels: hotels, isFind: true}).status(200)
};

module.exports = {
  Search
}