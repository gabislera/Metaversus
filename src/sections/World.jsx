'use client'
import { TitleText, TypingText } from '@/components/CustomTexts'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

export const World = () => (
  <section className="xs:p-8 relative z-10 px-6 py-12 sm:p-16">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex w-full flex-col 2xl:max-w-[1280px]"
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title="
            Track friends around you and invite them to play together in the
            same world
          "
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <img src="/map.png" alt="map" className="h-full w-full object-cover" />

        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src="people-01.png" alt="people" className="h-full w-full" />
        </div>

        <div className="absolute left-20 top-10 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src="/people-02.png" alt="people" className="h-full w-full" />
        </div>

        <div className="absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <img src="people-03.png" alt="people" className="h-full w-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
)
