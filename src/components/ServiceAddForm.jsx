import { useDispatch, useSelector } from 'react-redux';

import {
  addService,
  editService,
} from '../store/servicelist/servicelistActions';

import {
  updateServiceInputField,
  clearServiceInputField,
} from '../store/addform/addFormActions';

import {
  selectAddFormEditMode,
  selectAddFormService,
} from '../store/addform/addFormSelectors';

const ServiceAddForm = () => {
  const dispatch = useDispatch();

  const service = useSelector(selectAddFormService);
  const editMode = useSelector(selectAddFormEditMode);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateServiceInputField(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editMode.isEdit) {
      dispatch(editService(editMode.id, service.name, service.price));
    } else {
      dispatch(addService(service.name, service.price));
    }
    dispatch(clearServiceInputField());
  };

  const handleCancel = () => {
    dispatch(clearServiceInputField());
  };

  return (
    <form className='addform mb-2' onSubmit={handleSubmit}>
      <div className=''>
        <input name='name' onChange={handleChange} value={service.name} />
      </div>
      <div className=''>
        <input name='price' onChange={handleChange} value={service.price} />
      </div>

      <button type='submit'>Save</button>

      {editMode.isEdit && <button onClick={handleCancel}>Cancel</button>}
    </form>
  );
};

export { ServiceAddForm };
