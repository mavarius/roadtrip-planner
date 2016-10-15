import React, { Component } from 'react'

import RoadTripAction from '../actions/RoadTripAction'

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
  }
  handleSearch (e) {
    e.preventDefault()
    let {originInput, destinationInput} = this.refs
    // console.log('WaypointInput:', WaypointInput1.value)
    // console.log('WaypointInput:', WaypointInput2.value)
    let waypoints = [];


    let directions = {
      origin: originInput,
      destination: destinationInput,
      waypoints: [

      ]
    }


    // RoadTripAction.search(queryStr)
  }
  waypointsInput() {
    let { number } = this.state;
    number++;
    this.setState({number});
  }



  render () {
    console.log('this.state.number:', this.state.number);
    // var waypointsInputFields = this.waypointsInput();
    // console.log('waypointsInputFields:', waypointsInputFields);
    return (
      <div className="searchBlock">
        <form onSubmit={(e) => this.handleSearch(e)}>
          <input type="text" className="searchBar" ref="originInput" placeholder="enter origin" required />
          <button className="btn" onClick={() => this.waypointsInput()} type='button'>addWayPoint</button>
          {/* {waypointsInputFields} */}
          {/* <input type="text" className="searchBar" ref="WaypointInput1" placeholder="WaypointInput1" required />
          <input type="text" className="searchBar" ref="WaypointInput2" placeholder="WaypointInput2" required /> */}
          <input type="text" className="searchBar" ref="destinationInput" placeholder="enter destination" required />
          <button className="searchBtn">Start Trippin!</button>
        </form>
      </div>
    )
  }
}
