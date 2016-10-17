import React, { Component } from 'react'
import uuid from 'uuid'
import RoadTripAction from '../actions/RoadTripAction'

export default class SuggestedPlaces extends Component {
  constructor () {
    super()

    this.addMarker = this.addMarker.bind(this)
  }

  addMarker (place) {
    RoadTripAction.addMarker(place)
  }

  render () {
    const { places } = this.props

    return (
      <div className="allPlaces row">
          {places.map(place => {
            let { name, rating, photos } = place
            return (
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" key={uuid()}>
                <div className="placeCard">
                {/* {photos ? <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${process.env.GOOGLE_API_KEY}`} /> : null} */}
                <div className="cardDetails">
                  <h4>{name}</h4>
                  <p>{rating}</p>
                  <buttton className="btn btn-info" onClick={() => this.addMarker(place)}>Mark Map</buttton>
                  <buttton className="btn btn-info" onClick={() => this.addWaypoint(place)}>Add Waypoint</buttton>
                </div>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
