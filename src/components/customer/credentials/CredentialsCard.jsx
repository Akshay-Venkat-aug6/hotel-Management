import React, { useState} from 'react';
import avatar from '../../../assets/images/avatar.png';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { EMAIL_REGISTER } from '../../../store/customer/auth/action';
import { bindActionCreators } from "redux";
import InfoContainer from './info-container/inforcontainer';
import Redirect from './Redirect';

const CreCard = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  

  const handleSubmit = (event) => {
    event.preventDefault()
    if(email){
      sessionStorage.setItem('message', '')
      props.EMAIL_REGISTER(email)
      setTimeout(()=> {
        if(sessionStorage.getItem('message') === "Email is Already Registered"){
          setError("Email is Already Registered")
        }
        else{
          history.push('/user/redirect')
        }
      }, 2000)
    }
    else{
      setError('Email is Required to Regitser')
    }
  }

  return(
    <div className="singin-card" style={{padding: "40px"}}>
      <div style={{width: "70%"}}>
        <img src={avatar} style={{width: "80%", paddingLeft: "35px"}} alt="profile"/>
        <form onSubmit={handleSubmit}>
          <div style={{paddingTop: "20px"}}>
            <div class="input-container">
              <input type="email" required="" onChange={handleEmail}/>
              <label>Enter Email</label>		
              <span style={{color: "red", fontSize: "12px"}}>{error}</span>
            </div>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        <hr />
        <Redirect 
          content="Already have an Account"
          href="/user/signin"
        />
      </div>
      <InfoContainer />
    </div>
  )
};

const mappingStateToProps = state => {
  return { message: state.user };
};
const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ EMAIL_REGISTER }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(CreCard);
