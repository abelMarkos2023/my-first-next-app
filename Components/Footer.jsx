import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex gap-2 py-5 px-5 justify-around items-center bg-black sm:gap-0 flex-col sm:flex-row ">
        <Image src={assets.logo_light} alt=''/>
        <p className="text-gray-400 text-md font-medium">
          All right recerved &copy; 2024 Blogger
        </p>
        <div className="flex">
          <Image alt='' width={40} src={assets.facebook_icon} />
          <Image alt='' width={40} src={assets.twitter_icon} />
          <Image alt='' width={40} src={assets.googleplus_icon} />

        </div>
    </footer>
  )
}

export default Footer