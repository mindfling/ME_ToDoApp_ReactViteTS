import { Button, Container } from 'react-bootstrap';
import { Title } from './Components/Title';
import ExampleModal from './Components/ExampleModal';
import { Form } from './Components/Form';
import MyTable from './Components/MyTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className='App app-container  d-flex align-items-center justify-content-center flex-column'>
      <ExampleModal /> {/* modal shows at start */}

      <Title title='ToDoWka Application' />

      <Container>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link" className='mb-5'>Link</Button>
      </Container>

      <Form />

      <MyTable />
    </div>
  )
}

export default App
