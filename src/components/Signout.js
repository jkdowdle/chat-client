import React from 'react'
import { compose, graphql } from 'react-apollo'

import SIGNOUT_MUTATION from './graphql/Signout.mutation.graphql'

export const Signout = ({ signout }) => {
  return (
    <div>
      <button onClick={signout}>Sigout</button>
    </div>
  )
}

const props = ({ mutate, ownProps }) => ({
  signout: () => 
    mutate()
      .then((res) => console.log('res', res))
})

const withSignout = graphql(
  SIGNOUT_MUTATION,
  { props }
)

const enhance = compose(
  withSignout
)

export default enhance(Signout)