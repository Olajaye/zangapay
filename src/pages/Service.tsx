"use client"
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { beVisible, slideInFromLeft  } from '@/lib/motion' 
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const services = [
  {
    image: '/service/ladies2.png',
    text: 'We blow your mind, and we know exactly why.'
  },
  {
    image: '/service/ladies1.png',
    text: 'Experience the ultimate convenience of a premium app designed to handle all your financial and lifestyle needs in one place.'
  },
  {
    image: '/service/service1.png',
    text: 'Instantly top up your airtime and mobile data anytime, anywhere. Stay connected effortlessly with ZangaPay.'
  },
  {
    image: '/service/service2.jpg',
    text: 'Why clutter your phone with multiple apps? ZangaPay brings everything you need into one seamless experience.'
  },
  {
    image: '/service/plane-zanga.png',
    text: 'Book flights quickly and securely with just a few taps. Your next destination is closer than ever with ZangaPay.'
  },
  {
    image: '/service/plan.png',
    text: 'Book the cheapest flights effortlessly with ZangaPay—making travel more affordable than ever!'
  },
]

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


        <div className='grid grid-cols-1 md:grid-cols-2  gap-4  mt-7'>

          {services.map((service, index)=>(
            <div className='container mx-auto px-4 justify-between py-10' key={index}>
              <motion.div 
                variants={beVisible(0.4)}
                initial="hidden"
                whileInView="visible" 
                className='flex justify-center items-center'>
                <Image src={service.image} alt="CEO" height={100} width={400} className='rounded-2xl'/>
              </motion.div>
              <div className='flex-1 flex justify-center items-center flex-col text-start mt-5'>
                <div className='flex justify-center items-center md:px-20'>
                  <motion.h6 
                    variants={slideInFromLeft(0.2)}
                    initial="hidden"
                    whileInView="visible" 
                    className='text-xl text-center font-bold'>
                    {service.text}
                  </motion.h6>
                </div>
              </div>
            </div>
          ))}

          
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