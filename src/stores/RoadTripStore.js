import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';



class RoadTripStore extends EventEmitter {
  constructor() {
    super();

  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }


}

export default new RoadTripStore();
