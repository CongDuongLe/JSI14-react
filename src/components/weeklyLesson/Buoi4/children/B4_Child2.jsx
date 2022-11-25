import React from 'react'

const B4_Child2 = (props) => {
  const { name, age, classMindX, avatarUrl, isMale, arr } = props


  return (
    <div className="flex">
      <div aria-label="card-overlay" className="relative w-[250px] h-[300px]">
        <img
          src={avatarUrl}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
          <h3 className="text-base font-bold">{name}</h3>
          <span className="text-sm text-gray-400">{age} years old</span>
          <span className="text-sm text-gray-400">{classMindX}</span>
          {isMale ? (
            <label className="cursor-pointer">
              <input type="radio" name="" id="" className="hidden" />
              <span className="inline-flex items-center justify-center w-10 h-10 p-1 text-opacity-0 bg-blue-500 rounded-full">
                <span className="inline-block w-5 h-5 bg-white rounded-full"></span>
              </span>
            </label>
          ) : (
            <div
              className="w-[180px] h-2 rounded-full bg-slate-300"
              aria-label="progress-bar"
            >
              <div className="w-2/4 h-full rounded-full bg-gradient-to-tr from-blue-500 to-green-500"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default B4_Child2
