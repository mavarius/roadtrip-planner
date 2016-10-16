import API from '../API'
import AppDispatcher from '../AppDispatcher'

const RoadTripAction = {
  search (searchInfo) {
    API.search(searchInfo)
  },

  findRoute (routePlan) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ROUTE_PLAN',
      payload: routePlan
    })
  }
}

export default RoadTripAction
