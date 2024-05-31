import * as React from "react"

import Link from "next/link"

import AnimatedComponent from "../AnimatedComponent"
import Button from "../atoms/Button"
import Container from "../atoms/Container"
import ArrowRight from "../vectors/ArrowRight"

const JoinSection: React.FC = () => {
  return (
    <section className="py-20">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <AnimatedComponent />
        <div className="order-1 flex md:order-2">
          <div className="max-w-[470px] md:ml-auto">
            <h2 className="mb-6 font-heading text-4xl font-semibold text-slate-900 lg:text-5xl">
              Become a member
            </h2>
            <p className="mb-10 text-lg tracking-tight text-slate-900 lg:text-xl">
              Join our AI Talk platform for exclusive insights on AI{"'"}s
              impact. Unlock membership for a deeper dive into the world of
              artificial intelligence.
            </p>
            <Link href="/app/">
              <Button variant="dark" isOutline iconRight={<ArrowRight />}>
                Join now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default JoinSection
