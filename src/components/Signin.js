import React from 'react'
import { withRouter } from 'react-router'
import { compose, graphql } from 'react-apollo'
import { Form, Field } from 'react-final-form'

import SIGNIN_MUTATION from './graphql/Signin.mutation.graphql'

export const Signin = ({ signin }) => (
  <Form onSubmit={signin}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>

        <Field name="email">
          {({ input, meta }) => (
            <div>
              <div>
                <label htmlFor={input.name + 'sf'}>Email</label>
              </div>
              <input {...input} id={input.name + 'sf'} type="email" placeholder="Email" />
            </div>
          )}
        </Field>

        <Field name="password">
          {({ input, meta }) => (
            <div>
              <div>
                <label htmlFor={input.name + 'sf'}>Password</label>
              </div>
              <input {...input} id={input.name + 'sf'} type="password" placeholder="Password" />
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
const props = ({ mutate, ownProps: { history: { push }, location: { state }} }) => {
  return ({
  signin: (input) => 
    mutate({ variables: { input } })
      .then(() => push(state && state.from ? state.from.pathname : '/' ))
})}

const withSignin = graphql(
  SIGNIN_MUTATION,
  { props }
)

const enhance = compose(
  withRouter,
  withSignin
)

export default enhance(Signin)