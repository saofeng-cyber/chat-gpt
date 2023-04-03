import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
  }
})

export const getCompletion = (prompt: string) => {
  return instance.request({
    url: '/completions',
    method: 'post',
    data: {
      model: 'gpt-3.5-turbo',
      prompt,
      max_tokens: 1000,
      temperature: 0
    }
  })
}
