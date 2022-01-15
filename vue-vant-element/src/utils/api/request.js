import axios from 'axios'

const service = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000 // request timeout
})

// 发起请求之前的拦截器
service.interceptors.request.use(
  (config) => {
    const token = 'ltj'
    if (token) {
      config.headers['Authorization'] =  token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
      console.log('response.code',response.data.data.code)
      if (response.data.data.code === '00000') {
          return response.data
      } else {
          return response.data
      }

  },
  (error) => {
    if (error.response) {
      console.log(error.response)
    }

    console.log(error.message)
    return Promise.reject(error)
  }
)

export default service
