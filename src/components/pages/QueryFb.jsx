import React, { useState, useEffect } from 'react'
import { db } from '../../config/Firebase.config'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  deleteField,
  updateDoc,
  onSnapshot
} from 'firebase/firestore'

const QUERY_KEY = 'songs'

const QueryFb = () => {
  const [songDatas, setSongDatas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editId, setEditId] = useState([])
  const [finalData, setFinalData] = useState([])

  const [addSong, setAddSong] = useState({
    name: '',
    singer: '',
    album: '',
    ImgUrl: '',
    songId: '',
    isBought: false,
  })

  const songRef = collection(db, QUERY_KEY)

  const getSongDatas = async () => {
    setIsLoading(true)
    const querySnapshot = await getDocs(songRef)

    // console.log('querySnapshot', querySnapshot.docs)
    const data = querySnapshot.docs.map((doc) => doc.data())

    const listID = querySnapshot.docs.map((doc) => doc.id)

    setEditId(listID)
    setSongDatas(data)

    setIsLoading(false)

    // merging data and id to 1 array

    const finalDatas = data.map((item, index) => {
      return {
        ...item,
        songId : listID[index],
      }
    })

    setFinalData(finalDatas)
  }

  //   console.log(finalData)

  //   console.log(editId)
  //   console.log(songDatas)

  // hàm reduce : viết hàm reduce để ghép từng id === index của songDatas

  useEffect(() => {
    getSongDatas()
  }, [])

  const handleAddSong = async (e) => {
    e.preventDefault() // ngăn chặn reload tức thời ( ngăn chặn hành động mặc định khi bấm nút button)
    await addDoc(songRef, addSong)
    getSongDatas()
    setAddSong({
      name: '',
      singer: '',
      album: '',
      ImgUrl: '',
      isBought: false,
    })
    closeModal()
  }

  const handleDeleteSong = async (id) => {
    await deleteDoc(doc(db, QUERY_KEY, id))
    getSongDatas()
  }

  const handleUpdateSong = async (id) => {
    await updateDoc(doc(db, QUERY_KEY, id), {
      name: addSong.name,
      singer: addSong.singer,
      album: addSong.album,
      ImgUrl: addSong.ImgUrl,
      isBought: false,
    })
    getSongDatas()
  }

  //   console.log(addSong, 'addSong')

  const openCreateModal = () => {
    setShowModal(true)
    setAddSong({
      name: '',
      singer: '',
      album: '',
      ImgUrl: '',
      isBought: false,
    })
  }

  const closeModal = () => {
    setShowModal(false)
  }

  // các func luôn có tính chất hoisting ( luôn đưa lên trên đầu file js, có thể dùng trc rồi định nghĩa sau mà không cần theo thứ tự : định nghĩa trước rồi mới được dùng)

  const selected = (id) => {
    // console.log(id)
    setShowEditModal(true)
  }

  const renderModal = () => {
    return (
      <>
        {showModal && (
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
                    onClick={closeModal}
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
        )}
      </>
    )
  }

  const renderEditModal = () => {
    return (
      <>
        {showEditModal && (
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
                  <label>Song Id</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song Id"
                    value={addSong.songId}
                    disabled
                    // onChange={(e) => setAddSong({ ...addSong, name: e.target.value })}
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
                    onClick={() => {
                      setShowEditModal(false)
                      setAddSong({
                        name: '',
                        singer: '',
                        album: '',
                        ImgUrl: '',
                        isBought: false,
                      })
                      handleUpdateSong(
                        addSong.songId
                      )
                    }}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                  >
                    Edit Song
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <div className="h-auto min-h-screen over overflow-auto py-8 justify-center  px-8   ">
      {isLoading ? (
        <div
          aria-label="loading-skeleton"
          className="w-full h-full bg-slate-200 animate-pulse"
        ></div>
      ) : null}

      {renderModal()}
      {renderEditModal()}

      {finalData.map((songData, index) => {

        console.log(songData)


        return (
          <div
            key={index}
            aria-label="card-overlay-v2"
            className="relative w-[250px] h-[300px] overflow-hidden rounded-lg my-4 bg-blue-200"
          >
            <button
              onClick={() => {
                selected(index)
                setAddSong(songData)
              }}
              className="items-center justify-center px-4 py-2 font-sans font-semibold tracking-wide text-blue-500 bg-transparent border-2 border-blue-500 rounded-lg absolute right-2 top-2"
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDeleteSong(songData.songId)
              }}
              className="items-center justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white bg-red-600 border-2  rounded-lg absolute left-2 top-2"
            >
              X
            </button>
            <img
              src={songData.ImgUrl}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col p-5 text-white gap-y-1 bg-gradient-to-t from-black">
              <h3 className="text-base font-bold">{songData.singer}</h3>
              <h3 className="text-base font-bold">{songData.name}</h3>
              <span className="text-sm">{songData.album}</span>
              <div className="flex items-center gapx-3 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      key={index}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
            </div>
          </div>
        )
      })}
      <button
        onClick={openCreateModal}
        className="rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3"
      >
        Add New Song
      </button>
    </div>
  )
}

export default QueryFb


// CRUD : C : create : đã xong phần tạo data mới
// R : read : đã đọc được data từ trên firebase
// U : update : đã xong chức năng update data lên firebase
// D : delete : đã xong chức năng delete data theo id trên firebase



