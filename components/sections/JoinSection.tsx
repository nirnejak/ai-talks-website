"use client"
import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import AnimatedComponent from "../AnimatedComponent"
import Container from "../atoms/Container"
import Link from "../atoms/Link"
import ArrowRight from "../vectors/ArrowRight"

const JoinSection: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, translateY: 10 },
    visible: { opacity: 1, translateY: 0 },
  }

  return (
    <section className="py-20">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <AnimatedComponent />
        <div ref={ref} className="flex">
          <div className="max-w-[470px] md:ml-auto">
            <motion.h2
              initial={"hidden"}
              animate={controls}
              variants={variants}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="mb-6 font-heading text-4xl font-semibold text-slate-900 lg:text-5xl"
            >
              Become a member
            </motion.h2>
            <motion.p
              initial={"hidden"}
              animate={controls}
              variants={variants}
              transition={{ duration: 1, delay: 0.6, type: "spring" }}
              className="mb-10 text-lg tracking-tight text-slate-900 lg:text-xl"
            >
              Join our AI Talk platform for exclusive insights on AI{"'"}s
              impact. Unlock membership for a deeper dive into the world of
              artificial intelligence.
            </motion.p>
            <motion.div
              className="flex"
              initial={"hidden"}
              animate={controls}
              variants={variants}
              transition={{ duration: 1, delay: 0.9, type: "spring" }}
            >
              <Link
                href="/app/"
                variant="dark"
                isOutline
                iconRight={<ArrowRight />}
              >
                Join now
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default JoinSection
