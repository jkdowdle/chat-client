import React from 'react'
import { compose, graphql } from 'react-apollo'

import CHANNELS_QUERY from './graphql/Channels.query.graphql'

export const Channels = ({ data }) => {
  console.log('data', data)
  return <h2>Channels</h2>
}

const withChannels = graphql(
  CHANNELS_QUERY
)

const enhance = compose(
  withChannels
)

export default enhance(Channels)