
"use client"
import { Provider } from 'react-redux'
import './globals.css'
import { Inter } from 'next/font/google'
import { store } from './store'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eporno',
  description: 'Explore idea for video data',
}

export default function RootLayout({ children }) {




  return (
    <html lang="en">
      <head>
        <link rel='icon' type="image/png" href='/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Eporno</title>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>

      </body>
    </html>
  )
}
