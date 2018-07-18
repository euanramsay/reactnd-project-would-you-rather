import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

class NewQuestion extends Component {

  render() {
    return (
      <div>
        <h3 className='center'>Add a new question</h3>
        <Card className='question'>
        <CardContent>
          <CardActions>
          <TextField
                id='with-placeholder'
                label='This'
                placeholder='Placeholder'
                margin='normal'
              />
            <Typography variant='headline'>
              OR
            </Typography>
            <TextField
                id='with-placeholder'
                label='That'
                placeholder='Placeholder'
                margin='normal'
              />
            <Button size='small' color='primary'>
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