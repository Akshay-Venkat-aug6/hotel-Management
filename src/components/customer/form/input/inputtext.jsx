import React from 'react';

const Inputtext = ({label, handleChange, required}) => {
  return (
    <div class="input-container">
      <input type="text" onChange = {handleChange} required={required}/>
      <label>{label}</label>		
      <span style={{color: "red", fontSize: "12px"}}>{}</span>
    </div>
  )
};

export default Inputtext