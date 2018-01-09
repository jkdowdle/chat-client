import React, { Fragment } from 'react'

export const Message = ({ id, text, from: { name, email } }) => (
  <div>
    {text}
    <div>
      <span>{name} - {email}</span>
    </div>
  </div>
)

export const Messages = ({ feed = [] }) => {
  return (
    <Fragment>
      {feed.map((message) => <Message key={message.id} {...message} />)}
    </Fragment>
  )
}

export default Message