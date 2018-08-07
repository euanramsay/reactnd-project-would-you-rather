import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Typography,
  Avatar,
  CardContent
} from '../../node_modules/@material-ui/core'

class User extends Component {
  render () {
    const { name, avatarURL } = this.props.user
    return (
      <Fragment>
        <CardContent className='user-card'>
          <Avatar className='avatar' alt={name} src={avatarURL} />
          <Typography className='user-name'>{name}</Typography>
        </CardContent>
      </Fragment>
    )
  }
}

function mapStateToProps ({ users }, { id }) {
  const user = users[id]
  return {
    user
  }
}
export default connect(mapStateToProps)(User)
