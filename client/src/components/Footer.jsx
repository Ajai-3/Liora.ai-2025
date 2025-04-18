import React from 'react'
import { useNavigate } from 'react-router-dom'
import images from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faFacebook, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-wrap items-center justify-between px-6 my-6 sm:px-10 md:px-14 lg:px-28'>
        <div onClick={() => {
            window.scrollTo(0, 0); navigate("/")
        }} className='flex gap-0 sm:gap-1 items-center py-4 cursor-pointer'>
        <img src={images.logo} alt="Logo" className="h-8 w-8 lg:h-10 lg:w-10" />
        <p className="text-xl font-bold sm:text-xxl md:text-2xl lg:text-3xl">
          Liora.Ai 
        </p>
        </div>
        <span className='text-zinc-600 text-md'>| Copyright @Liora.Ai | All rights reserved</span>
        <div className='flex gap-4 mt-6'>
        <FontAwesomeIcon icon={faDiscord} className='text-2xl' />
           <FontAwesomeIcon icon={faXTwitter} className='text-2xl' />
           <FontAwesomeIcon icon={faInstagram} className='text-2xl' />
           <FontAwesomeIcon icon={faFacebook} className='text-2xl' />
           <FontAwesomeIcon icon={faLinkedin} className='text-2xl' />
        </div>
    </div>
  )
}

export default Footer