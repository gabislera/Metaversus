'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

export const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'
    } flex h-[700px] min-w-[170px] cursor-pointer items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute h-full w-full rounded-[24px] object-cover"
    />
    {active !== id ? (
      <h3 className="absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.3)] p-8">
        <h2 className="mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
)
