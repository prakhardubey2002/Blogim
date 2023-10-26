"use client"
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from "./page.module.css"
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
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, err, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
  //Stale-While-Revalidate It is highly recommended if you are fetching data on the client-side. It handles caching, revalidation, focus tracking, refetching on intervals, and more
  console.log(data);
  return (
    <div className={styles.container} >
      Dashboard
      <div className='q' >
        {!isLoading && (data?.map((item) => (
          <div key={item.id} > {item.title}</div>
        )
        )
        )}
      </div>
    </div>
  )
}

export default Dashboard