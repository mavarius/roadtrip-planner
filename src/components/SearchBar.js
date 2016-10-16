import React, { Component } from 'react'

import RoadTripAction from '../actions/RoadTripAction'

export default class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
      fieldCount: 0
    }
  }

  handleSearch (e) {
    e.preventDefault()
    let { fieldCount } = this.state
    let { originInput, destinationInput } = this.refs

    let waypoints = []
    for (let i = 0; i < fieldCount; i++) {
      let waypoint = {
        location: eval(`this.refs.waypoint${i}.value`),
        stopover: true
      }
      waypoints.push(waypoint)
    }

    let routePlan = {
      origin: originInput.value,
      destination: destinationInput.value,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }

    RoadTripAction.findRoute(routePlan)
  }

  addWaypointInput () {
    let { fieldCount } = this.state
    if (fieldCount < 8) {
      fieldCount++
      this.setState({fieldCount})
    }
  }

  render () {
    const { fieldCount } = this.state

    let waypointInputFields = []

    for (let i = 0; i < fieldCount; i++) {
      let newField = <input className="searchBar" key={i} ref={`waypoint${i}`} placeholder="enter waypoint" type="text" />
      waypointInputFields = [...waypointInputFields, newField]
    }

    return (
      <div className="searchBlock">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <input type="text" className="searchBar" ref="originInput" placeholder="enter origin" required />
          {waypointInputFields.map(field => {
            return field
          })}
          <input type="text" className="searchBar" ref="destinationInput" placeholder="enter destination" required />
          <button className="btn btn-primary searchBtn" onClick={() => this.addWaypointInput()} type="button">add waypoint</button>
          <button className="btn btn-primary searchBtn">Start Trippin!</button>
        </form>
      </div>
    )
  }
}
