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

class RoadTripStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SEARCH_RESULTS':
          _searchResult = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_ROUTE_PLAN':
          _tripRoute = action.payload
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
}

export default new RoadTripStore()
