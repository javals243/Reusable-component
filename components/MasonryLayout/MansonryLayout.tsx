/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image1 from "../../img/01.jpg"
import Image from 'next/image';
function MansonryLayout() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">
        Masonry Layout
      </h1>
      <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/01.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/02.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/03.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/04.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/05.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/06.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img//07.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/10.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/11.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/12.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/11.jpg")} alt="alter image" />
        </div>
        <div className="bg-gray-200 break-inside-avoid">
          <Image src={require("../../img/12.jpg")} alt="alter image" />
        </div>
      </div>
    </>
  );
}

export  {MansonryLayout}