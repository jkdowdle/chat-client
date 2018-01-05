import React from 'react'

export const Message = ({ id, text, from: { name, email } }) => (
  <div>
    {text}
    <div>
      <span>{name} - {email}</span>
    </div>
  </div>
)

export const Channel = ({ id, name, feed }) => (
  <div>
    <h4>{name}</h4>
    {feed.map((message) => <Message key={message.id} {...message} />)}
  </div>
)

export const ChannelsList = ({ channels }) => (
  <div>
    {channels.map((channel) => <Channel key={channel.id} {...channel} />)}
  </div>
)

export default ChannelsList