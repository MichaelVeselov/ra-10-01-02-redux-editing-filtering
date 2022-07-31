export const SET_FILTER = '@@filter/SET_FILTER';

export const setFilter = (value) => ({
  type: SET_FILTER,
  payload: { value },
});
