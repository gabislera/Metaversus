'use client'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import { TitleText, TypingText } from '@/components/CustomTexts'
import { InsightCard } from '@/components/InsightCard'
import { insights } from '@/constants'

export const Insights = () => (
  <section className="xs:p-8 relative z-10 px-6 py-12 sm:p-16">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex w-full flex-col 2xl:max-w-[1280px]"
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
)
