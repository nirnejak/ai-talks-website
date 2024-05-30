import * as React from "react"

import type { Viewport } from "next"

import { Inter } from "next/font/google"
import localFont from "next/font/local"

import classNames from "utils/classNames"

import "../styles/main.css"

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

const clashDisplay = localFont({
  variable: "--font-clash-display",
  src: [
    {
      path: "../fonts/ClashDisplay-Variable.woff2",
      style: "normal",
    },
  ],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>

      <body
        className={classNames(
          sansFont.variable,
          clashDisplay.variable,
          "overflow-x-hidden bg-zinc-900 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
