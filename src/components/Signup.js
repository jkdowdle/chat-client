import React from 'react'
import { compose, graphql } from 'react-apollo'
import { Form, Field } from 'react-final-form'

import SIGNUP_MUTATION from './graphql/Signup.mutation.graphql'

export const Signup = ({ signup }) => (
  <Form onSubmit={signup}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>

        <Field name="firstName">
          {({ input, meta }) => (
            <div>
              <div>
                <label htmlFor={input.name}>First Name</label>
              </div>
              <input {...input} id={input.name} type="text" placeholder="First Name" />
            </div>
          )}
        </Field>

        <Field name="lastName">
          {({ input, meta }) => (
            <div>
              <div>
                <label htmlFor={input.name}>Last Name</label>
              </div>
              <input {...input} id={input.name} type="text" placeholder="Last Name" />
            </div>
          )}
        </Field>

        <Field name="email">
          {({ input, meta }) => (
            <div>
              <div>
                <label htmlFor={input.name}>Email</label>
              </div>
              <input {...input} id={input.name} type="email" placeholder="Email" />
            </div>
          )}
        </Field>

        <Field name="password">
          {({ input, meta }) => (
            <div>
              <div>
                <label htmlFor={input.name}>Password</label>
              </div>
              <input {...input} id={input.name} type="password" placeholder="Password" />
            </div>
          )}
        </Field>

        <div>
          <button type="submit">Signup</button>
        </div>

      </form>
    )}
  </Form>
)
const props = ({ mutate, ownProps }) => ({
  signup: (input) => 
    mutate({ variables: { input } })
      // .then((res) => console.log('res', res))
})

const withSignup = graphql(
  SIGNUP_MUTATION,
  { props }
)

const enhance = compose(
  withSignup
)

export default enhance(Signup)