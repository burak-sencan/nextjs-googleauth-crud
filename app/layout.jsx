import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Auth',
  description: 'demo google auth project',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="main bg-slate-950">
            <div className="gradient" />
          </div>
          <div className="app">
            <Navbar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
