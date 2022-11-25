import React from 'react'

const B4_Child1 = (props) => {
  const { name, age ,classMindX } = props

  return (
    <div>
      <h2 className='text-3xl text-pink-700'>Trò chơi : {name}</h2>
      <h3 className='text-2xl mt-4'>Giá trị ban đầu : {age} </h3>
      {/* <h3>Lớp : {classMindX}</h3> */}
    </div>
  )
}

export default B4_Child1
