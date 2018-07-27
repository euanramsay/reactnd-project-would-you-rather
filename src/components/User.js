import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Typography,
  Card,
  Avatar,
  CardContent
} from '../../node_modules/@material-ui/core'

class User extends Component {
  render () {
    const { user } = this.props

    const { name, avatarURL } = user

    return (
      <Card>
        <CardContent>
          <Avatar alt={name} src={avatarURL} />
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
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
