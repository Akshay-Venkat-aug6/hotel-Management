import React from 'react';
import InputNum from '../../form/input/inputnumber';

const TravellerNo = () => {
  const handleTravellerNo = (e) => {
    sessionStorage.setItem('Adult No', e.target.value)
  }

  return (
    <>
      <div style={{paddingTop: "20px", width: "47%"}}>
        <InputNum 
          label="Traveller No"
          handleChange = { handleTravellerNo }
          required = "false"
          min = "0"
        />
      </div>
    </>
  )
};

export default TravellerNo