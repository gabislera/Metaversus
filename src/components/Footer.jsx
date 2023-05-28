'use client'
import { socials } from '@/constants'
import { footerVariants } from '@/utils/motion'
import { motion } from 'framer-motion'

export const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="relative px-6 py-8 sm:px-16"
  >
    <div className="footer-gradient" />
    <div className="mx-auto flex w-full flex-col gap-8 2xl:max-w-[1280px]">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] font-bold text-white md:text-[64px]">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex h-fit items-center gap-[12px] rounded-[32px] bg-[#25618B] px-6 py-4"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="h-[24px] w-[24px] object-contain"
          />
          <span className="text-[16px] font-normal text-white">
            Enter Metaverse
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-[24px] font-extrabold text-white">METAVERUS</h4>
          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="h-[24px] w-[24px] cursor-pointer object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
)
