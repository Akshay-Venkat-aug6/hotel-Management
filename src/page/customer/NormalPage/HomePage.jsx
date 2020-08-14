import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import Search from '../../../components/customer/Normal/Search';

const HomePage = () => {
  return(
    <div>
      <Header />
      <div style={{display: "flex", padding: "10px", marginTop: "90px"}}>
        <Search />
        <div>Hai</div>
      </div>
    </div>
  )
};

export default HomePage