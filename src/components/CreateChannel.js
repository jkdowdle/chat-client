import React from 'react'
import { compose, graphql } from 'react-apollo'

import CURRENT_USER_QUERY from './graphql/CurrentUser.query.graphql'
import CREATE_CHANNEL_MUTATION from './graphql/CreateChannel.mutation.graphql'

export const CreateChannel = (props) => (
  <div>
    {console.log('props', props)}
  </div>
)

export const withUserId = graphql(
  CURRENT_USER_QUERY
)

// const props = ({ mutate, ownProps: { data: { loading, currentUser: { id }}}}) => {
const props = (props) => {
  console.log('p', props)
  return ({
  createChannel: (input) => ({})
    // mutate({ variables: { input: { userId: loading && id, ...input } } })
})}

export const withCreateChannel = graphql(
  CREATE_CHANNEL_MUTATION,
  { props }
)

export const enhance = compose(
  withUserId,
  withCreateChannel
)

export default enhance(CreateChannel)