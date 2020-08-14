import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Hoteladdress = () => {
  return (
    <div className="w8 ">
      <div className="flex-d">
        <p className="hotel-name">
          Lemon Tree Premier
        </p>
        &nbsp;&nbsp;&nbsp;
        <div className="rating">
          <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
        </div>
      </div>
      <div>
        hai
      </div>
    </div>
  )
};

export default Hoteladdress;