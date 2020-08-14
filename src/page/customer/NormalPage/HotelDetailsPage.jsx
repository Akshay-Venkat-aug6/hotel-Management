import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import HotelDetails from '../../../components/customer/Normal/HotelDetails';
import HotelBar from '../../../components/customer/HotelDetails/HotelBar';

const HotelDetailsPage = () => {
  return (
    <div>
      <Header />
      <div style={{paddingLeft: "100px", paddingRight: "100px", paddingTop: "70px"}}>
        <HotelDetails />
        <div style={{paddingTop: "10px"}}>
          <HotelBar />
        </div>
      </div>
    </div>
  )
};

export default HotelDetailsPage