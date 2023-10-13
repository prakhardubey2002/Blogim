import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error("Failde to fetch");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.maincontainer} >
      {data.map((item) => (
        <Link key={item.userId} href="/blog/testId" className={styles.container} >
          <div className={styles.imageContainer} >
            <Image
              src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
              className={styles.image} />
          </div>
          <div className={styles.content} >
            <h1 className={styles.title} >{item.title}
            </h1>
            <p className={styles.desc} >Desc</p>
          </div>
        </Link>

      ))}
      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imageContainer} >
          <Image
            src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image} />
        </div>
        <div className={styles.content} >
          <h1 className={styles.title} >Test
          </h1>
          <p className={styles.desc} >Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imageContainer} >
          <Image
            src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image} />
        </div>
        <div className={styles.content} >
          <h1 className={styles.title} >Test
          </h1>
          <p className={styles.desc} >Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId1" className={styles.container} >
        <div className={styles.imageContainer} >
          <Image
            src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image} />
        </div>
        <div className={styles.content} >
          <h1 className={styles.title} >Test
          </h1>
          <p className={styles.desc} >Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imageContainer} >
          <Image
            src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image} />
        </div>
        <div className={styles.content} >
          <h1 className={styles.title} >Test
          </h1>
          <p className={styles.desc} >Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog