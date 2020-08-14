import React from 'react';
import { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Ametities = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
        <p className="search-header-p">Amenities</p>
        <span className="search-header-span" onClick={handleClick} >{text}</span>
      </div>
      { show ?  
        <div style={{marginTop: "10px"}}>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="Central Air Conditioning"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
              label="Airport transportation"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
              label="WIFI"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
              label="Laundry facilities"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
              label="ATM/banking"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
              label="Bar"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
              label="Parking"
            />
            <FormControlLabel
              control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
              label="Restaurant"
            />
          </FormGroup>
        </div>
        :
        ""
      }
      <hr />
    </div>
  )
};

export default Ametities