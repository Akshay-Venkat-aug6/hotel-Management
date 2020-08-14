import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { SEARCH_HOTEL_NAME } from '../../../store/customer/search/action';
import { bindActionCreators } from "redux";

const Hotelname = (props) => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState('hide');

  const handleClick = () => {
    setShow(!show)
    if(show){
      setText('show')
    }
    else{
      setText('hide')
    }
  }

  const handleChange = (event) =>{
    props.SEARCH_HOTEL_NAME({name: event.target.value})
    console.log(event.target.value)
  }

  return (
    <div className="search">
      <div className="search-header">
        <p className="search-header-p">Hotel Name</p>
        <span className="search-header-span" onClick={handleClick} >{text}</span>
      </div>
      { show ?  
        <div>
          <input type="text" onChange={handleChange}/>
        </div>
        :
        ""
      }
      <hr />
    </div>
  )
};

const mappingStateToProps = state => {
  return { state: { ...state } };
};
const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ SEARCH_HOTEL_NAME }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Hotelname);