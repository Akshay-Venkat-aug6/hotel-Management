import React from 'react';
import HotelName from '../ameities/Hotelname';
import Price from '../ameities/Price';
import Rating from '../ameities/Rating';
import Ametities from '../ameities/ameities';
// import { Navbar } from 'react-bootstrap';

const Amenities = () => {
  return (
    <div className="boxShadow amenitybox">
      <HotelName />
      <Price />
      <Rating />
      {/* <Ametities />    */}
    </div>
  )
};

export default Amenities