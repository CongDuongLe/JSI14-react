import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilmDetails from './children/FilmDetails'
import { useNavigate } from 'react-router-dom'
const GOOGLE_TOKEN = 'accessToken'

const Buoi7 = () => {
  const navigate = useNavigate()
  const API_URL = `https://gogoanime.consumet.org/popular`

  // 1 , khai báo state
  // ex : 1 state chứa thông tin từ api trả về , do API trả về 1 array nên state khi khởi tạo sẽ có dữ liệu ban đầu
  // là 1 array rỗng

  const [filmDatas, setFilmDatas] = useState([])
  const [displayEmail, setDisplayEmail] = useState('')

  // 2 , gọi API thì cần 1 hàm

  const fetchAnime = async () => {
    const response = await axios.get(API_URL)
    const data = response.data
    setFilmDatas(data)
  }

  //3, ngay khi ứng dụng dc khởi chạy, dùng useEffect với dep là 1 array rỗng để định nghĩa rằng hàm fetchAnime()
  // chỉ chạy 1 lần duy nhất

  useEffect(
    () => {
      fetchAnime()
      return () => {
        setFilmDatas([])
      }
    },
    []
    // trường hợp gọi api lỗi => dùng hàm setFilmDatas() để cập nhật lại state filmDatas về trạng thái thái ban đầu
  )



    // console.log(filmDatas, 'filmDatas here')

    useEffect(() => {
      const userEmail = localStorage.getItem('email')
      setDisplayEmail(userEmail)
     } , [])


    //  console.log(displayEmail, 'displayEmail here')



    const handleLogout = () => { 
      // let userInfo = {
      //   email : '',
      //   password : ''
      // }
      // localStorage.setItem('user', JSON.stringify(userInfo))
      localStorage.removeItem(GOOGLE_TOKEN)
      navigate('/signIn')
    }


  return (
    <div className="h-full w-full bg-[#6D67E4] flex flex-1 justify-center items-center">
      <div>
        <div className='absolute top-6 left-6'>
          <h1 className="text-xl font-bold text-white">Welcome to {displayEmail}</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3 absolute top-4 right-4">
          Log out
        </button>
      </div>

      <div>
        <FilmDetails
         // tại dòng này, tạo 1 propsName ={value} để truyền data tù component Buoi7 => component SignUp 
          filmDatas = {filmDatas}
        
        />
      </div>
    </div>
  )
}

export default Buoi7

// props : property của component , có dạng propsName = {value}
// state : là trạng thái của ứng dụng, đc quản lí bằng hàm useState() được import từ react
// effect : là quản lí những hàm nào sẽ chạy khi mở ửng dụng



// Yêu cầu về nhà : làm lab trên classin + tìm hiểu cách đăng nhập với github, facebook ?


// lab về nhà : đăng nhập ẩn danh ( đã chữa), đăng nhập được link gửi về email ( đã chữa)
// => về nhà tìm hiểu + đọc lại code đã được hướng dẫn để có thể áp dụng vào các ứng dụng React khác


// hướng giải quyết : 
// + với đăng nhập bằng fb : 1 nút có content hd người dùng đăng nhập = facebook => tìm hiểu về cách
// bật provider của fb login trên firebase => vào tài khoản fb đê liên kết giữa firebase + facebook 
// => triển khai logic để user có thể đăng nhập vào firebase với tài khoản fb được liên kết

// + đăng nhập bằng github : tương tự như đăng nhập bằng facebook