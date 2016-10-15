import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _tripRoute = {}

class RoadTripStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SEARCH_RESULTS':
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

  getTripRoute () {
    return _tripRoute
  }
}

export default new RoadTripStore()
