import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-4 border border-black">
        <Image alt='' src={assets.logo} width={120}/>
      </div>
      <div className="relative py-12 w-28 border border-black sm:w-80 h-[100vh]">
        <div className="w-80 sm:w-60 absolute right-0">
          <Link href={`/admin/addBlog`}>
        <div className="flex items-center gap-2 font-medium py-2 px-3 border border-black shadow-[-3px_3px_0px_#000000] cursor-pointer">
          <Image alt='' src={assets.add_icon} width={28} />
          <p>Add a Post</p>
        </div>
        </Link>
        <Link href={`/admin/blogList`}>
        <div className="mt-4 flex items-center gap-2 font-medium py-2 px-3 border border-black shadow-[-3px_3px_0px_#000000] cursor-pointer">
          
          <Image alt='' src={assets.blog_icon} width={28} />
          <p>Blog List</p>
          
         
        </div>
        </Link>
        <Link href={`/admin/subscription`}>
        <div className="mt-4 flex items-center gap-2 font-medium py-2 px-3 border border-black shadow-[-3px_3px_0px_#000000] cursor-pointer">

         
          <Image alt='' src={assets.email_icon} width={28} />
          <p>Subscriptions</p>
          
         
        </div>
        </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar