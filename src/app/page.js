"use client"
import Image from 'next/image'
import styles from './page.module.css'
import lottie from "lottie-web";
import React from "react";
import home from 'public/Lotti/Home'
export default function Home() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: home,
      loop: true,
      autoplay: true,
    });
  }, []);
  return (
    <div className="Home">
      Home
      <div id="react-logo"></div>
    <Image src="https://images.unsplash.com/photo-1655635643617-72e0b62b9278?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" width={200} height={200} />
    {/* To use image from another domain one need to add image provide domain to next.config.js */}
    </div>
  )
}
