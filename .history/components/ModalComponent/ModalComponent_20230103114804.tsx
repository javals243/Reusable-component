import React, { useState } from 'react'
import styles from "../../styles/Home.module.css";
function ModalComponent() {
    const [modal,setModal]=useState(false);
    const toggleModal=()=>{
        setModal(!modal)
    }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <button onClick={toggleModal} className="bg-red-400 px-5 py-2 rounded-lg">
        open
      </button>
      {modal && (
        <div className='flex justify-center items-center w-[70vw]'>
          <div className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <h2>Hello </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              et aspernatur sequi excepturi quam ut reiciendis, delectus saepe
              quidem suscipit nemo dolor doloremque quibusdam cupiditate porro
              commodi similique mollitia quae.
            </p>
          </div>
          <button onClick={toggleModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export  {ModalComponent}