import React, { Component } from 'react'

import RoadTripAction from '../actions/RoadTripAction'

export default class SearchBar extends Component {
  handleSearch (e) {
    e.preventDefault()
    let {originInput, destinationInput} = this.refs

    let query = {
      origin: originInput.value.replace(/\s/g, '+'),
      destination: destinationInput.value.replace(/\s/g, '+')
    }

    let queryStr = `origin=${query.origin}&destination=${query.destination}`

    RoadTripAction.search(queryStr)
  }

  render () {
    return (
      <div className="searchBlock">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <input type="text" className="searchBar" ref="originInput" placeholder="enter origin" required />
          <input type="text" className="searchBar" ref="originWaypoint" placeholder="enter origin" required />
          <input type="text" className="searchBar" ref="destinationInput" placeholder="enter destination" required />
          <button className="searchBtn">Start Trippin!</button>
        </form>
      </div>
    )
  }
}
