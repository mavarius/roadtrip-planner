import React, { Component } from 'react'
import SearchBar from './SearchBar'
import GMap from './GMap'
import RoadTripStore from '../stores/RoadTripStore'

export default class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      routePlan: RoadTripStore.getRoutePlan(),
      searchResult: RoadTripStore.getSearchResult()
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
      routePlan: RoadTripStore.getRoutePlan(),
      searchResult: RoadTripStore.getSearchResult()
    })
  }

  render () {
    console.log('this.state.searchResult:', this.state.searchResult)
    let { searchResult } = this.state;
    
    return (
      <div className="container">
        <div className="row">
          <GMap google={window.google} {...this.state} />
        </div>
        <div className="row">
          <SearchBar />
        </div>
      </div>
    )
  }
}
