import React from 'react'

function MansonryLayout() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">
        Masonry Layout
      </h1>
      <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
        <div className="bg-gray-200 break-inside-avoid">
          <img src="https://pixabay.com/images/id-7679665/" alt="" />
        </div>
        <div><p className='text-red'>hello my firned</p></div>
      </div>
    </div>
  );
}

export  {MansonryLayout}