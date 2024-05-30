import * as React from "react"

import Button from "../atoms/Button"
import Container from "../atoms/Container"
import TalkCard from "../atoms/TalkCard"

const talks = [
  {
    title: "AI Revolution: Shaping the Future Together",
    subtitle:
      "Join us for an inspiring discussion on the AI Revolution and its collaborative impact on shaping a shared future.",
    imageUrl: "/card-1.png",
  },
  {
    title: "AI Revolution: Shaping Tomorrow's World",
    subtitle:
      "Join us for an inspiring discussion on the AI Revolution and its collaborative impact on shaping a shared future.",
    imageUrl: "/card-1.png",
  },
  {
    title: "AI Transformation: Building a Future of Innovation",
    subtitle:
      "Discover how AI is driving innovation and shaping the future. Join us in exploring the transformative power of AI.",
    imageUrl: "/card-1.png",
  },
]

const TalksSection: React.FC = () => {
  return (
    <section>
      <Container>
        <h2 className="font-heading">Find more talks</h2>
        <div className="flex gap-3">
          <div>London</div>
          <div>Singapore</div>
          <div>Los Angeles</div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {talks.map((talk, index) => (
            <TalkCard key={index} {...talk} />
          ))}
        </div>
        <Button variant="secondary">Listen to more</Button>
      </Container>
    </section>
  )
}

export default TalksSection
