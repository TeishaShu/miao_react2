import { useState } from 'react'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      123
      {/* <Footer /> */}
    </>
  )
}

export default App