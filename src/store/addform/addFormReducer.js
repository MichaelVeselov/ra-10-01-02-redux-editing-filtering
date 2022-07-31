import {
  UPDATE_SERVICE_INPUT_FIELD,
  CLEAR_SERVICE_INPUT_FIELD,
  UPDATE_SERVICE_INPUT_FIELD_EDITMODE,
  REMOVE_SERVICE_INPUT_FIELD_EDITMODE,
} from './addFormActions';

const initialState = {
  inputFields: {
    name: '',
    price: '',
  },
  editMode: {
    isEdit: false,
    id: '',
  },
};

const addFormReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SERVICE_INPUT_FIELD:
      const { name, value } = payload;
      return { ...state, inputFields: { ...state.inputFields, [name]: value } };

    case CLEAR_SERVICE_INPUT_FIELD:
      return initialState;

    case UPDATE_SERVICE_INPUT_FIELD_EDITMODE: {
      const { id } = payload;
      return { ...state, editMode: { isEdit: true, id } };
    }

    case REMOVE_SERVICE_INPUT_FIELD_EDITMODE:
      const { id } = action.payload;
      if (id === state.editMode.id) {
        return { ...state, editMode: { isEdit: false, id: '' } };
      } else return state;

    default:
      return state;
  }
};
export { addFormReducer };
