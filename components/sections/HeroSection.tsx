"use client"
import * as React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

import Container from "../atoms/Container"
import Link from "../atoms/Link"
import ArrowRight from "../vectors/ArrowRight"
import HeroImage from "assets/hero.png"

const HeroSection: React.FC = () => {
  const scrollToFooter = (): void => {
    const footer = document.querySelector("footer")
    footer?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="relative py-[88px] text-white">
      <Image
        src={HeroImage}
        alt="Hero Image"
        placeholder="blur"
        className="absolute inset-0 z-0 size-full"
      />
      <Container className="relative z-10">
        <div className="max-w-[470px]">
          <motion.h1
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8 font-heading text-5xl font-semibold md:text-6xl"
          >
            Top insights from AI talks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="mb-10 text-lg tracking-tight md:text-xl"
          >
            Get informed about the latest talks in artificial intelligence, all
            from the comfort of your front room
          </motion.p>
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="flex gap-3 sm:flex-row"
          >
            <Link href="/app/" variant="primary" iconRight={<ArrowRight />}>
              Get the app
            </Link>
            <Link
              variant="light"
              isOutline
              iconRight={<ArrowRight />}
              onClick={() => {
                scrollToFooter()
              }}
            >
              Join a talk
            </Link>
          </motion.div>
        </div>
      </Container>
    </header>
  )
}

export default HeroSection
