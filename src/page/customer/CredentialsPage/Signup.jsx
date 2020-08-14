import React from 'react';
import HeaderContent from '../../../components/customer/credentials/HeaderContent';
import CreCard from '../../../components/customer/credentials/CredentialsCard';

const Signup = () => {
  return(
    <div>
      <HeaderContent 
        title = "Welcome  to AS Hotel!!"
        body = "Please Login/Register using your Email to continue"
      />
      <CreCard />
    </div>
  )
};

export default Signup;