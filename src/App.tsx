// import { Button, Container } from 'react-bootstrap';
import { Title } from './Components/Title';
import ExampleModal from './Components/ExampleModal';
import { FormTask } from './Components/FormTask';
import MyTable from './Components/MyTable';
import 'bootstrap/dist/css/bootstrap.min.css';

import { TITLE, STORAGE_KEY } from './Data/consts';
import { Store } from './modules/Store';
import { useState } from 'react';
console.log('TITLE: ', TITLE);
console.log('STORAGE_KEY: ', STORAGE_KEY);


function App() {
  
  // const store: Store = new Store(STORAGE_KEY);
  
  const [store, setStore] = useState(new Store(STORAGE_KEY));

  return (
    <div className='App app-container  d-flex align-items-center justify-content-center flex-column'>
      <ExampleModal />
      <Title text={TITLE} />
      <FormTask store={store} />
      <MyTable store={store} />
    </div>
  )
}

export default App
