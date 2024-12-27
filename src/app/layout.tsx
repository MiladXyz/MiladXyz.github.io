import React from 'react'
import { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'

import { AdminBar } from './_components/AdminBar'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './_css/app.scss'

const vazir = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-vazir',
})
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>hi</div>
}
