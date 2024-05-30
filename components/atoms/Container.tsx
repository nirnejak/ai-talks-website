import React from "react"

import classNames from "utils/classNames"

interface Props {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<Props> = ({ children, className, ...restProps }) => {
  return (
    <div
      className={classNames("mx-auto px-4 md:px-0 max-w-[1184px]", className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Container
