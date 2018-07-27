import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import User from './User'
import Score from './Score'

class Leaderboard extends Component {
  render () {
    const { userIds } = this.props
    return (
      <Fragment>
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
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Leaderboard)
