import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000/',
  responseType: "json",
})

export const registerEmail = (email) => {
  return client.post('/api/customer/signup/email', { email: email })
};

export const checkOtp = (data) => {
  return client.post(`/api/customer/signup/otp/${data.emailId}`, {otp: data.otp})
}

export const registerDetails = (data) => {
  let details = {
    name: data.name,
    mobile: data.mobile,
    password: data.password,
    address: data.address
  }
  return client.post(`/api/customer/signup/details/${data.emailId}`, details)
}

export const login = data => {
  return client.post('/api/customer/login', data)
}

export const searchhotel = search => {
  console.log(search.partcode)
  return client.get(`/api/search?checkIn=${search.checkIn}&checkOut=${search.checkOut}&noofadult=${search.adultno}&noofrooms=${search.rooms}&partcode=${search.partcode}`)
}