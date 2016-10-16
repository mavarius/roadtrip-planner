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
  getType (tripType) {
    API.getType(tripType)
  }
}

export default RoadTripAction
