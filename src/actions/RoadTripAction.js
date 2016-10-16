import API from '../API'
import AppDispatcher from '../AppDispatcher'

const RoadTripAction = {
  search (searchInfo, tripType) {
    API.search(searchInfo, tripType)
  },

  findRoute (routePlan) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ROUTE_PLAN',
      payload: routePlan
    })
  },
  addMarker (place) {
    AppDispatcher.dispatch({
      type: 'ADD_MARKER',
      payload: place
    })
  }

}

export default RoadTripAction
