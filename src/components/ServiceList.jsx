import { useSelector, useDispatch } from 'react-redux';

import { removeService } from '../store/servicelist/servicelistActions';
import {
  updateServiceInputField,
  updateServiceInputFieldEditMode,
  removeServiceInputFieldEditMode,
  clearServiceInputField,
} from '../store/addform/addFormActions';

import { selectFilter } from '../store/filter/filterSelectors';
import { selectAllServices } from '../store/servicelist/servicelistSelectors';

const ServiceList = () => {
  const dispatch = useDispatch();

  const services = useSelector(selectAllServices);
  const filter = useSelector(selectFilter);

  const handleRemove = (id) => {
    return () => {
      dispatch(removeService(id));
      dispatch(removeServiceInputFieldEditMode(id));
      dispatch(clearServiceInputField());
    };
  };

  const handleEdit = (id) => {
    return () => {
      const service = services.find((service) => service.id === id);
      dispatch(updateServiceInputField('name', service.name));
      dispatch(updateServiceInputField('price', service.price));
      dispatch(updateServiceInputFieldEditMode(service.id));
    };
  };

  return (
    <ul className='list-unstyled'>
      {services
        .filter((service) => service.name.includes(filter))
        .map((service) => (
          <li key={service.id} className='list'>
            <div>
              {service.name} - {service.price}
            </div>
            <button onClick={handleEdit(service.id)}>✎</button>
            <button onClick={handleRemove(service.id)}>✖</button>
          </li>
        ))}
    </ul>
  );
};

export { ServiceList };
