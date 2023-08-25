import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navBar'
import Footer from './components/footer'
import { Fragment } from 'react'


//create basic unordered list


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justin Rosecrans Software Engineer Portfolio',
  description: 'Justin Rosecrans Software Enginee Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
    <html lang="en">
      <body className="bg-slate-800">
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
    </Fragment>
  )
}
