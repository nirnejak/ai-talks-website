import * as React from "react"

import Button from "../atoms/Button"
import Container from "../atoms/Container"

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <h2>Want to talk at our event?</h2>
        <p>
          Excited to have you speak at our event! Share your expertise and
          insights on AI{"'"}s role in shaping the future. Let{"'"}s make an
          impact together!
        </p>
        <Button>Speak at our event</Button>
      </Container>
    </footer>
  )
}

export default Footer
