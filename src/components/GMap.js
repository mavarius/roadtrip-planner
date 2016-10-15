import React, { Component } from 'react'

var GoogleMapsLoader = require('google-maps')

export default class GMap extends Component {
  constructor() {
    super()

  }
  componentDidMount () {
    this.initMap()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.initMap()
    }
  }

  initMap () {
      const { mapRef } = this.refs
      // const {start, end} = this.state;

      // GoogleMapsLoader.load( (google) => {
        var directionsService = new google.maps.DirectionsService()
        var directionsDisplay = new google.maps.DirectionsRenderer()

        var map = new google.maps.Map(mapRef, {
          zoom: 4,
          center: {lat: 41.85, lng: -97.65}
        })

        directionsDisplay.setMap(map)

        let start='', end='';

        var request = {
          origin: start,
          destination: end,
          travelMode: 'DRIVING'
        }

        directionsService.route(request, function (result, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(result)
          }
        })
      // })
  }

  render () {

    return (
      <div ref="mapRef" className="mapRef"></div>
    )
  }
}
