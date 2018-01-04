import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const link = createHttpLink({
  uri: 'http://localhost:5000/graphql',
  credentials: 'include'
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link,
  cache
})

export default client
