import React from 'react'

const Child1 = () => {
  return (
    <div>
        <div
          className="w-[400px] h-2 rounded-full bg-slate-300"
          aria-label="progress-bar"
        >
          <div className="w-2/4 h-full rounded-full bg-gradient-to-tr from-blue-500 to-green-500"></div>
        </div>
    </div>
  )
}

export default Child1