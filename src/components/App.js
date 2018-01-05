import React, { Fragment } from 'react'

import Authenticated from './Authenticated'
import Signup from './Signup'
import Signin from './Signin'
import Signout from './Signout'
import Channels from './Channels'
import CreateChannel from './CreateChannel'

export const App = () => {
  return (
    <Fragment>
      <h2>App</h2>
      <Authenticated />
      <br />
      <Channels />
      <br />
      <Signup />
      <br />
      <Signin />
      <br />
      <Signout />
      <br />
      <CreateChannel />
    </Fragment>
  )
}

export default App
