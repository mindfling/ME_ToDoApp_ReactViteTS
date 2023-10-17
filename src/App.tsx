import { Alert, Breadcrumb, Button, CloseButton, Table } from 'react-bootstrap';
import { Title } from './Components/Title';
import ExampleModal from './Components/ExampleModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className='App app-container'>

      <ExampleModal />
      <Title title='ToDoWka Application' />
      <p>test buttons</p>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <CloseButton className='mb-5' />

      <Table variant='dark' hover>
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

    </div>
  )
}

export default App
