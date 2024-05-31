import * as React from "react"

import DotsBackground from "./vectors/DotsBackground"
import GoogleAnalytics from "./vectors/GoogleAnalytics"
import GridBackground from "./vectors/GridBackground"
import HubSpot from "./vectors/HubSpot"
import Insights from "./vectors/Insights"
import PlusIcon from "./vectors/PlusIcon"
import Rings from "./vectors/Rings"
import Vimeo from "./vectors/Vimeo"

const AnimatedComponent: React.FC = () => {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl">
      <div className="relative z-10 h-[430px] w-full bg-[#180020] lg:h-[508px]" />
      <div className="absolute left-1/2 top-1/2 z-20 size-full -translate-x-1/2 -translate-y-1/2">
        <GridBackground />
      </div>
      <div className="absolute left-1/2 top-1/2 z-20 size-4/5 -translate-x-1/2 -translate-y-1/2">
        <DotsBackground />
      </div>
      <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <Rings />
      </div>
      <div className="absolute left-1/2 top-1/2 z-30 w-[15%] -translate-x-1/2 -translate-y-1/2">
        <PlusIcon />
      </div>
      <div className="absolute left-1/2 top-1/2 z-40 animate-orbit">
        <div className="absolute -left-36 top-20 animate-rotate">
          <HubSpot />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-40 animate-orbit">
        <div className="absolute -top-40 left-20 animate-rotate">
          <GoogleAnalytics />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-40 animate-orbit">
        <div className="absolute -left-40 -top-40 animate-rotate">
          <Vimeo />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-40 animate-orbit">
        <div className="absolute left-20 top-20 animate-rotate">
          <Insights />
        </div>
      </div>
    </div>
  )
}

export default AnimatedComponent
