import { Configuration, CreateModerationRequestInput, OpenAIApi } from 'openai'
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)
export const completion = (prompt: string) => {
  return openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown."
      },
      {
        role: 'user',
        content: prompt,
        name: 'saofeng'
      }
    ],
    temperature: 0.5,
    max_tokens: 1,
    top_p: 1,
    n: 1,
    frequency_penalty: 0,
    presence_penalty: 0
    // stream: true
    //   stop: ['\n']
  })
}
export const generations = (prompt: string) => {
  return openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024',
    response_format: 'url'
  })
}

export const listModels = () => {
  return openai.listModels()
}
export const eventSource = (input: CreateModerationRequestInput) => {
  return openai.createModeration({
    input
  })
}
