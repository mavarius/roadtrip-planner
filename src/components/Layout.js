import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  render () {
    let randomBackground = {
      backgroundImage: `url(../images/background${Math.floor(Math.random() * 5) + 1}.jpeg)`
    }
    return (
      <div>
      <div className="backgroundImage" style={randomBackground}></div>
      <div className="container">
        <div className="row">
          <h1 className="appTitle col-sm-12"><i className="glyphicon glyphicon-road" />Be Trippin</h1>
          {/* <Link to="/" onlyActiveOnIndex>Home</Link> */}
        </div>
        {this.props.children}
      </div>
      </div>
    )
  }
}
