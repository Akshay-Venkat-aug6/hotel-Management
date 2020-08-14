import React from 'react';
import Rating from '@material-ui/lab/Rating';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import Button from '@material-ui/core/Button';

const HotelList = (props) => {
  console.log(props)
  return (
    <>
      {props.hotelslist.map((list) => (
        <div className="hotel-card">
          <div className="hotel-card-img">
            <img 
              alt="img-gallery" 
              src={list.imageUrl}
            />
          </div>
          <div className="hotel-car-details">
            <div className="name">
              {list.name}
            </div>
            <div className="flex-d">
              <div className="rating">
                <Rating name="half-rating-read" defaultValue={list.rating} precision={0.5} readOnly />
              </div>
              <span style={{paddingLeft: "10px", fontSize: "10px", paddingTop: "4px"}}>
                <LocationOnIcon style={{fontSize: "18px", color: "grey"}}/>
                &nbsp;{list.city}, {list.Country}
              </span>
            </div>
            <div className="amenities">
              <div className="amenities-icons">
                <CheckCircleOutlineOutlinedIcon className="icons"/>
                &nbsp;{list.Amenities}
              </div>
            </div>
          </div>
          <div className="hotel-price">
            <div>
              <p className="hotel-price-p">
                {list.price}
              </p>
              <div className="hotel-price-div">For 1 Night</div>
            </div>
            <div className="hotel-price-button">
            <Button variant="contained" color="secondary" type="submit">
              Choose Room
            </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
};

export default HotelList;