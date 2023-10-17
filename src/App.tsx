import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setDiscount((discount) => discount - 1)}>discount minus {discount}</button>
        <p>
          Edited summ is {count + discount}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
