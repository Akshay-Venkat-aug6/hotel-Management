import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../../components/customer/Loading';

const Loadingpage = ({emailid}) => {
  const history = useHistory();
  
  return(
    <>
      { emailid ? 
        history.push(`/user/signup/otp/${emailid}`)
        :
        <Loading />
      }
    </>
  )
};

const mapStateToProps = (state) => {
  return { emailid: state.user.emailId }
}
export default connect(mapStateToProps)(Loadingpage)