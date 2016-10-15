import axios from 'axios'
import ServerAction from './actions/ServerAction'

const API = {
  search (query) {
    axios.get(`/api/googleApi/directions?${query}`)
      .then(response => {
        let data = response.data
        ServerAction.receiveSearchResults(data)
      })
      .catch(console.error)
  }
}

export default API
