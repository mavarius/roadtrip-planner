import axios from 'axios'
import ServerAction from './actions/ServerAction'

const API = {
  search (query) {
    axios.get(`/api/googleApi/directions?${query}`)
      .then(response => {
        let data = response.data
        ServerAction.receiveSearchResults(data)
        let latLon = data.routes[0].legs[0].steps
        return latLon
      })
      .then(latLon => {
        latLon.map(pinPoint => {
          if(pinPoint.distance.value > 6000) {
            let { lat, lng } = pinPoint.end_location
            let query = `location=${lat},${lng}&radius=500&type=gas_stations&keyword=gas`
            API.getPlaces(query)
          }
        })
      })
      .catch(console.error)
  },
  getPlaces (query) {
    
    axios.get(`/api/googleApi/places?${query}`)
      .then(res => {
        console.log('res.data:', res.data)
      })
      .catch(console.error)
  }
}

export default API
