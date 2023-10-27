import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { items } from './data';
const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
}
const Category = ({ params }) => {
  console.log(params.category);//give subcategory that is click on in format { category: 'website' } 
  const data = getData(params.category);
  return (
    <div className={styles.container} >
      <h1 className={styles.catTitle} >{params.category}</h1>
      {data.map(item => (

        <div className={styles.item} key={item.id}  >
          <div className={styles.content} >
            <h1 className={styles.title} >{item.title}</h1>
            <p className={styles.desc} >{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer} >
            <Image fill={true}
              className={styles.img}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
      {/* <div className={styles.item} >
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
      </div> */}
    </div>
  )
}

export default Category