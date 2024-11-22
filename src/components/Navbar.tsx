"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';




const navigation =[
  {nav: "Home", link: "/"},
  {nav: "About", link: "/about"},
  {nav: "Services", link: "/service"},
  {nav: "Contact", link: "/contact"},
  {nav: "Partner with us", link: "/partner"},
]


const Navbar = () => {
  const [viewMenu, setViewMenu]= useState(false)
  const path = usePathname()
  return (
    <section className=''>
      <div className='container mx-auto p-4 relative'>
        <nav className='w-full bg-white py-1 rounded-full flex justify-between items-center px-4'>
          <Image src={'logo.svg'} alt='logo' width={150} height={100}/>

          <div className='md:flex hidden space-x-10 justify-between text-black'>
            {navigation.map((nav, id)=>(
              <Link key={id} href={nav.link} className={`${path === nav.link ?"text-primary": "" } transition-all duration-500`}>{nav.nav}</Link>
            ))}
          </div>

          <button className='bg-primary font-extrabold p-2 rounded-3xl md:flex hidden'>
            Download App
          </button>

          {!viewMenu && <div onClick={()=> setViewMenu(true)} className='md:hidden'>
           <IoMenu className='w-7 h-7 text-primary '/>
          </div>}
          
        </nav>

        {viewMenu && <motion.div  
          initial={{ x: '100px' }}
          animate={{
            x: 0, transition: {
              duration: 0.4,
           }}}
          className={`md:hidden w-[60vw] h-[auto] bg-secondary absolute right-10 p-6 rounded-xl z-50 ${viewMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} transition-all duration-500 ease-in-out`}>
          <div className='flex flex-col space-y-4'>
            <div className='flex justify-end items-end' onClick={()=> setViewMenu(false)}>
             <IoClose className='text-black w-7 h-7'/>
            </div>
            {navigation.map((nav, id)=>(
              <Link key={id} href={nav.link} onClick={()=>setViewMenu(false)} className={`${path === nav.link ?"text-primary": "" } transition-all duration-500 text-xl`}>{nav.nav}</Link>
            ))}
            <button className='bg-primary p-2 rounded-3xl  text-white '>
              Download App
            </button>
          </div>
        </motion.div>}
      </div>
  </section>
  )
}

export default Navbar