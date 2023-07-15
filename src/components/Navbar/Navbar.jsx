"use client"//will make this component render on client side for interactivity
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    },
]
const Navbar = () => {
    return (
        <div className={styles.container} >
            <Link href="/" className={styles.logo} >Blogim</Link>
            <div className={styles.links} >
                {
                    links.map(link => (
                        <Link key={link.id} href={link.url} className={styles.link} >{link.title}</Link>
                    ))
                }
                <button className='button' onClick={() => { console.log("logged out") }}>
                    Logout
                    <div class="hoverEffect">
                        <div>
                        </div>
                    </div> 
                    </button>
            </div>
        </div>
    )
}

export default Navbar