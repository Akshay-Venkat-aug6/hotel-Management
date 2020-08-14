import React from 'react';
import { FiArrowLeftCircle } from "react-icons/fi";

const BacktoSearch = () => {
  return (
    <>
      <div className="back-icon">
        <FiArrowLeftCircle className="leftarrow-icon"/>&nbsp;&nbsp;
        <a href="#">Back to Search</a>
      </div>
      <hr />
    </>
  )
};

export default BacktoSearch