import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}


const steps: Step[] = [
  {
    number: 1,
    title: "Fast Transactions",
    description: 'Experience unparalleled speed in all your payments.'
  },
  {
    number: 2,
    title: "Comprehensive Solutions",
    description: "Manage every aspect of your financial commitments from one centralized dashboard."
  },
  {
    number: 3,
    title: "Trustworthy & Secure",
    description: "Rest easy knowing your transactions are protected around the clock with advanced security protocols. Join the future of payments today, where every transaction is as seamless as it should be."
  }
];

export default function StepsSection() {
  return (
    <section className='bg-primary py-10'>
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className=" md:flex justify-between items-end">
          <div className="order-2 flex items-end justify-center ">
           
            <Image src="/stepss.png" alt="ZangaPay representative" height={500} width={1400} className=''/>
          
          </div>

          <div className="space-y-8 order-1 mt-6 md:mt-0">
            <h2 className="text-4xl font-bold text-white mb-12">
              Why Our Platform Stands Out
            </h2>
            
            <motion.div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-white/90">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <button className="bg-white text-primary px-8 py-3  font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2">
              Get the app
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    
  );
}