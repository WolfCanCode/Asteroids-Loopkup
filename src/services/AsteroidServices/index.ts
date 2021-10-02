import Query from 'config/query'
import { AsteroidData } from './interface'

const NEO_FEED_ENDPOINT = (from: string, to: string): string =>
  `https://api.nasa.gov/neo/rest/v1/feed?start_date=${from}&end_date=${to}`
const NEO_LOOKUP_ENDPOINT = (id: string): string =>
  `https://api.nasa.gov/neo/rest/v1/neo/${id}`

const AsteroidServices = {
  getList: async (from: string, to: string): Promise<AsteroidData> => {
    return Query.get(NEO_FEED_ENDPOINT(from, to))
  },
  getDetail: async (id: string): Promise<AsteroidData> => {
    return Query.get(NEO_LOOKUP_ENDPOINT(id))
  },
}

export default AsteroidServices
