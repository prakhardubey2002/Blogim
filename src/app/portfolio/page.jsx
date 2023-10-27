import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"
const Portfolio = () => {
  return (
    <div className={styles.container} >
      <h1 className={styles.selectTitle}> Choose a gallery
      </h1>
      <div className={styles.items} >
        <Link href="/portfolio/illustrations" className={styles.item}>
          {/* Foldername/categoryname ,category name can be obtained in slug layout using params property */}
          <span className={styles.title} >Illustration</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title} >Website</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title} >Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio