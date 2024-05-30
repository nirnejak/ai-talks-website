import * as React from "react"

import Container from "../atoms/Container"

const HeroSection: React.FC = () => {
  return (
    <header>
      <Container>
        <h1 className="py-[88px] font-heading text-6xl font-bold">
          Top insights <br />
          from AI talks
        </h1>
      </Container>
    </header>
  )
}

export default HeroSection
