import React from 'react'
import image1 from '../../public/img/01.jpg'
function MansonryLayout() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">
        Masonry Layout
      </h1>
      <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
        <div className="bg-gray-200 break-inside-avoid">
          <img src={image1} />
        </div>
        <div><p className='text-'>hello my firned</p></div>
      </div>
    </div>
  );
}

export  {MansonryLayout}