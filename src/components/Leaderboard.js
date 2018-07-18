import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import User from './User'

class Leaderboard extends Component {
  render () {
    const { userIds } = this.props
    return (
      <Fragment>
        <h3 className='center'>Leaderboard</h3>
        {userIds.map(id => (
          <Card className='question'>
            <CardContent>
              <User id={id} />
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
