import React, { Component } from 'react'

// var GoogleMapsLoader = require('google-maps')

export default class GMap extends Component {

  componentDidMount () {
    this.initMap()
  }

  componentDidUpdate (prevProps, prevState) {
    this.initMap()
  }

  initMap () {
    const { mapRef } = this.refs
    const { google } = this.props
    // const {start, end} = this.state;

  // GoogleMapsLoader.load( (google) => {
    var directionsService = new google.maps.DirectionsService()
    var directionsDisplay = new google.maps.DirectionsRenderer()

    var map = new google.maps.Map(mapRef, {
      zoom: 4,
      center: {lat: 41.85, lng: -97.65}
    })

    var { markers} = this.props

    markers.forEach(markerPoint => {
      let locationObj = markerPoint.geometry.location
      let { lat, lng } = locationObj
      var marker = new google.maps.Marker({
        position: {lat, lng},
        map: map
      })

    var contentString = `<div><h5>${markerPoint.name}</h5><button class="btn btn-danger" onClick={(markerPoint)=>this.addFavorite(markerPoint)}><i class="glyphicon glyphicon-heart"></i>
</button></div>`;

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });


    })



    directionsDisplay.setMap(map)

    var request = this.props.routePlan

    directionsService.route(request, function (result, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(result)
        // console.log('result:', result)
      }
    })
  // })
  }

  addFavorite(markerPoint) {
    console.log('here')
  }

  render () {
    return (
      <div ref="mapRef" className="mapRef"></div>
    )
  }
}
