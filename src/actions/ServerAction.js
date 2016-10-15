import AppDispatcher from '../AppDispatcher'

const ServerAction = {
  receiveSearchResults (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: data
    })
  }
}

export default ServerAction
