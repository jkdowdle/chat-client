import React from 'react'
import { compose, graphql } from 'react-apollo'

import CHANNELS_QUERY from './graphql/Channels.query.graphql'
import ChannelsList from './ChannelsList'

export const Channels = ({ data: { loading, channels } }) => {
  if (loading) {
    return 'Loading...'
  }

  return <ChannelsList channels={channels} />
}

const withChannels = graphql(
  CHANNELS_QUERY
)

const enhance = compose(
  withChannels
)

export default enhance(Channels)