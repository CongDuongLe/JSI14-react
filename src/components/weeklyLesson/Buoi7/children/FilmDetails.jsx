import React from 'react'

const FilmDetails = (props) => {
  const { filmDatas } = props // prosp đang có kiểu dự liệu là array

  // ta đã học phương thức map() để duyệt qua từng phần tử của mảng

  // console.log('data from Buoi7.jsx', filmDatas)

  const renderFilm = () => {  // định nghĩa hàm renderFilm() để render ra các phần tử của mảng filmDatas
    return filmDatas.map((item, index) => {  // dòng 11 dùng return để trả lại data khi mình gọi đến hàm renderFilm
        return ( // logic để hiển thị data ra giao diện thông qua return ra 1 đoạn mã html ở bên dưới
          <div
            key={index}
            aria-label="card-item-v3"
            className="flex flex-col w-full rounded-xl bg-white border border-gray-100 p-5 mx-4 "
          >
            <div className="relative flex-shrink-0 mb-5 h-[250px] w-[300px] gap-x-2">
            <h3 className="mb-3 text-lg font-bold">
                {item.animeId}
              </h3>
              <img
                src={item.animeImg}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="mb-3 text-lg font-bold">
                {item.animeTitle}
              </h3>
              <h3 className="mb-3 text-lg font-bold">
                {item.releasedDate}
              </h3>
            </div>
          </div>
        )
      })
  }

  return (
    <div className="h-[550px] w-screen  flex flex-1  overflow-y-hidden max-w-screen-2xl justify-center items-center overflow-scroll">
        {/*  để gọi javascript sau hàm return thì mình cần bọc hàm trong 1 cặp ngoặc nhọn */}
        {renderFilm()}
        
    </div>
  )
}

export default FilmDetails
