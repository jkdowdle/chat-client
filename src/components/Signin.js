import React from 'react'
import { compose, graphql } from 'react-apollo'
import { Form, Field } from 'react-final-form'

import SIGNIN_MUTATION from './graphql/Signin.mutation.graphql'

export const Signin = ({ Signin }) => (
  <Form onSubmit={Signin}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>

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
          <button type="submit">Signin</button>
        </div>

      </form>
    )}
  </Form>
)
const props = ({ mutate, ownProps }) => ({
  Signin: (input) => 
    mutate({ variables: { input } })
      // .then(res => console.log('res', res))
})

const withSignin = graphql(
  SIGNIN_MUTATION,
  { props }
)

const enhance = compose(
  withSignin
)

export default enhance(Signin)