import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField
} from '@material-ui/core'
import { handleAddNewQuestion } from '../actions/shared'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleOptionOneChange = optionOne => event => {
    this.setState({
      [optionOne]: event.target.value
    })
  }
  handleOptionTwoChange = optionTwo => event => {
    this.setState({
      [optionTwo]: event.target.value
    })
  }
  handleNewQuestion = () => {
    const { dispatch } = this.props
    const { optionOne, optionTwo } = this.state
    dispatch(handleAddNewQuestion(optionOne, optionTwo))
    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }
  render () {
    const { toHome } = this.state
    // Reference: https://tylermcginnis.com/react-router-programmatically-navigate/
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h3 className='center'>Add a new question</h3>
        <Card className='card'>
          <CardContent>
            <Typography variant='display1'>Would you rather...</Typography>
            <CardActions>
              <TextField
                id='with-placeholder'
                label='This'
                placeholder='Option One'
                margin='normal'
                value={this.state.optionOne}
                onChange={this.handleOptionOneChange('optionOne')}
              />
              <Typography variant='title' className='or-text'>
                OR
              </Typography>
              <TextField
                id='with-placeholder'
                label='That'
                placeholder='Option Two'
                margin='normal'
                value={this.state.optionTwo}
                onChange={this.handleOptionTwoChange('optionTwo')}
              />
              <Button
                variant='contained'
                onClick={() => this.handleNewQuestion()}
              >
                Submit
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default connect()(NewQuestion)
