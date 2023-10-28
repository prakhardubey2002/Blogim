import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter, Lato } from 'next/font/google'//by default call from google cdn 
import Footer from '@/components/Footer/Footer'
import Hamburger from '@/components/Hamburger/Hamburger'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({
  subsets: ['latin'],
  weight: ["100", "300", "700", "900"]
})

export const metadata = {
  title: 'Blogim',
  description: 'Blogging Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={lato.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              <Hamburger />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
