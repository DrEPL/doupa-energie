"use client"

import React from "react"
import { motion } from "framer-motion"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export function StaggerContainer({ 
  children, 
  className = "", 
  delayChildren = 0.1, 
  staggerChildren = 0.1 
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
