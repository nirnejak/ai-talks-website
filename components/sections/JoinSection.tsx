import * as React from "react"

import Button from "../atoms/Button"
import Container from "../atoms/Container"

const JoinSection: React.FC = () => {
  return (
    <section>
      <Container className="grid grid-cols-2">
        <div></div>
        <div>
          <h2 className="font-heading">Become a member</h2>
          <p>
            Join our AI Talk platform for exclusive insights on AI's impact.
            Unlock membership for a deeper dive into the world of artificial
            intelligence.
          </p>
          <Button variant="secondary">Join now</Button>
        </div>
      </Container>
    </section>
  )
}

export default JoinSection
