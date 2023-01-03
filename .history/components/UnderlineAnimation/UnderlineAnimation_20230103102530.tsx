import React from 'react'

function UnderlineAnimation() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <a
        href=""
        className='text-[50px] no-underline relative uppercase text-black after:block after:absolute   after:bottom-0 after:h-[2px] w-[100%]  rounded-[9999px] after:content-[""] after:scale-0 after:ease-in-out after:duration-300 hover:after:scale-100'

      >
        Underline Animation
      </a>
    </div>
  );
}

export  {UnderlineAnimation}