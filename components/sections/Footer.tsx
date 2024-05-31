"use client"
import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import Button from "../atoms/Button"
import Container from "../atoms/Container"
import ArrowRight from "../vectors/ArrowRight"
import FooterBackground from "../vectors/FooterBackground"

const Footer: React.FC = () => {
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
    <footer className="relative overflow-hidden bg-[#190E26] py-20 text-center text-white">
      <div className="absolute left-1/2 top-1/2 z-0 size-full -translate-x-1/2 -translate-y-1/2">
        <FooterBackground />
      </div>
      <Container className="relative z-10 flex flex-col items-center">
        <motion.h2
          ref={ref}
          initial={"hidden"}
          animate={controls}
          variants={variants}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8 max-w-[500px] font-heading text-5xl font-semibold md:text-6xl"
        >
          Want to talk at our event?
        </motion.h2>
        <motion.p
          initial={"hidden"}
          animate={controls}
          variants={variants}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="mb-10 max-w-[470px] text-lg tracking-tight md:text-xl"
        >
          Excited to have you speak at our event! Share your expertise and
          insights on AI{"'"}s role in shaping the future. Let{"'"}s make an
          impact together!
        </motion.p>
        <motion.a
          initial={"hidden"}
          animate={controls}
          variants={variants}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
          href="https://example.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="light" iconRight={<ArrowRight />}>
            Speak at our event
          </Button>
        </motion.a>
      </Container>
    </footer>
  )
}

export default Footer
