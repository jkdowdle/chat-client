import React from 'react'
import { Link } from 'react-router-dom'

export const ChannelListItem = ({ id, name, feed }) => (
  <Link to={`/chat/${id}`}><h4>{name}</h4></Link>
)

export const ChannelsList = ({ channels }) => (
  <div>
    {channels.map((channel) => <ChannelListItem key={channel.id} {...channel} />)}
  </div>
)

export default ChannelsList