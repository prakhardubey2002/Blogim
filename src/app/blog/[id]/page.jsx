import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css";
const BlogPost = ({params}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quibusdam.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolor.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>dz</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid dolores fuga aperiam eius ad incidunt doloremque dolorum porro impedit consequuntur, minima rem, ipsum blanditiis exercitationem. Animi neque itaque aperiam!
        </p>
      </div>
    </div>
  )
}

export default BlogPost