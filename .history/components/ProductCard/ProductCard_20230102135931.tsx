import Image from 'next/image';
import React from 'react'

function ProductCard() {
  return (
    <div className="card">
      <Image
      className='w-full h-full object-cover' src={require("../../img/01.jpg")} alt="alter image" />
      <div className='p-5 flex-col gap-3 '>

        {/* badge  */}

        <div className='flex items-center gap-2'>
            <span className='badge'>Stock ready</span><span className='badge'>Official store</span>
        </div>

        {/* product title  */}
        <h2 className='product-title' title='Best Headphone'>Best Haedphone</h2>
      </div>
    </div>
  );
}

export {ProductCard}