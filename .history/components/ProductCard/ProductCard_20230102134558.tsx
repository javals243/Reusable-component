import Image from 'next/image';
import React from 'react'

function ProductCard() {
  return (
    <div className="card">
      <Image
      className='w-full h-full object-cover' src={require("../../img/01.jpg")} alt="alter image" />
      <div className='p-5 flex-col gap-3 '></div>
    </div>
  );
}

export {ProductCard}