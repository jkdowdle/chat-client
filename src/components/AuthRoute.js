import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import withAuth from './withAuth'

export const AuthRoute = ({ component: Component, auth, loading, ...rest }) => {
  if (loading) {
    return null
  }

  return (
    <Route
      {...rest}
      auth={auth}
      render={(props) => (
          auth === true
            ? <Component {...props} auth={auth} />
            : <Redirect to={{ pathname: '/signin', state: { from: props.location }}} />
      )}
    />
  )
}

export default withAuth(AuthRoute)