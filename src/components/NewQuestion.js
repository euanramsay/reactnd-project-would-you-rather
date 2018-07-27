import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    optionTwo: ''
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
      optionTwo: ''
    }))
  }
  render () {
    return (
      <div>
        <h3 className='center'>Add a new question</h3>
        <Card className='card'>
          <CardContent>
            <CardActions>
              <TextField
                id='with-placeholder'
                label='This'
                placeholder='Option One'
                margin='normal'
                value={this.state.optionOne}
                onChange={this.handleOptionOneChange('optionOne')}
              />
              <Typography variant='headline'>
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
                size='small'
                color='primary'
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
