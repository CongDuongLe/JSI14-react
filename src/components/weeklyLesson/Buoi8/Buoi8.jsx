import React, {useState, useEffect} from 'react'
import { db, FIREBASE_COLLECTION } from '../../../config/Firebase.config'
import {
    collection, // lấy collecction trùng với tên của collection trong firbase
    getDocs,  // lấy data từ firebase với collection lấy từ hàm collection()
    onSnapshot,
    addDoc,  // thêm mới data vào collection sẵn có trên firebase
    updateDoc, // update data mới đè lên data cũ trên firebase
    doc,  // lấy data từ firebase với collection lấy từ hàm collection()
    deleteDoc, // xoá data theo id trên firebase
} from 'firebase/firestore'
import { async } from '@firebase/util'

const Buoi8 = () => {

    const [songsFromFireBase, setSongsFromFireBase] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const [addSong, setAddSong] = useState({
        name: '',
        singer: '',
        album: '',
        ImgUrl: '',
        songId: '',
        isBought: false, // mặc định sẽ là false
      })
    
    // state để quản lí việc cập nhật lại dữ liệu cho modal để edit thông tin

      console.log('addSong', addSong)


    // tạo 1 state để hứng giá trị từ ô input trong modal

    // Các bước để lấy data từ trên firebase firestore

    // B1 : tạo 1 biến để truy cập vào trạng thái collection với
    // db được import từ file config
    // tên của collection được lấy từ trên list collection của firebase

    const songRef = collection(db, FIREBASE_COLLECTION)

    // B2 : tạo 1 hàm để lấy data tưfirebase firestore, và muốn hàm này được thực thi 
    // ngay lập tức khi ứng dụng được mở => dùng useEffect()
    // làm việc với firebase tương tự như làm việc với API : luôn luôn bất đồng bộ
    // hướng xử lí bất đồng bộ : 1 => promise, 2 => async await 

    const fetchSongData = async () => {
        setIsLoading(true) // để ước lượng xem có thời gian chờ data load xong hay không
        // => hiển thị activity indicator loading hoặc 1 màn hình skeleton

        const response = await getDocs(songRef)


        // const test = await onSnapshot(
        //     songRef, 
        //     (snapshot) => {
        //         return (
        //             snapshot.docs.map(
        //                 (item) => {
        //                     return item.data()
        //                 }
        //             )
        //         )
        //     }
        // )
    

            // console.log('test', test)

        const songData = response.docs.map(item => item.data())
        const songIndex = response.docs.map(item => item.id)

        // cần thực hiện 1 logic để nhập 2 mảng : songData và mảng songIndex với thư tự lần lượt 
        // index bao nhiêu thì có data tương ứng là bấy nhiêu
        // (mục đích ) : CRUD với list data từ trên firebase 
        // C : create :tạo collection mới
        // R : read : lấy data từ collection ( đang thực hiện)
        // U : update : cập nhật data từ collection theo từng ID
        // D : delete : xáo data trong collection theo ID
         
        const finalData = songData.map(
            (item, index) => {
                return {
                    ...item,
                    songIndex : songIndex[index]
                }
            }
        )

        setSongsFromFireBase(finalData)
        setIsLoading(false) // sau khi nhận được data thì ngừng trạng thái loading để cập nhật dữ liệu




    }


    useEffect(() => {
        fetchSongData()
    }, [])

    //B3 : render Data từ trên giao diện

    const renderSkeketon = () => {
        return (
            <div
              aria-label="loading-skeleton"
              className="w-[400px] h-[400px] rounded-sm bg-slate-300 animate-pulse"
            ></div>
        )
    }


    const renderSongItem = () => {
        return (
            <div>
                {
                    songsFromFireBase.map(
                        (item, index) => {
                            return (
                                <div
                                key={index}
                                aria-label="card-item-v3"
                                className="flex flex-col w-[400px] rounded-xl bg-[#ADA2FF] my-4 border border-gray-100 p-5"
                              >
                                <div className="relative flex-shrink-0 mb-5 h-[450px]">
                                  <img
                                    src={item.ImgUrl}
                                    alt=""
                                    className="object-cover w-full h-full rounded-lg"
                                  />
                                </div>
                                <div className="flex flex-col flex-1">
                                  <h3 className="mb-3 text-lg font-bold">
                                    Song : {item.name}
                                  </h3>
                                  <h3 className="mb-3 text-lg font-normal text-gray-700">
                                    Album : {item.album}
                                  </h3>
                                  <h3 className="mb-3 text-lg font-normal  text-gray-700">
                                    Singer : {item.singer}
                                  </h3>
                                  <h3 className="mb-3 text-lg font-bold text-white">
                                    {item.isBought ? 'Bought' : 'Not Bought'}
                                  </h3>
                                  
                                </div>

                                <button 
                                  onClick={() => {
                                    showModalUpdateSong()
                                    setAddSong(item)

                                  }}
                                  className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                                        Edit Data
                                </button>
                                <button 
                                  onClick={() => {
                                    handleDeleteSong(item.songIndex)
                                  }}
                                  className="rounded-lg font-medium bg-blue-100 text-red-500 px-6 py-3 mt-4 border border-red-500">
                                  Delete Song
                                </button>



                              </div>
                            )
                        }
                    )
                }
               
            </div>
        )
    }


    const handleAddSong = async (e) => {
        e.preventDefault()
        await addDoc(songRef,addSong)  // thêm mới
        fetchSongData() // sau khi thêm mới thì gọi lại hàm này để cập nhật data mới nhất từ firebase
        setAddSong({
            name: '',
            singer: '',
            album: '',
            ImgUrl: '',
            isBought: false,
          })
        
          setShowModal(false)

    }

    const renderModal = () => {
        return (
            <>
                {
                    showModal && (
                        <div
                        className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
                        id="modal"
                      >
                        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                          <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-900 opacity-75" />
                          </div>
                          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                            &#8203;
                          </span>
                          <div
                            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                          >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                              <label>Song name</label>
                              <input
                                type="text"
                                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                                placeholder="Enter song name"
                                value={addSong.name}
                                onChange={(e) =>
                                  setAddSong({ ...addSong, name: e.target.value })
                                }
                              />
                              <label>Singer</label>
                              <input
                                type="text"
                                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                                placeholder="Enter song singer"
                                value={addSong.singer}
                                onChange={(e) =>
                                  setAddSong({ ...addSong, singer: e.target.value })
                                }
                              />
                              <label>Album</label>
                              <input
                                type="text"
                                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                                placeholder="Enter song album"
                                value={addSong.album}
                                onChange={(e) =>
                                  setAddSong({ ...addSong, album: e.target.value })
                                }
                              />
                              <label>Image Url</label>
                              <input
                                type="text"
                                className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                                placeholder="Enter song image Url"
                                value={addSong.ImgUrl}
                                onChange={(e) =>
                                  setAddSong({ ...addSong, ImgUrl: e.target.value })
                                }
                              />
                            </div>
                            <div className="bg-gray-200 px-4 py-3 text-right">
                              <button
                                onClick={() => setShowModal(false)}
                                type="button"
                                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                onClick={(e) => handleAddSong(e)}
                                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                              >
                                Create Song
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                }
            </>
        )
    }


    const renderEditModal = () => {
      return (
          <>
              {
                  showEditModal && (
                      <div
                      className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
                      id="modal"
                    >
                      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                          <div className="absolute inset-0 bg-gray-900 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                          &#8203;
                        </span>
                        <div
                          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                          role="dialog"
                          aria-modal="true"
                          aria-labelledby="modal-headline"
                        >
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <label>Song ID</label>
                            <input
                              type="text"
                              className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                              placeholder="Enter Song ID"
                              value={addSong.songIndex}
                              disabled
                            />
                            <label>Song name</label>
                            <input
                              type="text"
                              className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                              placeholder="Enter song name"
                              value={addSong.name}
                              onChange={(e) =>
                                setAddSong({ ...addSong, name: e.target.value })
                              }
                            />
                            <label>Singer</label>
                            <input
                              type="text"
                              className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                              placeholder="Enter song singer"
                              value={addSong.singer}
                              onChange={(e) =>
                                setAddSong({ ...addSong, singer: e.target.value })
                              }
                            />
                            <label>Album</label>
                            <input
                              type="text"
                              className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                              placeholder="Enter song album"
                              value={addSong.album}
                              onChange={(e) =>
                                setAddSong({ ...addSong, album: e.target.value })
                              }
                            />
                            <label>Image Url</label>
                            <input
                              type="text"
                              className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                              placeholder="Enter song image Url"
                              value={addSong.ImgUrl}
                              onChange={(e) =>
                                setAddSong({ ...addSong, ImgUrl: e.target.value })
                              }
                            />
                          </div>
                          <div className="bg-gray-200 px-4 py-3 text-right">
                            <button
                              onClick={() => setShowEditModal(false)}
                              type="button"
                              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={(e) => handleUpdateSong(e, addSong.songIndex)}
                              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                            >
                              Update Song
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              }
          </>
      )
  }


    const handleUpdateSong = async (e, id) => {
      e.preventDefault()
      console.log(id, 'zzz id of song need edit')
      // update doc nhận vào 3 tham số db, tên collection, data mới
      await updateDoc(
        doc(db, FIREBASE_COLLECTION, id), {
          name: addSong.name,
          singer: addSong.singer,
          album: addSong.album,
          ImgUrl: addSong.ImgUrl,
          isBought : true
        }
      )

      // update data

      fetchSongData()

      // turn off modal

      setShowEditModal(false)

      // after update data successfully, then clear input of all modal

      setAddSong({})

      }


    const showModalUpdateSong = (item) => {
      setShowEditModal(true)
    }

    const handleDeleteSong = async (id) => {
      console.log(id, 'id of song need delete')
      await deleteDoc(doc(db, FIREBASE_COLLECTION, id))
      // after delete successfully, then fetch data again
      fetchSongData()
    }


    // vừa rồi mình đã hoàn thành xong 2 thao tác : update và xoá data trên firebase theo ID của document

    // làm CP2 trong 15 phút rồi nghỉ 







  return (
    <div className='h-auto min-h-screen w-screen flex overflow-auto py-8 justify-center px-8 mb-8 '>
        {
            isLoading ? renderSkeketon() : renderSongItem()
        }
        {renderModal()}
        {renderEditModal()}

        <button 
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] absolute bottom-4 right-4">
                  Thêm thông tin
        </button>
        
    </div>
  )
}

export default Buoi8



// hàm getDocs : chỉ cập nhật data khi reload lại web ( component được re-render)

// nâng cao 1 chút : hàm onSnapshot : cập nhật data ngay lập tức khi có sự thay đổi trên firebase firestore



// chia logic : trong giao diện modal có 2 nút : create, cancel
// cancle : xoá giá trị trong ô input, tắt modal
// create : update dữ liệu lên firestore, tắt modal , xoá dữ liệu trong ô input để người
//. dùng tạo mới


// viết logic để thêm data lên firebase

// CRUD : 
// Create
// Read 
// Update
// Delete


// Trong buổi 8 : - tạo trường collection trên firebase ( có thể tạo nhiều collection trong 1 dự án ) (CREATE)
// - cách lấy data từ firebase về và hiển thị lên trên màn hình (Read)
// - cách thêm data vào collection có sẵn trên fire thông qua hàm addDoc (Create hoặc Update)


// Buổi 9 : học 2 phương thức cuối làm việc với firebase firestore (Update, Delete)

// Update: khi có collection với 1 ID là abc có value là xyz thì mình có thể update dữ liệu cho ID abc đó 1 dữ liệu
//là 123, newxyz

// Delete : Xoá collection theo ID 

// Vì sao phải làm việc với ID thay vì làm việc trực tiếp : trong chương trình thì ID luôn là duy nhất (id của html cũng là duy nhât)
// - back-end phải làm việc với 1 database vô cùng lớn và họ cần dấu hiệu để phân biệt các loại data với nhau
// - nếu không có ID thì họ sẽ phải lưu trữ 1 cách rất lớn và rất khó để quản lý 