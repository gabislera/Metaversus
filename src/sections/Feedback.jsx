'use client'

import { fadeIn, staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

export const Feedback = () => (
  <section className="xs:p-8 px-6 py-12 sm:p-16">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex w-full flex-col gap-6 lg:flex-row 2xl:max-w-[1280px]"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="gradient-05 relative flex flex-[0.5] flex-col justify-end rounded-[32px] border-[1px] border-[#6A6A6A] p-4 sm:p-8 lg:max-w-[370px]"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="text-[26px] font-bold leading-[36.32px] text-white sm:text-[32px] sm:leading-[40.32px]">
            Samantha
          </h4>
          <p className="mt-[8px] text-[12px] font-normal leading-[16.68px] text-white sm:text-[18px] sm:leading-[22.68px]">
            Founder Metaverus
          </p>
        </div>

        <p className="mt-[24px] text-[18px] font-normal leading-[39.6px] text-white sm:text-[24px] sm:leading-[45.6px]">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex flex-1 items-center justify-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="h-auto min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]"
        />
      </motion.div>
    </motion.div>
  </section>
)
