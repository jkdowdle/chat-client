import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
  credentials: 'include'
})

const link = httpLink

const chacheOptions = {
  dataIdFromObject: (obj) => {
    if (obj.__typename === 'AuthUser') {
      // console.log('is AuthUser')
      return obj.__typename
    }

    return obj.__typename + ':' + obj.id
  }
}

const cache = new InMemoryCache(chacheOptions)

export const client = new ApolloClient({
  link,
  cache
})

export default client
