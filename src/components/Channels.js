import React, { Fragment } from 'react'
import { compose, graphql } from 'react-apollo'

import CHANNELS_QUERY from './graphql/Channels.query.graphql'
import ChannelsList from './ChannelsList'
import CreateChannel from './CreateChannel'

export const Channels = ({ data: { loading, channels } }) => {
  console.log('channels', channels)
  if (loading) {
    return 'Loading...'
  }

  return (
    <Fragment>
      <CreateChannel />
      <ChannelsList channels={channels || []} />
    </Fragment>
  )
}

const withChannels = graphql(
  CHANNELS_QUERY
)

const enhance = compose(
  withChannels
)

export default enhance(Channels)