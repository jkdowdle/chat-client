import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'

import './index.css'
import client from './app-client'
import App from './components/App'

// import CURRENT_USER_QUERY from './components/graphql/CurrentUser.query.graphql'

// client.query({ query: CURRENT_USER_QUERY })
//   .then((res) => console.log('res', res))

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()
