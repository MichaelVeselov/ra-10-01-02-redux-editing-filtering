import nextId from 'react-id-generator';

import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
} from './servicelistActions';

const initialState = [
  { id: nextId(), name: 'Замена стекла', price: 21000 },
  { id: nextId(), name: 'Замена дисплея', price: 25000 },
  { id: nextId(), name: 'Замена аккумулятора', price: 4000 },
  { id: nextId(), name: 'Замена микрофона', price: 2500 },
];

const serviceListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_SERVICE: {
      const { name, price } = payload;
      return [...state, { id: nextId(), name, price: Number(price) }];
    }

    case REMOVE_SERVICE: {
      const { id } = payload;
      return state.filter((service) => service.id !== id);
    }

    case EDIT_SERVICE:
      const { id, name, price } = payload;
      return state.map((service) =>
        service.id === id ? { ...service, name, price: Number(price) } : service
      );

    default: {
      return state;
    }
  }
};

export { serviceListReducer };
