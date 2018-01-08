import React from 'react'
import { compose, graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import SIGNOUT_MUTATION from './graphql/Signout.mutation.graphql'

export const Signout = ({ signout }) => {
  return (
    <div>
      <button onClick={signout}>Signout</button>
    </div>
  )
}

const props = ({ mutate, ownProps: { history: { push } }}) => ({
  signout: () => 
    mutate()
      .then(() => push('/'))
})

const withSignout = graphql(
  SIGNOUT_MUTATION,
  { props }
)

const enhance = compose(
  withRouter,
  withSignout
)

export default enhance(Signout)