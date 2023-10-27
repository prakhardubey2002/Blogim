import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',// static data fetching ,nextjs is caching our data then returning
  { cache: 'no-store' });// cache when set 'no-store' will call dat each time page refresg or make request nullifying caching, and { next: { revalidate: 3600 } } will call data every 36000sec here seconds ae mutable to any value
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.maincontainer} >
      {data.map((item) => (
        <Link key={item.id} href={`/blog/${item._id}`} className={styles.container} >
          <div className={styles.imageContainer} >
            <Image
              src={item.image}
              alt=""
              width={400}
              height={250}
              className={styles.image} />
          </div>
          <div className={styles.content} >
            <h1 className={styles.title} >{item.title}
            </h1>
            <p className={styles.desc} >{item.body}</p>
          </div>
        </Link>

      ))}
      
    </div>
  )
}

export default Blog