import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import User from './User'
import Score from './Score'
import SignIn from './SignIn'

class Leaderboard extends Component {
  render () {
    const { userIds, authedUser } = this.props
    return (
      <div>
        {authedUser
          ? <Fragment>
            <h3 className='center'>Leaderboard</h3>
            {userIds.map(id => (
              <Card key={id} id={id} className='small-card'>
                <CardContent>
                  <User key={id} id={id} />
                  <Score id={id} />
                </CardContent>
              </Card>
              ))}
          </Fragment>
          : <div>
            <SignIn />
          </div>}
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    userIds: Object.keys(users),
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)
