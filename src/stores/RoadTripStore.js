import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _tripRoute = {
  origin: '',
  destination: '',
  waypoints: [],
  optimizeWaypoints: true,
  travelMode: 'DRIVING'
}

let _searchResult

let _placeResults = []

class RoadTripStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SEARCH_RESULTS':
          _placeResults = []
          _searchResult = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_ROUTE_PLAN':
          _tripRoute = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_PLACE_RESULTS':
          action.payload.forEach(arr => {
            arr.forEach(obj => {
              if (!(_placeResults.find(e => e.id === obj.id))) {
                _placeResults.push(obj)
              }
            })
          })
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getRoutePlan () {
    return _tripRoute
  }

  getSearchResult () {
    return _searchResult
  }

  getPlaces () {
    return _placeResults
  }
}

export default new RoadTripStore()
