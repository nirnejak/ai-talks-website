"use client"
import * as React from "react"

import classNames from "@/utils/classNames"

interface Props {
  children: React.ReactNode
  variant?: "primary" | "light" | "dark"
  isOutline?: boolean
  className?: string
  iconRight?: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  variant = "primary",
  isOutline = false,
  children,
  iconRight,
  className,
  onClick,
}) => {
  const buttonClass = React.useMemo(() => {
    switch (variant) {
      case "primary":
        return `border-purple-500 ${isOutline ? "text-purple-500" : "text-white bg-purple-500"}`
      case "light":
        return `border-white ${isOutline ? "text-white" : "bg-white text-slate-900"}`
      case "dark":
        return `border-slate-900 text-slate-900 ${isOutline ? "text-slate-900" : "bg-slate-900 text-white"}`
    }
  }, [variant, isOutline])

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
