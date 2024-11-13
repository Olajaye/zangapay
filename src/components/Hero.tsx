"use client"
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { motion } from "framer-motion"
import DesignAnimation from '@/lib/DesignAnimation'


type Props = {
  children: ReactNode
}

const Hero = ({children}: Props) => {
  return (
    
    <div className='flex items-center justify-end'>
      <div className="container mx-auto pt-10 px-4">
        <div className="flex flex-col justify-between items-center">
           {children}
          
          <motion.div
            initial={{ y: 20 }}
            animate={{
              y: 0, transition: {
                duration: 3,
                repeat: Infinity,
                repeatType:"reverse"
            }}}
            className='block md:hidden'
          >
           <Image src={"/phoneLine.svg"} alt='bg'width={700} height={100} />
          </motion.div>
          <div className='hidden md:flex'>
           <DesignAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero