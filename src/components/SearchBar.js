import React, { Component } from 'react'

import RoadTripAction from '../actions/RoadTripAction'

export default class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
      fieldCount: 0
    }
    this.pickType = this.pickType.bind(this);
  }

  handleSearch (e) {
    e.preventDefault()
    let { fieldCount } = this.state
    let { originInput, destinationInput, type } = this.refs
    let origin = originInput.value
    let destination = destinationInput.value
    let tripType = type.value;

    let waypoints = []
    let waypointQuery = ''
    for (let i = 0; i < fieldCount; i++) {
      if (!waypointQuery) {
        waypointQuery = '&waypoints='
      }
      let waypointLocation = eval(`this.refs.waypoint${i}.value`)
      let waypoint = {
        location: waypointLocation,
        stopover: true
      }
      waypoints.push(waypoint)
      if(i === fieldCount-1) {
        waypointQuery += waypointLocation
      } else {
        waypointQuery += waypointLocation + '|'
      }

    }
    let query = `origin=${origin}&destination=${destination}${waypointQuery}`
    let routePlan = {
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }

    RoadTripAction.findRoute(routePlan)
    RoadTripAction.search(query, tripType)
  }

  addWaypointInput () {
    let { fieldCount } = this.state
    if (fieldCount < 8) {
      fieldCount++
      this.setState({fieldCount})
    }
  }

  pickType(event) {
    let type = event.target.value;
    this.setState({type})
    // RoadTripAction.getPlaces(type);
  }

  render () {
    const { fieldCount } = this.state

    let waypointInputFields = []

    for (let i = 0; i < fieldCount; i++) {
      let newField = <input className="searchBar" key={i} ref={`waypoint${i}`} placeholder="enter waypoint" type="text" />
      waypointInputFields = [...waypointInputFields, newField]
    }

    return (
      <div className="searchBlock col-sm-12">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <input type="text" className="searchBar" ref="originInput" placeholder="enter origin" required />
          {waypointInputFields.map(field => {
            return field
          })}
          <input type="text" className="searchBar" ref="destinationInput" placeholder="enter destination" required />
          <button className="btn btn-primary searchBtn" onClick={() => this.addWaypointInput()} type="button">add waypoint</button>
          <button className="btn btn-primary searchBtn">Start Trippin!</button>
          <p>Choose your trip type</p>
          <select ref="type" defaultValue="park">
             <option value="park">National Park Experience</option>
             <option value="restaurant">Culinary Adventure</option>
             <option value="amusement_park">Amusement Park Spree</option>
           </select>


        </form>

      </div>
    )
  }
}
