"use client"
import * as React from "react"

import Link from "next/link"

import classNames from "@/utils/classNames"

interface Props {
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
  variant?: "primary" | "light" | "dark"
  isOutline?: boolean
  className?: string
  iconRight?: React.ReactNode
  onClick?: () => void
}

const CustomLink: React.FC<Props> = ({
  href = null,
  target,
  rel,
  children,
  variant = "primary",
  isOutline = false,
  className,
  iconRight,
  onClick,
}) => {
  const linkClass = React.useMemo(() => {
    switch (variant) {
      case "primary":
        if (isOutline) {
          return "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white"
        } else {
          return "border-purple-500 text-white bg-purple-500 hover:bg-purple-600 hover:border-purple-600 focus:bg-purple-600 focus:border-purple-600"
        }
      case "light":
        if (isOutline) {
          return "border-white text-white hover:bg-white hover:text-slate-900 focus:bg-white focus:text-slate-900"
        } else {
          return "border-white bg-white text-slate-900 hover:bg-slate-200 hover:border-slate-200 focus:bg-slate-200 focus:border-slate-200"
        }
      case "dark":
        if (isOutline) {
          return "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus:bg-slate-900 focus:text-white"
        } else {
          return "border-slate-900 bg-slate-900 text-white hover:border-slate-800 hover:bg-slate-800 focus:border-slate-800 focus:bg-slate-800"
        }
    }
  }, [variant, isOutline])

  const linkClassName = classNames(
    "rounded-full px-7 md:px-9 py-1.5 md:py-2.5 font-semibold text-sm md:text-base flex items-center gap-2 border-2 transition-all active:scale-95 focus:outline-none",
    linkClass,
    className
  )

  if (typeof href === "string") {
    if (
      href.includes("http") ||
      href.includes("mailto") ||
      href.includes("tel")
    ) {
      return (
        <a
          className={linkClassName}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
        >
          <span>{children}</span>
          <span>{iconRight}</span>
        </a>
      )
    } else {
      return (
        <Link className={linkClassName} href={href} onClick={onClick}>
          <span>{children}</span>
          <span>{iconRight}</span>
        </Link>
      )
    }
  } else {
    return (
      <button className={linkClassName} onClick={onClick}>
        <span>{children}</span>
        <span>{iconRight}</span>
      </button>
    )
  }
}

export default CustomLink
