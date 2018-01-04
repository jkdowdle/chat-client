import React from 'react'

import Signup from './Signup'
import Signin from './Signin'
import Signout from './Signout'
import Channels from './Channels'

export const App = () => {
  return (
    <div>
      <h2>App</h2>
      <Channels />
      <br />
      <Signup />
      <br />
      <Signin />
      <br />
      <Signout />
    </div>
  )
}

export default App
