const initialState = {
  email: '',
  isOtpsend: null,
  emailId: '',
  isVerified: null,
  isOtpValid: null,
  details: [],
  message: '',
  token: ''
};

const userReducer = (state = initialState, action) => {
  const payload = action.payload;
  switch(action.type){
    case 'EMAIL_REGISTER':
      localStorage.setItem('email', payload.useremail)
      sessionStorage.setItem('message', payload.message)
      return { 
        ...state,
        email: payload.useremail,
        isOtpsend: payload.isOtpsend,
        emailId: payload.emailId,
        message: payload.message
      }
    case 'CHECK_OTP':
      sessionStorage.setItem('isverified', payload.isVerified)
      sessionStorage.setItem('isOtpValid', payload.isOtpvalid)
      sessionStorage.setItem('emailId', payload.emailId)
      return{
        ...state,
        isVerified: payload.isVerified,
        isOtpValid: payload.isOtpvalid,
        emailId: payload.emailId
      }
    case 'REGISTER_DETAILS':
      localStorage.setItem('token', payload.token)
      sessionStorage.clear()
      return {
        ...state,
        token: payload.token
      }
    case 'LOGIN':
      localStorage.setItem('token', payload.token)
      sessionStorage.setItem('message', payload.message)
      return {
        ...state,
        token: payload.token
      }
    default:
      return state
  }
}

export default userReducer
