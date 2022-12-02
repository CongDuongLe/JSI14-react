import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Buoi5 = () => {

    const [turnOfLight, setTurnOfLight] = useState(false)  // giá trị ban đầu là false


    const handleChangeLightState = () => {
        setTurnOfLight(!turnOfLight)

        // cập nhật trạng thái ngược lại với trạng thái ban đầu 
    }

    // dòng số 9 có ý nghĩa : khi  trạng thái turnOfLight là false thì hàm setTurnOfLight(!turnOfLight)
    // sẽ có ý nghĩa là cập nhật lại trạng thái của turnOfLight ngược lại với trạng thái hiện tại 



    // useEffect(
    //     () => {
    //         console.log('Đang chạy')
    //     }, [turnOfLight]
    // )


    // b1 : tạo state để hứng các giá trị mà api trả về

    const [quoteData, setQuoteData] = useState({
        content : '',
        author : '',
        dateAdded : ''
    })

    const API_URL = 'https://api.quotable.io/random'

    // b2 : tạo 1 hàm để gọi API

    const fetchQuote = async () => {
        const response = await axios.get(API_URL)
        const data = response.data
        const {author, content, dateAdded} = data

        // cập nhật lại data cho state quoteData

        setQuoteData({
            content : content,
            author : author,
            dateAdded: dateAdded

        })




    }

    // b3 : gọi hàm useEffect để gọi API 


    useEffect(
        () => {
            fetchQuote()
        }, []
    )



    console.log('quoteData', quoteData)


    // hàm để khi bấm nút sẽ đổi câu quote


    const changeQuote = () => {
        return fetchQuote()
    }







  return (
    <div>

        <div>
            Trạng thái hiện tại của state turnOfLight là : {turnOfLight.toString()}
        </div>
        {
            turnOfLight ? 'Đèn đang được bật' : 'Đèn đã bị tắt'
        }

        <div onClick={handleChangeLightState} className='px-6 py-2 mt-4  bg-blue-600 rounded-md text-white text-2xl hover:bg-pink-400'>
            {
                turnOfLight ? 'Tắt đèn' : 'Bật đèn'
            }
        </div>

            <div aria-label="card-overlay" className="relative w-[250px] h-[300px] mt-8">
              <img
                src="https://bit.ly/3zzCTUT"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
                <h3 className="text-base font-bold">{quoteData.content}</h3>
                <span className="text-sm text-gray-400">{quoteData.author}</span>
                <span className="text-sm text-gray-400">{quoteData.dateAdded}</span>
              </div>
            </div>


            <div onClick={fetchQuote} className='px-3 py-2 mt-4 flex flex-1 bg-blue-600 rounded-md text-white text-2xl hover:bg-pink-400'>
                Đổi câu quote
            
        </div>

            




    </div>
  )
}

export default Buoi5



// State : trạng thái của 1 component