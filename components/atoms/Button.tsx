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
        return "text-white bg-purple-500"
      case "secondary":
        return "border-spacing-1 border-white text-white border-solid"
    }
  }, [variant])

  return (
    <button
      className={classNames(
        "rounded-full px-7 py-3 font-bold text-base",
        buttonClass,
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
