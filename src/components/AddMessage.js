import React from 'react'
import { compose, graphql } from 'react-apollo'
import { Form, Field } from 'react-final-form'

import ADD_MESSAGE_MUTATION from './graphql/AddMessage.mutation.graphql'

export const AddMessage = ({ addMessage }) => (
  <Form onSubmit={addMessage}>
    {({ handleSubmit }) => (
      <form onClick={handleSubmit}>
        <Field name='text'>
          {({ input }) => (
            <div>
              <input {...input} type="text" />
            </div>
          )}
        </Field>

        <div>
          <button submit="submit">Send Message</button>
        </div>
      </form>
    )}
  </Form>
)

const props = ({ mutate, ownProps: { channelId } }) => {
  return {
    addMessage: (input) =>
      mutate({ variables: { input: { ...input, channelId } } })
        .then(res => console.log('res', res))
  }
}

export const withAddMessage = graphql(
  ADD_MESSAGE_MUTATION,
  { props }
)

export const enhance = compose(
  withAddMessage
)

export default enhance(AddMessage)