"use client"
// import { Button } from '@/ui/button'
import { beVisible } from '@/lib/motion'
import axios from 'axios'
import { motion } from 'framer-motion'
// import { PaperclipIcon } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Navbar from '@/components/Navbar'
import { ThankYouPopup } from '@/components/minicomponent/popUp'

const Partner = () => {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sendIng, setSending] = useState(false)
  const [partnerDate, setPartnerDate] = useState({
    fullName: "",
    email: "",
    phone: 0,
    accountName:"",
    accountNumber: 0,
    bankName:"",
    aOfIntrest:"",
    address:"",
  })
  


  // const handleFileSelect = (e:React.ChangeEvent<HTMLInputElement>)=>{
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     setSelectedFile(file);
  //   }
  // }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target
    setPartnerDate(prev=> ({...prev, [name]:value}))
  } 
  
  const handleSubmit = async (e: { preventDefault: () => void; })=>{
    e.preventDefault()

    const serviceId = "service_on492ey"
    const templateID = "template_8csvzv7"
    const publicKey = "V-B5QmL3ktPmX0Jqb"
    // const serviceId = "service_rs4ikxf"
    // const templateID = "template_ppt6jl6"
    // const publicKey = "wRjb5an2kROXm-8_V"

    // let fileData = "";
    // if (selectedFile) {
    //   fileData = await new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(selectedFile);
    //     reader.onload = () => resolve(reader.result as string);
    //     reader.onerror = error => reject(error);
    //   });
    // }

    const data = {
      service_id: serviceId,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        user_name: partnerDate.fullName,
        user_email: partnerDate.email,
        message: `Fulname: ${partnerDate.fullName}
                  \nPhone: ${partnerDate.phone} 
                  \n Address: ${partnerDate.address} 
                  \n Area of Intrest: ${partnerDate.aOfIntrest} 
                  \n Account Name: ${partnerDate.accountName}
                  \n Account Number: ${partnerDate.accountNumber}
                  \n Bank Name: ${partnerDate.bankName}`
                  ,
      }
    }

    try {
      setPartnerDate({
        fullName: "",
        email: "",
        phone: 0,
        accountName:"",
        accountNumber: 0,
        bankName:"",
        aOfIntrest:"",
        address:"",
      })
      setSending(true)
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
      if(res.data === "OK"){
        setSending(false)
        // setSelectedFile(null)
        setIsPopupVisible(true)
      }
    } catch (error) {
       alert(`An error occourded ${error}`)
    }
  }

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <>
     <section className="bg-bgGradient h-auto bg-cover bg-center text-white overflow-y-hidden">
      <Navbar/>
      <div className='flex justify-center items-center'>
        <div className="md:max-w-[70%] lg:max-w-[60%] space-y-6 text-center pt-10">
          <motion.h1 
          variants={beVisible(0.4)}
          initial="hidden"
          whileInView="visible"
          className="text-3xl md:text-6xl font-bold text-center  leading-7">
          <span className='relative pt-10'>
            Partner
            <span className='absolute -bottom-2 -left-5 md:left-0 md:-bottom-1'>
              <Image src={'/greenLine.png'} alt='line' width={250} height={200}/>
            </span>
          </span> with us
          </motion.h1>
          <motion.p
            variants={beVisible(0.8)}
            initial="hidden"
            whileInView="visible" className="text-base opacity-90">
           Collaborate with our team to leverage cutting-edge technology, expertise, and resources. Together, let&apos;s create customized solutions that drive business success and transform industries.
          </motion.p>
        </div>
      </div>


      <form onSubmit={handleSubmit}>

        <div className='container mx-auto px-4 pt-10'>
          <div className='md:flex justify-between items-center space-y-4 md:space-y-0'>
            <div className='md:w-[45%] flex flex-col'>
              <label htmlFor="fullName" className='text-base font-semibold mb-5'>Full Name</label>
              <input 
                type="text"
                id='fullName' 
                value={partnerDate.fullName}
                name="fullName"
                required 
                onChange={handleOnChange}
                placeholder='Enter your full Name' 
                className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
              />
            </div>

            <div className='md:w-[45%] flex flex-col'>
              <label htmlFor="email" className='text-base font-semibold mb-5'>Email</label>
              <input 
                type="text"  
                placeholder='Enter your Email' 
                id='email' 
                value={partnerDate.email}
                name="email" 
                required
                onChange={handleOnChange}
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
                id='phone' 
                value={partnerDate.phone}
                name="phone" 
                required
                onChange={handleOnChange}  
              className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
              />
            </div>

            <div className='md:w-[45%] flex flex-col'>
              <label htmlFor="aOfIntrest" className='text-base font-semibold mb-5'>Area Of Interest</label>
              <input 
                type="text"
                placeholder='(optional)'
                id='aOfIntrest' 
                value={partnerDate.aOfIntrest}
                name="aOfIntrest" 
                onChange={handleOnChange}
                className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
              />
            </div>
          </div>

          <div className='md:flex justify-between items-center space-y-4 md:space-y-0 mt-6'>
            <div className='md:w-[45%] flex flex-col'>
              <label htmlFor="address" className='text-base font-semibold mb-5'>Address</label>
              <input 
                type="text" 
                placeholder='(optional)'
                id='address' 
                value={partnerDate.address}
                name="address" 
                onChange={handleOnChange}   
                className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
              />
            </div>
            


            <div className='md:w-[45%] flex flex-col'>
              <label htmlFor="aOfIntrest" className='text-base font-semibold mb-5'>Account Number</label>
              <input 
                type="number"
                placeholder='Account number'
                id='aOfIntrest' 
                value={partnerDate.accountNumber}
                name="accountNumber" 
                onChange={handleOnChange}
                className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
              />
            </div>
          </div>

          <div className='md:flex justify-between items-center space-y-4 md:space-y-0 mt-6'>
            <div className='md:w-[45%] flex flex-col'>
              <label htmlFor="phone" className='text-base font-semibold mb-5'>Account Name</label>
              <input 
                type="text" 
                placeholder='Account Name' 
                id='phone' 
                value={partnerDate.accountName}
                name="accountName" 
                required
                onChange={handleOnChange}  
              className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
              />
            </div>


            <div className='md:w-[45%] flex flex-col'>
              <label htmlFor="address" className='text-base font-semibold mb-5'>Bank Name</label>
              <input 
                type="text" 
                placeholder='Bank Name'
                id='address' 
                value={partnerDate.bankName}
                name="bankName" 
                onChange={handleOnChange}   
                className='bg-white border-black border-[1px] w-full h-12 rounded-lg px-3 outline-none text-black'
              />
            </div>
          </div>

          <div className='flex md:justify-end md:items-end mb-5 justify-center items-center pt-10'>
            <button type='submit' className='flex bg-black p-3 items-center rounded-lg'>{sendIng ? "Submitting..." : "Submite Message" }<FaLongArrowAltRight className='ms-5'/> </button>
          </div>
        </div>

      </form>
      
     </section>
     {isPopupVisible && <ThankYouPopup onClose={handleClosePopup} text={'Thanks for choosing to partner with us'}/>}
     <div className='container mx-auto px-4 flex justify-center items-center flex-col py-10'>
      <h1 className='font-bold text-xl md:text-4xl text-black text-center'>Benefits of Working at Zangapay</h1>

      <div className='text-lg font-medium text-start lg:max-w-[70%] mt-7 space-y-6'>
      <h6><span>1.</span> Competitive Salary and Benefits Package: Earn a competitive salary and comprehensive benefits for financial security and peace of mind always.</h6>

      <h6><span>2.</span> Opportunities for Growth and Professional Development: Advance your career through training, new challenges, and opportunities for progression and success always.</h6>


      <h6><span>3.</span> Dynamic Work Environment with Cutting-Edge Technology: Work with innovative solutions, collaborative tools, and cutting-edge technology for improved productivity always.</h6>

      <h6><span>4.</span> Collaborative and Supportive Team Culture: Be part of a vibrant team with open communication, mutual support, and a sense of belonging always.</h6>

      <h6><span>5.</span>Work-Life Balance and Flexibility: Enjoy flexible working arrangements, remote work options, and flexible hours for personal and professional balance always.</h6>
      </div>
     </div>
     
    </>
  )
}

export default Partner