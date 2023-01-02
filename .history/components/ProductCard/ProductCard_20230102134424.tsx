import Image from 'next/image';
import React from 'react'

function ProductCard() {
  return (
    <div className="card">
      <Image src={require("../../img/01.jpg")} alt="alter image" />
    </div>
  );
}

export {ProductCard}