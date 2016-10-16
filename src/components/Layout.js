import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <h1>Be Trippin</h1>
          {/* <Link to="/" onlyActiveOnIndex>Home</Link> */}
        </div>
        {this.props.children}
      </div>
    )
  }
}
