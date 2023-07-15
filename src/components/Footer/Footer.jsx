
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  console.log("Hi")
  return (
    <div className={styles.container}>
      <div>2023 All right reserved</div>
      <div className={styles.social}>
        <Image src="/1.png"width={15} height={15} className={styles.icon}  alt='Socials' />
        <Image src="/2.png"width={15} height={15} className={styles.icon}  alt='Socials' />
        <Image src="/3.png"width={15} height={15} className={styles.icon}  alt='Socials' />
        <Image src="/4.png"width={15} height={15} className={styles.icon}  alt='Socials' />
      </div>
    </div>
  )
}

export default Footer