import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-chat-gpt-ai-production.up.railway.app/',
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
      model: 'text-davinci-003',
      prompt,
      max_tokens: 1000,
      temperature: 0
    }
  })
}
