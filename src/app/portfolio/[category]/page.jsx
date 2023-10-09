import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button';
import Image from 'next/image';
const Category = ({ params }) => {
  console.log(params);//give subcategory that is click on in format { category: 'website' } 
  return (
    <div className={styles.container} >
      <h1 className={styles.catTitle} >{params.category}</h1>
      <div className={styles.item} >
        <div className={styles.content} >
          <h1 className={styles.title} >Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer} >
          <Image fill={true}
          className={styles.img}
          src="https://images.pexels.com/photos/3893023/pexels-photo-3893023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          />
        </div>
      </div>
      <div className={styles.item} >
        <div className={styles.content} >
          <h1 className={styles.title} >Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer} >
          <Image fill={true}
          className={styles.img}
          src="https://images.pexels.com/photos/3893023/pexels-photo-3893023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          />
        </div>
      </div>
      <div className={styles.item} >
        <div className={styles.content} >
          <h1 className={styles.title} >Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer} >
          <Image fill={true}
          className={styles.img}
          src="https://images.pexels.com/photos/3893023/pexels-photo-3893023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Category