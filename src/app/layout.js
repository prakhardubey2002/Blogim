import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter,Lato } from 'next/font/google'//by default call from google cdn 
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({
   subsets: ['latin'] ,
   weight: ["100", "300",  "700", "900"]
  })

export const metadata = {
  title: 'Blog App',
  description: 'Blogging Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={lato.className}>
       <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
