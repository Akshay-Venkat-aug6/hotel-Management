import React from 'react';

const HeaderContent = (props) => {
  return(
    <div className="singin-header">
      <div className="content">
        <div className="content-title">
          {props.title}
        </div>
        <div className="content-body">
          {props.body}
        </div>
      </div>
    </div>
  )
};

export default HeaderContent;