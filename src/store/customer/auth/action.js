import { registerEmail, checkOtp, registerDetails, login } from '../../../api/api';
import Axios from 'axios';

export const EMAIL_REGISTER = (useremail) => (dispatch) => {
  return registerEmail(useremail)
      .then(
        response => {
          dispatch({
            type: "EMAIL_REGISTER",
            payload: {
              useremail: useremail,
              isOtpsend: response.data.isOtpsend,
              emailId: response.data.email_id,
              message: response.data.Message
            }
          })
        }
      )
};

export const CHECK_OTP = (data) => (dispatch) => {
  return checkOtp(data)
      .then(
        response => {
          dispatch({
            type: "CHECK_OTP",
            payload: {
              isVerified: response.data.isVerified,
              isOtpvalid: response.data.isOtpvalid,
              emailId: response.data.emailId
            }
          })
        }
      )
};

export const REGISTER_DETAILS = (data) => (dispatch) => {
  return registerDetails(data)
          .then(
            response => {
              dispatch({
                type: "REGISTER_DETAILS",
                payload: {
                  token: response.data.token
                }
              })
            }
          )
};

export const LOGIN = (data) => (dispatch) => {
  return login(data)
          .then(
            response => {
              dispatch({
                type: "LOGIN",
                payload: {
                  token: response.data.token,
                  message: response.data.message
                }
              })
            }
          )
};