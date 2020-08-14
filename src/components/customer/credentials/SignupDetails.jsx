import React, { useState } from 'react';
import Header from './HeaderContent';
import { useHistory } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { REGISTER_DETAILS } from '../../../store/customer/auth/action';
import { bindActionCreators } from "redux";

const SignupDetails = (props) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [passowrd, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    let details = {
      emailId: sessionStorage.getItem('emailId'),
      name: name,
      mobile: mobile,
      password: passowrd,
      address: address
    }
    props.REGISTER_DETAILS(details)
    setTimeout(() => {
      history.push('/');
    }, 1000)
  }

  return(
    <div style={{marginTop: "-30px"}}>
      <Header title="Profile Details" body="Complete the Profile Details"/>
      <div className="singin-card" style={{marginLeft: "30%", paddingLeft: "35px"}}>
        <div style={{marginLeft: "-15px"}}>
          <a href="/user/signin" style={{marginBottom: "10px"}}>
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjExNyAxMmw3LjUyNyA2LjIzNS0uNjQ0Ljc2NS05LTcuNTIxIDktNy40NzkuNjQ1Ljc2NC03LjUyOSA2LjIzNmgyMS44ODR2MWgtMjEuODgzeiIvPjwvc3ZnPg==" alt="Left Arrow"/>
          </a>
        </div>
        <div style={{paddingTop: "30px", paddingLeft: "10px"}}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={localStorage.getItem('email')} readOnly/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="type" placeholder="Name" onChange={(e) => (setName(e.target.value))}/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile" onChange={(e) => (setMobile(e.target.value))} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => (setPassword(e.target.value))} />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St"  onChange={(e) => (setAddress(e.target.value))} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
};

const mappingStateToProps = state => {
  return { token:state.user.token };
};
const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ REGISTER_DETAILS }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(SignupDetails);
