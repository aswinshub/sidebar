import { useState } from 'react'
import './App.css'
import Xsidebar from './ui/Xsidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Xsidebar/>
    </>
  )
}

export default App
