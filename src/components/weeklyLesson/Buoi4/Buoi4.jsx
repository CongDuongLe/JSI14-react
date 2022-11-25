import React, { useState } from 'react'
import { render } from 'react-dom'
import B4_Child1 from './children/B4_Child1'
import B4_Child2 from './children/B4_Child2'

const JSI14Mems = [
  {
    name: 'Võ Đoàn Phương Vi',
    age: 15,
    isMale: false,
    classMindX: 'JSI-14',
    avatarUrl:
      'https://gamek.mediacdn.vn/133514250583805952/2021/8/31/anh-0-16303903552991727277011.jpg',
  },
  {
    name: 'Nguyễn Thế Bảo Duy',
    age: 16,
    classMindX: 'JSI-14',
    isMale: true,
    avatarUrl:
      'https://w0.peakpx.com/wallpaper/215/786/HD-wallpaper-doraemon-fondo-de-pantalla.jpg',
  },
  {
    name: 'Hoàng Kỳ Anh',
    age: 15,
    isMale: true,
    classMindX: 'JSI-14',
    avatarUrl:
      'https://i.pinimg.com/564x/70/4c/68/704c68794c4f0767e42892ec208cad35.jpg',
  },
]

const Buoi4 = () => {
  const [count, setCount] = useState(100)

  const [isShow, setIsShow] = useState(true)

  const [inputValue, setInputValue] = useState(0)

  console.log('inputValue', inputValue)

  // dòng 36 tương đương isShow có giá trị khởi tạo là true

  const renderJSI14Members = () => {
    return (
      <>
        {JSI14Mems.map((item, index) => {
          return (
            <div key={index} className="mx-4 my-4">
              <B4_Child2
                name={item.name}
                age={item.age}
                classMindX={item.classMindX}
                avatarUrl={item.avatarUrl}
                isMale={item.isMale}
                arr={JSI14Mems}
              />
            </div>
          )
        })}
      </>
    )
  }

  const inCreaseNumber = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const resetState = () => {
    setCount(100)
  }

  const decreaseNumber = () => {
    setCount((prevState) => prevState - 1)
  }

  const increaseNumberBy10 = () => {
    setCount((prevCount) => prevCount + 10)
  }

  const increaseByInput = () => {
    setCount((prevCount) => prevCount + +inputValue)
    setInputValue(0)
  }

  const decreaseByInput = () => {
    setCount((prevCount) => prevCount - +inputValue)
    setInputValue(0)
  }

  const renderTwoButtons = () => {
    return (
      <div className="flex gap-x-4 mt-4">
        <button
          onClick={inCreaseNumber}
          className="rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3"
        >
          Tăng giá trị
        </button>
        <button
          className="inline-flex items-center justify-center px-10 text-white bg-blue-500 rounded-lg h-14 gap-x-3 disabled:cursor-not-allowed disabled:opacity-70"
          aria-label="button-loading"
          onClick={resetState}
        >
          <div className="w-6 h-6 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
          <span>Reset</span>
        </button>
        <button
          onClick={decreaseNumber}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 px-6 py-3"
        >
          Giảm giá trị
        </button>
        <button
          onClick={increaseNumberBy10}
          className="rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3"
        >
          Tăng 10
        </button>
        <button
          onClick={increaseByInput}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 px-6 py-3"
        >
          Tăng theo giá trị nhập vào
        </button>
        <button
          onClick={decreaseByInput}
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Giảm theo giá trị nhập vào
        </button>
      </div>
    )
  }

  const toggleShowMember = () => {
    setIsShow(!isShow)
  }

  const renderShowMember = () => {
    return (
      <div
        className="flex items-center gap-x-5"
        aria-label="button-combination"
      >
        <button
          onClick={toggleShowMember}
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          {isShow ? 'Ẩn danh sách' : 'Hiện danh sách'}
          {/* 
          dòng 125 : với trạng thái ban đầu đang là true => button có chức năng là bấm 1 lần để ẩn danh sách
          khi isShow là false thì sẽ có chức năng là bấm 1 lần để hiện danh sách
        */}
        </button>
      </div>
    )
  }

  const renderInput = () => {
    return (
      <div>
        <div className="flex items-center gap-x-3 rounded-lg p-3 bg-gray-100 mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex-shrink-0 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div className="w-full">
            <input
              type="number"
              className="w-full outline-none bg-transparent text-sm font-medium"
              placeholder="Nhập giá trị muốn tăng hoặc giảm"
              value={inputValue}
              onChange={
                (event) => setInputValue(event.target.value)
                // event.target.value : sẽ là giá trị nằm trong ô input, hay nói cách khác
                // khi người người nhập gì thì event.target.value chính là giá trị đó
              }
            />
          </div>
        </div>
      </div>
    )
  }

  let id = 0

  const startCount = () => {
    id = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000);
  }

  const stopCount = () => {
    clearInterval(id)
    console.log('running when touch')
  }


  const renderCountdown = () => {
    return(
      <button 
      onClick={startCount}
      className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] mt-4">
                Bắt đầu đếm ngược
      </button>
    )
  }



  const renderStopCountdown = () => {
    return(
      <button 
      onClick={stopCount}
      className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] mt-4">
                Dừng đếm ngược
      </button>
    )
  }
 
 

  return (
    <div className="w-full h-full bg-blue-200 justify-center items-center flex flex-1 flex-col">
      <div className="pb-[30px]">
        <B4_Child1 name="Bấm nút để tăng giảm giá trị" age={count} />
        {renderInput()}
      </div>
      <div>Trạng thái hiện tại của state isShow là : {isShow.toString()}</div>
      {renderShowMember()}

      {renderCountdown()}
      {renderStopCountdown()}
      <div className="flex ">{isShow && renderJSI14Members()}</div>
      {renderTwoButtons()}
    </div>
  )
}

export default Buoi4

// chú ý : khi muốn hiển thị nội dung trên trang web, ta cần viết
// nó trong phần return của 1 component

// dấu && có nghĩa là nếu isShow là true thì mới hiển thị danh sách còn không thì sẽ ẩn đi
