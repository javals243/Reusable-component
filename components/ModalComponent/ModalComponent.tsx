import React, { useState } from 'react'
import styles from "../../styles/Home.module.css";
function ModalComponent() {
    const [modal,setModal]=useState(false);
    const toggleModal=()=>{
        setModal(!modal)
    }
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button onClick={toggleModal} className={styles.btn_modal}>
        open modal
      </button>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modal_content}>
            <h2>Hello </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              et aspernatur sequi excepturi quam ut reiciendis, delectus saepe
              quidem suscipit nemo dolor doloremque quibusdam cupiditate porro
              commodi similique mollitia quae.
            </p>
          </div>
          <button onClick={toggleModal} className={styles.close_modal}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export  {ModalComponent}