import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-40 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
        balasahebpatil243@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>
        Copyright © 2025 Balasaheb Patil. All Rights Reserved.
        </p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://www.linkedin.com/in/balasaheb-patil-976743222/"><Image className='w-10 h-10' src={isDarkMode ? assets.linkedin_image_dark : assets.linkedin_image} alt=''/></a></li>
            <li><a target='_blank' href="https://github.com/balasahebpatil243"><Image className='w-10 h-10' src={isDarkMode ? assets.github_image_dark : assets.github_image} alt=''/></a></li>
            <li><a target='_blank' href="https://www.instagram.com/mr._patil_24/"><Image className='w-10 h-10' src={isDarkMode ? assets.insta_image_dark : assets.insta_image} alt=''/></a></li>
            <li><a target='_blank' href="https://www.facebook.com/balasaheb.patil.566148"><Image className='w-10 h-10' src={isDarkMode ? assets.facebook_image_dark : assets.facebook_image} alt=''/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
