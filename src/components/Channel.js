import React from 'react'
import { compose, graphql } from 'react-apollo'
import { withRouter } from 'react-router'

import { Messages } from './Message'
import CHANNEL_QUERY from './graphql/Channel.query.graphql'

export const Channel = ({ data: { loading, channel: { ...channel } } }) => {
  if (loading) {
    return 'loading...'
  }

  return (
    <div>
      <h2>{channel.name}</h2>
      <Messages feed={channel.feed}/>
    </div>
  )
}

const options = ({ match: { params: { id }} }) => ({
  variables: { input: { id } }
})

export const withChannel = graphql(
  CHANNEL_QUERY,
  { options }
)

export const enhanced = compose(
  withRouter,
  withChannel
)

export default enhanced(Channel)