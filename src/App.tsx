import { Alert, Breadcrumb, Button, CloseButton, Table } from 'react-bootstrap';
import { Title } from './Components/Title';
import ExampleModal from './Components/ExampleModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from './Components/Form';
import MyTable from './Components/MyTable';

function App() {


  return (
    <div className='App app-container'>
      <ExampleModal /> {/* modal shows at start */}

      <Title title='ToDoWka Application' />

      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link" className='mb-5'>Link</Button>

      <Alert>Add some task ToDo</Alert>
      <Form /> {/* form add task */}

      <MyTable></MyTable>

{/*
      <MyTable variant='dark' hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>oeau</td>
            <td>Larry the Bird</td>
            <td>
              <Button variant='warning' className='mx-1'>twitter</Button>
              <Button variant='light'>twitter</Button>
            </td>
          </tr>
        </tbody>
      </Table>
*/}
    </div>
  )
}

export default App
