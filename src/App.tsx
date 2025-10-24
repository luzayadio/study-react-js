import { useState } from "react";

export function App() {
  const [hide, setHide] = useState(false)
  
  if(hide) return (<h1>null</h1>)
  // Nunca colocar um hook(useState, etc) depois de um if com return, vai causar erro!!

  return (
    <div>
      {hide && <h2>Hello world 1</h2>}
      {!hide && <h2>Hello world 2</h2>}

      {hide ? <h2>Hello world 3</h2> : <h2>Hello world 4</h2>}


      <button onClick={() => setHide(!hide)}>
        {hide ? "Impar" : "Par"}
      </button>
    </div>
  )
}
