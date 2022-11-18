import { useState } from 'react'
import HelloWorldComponent from './components/pages/HelloWorldComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-1 bg-[#FF8FB1] h-screen justify-center  items-center">
      <HelloWorldComponent />
    </div>
  )
}

export default App

// nhiệm vụ : sử dụng component HelloWorldComponent trong App.jsx