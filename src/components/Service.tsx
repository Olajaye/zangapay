import React from 'react';
import ServiceCard from '@/components/minicomponent/serviceCards';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/lib/motion';


const services = [
  {
    icon: "data",
    title: "Data Bundle Topup",
    description: "Seamless Mobile Data Refills Keep the data flowing without interruptions. Our intuitive system ensures you can easily top up your mobile data from anywhere, keeping you connected in real-time."
  },
  {
    icon: "airtime",
    title: "Airtime Topup",
    description: "Instant Airtime Recharges Never run out of airtime when you need it the most. With 24/7 availability, you can recharge your phone instantly, ensuring continuous communication with those who matter."
  },
  {
    icon: "betting",
    title: "Betting",
    description: "Effortless Betting Payments Enjoy a smooth betting experience by funding your accounts quickly and securely. Stay in the game and keep the excitement alive without delays."
  },
  {
    icon: "internet",
    title: "Internet Topup",
    description: "Reliable Internet Subscription Renewals Whether you’re working, studying, or streaming, we make renewing your internet subscriptions seamless. Stay online and stay productive, with zero disruptions."
  },
  {
    icon: "electricity",
    title: "Electricity Bills",
    description: "Quick & Easy Electricity Payments Avoid disconnection by paying your electricity bills in just a few clicks. No more long queues or missed deadlines—just simple, on-time payments."
  },
  {
    icon: "tv",
    title: "Cable TV Subscription",
    description: "Hassle-Free Cable TV Subscriptions Ensure uninterrupted entertainment by managing your cable TV subscriptions with ease. From renewing to upgrading, our platform simplifies it all, so you can enjoy your favorite shows without a hitch."
  }
];

export default function ServicesSection() {
  return (

    <section className='bg-white pt-4 pb-16'>
      <div className="px-4 container mx-auto">
        <div className="text-center mb-8">
          <motion.h2 
            variants={slideInFromLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-bold">Our Specialized Services </motion.h2>
          <motion.p 
            variants={slideInFromRight(0.4)}
            initial="hidden"
            whileInView="visible"
            className="text-gray-600 mt-2">
            We bring you an all-in-one payment solution that empowers you to stay on top of your bills effortlessly.
          </motion.p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  
  );
}