import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from '../store/filter/filterActions';
import { selectFilter } from '../store/filter/filterSelectors';

function ServiceFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div className='d-flex justify-content-end mb-2'>
      <span className='me-2'>Filter:</span>
      <input
        className='flex-grow-1'
        name='filter'
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
}

export { ServiceFilter };
