import { combineReducers } from 'redux';

import { serviceListReducer } from './servicelist/servicelistReducer';
import { addFormReducer } from './addform/addFormReducer';
import { serviceFilterReducer } from './filter/filterReducer';

const rootReducer = combineReducers({
  list: serviceListReducer,
  addform: addFormReducer,
  filter: serviceFilterReducer,
});

export { rootReducer };
