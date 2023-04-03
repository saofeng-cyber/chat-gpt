import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})
export const test_api = () => {
  return instance.request({
    url: '/',
    method: 'post'
  })
}
