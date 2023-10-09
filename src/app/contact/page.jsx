"use client"
import React from 'react'
// import lottie from "lottie-web";
import styles from './page.module.css'
// import contact from 'public/Lotti/contact'
import Button from '@/components/Button/Button';
const Contact = () => {
  // React.useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector("#contactimg"),
  //     animationData: contact,
  //     loop: true,
  //     autoplay: true,
  //   });
  // }, []);
  return (
    <div className={styles.container} >
      <h1 className={styles.title} >Let&lsquo; s Keep in Touch</h1>
      <div className={styles.content} >
        {/* <div className={styles.imgContainer} >
          <div className={styles.image} id="contactimg"></div>
        </div> */}
        <form action={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="email" placeholder='Email' className={styles.input} />
          <textarea className={styles.textArea}
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <Button url='#' text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact