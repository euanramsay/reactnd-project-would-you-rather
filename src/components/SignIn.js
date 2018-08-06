import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { List, Card, CardHeader, Divider } from '@material-ui/core'
import User from './User'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends Component {
  state = {
    toHome: false
  }
  handleLogin = id => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(id))
    this.setState(() => ({ toHome: true }))
  }
  render () {
    const { userIds } = this.props
    const { toHome } = this.state
    // Reference: https://tylermcginnis.com/react-router-programmatically-navigate/
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <Card className='card'>
        <CardHeader title='Please Sign In' />
        <List>
          {userIds.map(id => (
            <div key={id} onClick={() => this.handleLogin(id)}>
              <User id={id} />
              <Divider />
            </div>
          ))}
        </List>
      </Card>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(SignIn)
