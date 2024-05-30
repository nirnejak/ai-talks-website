// @ts-nocheck
import * as React from "react"

import classNames from "@/utils/classNames"

interface TAB_BOUNDING_BOX_TYPE {
  left: number
  width: number
}

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
  const [tabBoundingBox, setTabBoundingBox] =
    React.useState<TAB_BOUNDING_BOX_TYPE | null>(null)
  const [wrapperBoundingBox, setWrapperBoundingBox] =
    React.useState<TAB_BOUNDING_BOX_TYPE | null>(null)
  const [highlightedTab, setHighlightedTab] = React.useState<string>(
    tabsOptions[activeTab]
  )

  const highlightRef = React.useRef<HTMLDivElement | null>(null)
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([])

  React.useEffect(() => {
    if (wrapperRef.current != null && tabRefs.current[activeTab] != null) {
      setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect())
      setTabBoundingBox(tabRefs.current[activeTab]!.getBoundingClientRect())
    }
  }, [activeTab])

  const repositionHighlight = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FocusEvent<HTMLButtonElement>,
    tab: string,
    index: number
  ): void => {
    setTabBoundingBox((e.target as HTMLButtonElement).getBoundingClientRect())
    if (wrapperRef.current != null)
      setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect())
    setHighlightedTab(tab)
    setActiveTab(index)
  }

  const highlightStyles: React.CSSProperties = {}

  if (tabBoundingBox != null && wrapperBoundingBox != null) {
    highlightStyles.transitionDuration = "150ms"
    highlightStyles.opacity = `${highlightedTab != null ? 1 : 0}`
    highlightStyles.width = `${tabBoundingBox.width}px`
    highlightStyles.transform = `translate(${tabBoundingBox.left - wrapperBoundingBox.left}px)`
  }

  return (
    <nav
      className={classNames("relative flex gap-1", className)}
      ref={wrapperRef}
    >
      <div
        className="absolute left-0 h-full rounded-full bg-purple-200"
        ref={highlightRef}
        style={{
          transition: "0.15s ease",
          transitionProperty: "width, transform, opacity",
          ...highlightStyles,
        }}
      />
      {tabsOptions.map((tab, index) => (
        <button
          key={index}
          className={
            "relative inline-block rounded-full px-5 py-2 font-semibold text-slate-900 outline-none"
          }
          onClick={(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            repositionHighlight(ev, tab, index)
          }}
          ref={(el) => (tabRefs.current[index] = el)}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}

export default Tabs
