import { OPENAI_API_KEY } from '@/config'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`
  }
})

export const getCompletion = (prompt: string) => {
  return instance.request({
    url: '/completions',
    method: 'post',
    data: {
      model: 'text-davinci-003',
      prompt,
      max_tokens: 1000,
      temperature: 0
    }
  })
}
