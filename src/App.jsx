import { useState } from 'react'
import HelloWorldComponent from './components/pages/HelloWorldComponent'
import Vidu2 from './components/pages/Vidu2'
import ViduVeComponent from './components/pages/ViduVeComponent'
import Rewind from './components/rewindStateProps/Rewind'
import Buoi4 from './components/weeklyLesson/Buoi4/Buoi4'
import Buoi5 from './components/weeklyLesson/Buoi5/Buoi5'
import Buoi5_2 from './components/weeklyLesson/Buoi5/Buoi5_2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-1 bg-[#FAF7F0] h-screen justify-center  items-center flex-col">
      {/* <HelloWorldComponent /> */}
      {/* <ViduVeComponent />
      <Vidu2 /> */}
      {/* <Buoi4/> */}
      {/* <Buoi5/> */}
      {/* <Buoi5_2/> */}
      <Rewind/>  
      {/* rewind đang là children của App.jsx */}
    </div>
  )
}

export default App

// nhiệm vụ : sử dụng component HelloWorldComponent trong App.jsx


// dạng của cpn cha và con 
// <parent>
//  <child1></child1>
//  <child2></child2>
// </parent>



// khi muốn child1 làm cha, chỉ cần bọc các cpn khác ở bên trong đóng và mở component của child1


// childOfchild1 là 1 cpn của child1 
// <child1>
//  <childOfchild1  name = {'NTBD'} />
// </child1>


// propsName là name có value là NTBD