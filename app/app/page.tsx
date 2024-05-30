import * as React from "react"

import { type Metadata } from "next"

import Container from "@/components/atoms/Container"
import generateMetadata from "utils/seo"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "App Page",
  description: "An empty /app page",
})

const Home: React.FC = () => {
  return (
    <Container className="grid h-screen place-items-center">
      <h1 className="font-heading text-6xl font-semibold">App page</h1>
    </Container>
  )
}

export default Home
