import { graphql } from 'react-apollo'

import CURRENT_USER_QUERY from './graphql/CurrentUser.query.graphql'

const props = ({ data: { loading, currentUser }}) => {
  if (loading) {
    return ({ loading, auth: false, currentUser: {} })
  }
  return {
    loading,
    currentUser,
    auth: currentUser.id ? true : false
  }
}

export const withCurrentUser = graphql(
  CURRENT_USER_QUERY,
  { props }
)

export default withCurrentUser