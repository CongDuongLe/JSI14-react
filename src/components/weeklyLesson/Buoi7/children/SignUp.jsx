import React from 'react'
import { useNavigate } from 'react-router-dom'

// useNavigate() là 1 hàm của thư viện react-router-dom, có chức năng dùng để chuyển đến trang mà mình mong muốn
// thông qua path đã được khai báo ở file main.jsx


const SignUp = () => {
  const navigation = useNavigate()
  const handleSignUpUser = (e) => {
    e.preventDefault()
    navigation('/signIn')
  }


  return (
    <div className='bg-[#B3FFAE] flex flex-1 justify-center items-center h-screen'>
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
        aria-label="signup-form"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Sign Up An Account</h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Re Enter your password"
          />
        </div>
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Already have an account?</p>
          <p 
            onClick={() => navigation('/signIn')}
            className="text-blue-500 underline">
            Sign In
          </p>
        </div>
        <button
          onClick={(e) => handleSignUpUser(e)}
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Create an account
        </button>
      </form>
    </div>
  )
}

export default SignUp

// khi ấn nút đăng kí : cần điền đủ thông tin : email, password, confirm password mới cho đăng kí
// khi ng dùng đã có tài khoàn rồi => bấm nút sign in sẽ trực tiếp chuyển đến trang sign in


