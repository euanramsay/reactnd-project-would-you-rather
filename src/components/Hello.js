import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Hello extends Component {

  render() {
    return (
      <div>
        HELLO WORLD!
      </div>
    )
  }
}

export default connect()(Hello)