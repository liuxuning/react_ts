import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: 'https://api2.119.net' // api 的 base_url
})


// // request interceptor
// service.interceptors.request.use(
//   config => {
    
//   },
//   error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )

// // response interceptor
// service.interceptors.response.use(
//   response => {
    
//   },
//   error => {
//     console.log('err' + error)
//     return Promise.reject(error)
//   }
// )

export default service
