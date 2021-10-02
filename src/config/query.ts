import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'

const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`
const finalPath = (path: string): string =>
  path.includes('?') ? `${path}&${apiKey}` : `${path}?${apiKey}`

const Query = {
  async get<T>(path: string): Promise<T> {
    const response = await axios.get(finalPath(path))
    return camelcaseKeys(response.data, { deep: true })
  },
}

export default Query
