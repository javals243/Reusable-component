import React from 'react'
import styles from '../../styles/Home.module.css'

function UnderlineAnimation() {
  return (
    <div className="flex h-[60vh] bg-red-400  justify-center items-center">
      <a href="" className={styles.underlineAnimation}>
        Underline Animation
      </a>
    </div>
  );
}

export  {UnderlineAnimation}