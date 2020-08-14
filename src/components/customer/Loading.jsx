import React from 'react';
import { MagicSpinner } from "react-spinners-kit";


const Loading = () => {
  return (
    <div className="loading-div">
      <MagicSpinner size={120} color="blue"/>
    </div>
  )
};

export default Loading;