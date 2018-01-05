import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import AuthRoute from './AuthRoute'
import Nav from './Nav'
import Authenticated from './Authenticated'
import Signup from './Signup'
import Signin from './Signin'
import Channels from './Channels'
import Home from './Home'

export const App = () => {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Route exact path='/' component={Home} />
        <AuthRoute path='/chat-channels' component={Channels} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />

        {/* <br />
        <Channels />
        <br />
        <CreateChannel /> */}

      </Fragment>
    </Router>
  )
}

export default App
