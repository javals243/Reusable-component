import Image from 'next/image';
import React from 'react'

function ProductCard() {
  return (
    <>
      <div className="card">
        <Image
          className="w-full h-full object-cover"
          src={require("../../img/01.jpg")}
          alt="alter image"
        />
        <div className="p-5 flex-col gap-3 ">
          {/* badge  */}

          <div className="flex items-center gap-2">
            <span className="badge">Stock ready</span>
            <span className="badge">Official store</span>
          </div>

          {/* product title  */}
          <h2 className="product-title" title="Best Headphone ever">
            Best Headphone
          </h2>

          {/* product price  */}
          <div>
            <span className="text-xl font-bold">Fc 400.000</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">
                Fc 500.000
              </span>
              <span className="discount-percent">Save 20%</span>
            </div>
          </div>

          {/* Product action button  */}

          <div className="mt-5 flex gap-2">
            <button className="button-primary">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="card">
        <Image
          className="w-full h-full object-cover"
          src={require("../../img/01.jpg")}
          alt="alter image"
        />
        <div className="p-5 flex-col gap-3 ">
          {/* badge  */}

          <div className="flex items-center gap-2">
            <span className="badge">Stock ready</span>
            <span className="badge">Official store</span>
          </div>

          {/* product title  */}
          <h2 className="product-title" title="Best Headphone ever">
            Best Headphone
          </h2>

          {/* product price  */}
          <div>
            <span className="text-xl font-bold">Fc 400.000</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">
                Fc 500.000
              </span>
              <span className="discount-percent">Save 20%</span>
            </div>
          </div>

          {/* Product action button  */}

          <div className="mt-5 flex gap-2">
            <button className="button-primary">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="card">
        <Image
          className="w-full h-full object-cover"
          src={require("../../img/01.jpg")}
          alt="alter image"
        />
        <div className="p-5 flex-col gap-3 ">
          {/* badge  */}

          <div className="flex items-center gap-2">
            <span className="badge">Stock ready</span>
            <span className="badge">Official store</span>
          </div>

          {/* product title  */}
          <h2 className="product-title" title="Best Headphone ever">
            Best Headphone
          </h2>

          {/* product price  */}
          <div>
            <span className="text-xl font-bold">Fc 400.000</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">
                Fc 500.000
              </span>
              <span className="discount-percent">Save 20%</span>
            </div>
          </div>

          {/* Product action button  */}

          <div className="mt-5 flex gap-2">
            <button className="button-primary">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="card">
        <Image
          className="w-full h-full object-cover"
          src={require("../../img/01.jpg")}
          alt="alter image"
        />
        <div className="p-5 flex-col gap-3 ">
          {/* badge  */}

          <div className="flex items-center gap-2">
            <span className="badge">Stock ready</span>
            <span className="badge">Official store</span>
          </div>

          {/* product title  */}
          <h2 className="product-title" title="Best Headphone ever">
            Best Headphone
          </h2>

          {/* product price  */}
          <div>
            <span className="text-xl font-bold">Fc 400.000</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through opacity-50">
                Fc 500.000
              </span>
              <span className="discount-percent">Save 20%</span>
            </div>
          </div>

          {/* Product action button  */}

          <div className="mt-5 flex gap-2">
            <button className="button-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export {ProductCard}