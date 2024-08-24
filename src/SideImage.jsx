// import React from 'react'
import styles from "./SideImage.module.css";
import girlImg from "./assets/b.png"
function SideImage() {
  return (
      <>
            <div className={styles.position} >
              <div className={styles.imgDiv}>
                  <img className={styles.imgGirl} src={girlImg} alt="woman"></img>
              </div>
              
            </div>
            
      </>
  )
}

export default SideImage