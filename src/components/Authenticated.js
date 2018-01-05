import React from 'react'
import { compose, graphql } from 'react-apollo'

import CURRENT_USER_QUERY from './graphql/CurrentUser.query.graphql'

export const Authenticated = ({ loading, auth }) => {
  if (loading) {
    return 'Loading...'
  }

  return (
    <div>
      <h2>{auth ? 'You are signed in!' : 'Please sign in...'}</h2>
    </div>
  )
}

const props = ({ data: { loading, currentUser }}) => {
  if (loading) {
    return ({ loading, auth: false, currentUser: {} })
  }
  return {
    loading,
    currentUser,
    auth: currentUser.id ? true : false
  }
}

export const withCurrentUser = graphql(
  CURRENT_USER_QUERY,
  { props }
)

export const enhanced = compose(
  withCurrentUser
)

export default enhanced(Authenticated)