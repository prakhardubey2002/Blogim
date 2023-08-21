"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './hamburger.module.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
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
const Hamburger = () => {
    const [display, setDisplay] = useState({
        class: "links", disp: false
    })
    function change() {
        setDisplay(
            prevDisplay => {
                if (prevDisplay.class == "links" || prevDisplay.disp == false) {
                    return {
                        class: "linksreveal", disp: true
                    }
                } else if (prevDisplay.class == "linksreveal" || prevDisplay.disp == true) {
                    return {
                        class: "links", disp: false
                    }
                }
            }
        )
    }
    return (
        <>
            <div className={styles.hamburger}>
                <div className={styles.navicon} onClick={() => change()} >
                    {
                        !(display.disp) &&
                        <DehazeIcon />
                    }
                    {
                        (display.disp) &&
                        <CloseIcon />
                    }
                </div>
            </div>
            {display.disp && <div className={styles[display.class]} >
                <h2>Blogim</h2>
                {
                    links.map(link => (
                        <Link key={link.id} href={link.url} className={styles.link} >{link.title}</Link>
                    ))
                }
            </div>}
        </>
    )
}

export default Hamburger