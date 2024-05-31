import * as React from "react"

import { useWindowSize } from "@uidotdev/usehooks"

import classNames from "@/utils/classNames"

interface Props {
  tabsOptions: string[]
  activeTab: number
  setActiveTab: (value: number) => void
  className?: string
}

const Tabs: React.FC<Props> = ({
  tabsOptions,
  activeTab,
  setActiveTab,
  className,
}) => {
  const size = useWindowSize()

  const wrapperRef = React.useRef<HTMLDivElement | null>(null)

  const [highlightStyles, setHighlightStyles] =
    React.useState<React.CSSProperties>({ opacity: 0 })

  React.useEffect(() => {
    if (wrapperRef?.current !== null) {
      const elements = wrapperRef.current?.getElementsByTagName("button")

      if (elements?.length !== 0) {
        const dimensions = elements[activeTab].getBoundingClientRect()
        const wrapperDimensions = wrapperRef.current.getBoundingClientRect()

        setHighlightStyles({
          opacity: 1,
          width: `${dimensions.width}px`,
          transform: `translate(${dimensions.left - wrapperDimensions.left}px)`,
        })
      }
    }
  }, [activeTab, size])

  return (
    <nav
      className={classNames("relative flex gap-1", className)}
      ref={wrapperRef}
    >
      <div
        style={highlightStyles}
        className="absolute left-0 h-full rounded-full border border-purple-200 bg-purple-200 transition-all"
      />
      {tabsOptions.map((tab, index) => (
        <button
          key={index}
          className="relative inline-block rounded-full border border-transparent px-3 py-1.5 text-sm font-semibold text-slate-900 outline-none hover:border-purple-100 focus:border-purple-100 md:px-5 md:py-2 md:text-base"
          onClick={() => {
            setActiveTab(index)
          }}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}

export default Tabs
