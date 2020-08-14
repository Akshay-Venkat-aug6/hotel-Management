import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { CHECK_OTP } from '../../../store/customer/auth/action';
import { bindActionCreators } from "redux";
import { useParams, useHistory } from 'react-router-dom';

const OtpCard = (props) => {
  const otp_num = useRef('');
  const { emailId } = useParams()
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      emailId: emailId,
      otp: otp_num.current.value
    }
    props.CHECK_OTP(data)
    setTimeout(() => {
      history.push('/user/signup/details')
    }, 2000)
  }

  return (
    <div className="cre-card" style={{width: "30%"}}>
      <div style={{marginLeft: "-5px"}}>
        <a href="/user/signup" style={{marginBottom: "10px"}}>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjExNyAxMmw3LjUyNyA2LjIzNS0uNjQ0Ljc2NS05LTcuNTIxIDktNy40NzkuNjQ1Ljc2NC03LjUyOSA2LjIzNmgyMS44ODR2MWgtMjEuODgzeiIvPjwvc3ZnPg==" alt="Left Arrow"/>
        </a>
      </div>
      <div style={{marginLeft: "-30px", marginTop: "10px"}}>
        <div style={{display:"flex", justifyContent:"center", fontSize: "25px"}}>
          Verify Your Account!!
        </div>
        <div style={{width: "60%", marginTop: "20px",marginLeft: "20%", textAlign: "center", fontSize: "14px", color: "grey"}}>
          Enter the code generated on your registered Email below to log in!
        </div>
        <div style={{marginLeft: "90px", marginTop: "20px"}}>
          <form onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                placeholder="Enter Otp" 
                maxLength="6" 
                className="otpinput"
                style={{width: "70%", padding: "5px", fontSize: "20px"}}
                ref={otp_num}
              />
            </div>
            <button 
              className="otp-button" 
              style={{marginTop: "10px", width: "70%",padding: "5px", backgroundColor: "blue",border: "none",color: "white",fontSize: "14px"}}
              type="submit"
            >
              Check OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { state: { ...state } };
};
const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ CHECK_OTP }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(OtpCard);