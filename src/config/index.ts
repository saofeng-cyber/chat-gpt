import { Configuration, CreateModerationRequestInput, OpenAIApi } from 'openai'
export const OPENAI_API_KEY = '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'
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)
export const completion = (prompt: string) => {
  return openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature: 0.5,
    max_tokens: 1000,
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
