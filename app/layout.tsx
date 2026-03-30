import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'DeskCandy — Selfcare, Stationery & Cadeauboxen',
  description: 'Ontdek DeskCandy: zachte kleuren, selfcare essentials, prachtige stationery en unieke cadeauboxen. Verwennerij voor op je bureau en daarbuiten.',
}

export const viewport: Viewport = {
  themeColor: '#f5f0eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
