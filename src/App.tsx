import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './Components/Title';
import { FormTask } from './Components/FormTask';
import { MyTable } from './Components/MyTable';
import { TITLE, STORAGE_KEY } from './Data/consts';
import { Store } from './modules/Store';
import { useState } from 'react';
import { useToggle } from './modules/Hooks/useToggle';
import { Button } from 'react-bootstrap';
import { ModalForm } from './Components/ModalForm';

console.log('TITLE: ', TITLE);
console.log('STORAGE_KEY: ', STORAGE_KEY);


function App() {
  const [store, setStore] = useState(new Store(STORAGE_KEY));
  const [isVisible, setVisible] = useToggle(false);

  return (
    <div className='app app-container  d-flex align-items-center justify-content-center flex-column'>
      <ModalForm isVisible={isVisible} />

      <Title text={TITLE} />
      
      <FormTask store={store} />

      <MyTable store={store} />
    </div>
  )
}

export default App
