import { useState } from 'react'
import { Button } from './Components/Button';
import { Title } from './Components/Title';

function App() {
  // const [count, setCount] = useState(0);
  // const [discount, setDiscount] = useState(0);

  return (
    <>
      <Title title='Заголовок приложения' />
      <h1>Vite + React</h1>
      {/* <Title></Title> */}

      {/* <Form></Form> */}

      {/* <Table></Table> */}
      <Button className='btn btn-primary btn-lg' type='button'>Push button</Button>
    </>
  )
}

export default App
