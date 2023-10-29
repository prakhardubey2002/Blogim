"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';
const Login = () => {
  const router = useRouter();
  const session = useSession();
  if (session.status == "loading") {
    return <p>Loading...</p>;
  }
  if (session.status == "authenticated") {
    router?.push("/dashboard");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });

  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} >
        <input
          type="email"
          placeholder='email'
          className={styles.input}
          required />
        <input
          type="password"
          placeholder='password'
          className={styles.input}
          required />
        <button className={styles.button} >
          <LoginIcon/>
          Login
        </button>

      </form>
      <button className={styles.googleb} onClick={() => signIn("google")} >
         < GoogleIcon/>
          Login with Google
          </button>
    </div>
  )
}

export default Login