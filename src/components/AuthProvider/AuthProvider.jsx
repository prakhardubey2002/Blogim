"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"
//SessionProvider used context underhood and we cant use context in server components and if we wrap session provide in layout it will require use client at top also we will loose ability to add metadata
//we are making this component clients side rendered to utlise context ability for SessionProvider an then wrap this component around main layout.js
const AuthProvider = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider