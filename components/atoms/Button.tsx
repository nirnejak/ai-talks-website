import * as React from "react"

import classNames from "@/utils/classNames"

interface Props {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

const Button: React.FC<Props> = ({
  variant = "primary",
  children,
  className,
}) => {
  const buttonClass = React.useMemo(() => {
    switch (variant) {
      case "primary":
        return "text-white"
      case "secondary":
        return ""
    }
  }, [variant])

  return (
    <button className={classNames("rounded-full", buttonClass, className)}>
      {children}
    </button>
  )
}

export default Button
