'use client'

import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Header = () => {

  const [email,setEmail] = useState('')

  const handleFormSubmision = async e => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('email',email);
    try {
      const {data} = await axios.post('/api/email',formData);
      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }


  }
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
            <button className='py-1 px-3 sm:py-3 sm:px-6 flex gap-2 items-center border boreder-solid border-black shadow-[7px_7px_0px_#000000] font-medium'>Get Started <Image src={assets.arrow} /></button>
        </div>
        <div className="text-center my-8">
            <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>
            <p className="mt-8 max-w-[740px] m-auto text-xs sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo eum illo officiis nobis natus molestiae odit, officia e Ab.</p>
            <form onSubmit={handleFormSubmision} className="mt-8 flex justify-between max-w-[500px] mx-auto scale-75 sm:scale-100 border border-black">
                <input type="email" name="
                " id="" onChange={e => setEmail(e.target.value)}
                value={email} className="pl-4 outline-none flex-1" />
                <button type='submit' className="py-4 px-4 border border-1 border-black sm:px-8">Subscribe</button>
            </form>

        </div>
    </div>
  )
}

export default Header