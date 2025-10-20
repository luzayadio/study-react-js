import { useState } from "react"


export function App() {
  return (
    <div>
      <h2>Hello world</h2>

      {teste()}
      <br />
      {useTest()}
      <br />
      {useTestHook()}
      <br />

      {MyComponent()}
      <MyComponent></MyComponent>
      <MyName></MyName>
    </div>
  )
}

// Função JS
const teste = () => {
  return 1 + 1
}

//Função JS
const useTest = () => {
  return 1 + 1
}

// React Hook
const useTestHook = () => {
  const [value] = useState(1 + 1)
  return value
}

// Component
/* As componentes devem começar sempre com letra maiuscula 
para diferenciar dos componente do React JSX */
const MyComponent = () => {
  return (
    <div>
      <h1>This is my Component</h1>
    </div>
  )
}

function MyName() {
  return (
    <div>
      <h2>My name is Vila</h2>
    </div>
  )
}

const MyAge = (age: number) => {
  return (
    <div>
      <h2>My name is {age}</h2>
    </div>
  )
}