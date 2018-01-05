import { ApolloClient } from 'apollo-client'
import { createHttpLink, HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// const link = createHttpLink({
//   uri: 'http://localhost:5000/graphql',
//   credentials: 'include'
// })

const link = new HttpLink({
  uri: 'http://localhost:5000/graphql',
  credentials: 'include'
})

const chacheOptions = {
  dataIdFromObject: (obj) => {
    // console.log('dataIdFromObj')

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
