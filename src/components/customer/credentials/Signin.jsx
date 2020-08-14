import React, { useState } from 'react';
import InfoContainer from './info-container/inforcontainer';
import Redirect from './Redirect';
import { connect } from 'react-redux';
import { LOGIN } from '../../../store/customer/auth/action';
import { bindActionCreators } from "redux";
import { useHistory } from 'react-router-dom';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let user_cre  ={
      email: email,
      password: password
    }

    props.LOGIN(user_cre);

    setTimeout(() => {
      
      if(sessionStorage.getItem('message') === "Credentials are Invalid"){
        setError(sessionStorage.getItem('message'))
      }
      else{
        history.push('/')
      }
    }, 1000)
  }
  return (
    <div className="singin-card" style={{padding: "40px"}}>
      <div style={{width: "70%"}}>
        <form onSubmit={handleSubmit}>
          <div style={{paddingTop: "20px"}}>
            <div class="input-container">
              <input type="email" required="" onChange={(e) => setEmail(e.target.value)}/>
              <label>Enter Email</label>		
              <span style={{color: "red", fontSize: "12px"}}>{error}</span>
            </div>
          </div>
          <div style={{paddingTop: "20px"}}>
            <div class="input-container">
              <input type="password" required="" onChange={(e) => setPassword(e.target.value)}/>
              <label>Enter Password</label>		
              <span style={{color: "red", fontSize: "12px"}}>{error}</span>
            </div>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        <hr />
        <Redirect 
          content = "Create an new Account?"
          href="/user/signup"
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
  return bindActionCreators({ LOGIN }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(Signin);