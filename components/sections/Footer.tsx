import * as React from "react"

import Button from "../atoms/Button"
import Container from "../atoms/Container"
import ArrowRight from "../vectors/ArrowRight"
import FooterBackground from "../vectors/FooterBackground"

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#190E26] py-20 text-center text-white">
      <div className="absolute inset-0 z-0">
        <FooterBackground />
      </div>
      <Container className="relative z-10 flex flex-col items-center">
        <h2 className="mb-8 max-w-[500px] font-heading text-5xl font-semibold md:text-6xl">
          Want to talk at our event?
        </h2>
        <p className="mb-10 max-w-[470px] text-lg tracking-tight md:text-xl">
          Excited to have you speak at our event! Share your expertise and
          insights on AI{"'"}s role in shaping the future. Let{"'"}s make an
          impact together!
        </p>
        <a href="https://example.com/" target="_blank" rel="noreferrer">
          <Button variant="light" iconRight={<ArrowRight />}>
            Speak at our event
          </Button>
        </a>
      </Container>
    </footer>
  )
}

export default Footer
