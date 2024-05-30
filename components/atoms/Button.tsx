"use client"
import * as React from "react"

import classNames from "@/utils/classNames"

interface Props {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "tertiary"
  className?: string
  iconRight?: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  variant = "primary",
  children,
  iconRight,
  className,
  onClick,
}) => {
  const buttonClass = React.useMemo(() => {
    switch (variant) {
      case "primary":
        return "border-purple-500 text-white bg-purple-500"
      case "secondary":
        return "border-white text-white bg-transparent"
      case "tertiary":
        return "border-white text-slate-900 bg-white"
    }
  }, [variant])

  return (
    <button
      className={classNames(
        "rounded-full px-9 py-2.5 font-semibold text-base flex items-center gap-2 border-2",
        buttonClass,
        className
      )}
      onClick={onClick}
    >
      <span>{children}</span>
      <span>{iconRight}</span>
    </button>
  )
}

export default Button
