import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css";
import { notFound } from "next/navigation"
async function getData(id ) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,// static data fetching ,nextjs is caching our data then returning
    { cache: 'no-store' });// cache when set 'no-store' will call data each time page refresh or make request nullifying caching, and { next: { revalidate: 3600 } } will call data every 36000sec here seconds ae mutable to any value
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  console.log(params.id);
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.id}</span>
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
        {data.body}
        </p>
      </div>
    </div>
  )
}

export default BlogPost