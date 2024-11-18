"use client"
import Image from 'next/image'
import { MailIcon} from 'lucide-react';
import Link from 'next/link';
import { MdOutlineWhatsapp } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { beVisible } from '@/lib/motion';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import { ThankYouPopup } from '@/components/minicomponent/popUp';


const Contact = () => {
  const [sendIng, setSending] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [contactDate, setContactDate] = useState({
    fullName: "",
    email: "",
    phone: 0,
    rForContact:"",
    message:"",
  })


  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target
    setContactDate(prev=> ({...prev, [name]:value}))
  } 

  const handleSubmit = async (e: { preventDefault: () => void; })=>{
    e.preventDefault()

    const serviceId = "service_dqy38vg"
    const templateID = "template_ppt6jl6"
    const publicKey = "wRjb5an2kROXm-8_V"


    const data = {
      service_id: serviceId,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        user_name: contactDate.fullName,
        user_email: contactDate.email,
        message: `Full-Name: ${contactDate.fullName} 
                \n Email: ${contactDate.email}
                \n Phone: ${contactDate.phone} 
                \n Reason for contact: ${contactDate.rForContact} 
                \n Message: ${contactDate.message}`
      }
    }

    try {
      setContactDate({
        fullName: "",
        email: "",
        phone: 0,
        rForContact:"",
        message:"",
      })
      setSending(true)
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
      if(res.data === "OK"){
        setSending(false)
        setIsPopupVisible(true)
        // alert("Thanks for contacting zangapay")
      }
    } catch (error) {
       alert(`An error occourded ${error}`)
       setSending(false)
    }finally{
      setContactDate({
        fullName: "",
        email: "",
        phone: 0,
        rForContact:"",
        message:"",
      })
    }
  }
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <>
     <section className="bg-bgGradient h-auto bg-cover bg-center text-white overflow-y-hidden">
      <Navbar/>
      <form onSubmit={handleSubmit}>
      <div className='flex justify-center items-center'>
        <div className="md:max-w-[70%] lg:max-w-[60%] space-y-6 text-center pt-10">
          <motion.h1 
            variants={beVisible(0.4)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl md:text-6xl font-bold text-center  leading-7">
            <span className='relative pt-10'>
              Get in
              <span className='absolute -bottom-2 -left-5 md:left-0 md:-bottom-1'>
                <Image src={'/greenLine.png'} alt='line' width={250} height={200}/>
              </span>
            </span> touch
          </motion.h1>
          <motion.p
            variants={beVisible(0.8)}
            initial="hidden"
            whileInView="visible"
            className="text-base opacity-90">
            We&apos;d love to hear from you! Whether you&apos;re interested in requesting a demo, submitting your CV, or sharing feedback, feel free to reach out.
          </motion.p>
        </div>
      </div>

      <div className='container mx-auto px-4 pt-10'>
        <div className='md:flex justify-between items-center space-y-4 md:space-y-0'>
          <div className='md:w-[45%] flex flex-col'>
            <label htmlFor="fullName" className='text-base font-semibold mb-5'>Full Name</label>
            <input 
              type="text" 
              id='fullName'
              placeholder='Enter your full Name'
              value={contactDate.fullName}
              name="fullName" 
              onChange={handleOnChange}
              required
              className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
            />
          </div>
          <div className='md:w-[45%] flex flex-col'>
            <label htmlFor="email" className='text-base font-semibold mb-5'>Email</label>
            <input 
              type="text"  
              value={contactDate.email}
              name="email" 
              id='email'
              onChange={handleOnChange}
              required
              placeholder='Enter your Email' 
              className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
            />
          </div>
        </div>

        <div className='md:flex justify-between items-center space-y-4 md:space-y-0 mt-6'>
          <div className='md:w-[45%] flex flex-col'>
            <label htmlFor="phone" className='text-base font-semibold mb-5'>Phone number</label>
            <input 
              type="number" 
              placeholder='Enter Phone Number' 
              value={contactDate.phone}
              name="phone"
              id='phone' 
              required
              onChange={handleOnChange}  
              className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
            />
          </div>
          <div className='md:w-[45%] flex flex-col'>
            <label htmlFor="contact" className='text-base font-semibold mb-5'>Reason for contact</label>
            <input 
            type="text"
            placeholder='(optional)'
            id='contact'
            value={contactDate.rForContact}
            name="rForContact" 
            onChange={handleOnChange}
            className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'/>
          </div>
        </div>

        <div className='flex flex-col mt-6 pb-10'>
          <label htmlFor="message" className='text-base font-semibold mb-5'>Message</label>
          <textarea 
            rows={5} 
            cols={10} 
            placeholder='Enter your Message here' 
            value={contactDate.message}
            name="message" 
            id='message'
            required
            onChange={handleOnChange}
            className='bg-white p-3 border-black border-[1px] w-full rounded-lg outline-none text-black'/>
        </div>


        <div className='flex md:justify-end md:items-end mb-5 justify-center items-center pt-10'>
        <button type='submit' className='flex bg-black p-3 items-center rounded-lg'>{sendIng ? "Submitting..." : "Submite Message" }<FaLongArrowAltRight className='ms-5'/> </button>
        </div>
      </div>
      </form>
     </section>
     {isPopupVisible && <ThankYouPopup onClose={handleClosePopup} text={'Thanks for reaching out to us'}/>}
     <div className='container mx-auto px-4 flex justify-center items-center flex-col py-10'>

        <div className='w-full lg:w-[70%]'>
          <h1 className='font-bold text-xl md:text-4xl text-black text-start'>Our Customer Care Line </h1>
        </div>
         

        <div className=' font-medium p-10 lg:max-w-[70%] mt-7 border-black border-[1px] w-full h-auto rounded-lg'>
          <p>Follow Us</p>
          <div className="flex gap-4 my-5">

            <Link href="https://www.facebook.com/profile.php?id=61559692412100" target='_blank' className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="#CE2528" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>

            <Link href="https://x.com/Zangapayng?s=09" target='_blank' className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="#CE2528" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>

            <Link href="https://www.instagram.com/zangapay?igsh=MXJjNXRsanF5cjE3dQ==" target='_blank' className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="#CE2528" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className='flex flex-wrap gap-4 justify-between items-center'>
            <button 
              className='flex p-2 px-4 items-center rounded-full border-[1px] border-black text-xs'><MailIcon className='me-2 w-4 h-4'/> Zangapay49@gmail.com 
            </button>
            <button 
              className='flex p-2 px-4 items-center rounded-full border-[1px] border-black text-xs'><IoIosCall className='me-2 w-4 h-4'/>08152000002 
            </button>
            <button 
              className='flex p-2 px-4 items-center rounded-full border-[1px] border-black text-xs'><MdOutlineWhatsapp className='me-2 w-4 h-4'/> 09027256832  
            </button>
          </div>

        </div>

        
     </div>
    </>
  )
}

export default Contact