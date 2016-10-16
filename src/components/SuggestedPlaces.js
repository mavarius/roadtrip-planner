import React, { Component } from 'react'
import uuid from 'uuid'
// import RoadTripAction from '../actions/RoadTripAction'

export default class SuggestedPlaces extends Component {
  render () {
    const { places } = this.props

    return (
      <div className="allPlaces">
          {places.map(place => {
            let {name, rating, photos} = place
            return <div key={uuid()}>{photos ? <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=AIzaSyA8zSyYRs58X40NLs53PJjfcQseSWO1wjQ`} /> : null}<h3>{name}</h3><p>{rating}</p></div>
          })}
      </div>
    )
  }
}
