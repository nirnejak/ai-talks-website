import * as React from "react"

import Button from "../atoms/Button"
import Container from "../atoms/Container"

const HeroSection: React.FC = () => {
  return (
    <header className="py-[88px]">
      <Container>
        <div className="max-w-[470px]">
          <h1 className="mb-8 font-heading text-6xl font-bold">
            Top insights from AI talks
          </h1>
          <p className="mb-10">
            Get informed about the latest talks in artificial intelligence, all
            from the comfort of your front room
          </p>
          <div className="flex gap-3">
            <Button>Get the app</Button>
            <Button variant="secondary">Join a talk</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default HeroSection
