"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './page.module.css'

const Register = () => {
  const [err, setErr] = useState(false);
  const [errStat, setErrStat] = useState(false);
  const handleSubmit = async  (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res= await fetch("/api/auth/register")

    }
    catch (err) {
      setErr(true);
      setErrStat(err)
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} >
        <input type="text" placeholder='username' className={styles.input} required />
        <input type="email" placeholder='email' className={styles.input} required />
        <input type="password" placeholder='password' className={styles.input} required />
        <button className={styles.button} >Register</button>
        {err && `Something is Wrong ${errStat}`}
        <Link href='/dasboard/login' >Login with existing account</Link>
      </form>
    </div>
  )
}

export default Register