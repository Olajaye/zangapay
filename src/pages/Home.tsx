"use client"
import { ShieldAlertIcon } from 'lucide-react';
import Image from 'next/image';
import Partners from '@/components/Partners';
import FAQ from '@/components/Faq';
import StepsSection from '@/components/Step';
import ServicesSection from '@/components/Service';
import Hero from '@/components/Hero';
import {motion} from "framer-motion"
import {slideInFromLeft, slideInFromRight  } from '@/lib/motion';
import Navbar from '@/components/Navbar';





export default function Home() {
  return (
    <>
      <section className="bg-bgGradient h-auto bg-cover bg-center text-white overflow-y-hidden">
        <Navbar/>
        <Hero>
          <HomeHeader/>
        </Hero>
      </section>
      <section className='bg-primary'>
        <Partners />
        <section className='bg-white'>
          <ServicesSection/>
          <StepsSection/>
          <FAQ />
        </section>
      </section>
    </>
  );
}


const HomeHeader = ()=>{
  return(
    <>
      <motion.div 
        variants={slideInFromRight(0.1)}
        initial="hidden"
        whileInView="visible"
       className='bg-white text-black flex p-2 rounded-full'>
        <ShieldAlertIcon/> 
        <p>Smart Finance, Smart Living</p>
      </motion.div>

      <div className="lg:max-w-[70%] space-y-6 text-center mt-6">
        <motion.h1 
           initial={{scale: 0.5, opacity:0 }}
           whileInView={{
             scale: 1,
             opacity: 1, 
             transition: {
               duration: 4,
           }}}
           className="text-3xl md:text-6xl font-bold text-center  leading-7">
          <span className='relative'>
            Simplify 
            <span className='absolute -bottom-2 -left-5 md:left-0 md:-bottom-1'>
              <Image src={'/greenLine.png'} alt='line' width={250} height={200}/>
            </span>
          </span> and manage your bill payments quickly, secure and easily.
          
        </motion.h1>
        <motion.p 
          variants={slideInFromLeft(0.1)}
          initial="hidden"
          whileInView="visible"
          className="text-base opacity-90">
          quickly and securely pay all your bills in one convenient place.
        </motion.p>
      </div>

      <div className="flex gap-9 mt-8 mb-auto flex-1">
        <motion.div
         variants={slideInFromLeft(0.1)}
         initial="hidden"
         whileInView="visible"
        ><Image src={'/home/playstore.png'} alt='playstore' width={130} height={100}/></motion.div>
        <motion.div
         variants={slideInFromRight(0.1)}
         initial="hidden"
         whileInView="visible"
        ><Image src={'/home/appstore.png'} alt='playstore' width={130} height={100}/></motion.div>
      </div>
    </>
  )
}