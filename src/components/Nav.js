import React from 'react'
import { Link } from 'react-router-dom'

import Signout from './Signout'

import withAuth from './withAuth'

export const Nav = ({ auth, currentUser: { name, ...currentUser } }) => (
  <nav>
    <ul>
      {auth && <li>Welcome {name}!</li>}
      <li><Link to='/'>Home</Link></li>
      {auth && <li><Link to='/chat-channels'>Chat Channels</Link></li>}
      {!auth && <li><Link to='/signup'>Signup</Link></li>}
      {!auth && <li><Link to='/signin'>Signin</Link></li>}
      {auth && <li><Signout /></li>}
    </ul>
  </nav>
)

export default withAuth(Nav)