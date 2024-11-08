"use client"
import Image from 'next/image';
import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import React from 'react'

const Privacy = () => {

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
            Privacy 
            <span className='absolute -bottom-2 -left-5 md:left-0 md:-bottom-1'>
              <Image src={'/greenLine.png'} alt='line' width={200} height={200}/>
            </span> Policy
          </span>
        </motion.h1>
      </Hero>

      <div className='container mx-auto px-4 text-black py-16'>
        {/* <!-- Privacy Policy Title --> */}
        <h4 className="text-2xl font-semibold  text-center mb-4">Zangapay Privacy Policy</h4>
        
        {/* <!-- Introduction Section --> */}
        <h6 className="text-xl font-bold  mb-3">
          <span className="font-semibold">1.</span> Introduction
        </h6>
        <p className="text-base  leading-relaxed text-justify">
          Zangapay (&ldquo;we,&ldquo; &ldquo;us,&ldquo; or &ldquo;our&ldquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, and mobile application. Please read this policy carefully. By accessing or using our services, you consent to the practices described in this policy.
        </p>

        {/* <!-- Information We Collect Section --> */}
        <h6 className="text-xl font-bold  mt-6 mb-3">
          <span className=" font-semibold">2.</span> Information We Collect
        </h6>
        <p className="text-base leading-relaxed text-justify mb-4">
          We collect information that identifies, relates to, describes, or could reasonably be linked to you (&ldquo;Personal Information&ldquo;).
        </p>

        {/* <!-- Subheading --> */}
        <h5 className="text-lg font-semibold mb-3">This includes:</h5>

        {/* <!-- Personal Data Section --> */}
        <h6 className="text-lg font-bold mb-3">
          <span className=" font-semibold">a.</span> Personal Data
        </h6>
        <ul className="list-disc pl-6 space-y-2 ">
          <li>Account Information: Name, email address, phone number, and other registration details.</li>
          <li>Identity Verification: Government-issued ID, date of birth, and nationality for compliance with regulations.</li>
          <li>Payment Information: Bank account details, payment card information, and transaction history.</li>
        </ul>

        {/* <!-- Automatic Data Collection Section --> */}
        <h6 className="text-lg font-bold mb-3">
          <span className="font-semibold">b.</span> Automatic Data Collection
        </h6>
        <ul className="list-disc pl-6 space-y-2">
          <li>Usage Information: Data on how you interact with our services (e.g., pages visited, features used).</li>
          <li>Device Information: Your IP address, browser type, device type, and operating system.</li>
          <li>Cookies and Tracking Technologies: We use cookies, beacons, and similar technologies to collect information on your activities.</li>
        </ul>


        {/* <!-- How We Use Your Information Section --> */}
        <h6 className="text-xl font-bold mt-6 mb-3">
          <span className="font-semibold">3.</span> How We Use Your Information
        </h6>
        <p className="text-base leading-relaxed text-justify mb-4">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Providing Services:</strong> To process your transactions, manage your account, and offer customer support.</li>
          <li><strong>Compliance:</strong> To comply with legal obligations, including anti-money laundering (AML) and know-your-customer (KYC) regulations.</li>
          <li><strong>Improvement:</strong> To enhance and personalize our services, website, and application based on user activity and preferences.</li>
          <li><strong>Marketing:</strong> To send promotional emails, updates, and other communications if you opt-in to receive them.</li>
          <li><strong>Security:</strong> To monitor and ensure the security of our platform, prevent fraud, and address any issues related to misuse.</li>
        </ul>

        {/* <!-- Sharing Your Information Section --> */}
        <h6 className="text-xl font-bold mt-6 mb-3">
          <span className="font-semibold">4.</span> Sharing Your Information
        </h6>
        <p className="text-base leading-relaxed text-justify mb-4">
          We may share your personal information with third parties under the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 ">
          <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., payment processing, data storage).</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, court orders, or governmental requests.</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
          <li><strong>With Your Consent:</strong> We may share your information with third parties when you consent to such sharing.</li>
        </ul>
        {/* <!-- Data Security Section --> */}
        <h6 className="text-xl font-bold  mt-6 mb-3">
          <span className=" font-semibold">5.</span> Data Security
        </h6>
        <p className="text-base  leading-relaxed text-justify mb-4">
          We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, secure socket layer (SSL) technology, and restricted access to sensitive information. However, no system is completely secure, and we cannot guarantee the absolute security of your data.
        </p>

        {/* <!-- Data Retention Section --> */}
        <h6 className="text-xl font-bold mt-6 mb-3">
          <span className="font-semibold">6.</span> Data Retention
        </h6>
        <p className="text-base leading-relaxed text-justify mb-4">
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once your information is no longer needed, we will securely dispose of or anonymize it.
        </p>

        {/* <!-- Your Rights Section --> */}
        <h6 className="text-xl font-bold mt-6 mb-3">
          <span className="font-semibold">7.</span> Your Rights
        </h6>
        <p className="text-base leading-relaxed text-justify mb-4">
          Depending on your jurisdiction, you may have certain rights concerning your personal information, such as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Access:</strong> You can request access to your personal information.</li>
          <li><strong>Correction:</strong> You can request corrections to inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> You can request the deletion of your personal information, subject to certain legal restrictions.</li>
          <li><strong>Data Portability:</strong> You can request a copy of your personal information in a machine-readable format.</li>
          <li><strong>Opt-Out of Marketing:</strong> You may opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.</li>
        </ul>
        {/* <!-- Cookies and Tracking Technologies Section --> */}
        <h6 className="text-xl font-bold mt-6 mb-3">
          <span className=" font-semibold">8.</span> Cookies and Tracking Technologies
        </h6>
        <p className="text-base leading-relaxed text-justify mb-4">
          We use cookies and other tracking technologies to enhance your experience on our website and application. Cookies allow us to remember your preferences, provide personalized services, and analyze website traffic. You can control or disable cookies through your browser settings; however, doing so may limit your use of certain features.
        </p>

        {/* <!-- Third-Party Links Section --> */}
        <h6 className="text-xl font-bold mt-6 mb-3">
          <span className=" font-semibold">9.</span> Third-Party Links
        </h6>
        <p className="text-base  leading-relaxed text-justify mb-4">
          Our platform may contain links to third-party websites or services that are not operated by us. This Privacy Policy does not apply to such third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>

        {/* <!-- Children's Privacy Section --> */}
        <h6 className="text-xl font-bold  mt-6 mb-3">
          <span className=" font-semibold">10.</span> Children&apos;s Privacy
        </h6>
        <p className="text-base  leading-relaxed text-justify mb-4">
          Our services are not directed at children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that we may have inadvertently collected personal information from a child, please contact us so that we can take appropriate measures to delete the data.
        </p>

        {/* <!-- International Data Transfers Section --> */}
        <h6 className="text-xl font-bold mt-6 mb-3">
          <span className=" font-semibold">11.</span> International Data Transfers
        </h6>
        <p className="text-base  leading-relaxed text-justify mb-4">
          If you are accessing our services from outside Nigeria, please be aware that your information may be transferred to, stored, and processed in Nigeria, where our servers are located. By using our services, you consent to the transfer of your data to Nigeria.
        </p>

        {/* <!-- Changes to This Privacy Policy Section --> */}
        <h6 className="text-xl font-bold  mt-6 mb-3">
          <span className=" font-semibold">12.</span> Changes to This Privacy Policy
        </h6>
        <p className="text-base  leading-relaxed text-justify mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes by email or through the service. Your continued use of Zangapay after any changes to the policy constitutes your acceptance of the updated terms.
        </p>

        {/* <!-- Contact Us Section --> */}
        <h6 className="text-xl font-bold  mt-6 mb-3">
          <span className=" font-semibold">13.</span> Contact Us
        </h6>
        <p className="text-base  leading-relaxed text-justify mb-4">
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="text-base  leading-relaxed mb-4">
          <strong>Zangapay Headquarters:</strong> Lagos, Nigeria
          <strong> Branch Office:</strong> Uromi, Edo State, Nigeria
        </p>
        <p className="text-base text-gray-700 leading-relaxed text-justify">
          By using Zangapay&apos;s services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your personal information as described above.
        </p>

      
      </div>
    </>
  )
}

export default Privacy
