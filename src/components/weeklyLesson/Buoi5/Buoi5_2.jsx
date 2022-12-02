import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Buoi5_2 = () => {

    const [id, setId ] = useState(1)

    const API_URL = `https://api.punkapi.com/v2/beers/${id}`

    const [beerData, setBeerData] = useState({
        attenuation_level : '',
        image_url : 'https://bit.ly/3zzCTUT',
        description : '',
        tagline : ''

    })


    const fetchBeer = async () => {

        const response = await axios.get(API_URL)
        // console.log(response)
        const data = response.data[0]
        const {attenuation_level,image_url, description, tagline} = data

        setBeerData({
            attenuation_level : attenuation_level,
            image_url : image_url,
            description : description,
            tagline : tagline
        })

    }


        useEffect(
            () => {
                fetchBeer()
            }, [id]
        )


        const randomBeerData = () => {
            let randomId = Math.floor(Math.random() * 100); // tạo số ngẫu nhiên từ 0 -99
            setId(+randomId)

            console.log('randomId now is : ' + randomId)
            
        }





  return (
    <div>
        <div
          aria-label="card-item-v2"
          className="flex flex-col w-[400px] p-5 bg-white shadow-sm rounded-lg"
        >
          <div className="relative flex-shrink-0 mb-5 h-[250px]">
            <img
              src={beerData.image_url}
              alt=""
              className="object-contain w-full h-full rounded-lg"
            />
            <div className="absolute z-10 px-4 py-2 bg-white rounded-lg text-cyan-500 right-5 top-5">
              
            </div>
          </div>
          <div className="flex items-center justify-between flex-1 gap-x-5">
            <div className="flex flex-col">
              <h3 className="mb-3 text-lg font-bold">{beerData.description}</h3>
              <div className="flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-cyan-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">{beerData.tagline}</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-100 gap-x-1 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{beerData.attenuation_level}</span>
            </div>
          </div>
        </div>

        <button 
            onClick={randomBeerData}
            className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 px-6 py-3 mt-4">
          Random Beer Data
        </button>


    </div>
  )
}

export default Buoi5_2


// phân tích logic chạy của hàm fetchBeer()

// đầu tiên : id mặc định sẽ là 1 : api sẽ trả về kết quả ứng với id =1


// hàm useEffect sẽ chạy lần đầu tiên với id =1, lấy được ra các thông tin từ API
// hàm setBeerData sẽ cập nhật lại các giá trị nhận được ở API vào state beerData





// ở bên trong return() của hàm Buoi5_2 sẽ hiện thị ra phần giao diện khi render với id =1



// hàm randomBeerData sẽ tạo 1 số ngẫu nhiên từ 0-99, sau đó hàm setId sẽ cập nhật lại giá trị của state id 
// với giá trị mới là số ngẫu nhiên tạo ra từ hàm randomBeerData


// useEffect với dependency là [id] sẽ chạy lại mỗi khi state id có sự thay đổi 
// => lặp lại vòng lặp ở dòng số 131, khác 1 chỗ lúc này id = randomId sau khi click button randomBeerData