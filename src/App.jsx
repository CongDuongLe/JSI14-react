import { useState } from 'react'
import HelloWorldComponent from './components/pages/HelloWorldComponent'
import Vidu2 from './components/pages/Vidu2'
import ViduVeComponent from './components/pages/ViduVeComponent'
import Buoi4 from './components/weeklyLesson/Buoi4/Buoi4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-1 bg-[#FAF7F0] h-screen justify-center  items-center flex-col">
      {/* <HelloWorldComponent /> */}
      {/* <ViduVeComponent />
      <Vidu2 /> */}
      <Buoi4/>
    </div>
  )
}

export default App

// nhiệm vụ : sử dụng component HelloWorldComponent trong App.jsx