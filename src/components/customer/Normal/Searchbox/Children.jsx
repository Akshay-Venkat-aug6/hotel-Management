import React from 'react';
import InputNum from '../../form/input/inputnumber';

const ChildNo = () => {
  const handleChildNo = (e) => {
    sessionStorage.setItem('child No', e.target.value)
  }
  return (
    <>
      <div style={{paddingTop: "20px", width: "50%", paddingLeft: "15px"}}>
        <InputNum 
          label ="child No"
          handleChange = {handleChildNo}
          required = "false"
          min = "0"
        />
      </div>
    </>
  )
};

export default ChildNo