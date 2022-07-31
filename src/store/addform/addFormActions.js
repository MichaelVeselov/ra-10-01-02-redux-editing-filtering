export const UPDATE_SERVICE_INPUT_FIELD =
  '@@addform/UPDATE_SERVICE_INPUT_FIELD';
export const CLEAR_SERVICE_INPUT_FIELD = '@@addform/CLEAR_SERVICE_INPUT_FIELD';

export const UPDATE_SERVICE_INPUT_FIELD_EDITMODE =
  '@@addform/UPDATE_SERVICE_INPUT_FIELD_EDITMODE';
export const REMOVE_SERVICE_INPUT_FIELD_EDITMODE =
  '@@addform/REMOVE_SERVICE_INPUT_FIELD_EDITMODE';

export const updateServiceInputField = (name, value) => ({
  type: UPDATE_SERVICE_INPUT_FIELD,
  payload: { name, value },
});

export const clearServiceInputField = () => ({
  type: CLEAR_SERVICE_INPUT_FIELD,
});

export const updateServiceInputFieldEditMode = (id) => ({
  type: UPDATE_SERVICE_INPUT_FIELD_EDITMODE,
  payload: { id },
});

export const removeServiceInputFieldEditMode = (id) => ({
  type: REMOVE_SERVICE_INPUT_FIELD_EDITMODE,
  payload: { id },
});
