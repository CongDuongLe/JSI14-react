import React, {useState, useEffect} from 'react'
import ChildOfRewind from './ChildOfRewind'
import axios from 'axios'

const avatarUrl = 'https://i.guim.co.uk/img/media/bc15f07d3a3659c7dbef332ab73e41e87fef54d9/0_207_3282_1969/master/3282.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a2b3388cd855b0e8ae9d4f1034704a0b'

// useState : là 1 hàm built-in của React , có nhiệm vụ là quản lí trạng thái của ứng dụng
// useEffect : tương tự như useState, cũng là 1 hàm của React, có nhiệm vụ là quản lí các hành động : bất đồng bộ, đồng bộ trong ứng dụng


const Rewind = () => {

    const [id, setId] = useState(1)  // giá trị ban đầu đang là 10 => biến id sẽ = 10
    const [data, setData] = useState([])  // giá trị ban đầu của data là 1 array rỗng 




    const handleRandomNumber = () => {
        let numberId = 1
        return (
         numberId =  Math.floor(Math.random() * 100), //tạo 1 số ngẫu nhiên từ 0-99
         setId(numberId), // cập nhật lai id = numberId vừa tạo ra ở dòng 22 
          console.log(id)
            )
    }


    const API_URL = `https://api.punkapi.com/v2/beers/${id}`  // dòng 15 đang gọi đến biến id : giá trị sẽ là 10

    console.log(API_URL)  // in ra giá trị là 10

    // dấu ` ` : dấu backtick, vị trí nằm ở bên cạnh số 1 trên bàn phím, nhìn icon có dẫu ~ thì là dấu backtick


    // để gọi API : cần 1 hàm effect (bất đồng bộ) => lưu trữ data mà API trả về vào 1 kho dữ liệu 
    // => mang data nhận được từ API hiển thị ra giao diện

    //b1 : viết 1 hàm để xử lí API
    const getDataFromAPI = async () => {
        const response = await axios.get(API_URL) // dòng 41 trả ra data theo từng id
        const Api_data = response.data
        // sau khi lấy được data => lưu data vào 1 kho, kho này là 1 state
        // hàm cập nhật lại kho data từ state : setData
        setData(Api_data)
    }

    console.log(data[0])

    //b2 : lưu data về 1 kho dữ liệu : dùng hàm setData với dữ liệu trả về là Api_data

        useEffect(
            () => {
                getDataFromAPI()
            }, [id]
        )

        // useEffect sẽ chạy khi mà ứng dụng được mở
        // có 3 trường hợp
        // 1, sẽ không có dependencies ([])  => useEffect chạy liên tục ( tính chất loop)
        //2 , có dependencies là 1 mảng array, nhưng array rỗng : chạy 1 lần duy nhất khi ứng dụng được mở
        // 3, có dependencies , [dep1, dep2, dep2] : useEffect sẽ chạy lần đầu tiên (mặc định) và sẽ chạy tiếp khi dep1
        // dep2, dep3 thay đổi giá trị

    //b3 : hiển thị data ra giao diện







  return (
    <div>
        <ChildOfRewind 
           name = {data[0]?.name}
           tagline = {data[0]?.tagline}
           descpiption = {data[0]?.description}
           imageUrl = {data[0]?.image_url}
           food_pairing = {data[0]?.food_pairing}
        />   

        <button
            onClick={
               () => handleRandomNumber()
            }
          className="inline-flex items-center justify-center px-10 text-white bg-blue-500 rounded-lg h-14 gap-x-3 disabled:cursor-not-allowed disabled:opacity-70"
          aria-label="button-loading"
        >
          <div className="w-6 h-6 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
          <span>get Random info</span>
        </button>
        {/* childOfRewind đang là children của Rewind.jsx */}
    </div>
  )
}

export default Rewind

// props : sẽ có dạng prop-Name = {value}