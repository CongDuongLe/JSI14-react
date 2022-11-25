import React from 'react'

const Vidu2 = () => {
  return (
    <div className='pt-[100px]'>
       <div
         aria-label="featured-list"
         className="flex items-start justify-between gap-x-5 max-w-[1000px]"
       >
         {Array(4)
           .fill(0)
           .map((item, index) => (
             <div key={index} className="flex flex-col items-start">
               <div className="flex items-center justify-center w-20 h-20 mb-5 text-green-500 rounded-full bg-green-50">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="w-6 h-6"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   strokeWidth={2}
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                   />
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                   />
                 </svg>
               </div>
               <h3 className="mb-2 text-xl font-bold">Management</h3>
               <p className="text-sm leading-loose">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               </p>
             </div>
           ))}
       </div>
    </div>
  )
}

export default Vidu2