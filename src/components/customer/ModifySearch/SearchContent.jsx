import React from 'react';

const SearchContent = ({checkIn, checkOut, noofadult, noofrooms, partcode}) => {
  return (
    <div className="searchcontent">
      <div className="searchcontent-div">
        <p>{partcode}</p>
        <span>
          {checkIn} - {checkOut}  | {noofrooms} ROOM | {noofadult} ADULT
        </span>
      </div>
    </div>
  )
};

export default SearchContent