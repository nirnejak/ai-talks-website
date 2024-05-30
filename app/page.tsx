import * as React from "react"

import { type Metadata } from "next"

import Footer from "@/components/sections/Footer"
import HeroSection from "@/components/sections/HeroSection"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "AI Talks",
  description: "Top insights from AI talks ",
})

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Footer />
    </>
  )
}

export default Home
