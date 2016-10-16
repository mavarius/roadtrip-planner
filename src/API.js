import axios from 'axios'
import ServerAction from './actions/ServerAction'

let tempArr = []

const API = {
  search (query, tripType) {
    axios.get(`/api/googleApi/directions?${query}`)
      .then(response => {
        let data = response.data
        ServerAction.receiveSearchResults(data)
        let latLon = data.routes[0].legs[0].steps
        let passPackage = {
          latLon,
          tripType
        }
        return passPackage
      })
      .then(passPackage => {
        let {latLon, tripType} = passPackage
        let counter = 0
        latLon.map(pinPoint => {
          if (pinPoint.distance.value > 6000) {
            counter++
          }
          if (pinPoint.distance.value > 6000) {
            let { lat, lng } = pinPoint.end_location
            let queryFromLatLon = `location=${lat},${lng}`
            let query = ''
            switch (tripType) {
              case 'park':
                query = `${queryFromLatLon}&type=park&keyword=national+park`
                break
              case 'restaurant':
                query = `${queryFromLatLon}&type=restaurant&keyword=restaurant`
                break
              default:
                query = `${queryFromLatLon}&type=amusement_park&keyword=amusement+park`
                break
            }
            API.getPlaces(query, counter)
          }
        })
      })
      .catch(console.error)
  },
  getPlaces (query, counter) {
    axios.get(`/api/googleApi/places?${query}`)
      .then(res => {
        tempArr.push(res.data.results)
        if (tempArr.length === counter) {
          ServerAction.receivePlaceResults(tempArr)
          tempArr = []
        }
      })
      .catch(console.error)
  }
}

export default API
