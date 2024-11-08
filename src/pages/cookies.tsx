"use client"
import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'


const Cookies = () => {
  return (
    <>
      <Hero>
        <motion.h1 
          initial={{scale: 0.5, opacity:0 }}
          whileInView={{
            scale: 1,
            opacity: 1, 
            transition: {
              duration: 4,
          }}}
          className="text-3xl md:text-6xl font-bold text-center  leading-7 py-20">
          <span className='relative'>
            Cookies 
            <span className='absolute -bottom-2 -left-5 md:left-0 md:-bottom-1'>
              <Image src={'/greenLine.png'} alt='line' width={200} height={200}/>
            </span> Policy
          </span>
        </motion.h1>
      </Hero>
      <div className="container mx-auto py-10 px-4">

        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-black">Zangapay Cookies Policy</h1>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-bold">1. Introduction</h2>
          <p>
            This Cookies Policy explains how Zangapay (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) uses cookies and similar tracking technologies on our website and mobile applications. By using our services, you consent to the use of cookies as described in this policy. If you do not agree with the use of cookies, you may disable them through your browser settings, although this may affect the functionality of our services.
          </p>
            
          <h2 className="text-xl font-bold">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies are used to collect and store information about your use of the website to enhance your experience, enable certain functionalities, and analyze usage patterns.
          </p>

          <h2 className="text-xl font-bold">3. Types of Cookies We Use</h2>
          <p className="font-semibold">We use the following types of cookies on Zangapay&apos;s website and applications:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                  <strong>Essential Cookies</strong>: These cookies are necessary for the operation of our services. They allow you to navigate the site and use its features, such as accessing secure areas. Without these cookies, certain functionalities cannot be provided.
              </li>
              <li>
                  <strong>Performance and Analytics Cookies</strong>: These cookies collect information about how visitors use our website, such as which pages are visited most often and any errors encountered. The data collected is aggregated and anonymous, helping us improve the performance and user experience of our site.
              </li>
              <li>
                  <strong>Functionality Cookies</strong>: Functionality cookies allow our website to remember choices you make (such as your language preference or location) and provide more personalized features. These cookies enhance your experience on our platform.
              </li>
              <li>
                  <strong>Targeting and Advertising Cookies</strong>: These cookies are used to deliver content and advertisements that are relevant to you. They may track your browsing habits across different websites and collect information on your interactions with advertisements. These cookies help us personalize ads and promotions.
              </li>
              <li>
                  <strong>Third-Party Cookies</strong>: In some cases, we may allow third-party service providers, such as analytics or advertising companies, to place cookies on your device to track your interactions with our website. These third parties have their own privacy and cookies policies, and we encourage you to review them.
              </li>
            </ul>

          <h2 className="text-xl font-bold">4. How We Use Cookies</h2>
          <p>
            We use cookies to:
          </p>
          <ul className="list-decimal list-inside space-y-2">
              <li>Enhance Website Functionality: Ensure that our website and application functions properly.</li>
              <li>Analyze Usage Patterns: Collect data on user behavior to improve the performance of our services.</li>
              <li>Personalize User Experience: Remember your preferences and settings.</li>
              <li>Target Advertising: Deliver relevant content and personalized ads based on your interests and activity.</li>
          </ul>

          <h2 className="text-xl font-bold">5. Managing Cookies</h2>
          <p>
              You have the right to accept or decline cookies. You can manage or delete cookies through your browser settings. Here’s how you can do this:
          </p>
          <ul className="list-decimal list-inside space-y-2">
              <li><strong>Browser Settings</strong>: Most browsers allow you to block or delete cookies through their settings. Check your browser’s help menu for specific instructions.</li>
              <li><strong>Third-Party Opt-Out</strong>: You can opt out of third-party advertising cookies through the opt-out mechanisms provided by the relevant advertising networks.</li>
          </ul>
          <p className="text-sm italic">
              Please note that disabling cookies may affect your ability to use certain features of our services.
          </p>

          <h2 className="text-xl font-bold">6. Data Collected via Cookies</h2>
          <p>
              The information we collect via cookies may include:
          </p>
          <ul className="list-decimal list-inside space-y-2">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages you visit on our website</li>
              <li>Date and time of your visit</li>
              <li>Links you click on and other interactions with our content</li>
          </ul>
          <p>
              This information is primarily used to improve our services and provide you with a better user experience.
          </p>

          <h2 className="text-xl font-bold">7. Changes to This Cookies Policy</h2>
          <p>
              We may update this Cookies Policy from time to time to reflect changes in our use of cookies or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and the updated policy will take effect when posted. We encourage you to review this page periodically for any updates.
          </p>

          <h2 className="text-xl font-bold">8. Contact Us</h2>
          <p>
              If you have any questions or concerns about our use of cookies or this Cookies Policy, please contact us at:
          </p>
          <p>
              Zangapay Headquarters: Lagos, Nigeria 
              Branch Office: Uromi, Edo State, Nigeria
          </p>
          <p>
              By continuing to use our website and services, you acknowledge that you have read and understood this Cookies Policy and agree to our use of cookies as described above.
          </p>
        </section>
      </div>
    </>
  )
}

export default Cookies