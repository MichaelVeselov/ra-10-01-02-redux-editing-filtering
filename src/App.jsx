import { ServiceFilter } from './components/ServiceFilter';
import { ServiceAddForm } from './components/ServiceAddForm';
import { ServiceList } from './components/ServiceList';

import './index.css';

export default function App() {
  return (
    <div
      className='container border border-2 border-secondary rounded mt-3 p-2'
      style={{ maxWidth: '540px' }}
    >
      <ServiceFilter />
      <ServiceAddForm />
      <ServiceList />
    </div>
  );
}
