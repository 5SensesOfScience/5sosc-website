"use client"

import { useState } from "react"
import { AlignJustify, X } from "lucide-react"

export default function Hamburger({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={className + " flex flex-col"}>
      <button onClick={toggleMenu} className="w-content mx-auto">
        {isOpen ? <X /> : <AlignJustify />}
      </button>
      <div
        className={
          "transition-transform duration-300 w-content " +
          (isOpen ? "h-content" : "h-0")
        }
      >
        {isOpen && children}
      </div>
    </div>
  )
}
