import React from 'react'
import { compose, graphql } from 'react-apollo'
import { Form, Field } from 'react-final-form'

import CREATE_CHANNEL_MUTATION from './graphql/CreateChannel.mutation.graphql'

export const CreateChannel = ({ createChannel }) => {
  return (
    <Form onSubmit={createChannel}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>

          <Field name='name'>
            {({ input }) => (
              <div>
                <input {...input} type="text" />
              </div>
            )}
          </Field>

          <div>
            <button submit="submit">Create Channel</button>
          </div>
        </form>
      )}
    </Form>
  )
}

const props = ({ mutate }) => ({
  createChannel: (input) =>
    mutate({ variables: { input } }) 
      // .then((res) => console.log('res', res))
})

export const withCreateChannel = graphql(
  CREATE_CHANNEL_MUTATION,
  { props }
)

export const enhance = compose(
  // withCurrentUserId,
  withCreateChannel
)

export default enhance(CreateChannel)