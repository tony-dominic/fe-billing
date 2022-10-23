import Axios, { AxiosRequestConfig } from 'axios'

import { API_URL } from '@/config'
import storage from '@/utils/storage'

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getToken()

  if (config.headers) {
    if (token) {
      config.headers.authorization = `${token}`
    }
    config.headers.Accept = 'application/json'
  }

  return config
}

export const axios = Axios.create({
  baseURL: API_URL,
})

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // const message = error.response?.data?.message || error.message

    return Promise.reject(error)
  },
)
