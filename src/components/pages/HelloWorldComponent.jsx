// rafce

import React from 'react'
import MemberName from './MemberName'

const HelloWorldComponent = () => {
    // logic của component đc viết trước return


  return (
    <>
      <h1 className='text-white text-2xl '>Xin chào JSI 14 buổi 3</h1>
      {/* <MemberName/> */}
    </>
  
  )
}

export default HelloWorldComponent



// react : viết mã  html trong 1 file js, đuôi file là jsx, js
// css : mình dùng tw nên k cần tạo các file css riêng, viết theo bộ gõ tắt của tw

// về 1 component : thí nó là 1 file có đuôi là js, jsx.
// component sẽ có mở đầu là từ khoá khai báo hàm : function, const, class
// kết thúc component bằng từ export default hoặc export const để có thể mang componet ra bên ngoài và sử dụng