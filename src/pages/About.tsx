"use client"
import Hero from '@/components/Hero'
import { beVisible, slideInFromLeft, slideInFromRight } from '@/lib/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <>
      <Hero>
        <AboutHeader/>
      </Hero>
      <section className='bg-white pt-16'>

        <div className='container mx-auto px-4 flex justify-center items-center flex-col'>
          <motion.h1
             variants={slideInFromLeft(0.4)}
             initial="hidden"
             whileInView="visible" 
            className='font-bold text-4xl text-black'>About Us 
          </motion.h1>

          <motion.h5 
           variants={slideInFromRight(0.4)}
           initial="hidden"
           whileInView="visible"
            className='text-lg font-medium text-center lg:max-w-[70%] mt-7'>We are pleased to welcome you to Zangapay, a distinguished subsidiary of Christopher Gomen Ltd (RC7309058). Although we are not a bank, we collaborate closely with banks registered with the Central Bank of Nigeria (CBN) to deliver our services. As a leading bill payment company, our mission is to offer you a seamless, reliable, and secure platform for all your payment needs. Thank you for choosing Zangapay. We are dedicated to serving you with the utmost professionalism and efficiency.
          </motion.h5>
        </div>


        <div className='container mx-auto px-4 xl:flex justify-between py-20'>
          <div className='xl:w-[40%] flex justify-center items-center'>
            <Image src={"/about/ceo.svg"} alt="CEO" height={800} width={700} className='h-auto'/>
          </div>
          <div className='flex-1 flex justify-center items-center flex-col text-start mt-7 xl:mt-0'>
            <div className='md:px-7'>
              <h1 className='text-xl font-bold'>Chris Gomen</h1>
              <h2 className='my-4 text-xl font-bold'>CEO</h2>
              <h6 className='text-sm'>At ZangaPay, we are privileged to be led by Chris Gomen, a highly respected cybersecurity engineer with a wealth of knowledge and years of hands-on experience in the tech industry. Our CEO&apos;s passion for technology began early, leading him to pursue formal education at renowned institutions in Germany and England, where he specialized in advanced technology and cybersecurity. These qualifications give him a unique global perspective on emerging trends and threats in the digital world. Throughout his career, our CEO has worked with industry-leading companies, helping them safeguard their digital assets and operations. His expertise spans across various facets of cybersecurity, from network security to data encryption, ensuring that ZangaPay operates with cutting-edge security measures at its core. Our CEO&apos;s leadership is defined by a commitment to innovation, transparency, and user safety. Under his direction, ZangaPay has built a robust infrastructure designed to protect users&apos; financial information and digital identities, making us one of the most secure fintech platforms in the market. With his vision and dedication, our CEO continues to lead ZangaPay towards becoming a trusted name in fintech, where users can confidently make transactions knowing their data is in safe hands. We are proud to have a leader who not only understands the importance of security in fintech but also actively works to stay ahead of the curve in this ever-evolving digital landscape. At ZangaPay, your security is our priority, and with our CEO at the helm, we are positioned to deliver on that promise..
              </h6>
            </div>
            
          </div>
        </div>


        <div className='md:flex py-20'>
          <div className='flex-1 bg-secondary flex justify-center items-center flex-col p-8'>
            <Image src={"/about/vision.svg"} alt='vision-png' width={300} height={300}/>
            <h1 className='text-white font-bold text-4xl my-10'>Our Vision</h1>
            <h6 className='text-white font-medium text-lg max-w-[80%] text-center'>At ZangaPay, our vision is to become the most trusted and affordable bill payment platform in Nigeria. We are committed to providing seamless, secure, and cost-effective solutions that empower our users to take control of their finances with ease, making everyday transactions simpler and more accessible for all.</h6>
          </div>
          <div className='flex-1 bg-[#0B0A0A8A] flex justify-center items-center flex-col p-8'>
            <Image src={"/about/value.svg"} alt='values-png' width={300} height={300}/>
            <h1 className='text-white font-bold text-4xl my-10'>Our Values</h1>
            <h6 className='text-white font-medium text-lg max-w-[80%] text-start'>
              <h6><span>Integrity:</span>Transparency and honesty in all dealings.</h6>
              <h6 className='mt-8'><span>Innovation:</span>Continuous improvement and embracing new technologies.</h6> 
              <h6><span>Customer-Centricity:</span> Our users are at the heart of everything we do.</h6>
            </h6> 
          </div>
        </div>
      </section>
    </>
  )
}

export default About

const AboutHeader = ()=>{
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
            Hello
            <span className='absolute -bottom-2 -left-5 md:left-0 md:-bottom-1'>
              <Image src={'/greenLine.png'} alt='line' width={250} height={200}/>
            </span>
          </span> we are Zangapay Tecnology.
        </motion.h1>
        <motion.p
          variants={beVisible(0.8)}
          initial="hidden"
          whileInView="visible"
          className="text-base opacity-90 py-10">
          Zangapay is a secure and reliable platform that streamlines bill payments and provides you with a seamless experience, allowing you to easily pay your electricity bills, education bills, airtime top-ups, cable TV subscriptions, data bundle top-ups, and internet bills - all in one place.
        </motion.p>
      </div>
    </>
  )
}