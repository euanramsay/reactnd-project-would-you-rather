import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import User from './User'
import Score from './Score'

class Leaderboard extends Component {
  render () {
    const { users } = this.props
    const userIds = Object.keys(users)
    const sortedUserIds = userIds.sort(
      (a, b) =>
        Object.keys(users[b]['answers']).length +
        users[b]['questions'].length -
        (Object.keys(users[a]['answers']).length + users[a]['questions'].length)
    )

    return (
      <Fragment>
        <h3 className='center'>Leaderboard</h3>
        {sortedUserIds.map(id => (
          <Card key={id} id={id} className='small-card'>
            <CardContent>
              <User key={id} id={id} />
              <Score id={id} />
            </CardContent>
          </Card>
        ))}
      </Fragment>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Leaderboard)
