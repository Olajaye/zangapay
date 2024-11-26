'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ThankYouPopup } from './minicomponent/popUp';
import { FaLinkedin, FaTiktok } from 'react-icons/fa';





const Footer = () => {
  const [email, setEmail] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSendIng, setIsSending] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = "service_on492ey"
    const templateID = "template_8csvzv7"
    const publicKey = "V-B5QmL3ktPmX0Jqb"
    setEmail('');

    const data = {
      service_id: serviceId,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        user_name: email,
       
        message: `${email} will like to subscribe to zangapay newletter`,
      }
    }

    try {
      setEmail("")
      setIsSending(true)
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
      if(res.data === "OK"){
        setIsPopupVisible(true)
        setIsSending(false)
      }
    } catch (error) {
       alert(`An error occourded ${error}`)
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <footer className="bg-black text-white px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
          <Image src={'logo.svg'} alt='logo' width={200} height={100}/>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full bg-white text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
               {isSendIng ? "Subscribing....": "Subscribe"}
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              By subscribing you agree to with our{' '}
              <a href="/privacy" className="underline hover:text-white">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-secondary">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary">About</Link></li>
              <li><Link href="/partner" className="hover:text-secondary">Partner</Link></li>
              <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-secondary">Airtime to Cash</Link></li>
              <li><Link href="/" className="hover:text-secondary">Airtime Top-Up</Link></li>
              <li><Link href="/" className="hover:text-secondary">Electircity Top-up</Link></li>
              <li><Link href="/" className="hover:text-secondary">Cable TV Subscription</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/privacypage" className="hover:text-secondary">Privacy Policy</Link></li>
              <li><Link href="/cookiespage" className="hover:text-secondary">Cookies</Link></li>
              <li><Link href="/termspage" className="hover:text-secondary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Copyright © 2024 Zangapay. All Rights Reserved
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/profile.php?id=61559692412100" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://x.com/Zangapayng?s=09" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/zangapay?igsh=MXJjNXRsanF5cjE3dQ==" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>


             {/* Linkdien */}
             <Link href="https://www.linkedin.com/company/zangapay/" target='_blank' className="hover:text-gray-300">
              <FaLinkedin className='w-6 h-6'/>
            </Link>


            {/* ticktok */}
            <Link href="https://www.tiktok.com/@zangapay.ng?_t=8rgdaKBvzTq&_r=1" target='_blank' className="hover:text-gray-300">
            <FaTiktok className='w-6 h-6'/>
            </Link>
            {/* <Link href="https://youtube.com" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </Link> */}
          </div>
        </div>
      </footer>
      {isPopupVisible && <ThankYouPopup onClose={handleClosePopup} text={'Thanks for subscribing to our newsletter'}/>}
    </>
  );
};

export default Footer;