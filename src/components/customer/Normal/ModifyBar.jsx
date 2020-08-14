import React from 'react';
import ModifyButton from '../ModifySearch/Modifybutton';
import SearchContent from '../ModifySearch/SearchContent';

const ModifyBar = (props) => {
  
  return (
    <>
      <div style={{display: "flex", paddingTop: "30px"}}>
        <SearchContent 
          checkIn={props.checkIn} checkOut={props.checkOut} noofadult={props.noofadult} noofrooms={props.noofrooms} partcode={props.partcode}
        />
        <ModifyButton />
      </div>
      <hr className="hr-tag"/>
    </>
  )
};

export default ModifyBar;