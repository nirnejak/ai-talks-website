"use client"
import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import Button from "../atoms/Button"
import Container from "../atoms/Container"
import Tabs from "../atoms/Tabs"
import ArrowRight from "../vectors/ArrowRight"
import talks from "utils/talks"

const cities = ["London", "Singapore", "Los Angeles"]

const TalksSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)

  const filteredTalks = React.useMemo(() => {
    const city = cities[activeTab]
    return talks.filter((talk) => talk.city === city)
  }, [activeTab])

  const controls = useAnimation()
  const [refText, inViewText] = useInView()
  const [refCards, inViewCards] = useInView()

  React.useEffect(() => {
    if (inViewText) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inViewText])

  React.useEffect(() => {
    if (inViewCards) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inViewCards])

  const variants = {
    hidden: { opacity: 0, translateY: 10 },
    visible: { opacity: 1, translateY: 0 },
  }

  return (
    <section className="py-20">
      <Container>
        <motion.h2
          ref={refText}
          initial={"hidden"}
          animate={controls}
          variants={variants}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="mb-8 font-heading text-4xl font-semibold"
        >
          Find more talks
        </motion.h2>
        <motion.div
          initial={"hidden"}
          animate={controls}
          variants={variants}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
        >
          <Tabs
            tabsOptions={cities}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="mb-10"
          />
        </motion.div>
        <motion.div
          ref={refCards}
          initial={"hidden"}
          animate={controls}
          variants={variants}
          transition={{ duration: 1, delay: 1, type: "spring" }}
          className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {filteredTalks.map((talk, index) => (
            <div key={index}>
              <div className="relative mb-6 flex aspect-square w-full cursor-pointer overflow-hidden rounded-xl">
                <Image
                  src={talk.imageUrl}
                  alt={talk.title}
                  placeholder="blur"
                  className="absolute inset-0 z-0 size-full"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="absolute z-10 size-full"
                  style={{
                    background: `radial-gradient(100% 100% at 0% 0%, #180020 0%, rgba(26, 0, 35, 20%) 100%)`,
                  }}
                />
                <div className="relative z-20 mt-auto p-6">
                  <h3
                    className="line-clamp-3 font-heading text-xl font-semibold leading-7 text-slate-50 lg:text-2xl"
                    style={{ textShadow: "0px 4px 4px #00000080" }}
                  >
                    {talk.title}
                  </h3>
                </div>
              </div>
              <p className="line-clamp-4 text-sm tracking-tight md:text-base">
                {talk.subtitle}
              </p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={"hidden"}
          animate={controls}
          variants={variants}
          transition={{ duration: 1, delay: 1, type: "spring" }}
        >
          <Link href="/app/">
            <Button variant="dark" isOutline iconRight={<ArrowRight />}>
              Listen to more
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}

export default TalksSection
