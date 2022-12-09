import React from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const navigation = useNavigate()

  return (
    <div className='flex-1 flex h-screen justify-center items-center bg-[#FFDDD2]'>
        <form
          className="flex border border-slate-200 rounded-xl w-[600px]"
          aria-label="simple-form"
        >
          <div className="flex-1 bg-white rounded-md mr-4">
            <input
              type="email"
              placeholder="Nhập email hoặc số điện thoại đã đăng kí "
              className="w-full p-3 bg-transparent outline-none"
            />
          </div>
          <button 
            onClick={() => navigation('/signIn')}
            className="flex-shrink-0 p-3 font-bold text-white bg-blue-500 rounded-xl">
            Quên mật khẩu
          </button>
        </form>
    </div>
  )
}

export default ResetPassword