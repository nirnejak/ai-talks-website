"use client"
import * as React from "react"

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

  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-8 font-heading text-4xl font-semibold">
          Find more talks
        </h2>
        <Tabs
          tabsOptions={cities}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="mb-10"
        />
        <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {filteredTalks.map((talk, index) => (
            <div key={index}>
              <div className="relative mb-6 flex min-h-[368px] cursor-pointer overflow-hidden rounded-xl">
                <Image
                  src={talk.imageUrl}
                  alt={talk.title}
                  placeholder="blur"
                  className="absolute inset-0 z-0 size-full"
                />
                <div
                  className="absolute z-10 min-h-[368px] w-full"
                  style={{
                    background: `radial-gradient(100% 100% at 0% 0%, #180020 0%, rgba(26, 0, 35, 20%) 100%)`,
                  }}
                />
                <div className="relative z-20 mt-auto p-6">
                  <h3
                    className="line-clamp-3 font-heading text-2xl font-semibold leading-7 text-slate-50"
                    style={{ textShadow: "0px 4px 4px #00000080" }}
                  >
                    {talk.title}
                  </h3>
                </div>
              </div>
              <p className="line-clamp-4 text-base tracking-tight">
                {talk.subtitle}
              </p>
            </div>
          ))}
        </div>
        <Link href="/app/">
          <Button variant="dark" isOutline iconRight={<ArrowRight />}>
            Listen to more
          </Button>
        </Link>
      </Container>
    </section>
  )
}

export default TalksSection
