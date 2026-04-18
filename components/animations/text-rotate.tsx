"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TextRotateProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export function TextRotate({ 
  words, 
  className = "", 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetweenWords = 2000 
}: TextRotateProps) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping()
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(ticker)
  }, [text, isDeleting])

  const handleTyping = () => {
    const i = loopNum % words.length
    const fullText = words[i]

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1))
      if (text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    } else {
      setText(fullText.substring(0, text.length + 1))
      if (text === fullText) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords)
      }
    }
  }

  return (
    <span className={`inline-block ${className}`}>
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-[2px] w-[3px] h-[1em] bg-current align-middle"
      />
    </span>
  )
}
