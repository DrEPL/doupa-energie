"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TextRotateProps {
  words: string[]
  className?: string
  interval?: number
}

export function TextRotate({ words, className = "", interval = 3000 }: TextRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <div className="relative inline-block overflow-hidden whitespace-nowrap min-w-[300px] h-[1.2em] align-bottom">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute left-0 top-0 ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
