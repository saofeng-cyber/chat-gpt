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
        content: `Create a Vue 3 component that displays a [开发项目] using pnpm, Vite, Vue 3, TypeScript, Pinia, and Vueuse tools. Use Vue 3's Composition API and <script setup> syntax to combine template, script, and style in a single .vue file. Display Chinese text in the view and include styles. Provide only the necessary code to meet these requirements without explanations or descriptions.`
      },
      {
        role: 'user',
        content: prompt,
        name: 'saofeng'
      }
    ],
    temperature: 0.5,
    // max_tokens: 1,
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
