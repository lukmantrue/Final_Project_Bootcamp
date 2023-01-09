import React, { Component } from 'react'

export default class Coba extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first : 'Test'
      }
    }
  render() {
    const {first} = this.state;

    return (
      <div>Coba {first}</div>
    )
  }
}
