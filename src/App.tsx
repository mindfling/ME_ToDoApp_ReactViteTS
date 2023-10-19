// import { Button, Container } from 'react-bootstrap';
import { Title } from './Components/Title';
import ExampleModal from './Components/ExampleModal';
import { FormTask } from './Components/FormTask';
import MyTable from './Components/MyTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='App app-container  d-flex align-items-center justify-content-center flex-column'>
      <ExampleModal /> {/* modal shows at start */}

      <Title text='ToDoWka Application' />

      <FormTask />

      <MyTable />
    </div>
  )
}

export default App
