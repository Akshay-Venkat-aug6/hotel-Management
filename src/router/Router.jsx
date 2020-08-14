import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../assets/css/style.css'
import SigninPage from '../page/customer/CredentialsPage/SigninPage';
import Signup from '../page/customer/CredentialsPage/Signup';
import OtpPage from '../page/customer/CredentialsPage/OtpPage';
import Loadingpage from '../page/customer/CredentialsPage/LoadingPage';
import SignupDetails from '../page/customer/CredentialsPage/SignDetails';
import HomePage from '../page/customer/NormalPage/HomePage';
import SearchPage from '../page/customer/NormalPage/SearchPage';
import HotelDetailsPage from '../page/customer/NormalPage/HotelDetailsPage';

const Router = () => {
  return(
    <Switch>?
      {/* Customer Signin */}
      <Route exact path="/user/signin" component={SigninPage}/>
      {/* Customer Signup */}
      <Route exact path="/user/signup" component={Signup}/>
      {/* Redirect */}
      <Route exact path="/user/redirect" component={Loadingpage}/>
      {/* Otp Page */}
      <Route exact path="/user/signup/otp/:emailId" component={OtpPage}/>
      {/* Signup Details Page */}
      <Route exact path="/user/signup/details" component={SignupDetails}/>
      {/* Home Page */}
      <Route exact path="/" component={HomePage}/>
      {/* Hotel Details Page */}
      <Route 
        exact 
        path="/hotel-search/dom/details"
        component={HotelDetailsPage}
      />
      {/* Search  Page */}
      <Route 
        exact 
        path="/hotel-search/dom/search"
        component={SearchPage}
      />

    </Switch>
  )
};

export default Router