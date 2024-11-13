"use client"
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { beVisible, slideInFromLeft, slideInFromRight } from '@/lib/motion'
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

          {/* <motion.h5 
           variants={slideInFromRight(0.4)}
           initial="hidden"
           whileInView="visible"
            className='text-lg font-medium text-center lg:max-w-[70%] mt-7'>We are pleased to welcome you to Zangapay, a distinguished subsidiary of Christopher Gomen Ltd (RC7309058). Although we are not a bank, we collaborate closely with banks registered with the Central Bank of Nigeria (CBN) to deliver our services. As a leading bill payment company, our mission is to offer you a seamless, reliable, and secure platform for all your payment needs. Thank you for choosing Zangapay. We are dedicated to serving you with the utmost professionalism and efficiency.
          </motion.h5> */}
        </div>


        {/* <div className='container mx-auto px-4 xl:flex justify-between py-20'>
          <div className='xl:w-[40%] flex justify-center items-center'>
            <Image src={"/about/ceo.svg"} alt="CEO" height={800} width={700} className='h-auto'/>
          </div>
          <div className='flex-1 flex justify-center items-center flex-col text-start mt-7 xl:mt-0'>
            <div className='md:px-7'>
              <h1 className='text-xl font-bold'>Christopher Gomen</h1>
              <h2 className='my-4 text-xl font-bold'>CEO</h2>
              <h6 className='text-sm text-center'>At ZangaPay, we are privileged to be led by Christopher Gomen, a highly respected cybersecurity engineer with a wealth of knowledge and years of hands-on experience in the tech industry. Our CEO&apos;s passion for technology began early, leading him to pursue formal education at renowned institutions in Germany and England, where he specialized in advanced technology and cybersecurity. These qualifications give him a unique global perspective on emerging trends and threats in the digital world. Throughout his career, our CEO has worked with industry-leading companies, helping them safeguard their digital assets and operations. His expertise spans across various facets of cybersecurity, from network security to data encryption, ensuring that ZangaPay operates with cutting-edge security measures at its core. Our CEO&apos;s leadership is defined by a commitment to innovation, transparency, and user safety. Under his direction, ZangaPay has built a robust infrastructure designed to protect users&apos; financial information and digital identities, making us one of the most secure fintech platforms in the market. With his vision and dedication, our CEO continues to lead ZangaPay towards becoming a trusted name in fintech, where users can confidently make transactions knowing their data is in safe hands. We are proud to have a leader who not only understands the importance of security in fintech but also actively works to stay ahead of the curve in this ever-evolving digital landscape. At ZangaPay, your security is our priority, and with our CEO at the helm, we are positioned to deliver on that promise..
              </h6>
            </div>
            
          </div>
        </div> */}


        {/* <div className='md:flex py-20'>
          <div className='flex-1 bg-secondary flex justify-center items-center flex-col p-4 md:p-8'>
            <Image src={"/about/image1.jpg"} alt='vision-png' width={300} height={300} className='rounded-xl'/>
            <h1 className='text-white font-bold text-4xl my-10'>Our Vision</h1>
            <h6 className='text-white font-medium text-lg max-w-[80%] text-center'>At ZangaPay, our vision is to become the most trusted and affordable bill payment platform in Nigeria. We are committed to providing seamless, secure, and cost-effective solutions that empower our users to take control of their finances with ease, making everyday transactions simpler and more accessible for all.</h6>
          </div>
          <div className='flex-1 bg-[#0B0A0A8A] flex justify-center items-center flex-col p-4 md:p-8'>
            <Image src={"/about/image2.jpg"} alt='values-png' width={300} height={400} className='rounded-xl'/>
            <h1 className='text-white font-bold text-4xl my-10'>Our Values</h1>
            <h6 className='text-white font-medium text-lg max-w-[80%] text-start'>
              <h6><span>Integrity:</span>Transparency and honesty in all dealings.</h6>
              <h6 className='mt-8'><span>Innovation:</span>Continuous improvement and embracing new technologies.</h6> 
              <h6><span>Customer-Centricity:</span> Our users are at the heart of everything we do.</h6>
            </h6> 
          </div>
        </div> */}
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
          </span> we offer at Zangapay Tecnology.
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