"use client"
import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'


const Teams = () => {
  return (
    <>
        <section className="bg-bgGradient h-auto bg-cover bg-center text-white overflow-y-hidden">
            <Navbar/>
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
                    Terms 
                    <span className='absolute -bottom-2 -left-5 md:left-0 md:-bottom-1'>
                    <Image src={'/greenLine.png'} alt='line' width={200} height={200}/>
                    </span> of use
                </span>
                </motion.h1>
            </Hero>
        </section>


      <div className="container mx-auto py-10 px-4">

        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold">Zangapay Terms of Use</h1>
        </header>

        <section className="space-y-6">
            <h2 className="text-xl font-bold">1. Introduction</h2>
            <p>
                Welcome to Zangapay! By accessing or using our services, you agree to comply with these Terms of Use (&quot;Terms&quot;). Please read them carefully. If you do not agree with these Terms, you may not use our services.
            </p>

            <h2 className="text-xl font-bold">2. Eligibility</h2>
            <p>
                You must be at least 18 years old and legally capable of entering into a binding contract to use Zangapay. By using our services, you represent and warrant that you meet this eligibility requirement.
            </p>

            <h2 className="text-xl font-bold">3. Account Registration</h2>
            <p>
                To use certain features of Zangapay, you may need to register for an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate, current, and complete information during the registration process.</li>
                <li>Keep your account credentials secure and confidential.</li>
                <li>Immediately notify us of any unauthorized use of your account.</li>
            </ul>

            <h2 className="text-xl font-bold">4. Use of Services</h2>
            <p>
                Zangapay provides financial services including payment solutions and related features. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>Use Zangapay&apos;s services in compliance with all applicable laws and regulations.</li>
                <li>Not use Zangapay for any illegal, fraudulent, or unauthorized purpose.</li>
                <li>Only use the services for personal or business transactions approved by Zangapay.</li>
            </ul>

            <h2 className="text-xl font-bold">5. Fees and Payments</h2>
            <p>
                Zangapay may charge fees for certain services. These fees will be disclosed before any transaction is processed. By using the service, you agree to pay any applicable fees and charges in accordance with the terms presented at the time of the transaction.
            </p>

            <h2 className="text-xl font-bold">6. Privacy Policy</h2>
            <p>
                Your privacy is important to us. By using Zangapay, you consent to the collection, use, and sharing of your personal information as outlined in our <Link href="/company/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. Please review the policy carefully to understand how we manage your data.
            </p>

            <h2 className="text-xl font-bold">7. Prohibited Activities</h2>
            <p>
                You agree not to engage in any of the following:
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>Violating any applicable laws or regulations.</li>
                <li>Engaging in fraudulent activities, including false claims or misrepresentations.</li>
                <li>Interfering with or disrupting the functionality of Zangapay’s services.</li>
                <li>Using any automated system (e.g., bots) to access or use the service.</li>
            </ul>

            <h2 className="text-xl font-bold">8. Termination</h2>
            <p>
                We reserve the right to suspend or terminate your account or access to the services at any time, without notice, for any breach of these Terms or if we suspect illegal or unauthorized use of our services.
            </p>

            <h2 className="text-xl font-bold">9. Intellectual Property</h2>
            <p>
                All intellectual property rights in the Zangapay platform, including logos, designs, software, and trademarks, belong to Zangapay or its licensors. You may not use, modify, or reproduce any of these without prior written permission from Zangapay.
            </p>

            <h2 className="text-xl font-bold">10. Limitation of Liability</h2>
            <p>
                Zangapay will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of our services. Our total liability, whether in contract, tort, or otherwise, is limited to the amount of fees paid by you for the services.
            </p>

            <h2 className="text-xl font-bold">11. Indemnification</h2>
            <p>
                You agree to indemnify and hold Zangapay harmless from any claims, damages, losses, or expenses arising from your use of the services, your violation of these Terms, or your infringement of any third-party rights.
            </p>

            <h2 className="text-xl font-bold">12. Modifications to the Terms</h2>
            <p>
                Zangapay reserves the right to modify these Terms at any time. Any changes will be posted on our website, and your continued use of the services after such modifications will constitute acceptance of the new Terms.
            </p>

            <h2 className="text-xl font-bold">13. Governing Law</h2>
            <p>
                These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising out of or relating to these Terms or the use of Zangapay will be subject to the exclusive jurisdiction of the courts of Nigeria.
            </p>

            <h2 className="text-xl font-bold">14. Contact Information</h2>
            <p>
                If you have any questions or concerns regarding these Terms, please contact us at:
            </p>
            <p>
                Zangapay Headquarters: Lagos, Nigeria 
                Branch Office: Uromi, Edo State, Nigeria
            </p>

            <p>
                By using Zangapay, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>

        </section>

      </div>
    </>
  )
}

export default Teams