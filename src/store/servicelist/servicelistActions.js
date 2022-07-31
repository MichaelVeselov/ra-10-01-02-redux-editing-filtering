export const ADD_SERVICE = '@@services/ADD_SERVICE';
export const REMOVE_SERVICE = '@@services/REMOVE_SERVICE';
export const EDIT_SERVICE = '@@services/EDIT_SERVICE';

export const addService = (name, price) => ({
  type: ADD_SERVICE,
  payload: { name, price },
});

export const removeService = (id) => ({
  type: REMOVE_SERVICE,
  payload: { id },
});
export const editService = (id, name, price) => ({
  type: EDIT_SERVICE,
  payload: { id, name, price },
});
