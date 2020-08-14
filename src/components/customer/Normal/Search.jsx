import React from 'react';
import { useHistory } from 'react-router-dom';
import Date from './Searchbox/Date';
import Traveller from './Searchbox/TravellerNo';
import Child from './Searchbox/Children';
import RoomNo from './Searchbox/RoomNo';
import Button from '../form/button/Button';
import Inputtext from '../form/input/inputtext';
import { connect } from 'react-redux';
import { SEARCH } from '../../../store/customer/search/action';
import { bindActionCreators } from "redux";

const Search = (props) => {
  const hanldeSearchHotel = (e) => {
    sessionStorage.setItem('searchPart', e.target.value)
  }

  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    let search_details = {
      part: sessionStorage.getItem('searchPart'),
      checkIn: sessionStorage.getItem('checkIn'),
      checkOut: sessionStorage.getItem('checkOut'),
      adultno: sessionStorage.getItem('Adult No'),
      childno: sessionStorage.getItem('child No'),
      rooms: sessionStorage.getItem('Room No')
    }
    
    const url = `/hotel-search/dom/search?checkIn=${search_details.checkIn}&checkOut=${search_details.checkOut}&noofadult=${search_details.adultno}&noofrooms=${search_details.rooms}&partcode=${search_details.part}`
    setTimeout(() => {
      history.push(url)
    })
  }
  return(
    <div className="searchBox boxShadow p10 m5">
      <div className="searchHeader">
        <p className="searchHeader-p">
          Book on India's Largest Hotel Network
        </p>
      </div>
      <div>
        <form onSubmit={handleSearch}>
          <div style={{paddingTop: "15px", width: "95%", paddingLeft: "15px"}}>
            <Inputtext
              label = "Select City or Location or Hotel Name"
              handleChange = { hanldeSearchHotel }
            />
          </div>
          <Date />
          <div style={{display: "flex", marginLeft: "15px", paddingTop: "20px"}}>
            <Traveller />
            <Child />
          </div>
          <RoomNo />
          <Button 
            content="Search"
            classname="search-button"
            type="submit"
          />
        </form>
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { state: { ...state } };
};
const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ SEARCH }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Search);
