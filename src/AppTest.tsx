import { Alert, Breadcrumb, Button, CloseButton, Table } from 'react-bootstrap';
import { Title } from './Components/Title';
import ExampleModal from './Components/ExampleModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className='App app-container'>
      <Alert variant='primary'>THis is the button above</Alert>
      
      <p>breadcrumbs</p>
      <Breadcrumb>
        <Breadcrumb.Item>Text1</Breadcrumb.Item>
        <Breadcrumb.Item>Text 2</Breadcrumb.Item>
        <Breadcrumb.Item active={true}>Text 33</Breadcrumb.Item>
        <Breadcrumb.Item>Text 1234</Breadcrumb.Item>
      </Breadcrumb>

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

      <CloseButton />

      <Alert variant='warning'>Under the buttons
        <CloseButton />
      </Alert>

      <Table striped bordered hover>
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
            <td>twitter</td>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}

export default App
