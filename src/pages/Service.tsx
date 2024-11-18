"use client"
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { beVisible, slideInFromLeft,slideInFromRight  } from '@/lib/motion' 
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const Service = () => {
  return (
    <>
      <section className="bg-bgGradient h-auto bg-cover bg-center text-white overflow-y-hidden">
        <Navbar/>
        <Hero>
          <ServiceHeader/>
        </Hero>
      </section>
      <section className='bg-white pt-16'>

        <div className='container mx-auto px-4 flex justify-center items-center flex-col'>
          <motion.h1
             variants={slideInFromLeft(0.4)}
             initial="hidden"
             whileInView="visible" 
            className='font-bold text-4xl text-black'>Our Services 
          </motion.h1>
        </div>


        <div className='md:flex justify-between items-center'>
          <div className='container mx-auto px-4  justify-between py-10'>
            <motion.div 
              variants={beVisible(0.4)}
              initial="hidden"
              whileInView="visible" 
              className='flex justify-center items-center'>
              <Image src={"/service/ladies2.png"} alt="CEO" height={100} width={400} className='rounded-2xl'/>
            </motion.div>
            <div className='flex-1 flex justify-center items-center flex-col text-start mt-5'>
              <div className='flex justify-center items-center px-20'>
                <motion.h6 
                  variants={slideInFromLeft(0.2)}
                  initial="hidden"
                  whileInView="visible" 
                  className='text-xl text-center'>
                  We blow your mind, and we know exactly why.
                </motion.h6>
              </div>
            </div>
          </div>

          <div className='container mx-auto px-4  justify-between py-10'>
            <motion.div 
              variants={beVisible(0.8)}
              initial="hidden"
              whileInView="visible" 
              className='flex justify-center items-center'>
              <Image src={"/service/ladies1.png"} alt="CEO" height={100} width={400} className='rounded-2xl'/>
            </motion.div>
            <div className='flex-1 flex justify-center items-center flex-col text-start mt-5'>
              <div className='flex justify-center items-center px-20'>
                <motion.h6 
                  variants={slideInFromRight(0.4)}
                  initial="hidden"
                  whileInView="visible" 
                  className='text-xl text-center'>
                  Experience the ultimate convenience of a premium app designed to handle all your financial and lifestyle needs in one place.
                </motion.h6>
              </div>
            </div>
          </div>
        </div>

        <div className='md:flex justify-between items-center'>
          <div className='container mx-auto px-4  justify-between py-10'>
            <motion.div 
              variants={beVisible(0.4)}
              initial="hidden"
              whileInView="visible" 
              className='flex justify-center items-center'>
              <Image src={"/service/service1.png"} alt="CEO" height={100} width={400} className='rounded-2xl'/>
            </motion.div>
            <div className='flex-1 flex justify-center items-center flex-col text-start mt-5'>
              <div className='flex justify-center items-center px-20'>
                <motion.h6 
                  variants={slideInFromRight(0.8)}
                  initial="hidden"
                  whileInView="visible" 
                  className='text-xl text-center'>
                  Instantly top up your airtime and mobile data anytime, anywhere. Stay connected effortlessly with ZangaPay.
                </motion.h6>
              </div>
            </div>
          </div>

          <div className='container mx-auto px-4  justify-between py-10'>
            <motion.div 
              variants={beVisible(0.8)}
              initial="hidden"
              whileInView="visible" 
              className='flex justify-center items-center'>
              <Image src={"/service/service2.jpg"} alt="CEO" height={100} width={400} className='rounded-2xl'/>
            </motion.div>
            <div className='flex-1 flex justify-center items-center flex-col text-start mt-5'>
              <div className='flex justify-center items-center px-20'>
                <motion.h6 
                  variants={slideInFromLeft(0.4)}
                  initial="hidden"
                  whileInView="visible" 
                  className='text-xl text-center'>
                  Why clutter your phone with multiple apps? ZangaPay brings everything you need into one seamless experience.
                </motion.h6>
              </div>
            </div>
          </div>
        </div>


        <div className='md:flex justify-between items-center'>
          <div className='container mx-auto px-4  justify-between py-10'>
            <motion.div 
              variants={beVisible(0.4)}
              initial="hidden"
              whileInView="visible" 
              className='flex justify-center items-center'>
              <Image src={"/service/planezanga.png"} alt="CEO" height={100} width={400} className='rounded-2xl'/>
            </motion.div>
            <div className='flex-1 flex justify-center items-center flex-col text-start mt-5'>
              <div className='flex justify-center items-center px-20'>
                <motion.h6 
                  variants={slideInFromLeft(0.8)}
                  initial="hidden"
                  whileInView="visible" 
                  className='text-xl text-center'>
                  Book flights quickly and securely with just a few taps. Your next destination is closer than ever with ZangaPay.
                </motion.h6>
              </div>
            </div>
          </div>

          <div className='container mx-auto px-4  justify-between py-10'>
            <motion.div 
              variants={beVisible(0.8)}
              initial="hidden"
              whileInView="visible" 
              className='flex justify-center items-center'>
              <Image src={"/service/plan.png"} alt="CEO" height={100} width={400} className='rounded-2xl'/>
            </motion.div>
            <div className='flex-1 flex justify-center items-center flex-col text-start mt-5'>
              <div className='flex justify-center items-center px-20'>
                <motion.h6 
                  variants={slideInFromRight(0.4)}
                  initial="hidden"
                  whileInView="visible" 
                  className='text-xl text-center'>
                  Book the cheapest flights effortlessly with ZangaPay—making travel more affordable than ever!
                </motion.h6>
              </div>
            </div>
          </div>
        </div>
        

      </section>
    </>
  )
}

export default Service

const ServiceHeader = ()=>{
  return (
    <>
       <div className="lg:max-w-[70%] space-y-6 text-center mt-6  pt-10">
        <motion.h1 
          variants={beVisible(0.4)}
          initial="hidden"
          whileInView="visible"
          className="text-3xl md:text-6xl font-bold text-center  leading-7">
          <span 
            className='relative'>
            Services
            <span className='absolute -bottom-2 -left-5 md:left-0 md:-bottom-1'>
              <Image src={'/greenLine.png'} alt='line' width={250} height={200}/>
            </span>
          </span> we offer at Zangapay Technology.
        </motion.h1>
        <motion.p
          variants={beVisible(0.8)}
          initial="hidden"
          whileInView="visible"
          className="text-base opacity-90 py-10">
          At Zangapay, we offer a range of convenient financial services designed to meet your daily needs. Our services are tailored to provide seamless and reliable solutions, ensuring that you stay connected and in control of your utilities. Below is a summary of the core services we provide:
        </motion.p>
      </div>
    </>
  )
}