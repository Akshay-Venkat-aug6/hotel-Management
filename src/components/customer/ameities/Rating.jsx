import React from 'react';
import { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import { SEARCH_AMENITITES_RATING } from '../../../store/customer/search/action';
import { bindActionCreators } from "redux";

const Rating = (props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    sessionStorage.setItem('rating', event.target.value)
    props.SEARCH_AMENITITES_RATING()
  };

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

  return (
    <div className="search">
      <div className="search-header">
        <p className="search-header-p">Rating</p>
        <span className="search-header-span" onClick={handleClick} >{text}</span>
      </div>
      { show ?  
        <div style={{marginTop: "10px"}}>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{display: "flex"}}>
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
            </RadioGroup>
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
  return bindActionCreators({ SEARCH_AMENITITES_RATING }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Rating);