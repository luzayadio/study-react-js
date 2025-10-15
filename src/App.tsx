import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function add(): void {
    setCount(count+1)
    console.log(count)
  }

  return (
    <>
      <p>Hello world</p>
      <button onClick={() => setCount(count+1)}>
        Count is {count}
      </button>
      <button onClick={() => add()}>
        Another Count is {count}
      </button>
    </>
  )
}

export default App
