"use client"

import { slideInFromButtom } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const patImag = [
  "/partner/airtel.png",
  "/partner/mtn.png",
  "/partner/glo.png",
  "/partner/9mobile-logo.webp",
  "/partner/waec.png",
  "/partner/spectranet.png",
  "/partner/jamb.png",
  "/partner/ikeja-electric.png",
  "/partner/aedc.webp",
  "/partner/betway.png",
  "/partner/netflix.png",
  "/partner/sportybet.png",
  "/partner/jos.jpg",
  "/partner/enugu.png",
  "/partner/ibedc.jpeg",
  "/partner/kaduna.webp",
  "/partner/kedco_logo.png",
  "/partner/dstvlogo.png",
  "/partner/bedc.jpeg",
  "/partner/gotv.jpeg",
  "/partner/nairabet.png",
  "/partner/showmax-logo.png",
  "/partner/startimes-logo.png",
]

export default function Partners() {
  return (
    <section>
      <div className="bg-white rounded-t-3xl pb-6 pt-10">
        <div className="container mx-auto px-4 pt-8">
          <div className="flex justify-center items-center text-center mb-6">
            <motion.h2 
              variants={slideInFromButtom(0.4)}
              initial="hidden"
              whileInView="visible"
              className="md:text-3xl text-base text-center align-middle font-semibold md:max-w-[700px]">
                We have partnered with all the major brands in Nigeria to ensure your bills are paid at the cheapest rates, providing unmatched convenience and value
            </motion.h2>
          </div>
          <motion.div 
            variants={slideInFromButtom(0.8)}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center items-center ">
            <div className=" flex flex-wrap justify-center items-center gap-6  lg:w-[80%]">
              {patImag.map((img, index)=>(
                <div className="hover:scale-110 hover:grayscale transition-all duration-500 p-3 rounded-xl shadow-md" key={index}>
                  <Image src={img} alt="img" width={60} height={50} className="" />
                </div>
                
              ))}
            </div>
            {/* <Image src='/brands/brand.svg' alt="brand" width={1000} height={500} className='w-full'/> */}
          </motion.div>

          
          <motion.div 
            variants={slideInFromButtom(1.2)}
            initial="hidden"
            whileInView="visible"
            className="md:flex justify-between items-center my-10 border-[1px] border-gray-600 md:p-8 p-4 rounded-2xl">
            <h1 className="md:text-3xl text-xl text-center w-[100%] md:max-w-[50%] font-bold mb-4 md:w-[50%]">
              Finally a better way to simplify payments
            </h1>
            <p className="text-gray-600 md:w-[50%] md:px-10 text-sm">
              Zangapay is a Bill payment company. We are building an ecosystem to enable people to digitally Bills payments, and creating simple financial access for everyone
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}