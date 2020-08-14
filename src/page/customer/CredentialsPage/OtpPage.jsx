import React from 'react';
import { useHistory } from 'react-router-dom';
import OtpCard from '../../../components/customer/credentials/OtpCard';
import { connect } from 'react-redux';

const OtpPage = ({emailId}) => {
  const history = useHistory();

  return (
    <>
      { emailId ?
          <>
            {/* <HeaderContent 
              title="AS Hotel"
              body = "OTP Sended to your Registered Email"
            /> */}
            <OtpCard />
          </>
        :
          history.push('/user/signup')
      }
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    emailId : state.user.emailId
  }
};

export default connect(
  mapStateToProps
)(OtpPage);