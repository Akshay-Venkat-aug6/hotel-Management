import React from 'react';
import SignupDetails from '../../../components/customer/credentials/SignupDetails';
import { useHistory } from 'react-router-dom';

const SignDetails = () => {
  const history = useHistory()
  return(
    <div>
      { sessionStorage.getItem('isOtpValid') ? 
        <SignupDetails />
        :
        history.push('/user/signup')
      }
      
    </div>
  )
};

export default SignDetails