import { SET_FILTER } from './filterActions';

const initialState = '';

const serviceFilterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER:
      const { value } = payload;
      return value;

    default:
      return state;
  }
};

export { serviceFilterReducer };
