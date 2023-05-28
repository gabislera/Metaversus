'use client'
import { motion } from 'framer-motion'
import { MagnifyingGlass, List } from '@phosphor-icons/react'

const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
}

export const Navbar = () => (
  <motion.div
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="relative px-6 py-8 sm:px-16"
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className="mx-auto flex w-full justify-between gap-8 2xl:max-w-[1280px]">
      <MagnifyingGlass size={28} color="white" />
      <h2 className="text-2xl font-extrabold leading-7 text-white">
        Metaversus
      </h2>
      <List size={28} color="white" />
    </div>
  </motion.div>
)
