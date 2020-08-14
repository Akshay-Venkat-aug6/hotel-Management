import React, { useEffect } from 'react';
import Hotellist from '../HotelCard/HotelsList';
import { connect } from 'react-redux';

const HotelCard = (props) => {

  useEffect(() => {
    console.log(props.hotels)
  })
  return (
    <>
      <Hotellist hotelslist = {props.hotels}/>
    </>
  )
}
  
const mappingStateToProps = ({search}) => {
  return { 
    hotels: search.search_hotel
  };
};

export default connect(
  mappingStateToProps
)(HotelCard);