import * as React from "react"

import Link from "next/link"

import AnimatedComponent from "../AnimatedComponent"
import Button from "../atoms/Button"
import Container from "../atoms/Container"
import ArrowRight from "../vectors/ArrowRight"

const JoinSection: React.FC = () => {
  return (
    <section className="py-20">
      <Container className="grid grid-cols-2 items-center gap-10">
        <div className="relative overflow-hidden rounded-3xl">
          <AnimatedComponent />
        </div>
        <div>
          <div className="ml-[102px] max-w-[470px]">
            <h2 className="mb-6 font-heading text-5xl font-semibold text-slate-900">
              Become a member
            </h2>
            <p className="mb-10 text-xl tracking-tight text-slate-900">
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
