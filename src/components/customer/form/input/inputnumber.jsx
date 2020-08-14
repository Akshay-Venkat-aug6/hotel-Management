import React from 'react';

const InputNumber = ({label, handleChange, min}) => {
  return(
    <div class="input-container">
      <input type="number" required="" min={min} onChange={handleChange}/>
      <label>{label}</label>		
    </div>
  )
};

export default InputNumber