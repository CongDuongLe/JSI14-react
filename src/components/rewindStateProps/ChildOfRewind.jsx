import React from 'react'

const ChildOfRewind = (props) => {
    // viết rõ ràng ra 

    const { name,tagline, descpiption, imageUrl, food_pairing } = props


  return (
    <div>
        <h1>{name}</h1>
        <div
          aria-label="card-item-v3"
          className="flex flex-col w-[400px] rounded-xl bg-white border border-gray-100 p-5"
        >
          <div className="relative flex-shrink-0 mb-5 h-[350px]">
            <img
              src={imageUrl}
              alt=""
              className="object-content w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="mb-3 text-lg font-bold">
              {tagline}
            </h3>
            <h3 className="mb-3 text-lg font-bold">
            {descpiption}
            </h3>
            <h3 className="mb-3 text-lg font-bold">
              {food_pairing}
            </h3>
          </div>
        </div>
    </div>
  )
}

export default ChildOfRewind