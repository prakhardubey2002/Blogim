"use client"
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from "./page.module.css"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store"
  //     })
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch");
  //       setErr(true);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, [])

  //For normal RESTful APIs with JSON data, first you need to create a fetcher function, which is just a wrapper of the native fetch:
  const session = useSession();
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data,mutate, err, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  console.log(data)
  //Stale-While-Revalidate It is highly recommended if you are fetching data on the client-side. It handles caching, revalidation, focus tracking, refetching on intervals, and more
  // console.log(data);
  const router = useRouter();
  if (session.status == "loading") {
    return <p>Loading...</p>;
  }
  if (session.status == "unauthenticated") {
    router?.push("/dashboard/login");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify({
          title,
          desc,
          img,
          content,
          username:session?.data?.user?.name,
        })
      })
      mutate();// mutate is given swr so we dont have to refresh page when data is updated using form here
    } catch (err) {
     console.log(err);

    }
  }
 

  console.log(session)
  const handleDelete=async(id)=>{
    try{
      await fetch(`api/posts/${id}`,{
        method:"DELETE",
      });
      mutate();// mutate is given swr so we dont have to refresh page when data is updated using form here
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className={styles.container} >
      <div className={styles.posts} >
        { isLoading ? "Loading " : data?.map(post => (
          <div className={styles.post} key={post._id} >
            <div className={styles.imgConatiner} >
              <Image src={post.img} width={200} height={200} alt="" />
            </div>
            <h2 className={styles.postTitle} >{post.title }</h2>
            <span onClick={()=>handleDelete(post._id)} className={styles.delete} >X</span>
          </div>
        ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit} >
        <h1>Add New Post</h1>
        <input type="text" placeholder='Title' className={styles.input} />
        <input type="text" placeholder='Desc' className={styles.input} />
        <input type="text" placeholder='Image' className={styles.input} />
        <textarea
          placeholder='Content'
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.button} >Send</button>
      </form>
    </div>
  )
}

export default Dashboard