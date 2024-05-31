import * as React from "react"

import useWindowSize from "./useWindowSize"

interface IHook {
  wrapperRef: React.LegacyRef<HTMLElement>
  highlightStyles: React.CSSProperties
}

const useBackground = (activeTab: number): IHook => {
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

  return { wrapperRef, highlightStyles }
}

export default useBackground
