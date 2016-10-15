import React, { Component } from 'react'
import SearchBar from './SearchBar'
import GMap from './GMap'
import RoadTripStore from '../stores/RoadTripStore'

export default class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      results: RoadTripStore.getTripRoute()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    RoadTripStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    RoadTripStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      results: RoadTripStore.getTripRoute()
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">

          <GMap google={window.google} />
          {/* <Container /> */}

        </div>
        <div className="row">
          <SearchBar />
        </div>
      </div>
    )
  }
}
