"use client"
import * as React from "react"

import Image from "next/image"
import Link from "next/link"

import Button from "../atoms/Button"
import Container from "../atoms/Container"
import ArrowRight from "../vectors/ArrowRight"
import HeroImage from "assets/hero.png"

const HeroSection: React.FC = () => {
  const scrollToFooter = (): void => {
    const footer = document.querySelector("footer")
    footer?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="relative bg-cover bg-no-repeat py-[88px] text-white">
      <Image
        src={HeroImage}
        alt="Hero Image"
        placeholder="blur"
        className="absolute inset-0 z-0 size-full"
      />
      <Container className="relative z-10">
        <div className="max-w-[470px]">
          <h1 className="mb-8 font-heading text-5xl font-semibold md:text-6xl">
            Top insights from AI talks
          </h1>
          <p className="mb-10 text-lg tracking-tight md:text-xl">
            Get informed about the latest talks in artificial intelligence, all
            from the comfort of your front room
          </p>
          <div className="flex gap-3 sm:flex-row">
            <Link href="/app/">
              <Button variant="primary" iconRight={<ArrowRight />}>
                Get the app
              </Button>
            </Link>
            <div>
              <Button
                variant="light"
                isOutline
                iconRight={<ArrowRight />}
                onClick={() => {
                  scrollToFooter()
                }}
              >
                Join a talk
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default HeroSection
