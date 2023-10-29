"use client"
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from "./page.module.css"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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
  const { data, err, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
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


  console.log(session)
  return (
    <div className={styles.container} >
      Dashboard
      {/* <div className='q' >
        {!isLoading && (data?.map((item) => (
          <div key={item.id} > {item.title}</div>
        )
        )
        )}
      </div> */}
    </div>
  )
}

export default Dashboard