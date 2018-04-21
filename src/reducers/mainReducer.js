import { ADD_TIME_ENTRY } from '../types';

const INITIAL_STATE = { timeLogs: [], timeEntryAdded: false, message: ''};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TIME_ENTRY:
      return {...state, timeLogs: [], message: 'SUCCESSFULLY ADDED TIME ENTRY', timeEntryAdded: true};
      break;
    default:
      return state
      break;
  }
}
