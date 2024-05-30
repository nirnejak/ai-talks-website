import * as React from "react"

import Link from "next/link"

import Button from "../atoms/Button"
import Container from "../atoms/Container"
import ArrowRight from "../vectors/ArrowRight"

const JoinSection: React.FC = () => {
  return (
    <section className="py-20">
      <Container className="grid grid-cols-2 items-center gap-10">
        <div className="overflow-hidden rounded-3xl">
          <svg
            width="572"
            height="508"
            viewBox="0 0 572 508"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="572" height="508" fill="#180020" />
          </svg>
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
            <Link href={"/app/"}>
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
