"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const AppDownload = () => {
  return (
    <section className='bg-white  px-4'>
      <div className='container mx-auto flex py-10 justify-center items-center'>
        <div className="bg-black text-white  rounded-3xl flex xl:w-[70%] overflow-hidden">
          <div className='w-[65%]'>
          <div className="p-4 flex justify-center items-center flex-col text-center  space-y-2 md:space-y-6">
              <h1 className="text-xl text-center md:text-5xl font-bold leading-tight">
                Download Our App Free and Enjoy Exclusive Features!
              </h1>
              <p className="text-gray-300 text-xs max-w-xl text-center hidden sm:block">
                Enjoy seamless navigation, exclusive content, and personalized experiences right at your fingertips. Don&apos;t miss out on this opportunity to enhance your daily routine with our user-friendly, free mobile app.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image  src="/home/playstore.png" 
                    alt="Get it on Google Play" width={100} height={100}/>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image  src="/home/appstore.png" 
                    alt="Get it on Google Play" width={100} height={100}/>
                </a>
              </div>
          </div>
          </div>
        
          <motion.div 
            initial={{ y: 40 }}
            animate={{
              y: 10, transition: {
                duration: 3,
                repeat: Infinity,
                repeatType:"reverse"
            }}}
            className='w-[35%] flex justify-end items-end pe-10'>
            <Image src="/phone.svg" alt="App Interface Preview"  height={250} width={300}/>
          </motion.div>
        </div>
      </div>
    </section>
   
  );
};

export default AppDownload;