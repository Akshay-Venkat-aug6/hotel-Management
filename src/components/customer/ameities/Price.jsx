import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';
import { SEARCH_AMENITITES_PRICE } from '../../../store/customer/search/action';
import { bindActionCreators } from "redux";

const useStyles = makeStyles({
  root: {
    width: 250,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const  Price =(props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([500, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let min_value = value[0]
    let max_value = value[1]
    sessionStorage.setItem('min_price', min_value)
    sessionStorage.setItem('max_price', max_value)
    sessionStorage.setItem('isPrice', true)
    props.SEARCH_AMENITITES_PRICE()
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
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        <div className="search-header">
          <p className="search-header-p">Price</p>
          <span className="search-header-span" onClick={handleClick} >{text}</span>
        </div>
      </Typography>
      { show ?  
        <Slider
          value={value}
          min={500}
          max={ 10000 }
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
        :
        " "
      }
      <hr />
    </div>
  );

  
}

const mappingStateToProps = state => {
  return { state: { ...state } };
};
const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ SEARCH_AMENITITES_PRICE }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Price);