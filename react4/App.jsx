import { useState } from 'react'
import Header from './components/header.jsx'
import Main from './components/main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
