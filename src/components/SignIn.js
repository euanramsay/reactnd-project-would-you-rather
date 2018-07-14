import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {

  render() {
    return (
      <div>
        SIGN IN!
      </div>
    )
  }
}

export default connect()(SignIn)