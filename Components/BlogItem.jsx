import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({item}) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] border border-black bg-white hover:shadow-[7px_7px_0px_#000000] cursor-pointer">
      <Link href={`/blogs/${item._id}`}>
        <Image width={400} height={400} src={item.image} className='border-b border-black' alt=''/>
        <p className="ml-5 mt-5 bg-black text-white inline-block">
            {item.category}
            </p>
            <div className="p-5">
                <h3 className="text-xl tracking-tight text-gray-900 font-bold mb-2">{item.title}
                </h3>
                <p className="text-sm mb-3 tracking-tight text-gray-700">
                    {item.description.slice(0, 100)}...
                    <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Read More</span>
                </p>

                <div className="inline-flex items-center text-center py-3 font-semibold gap-2 cursor-pointer">
                    Read More <Image src={assets.arrow}/>
                </div>
               
            </div>
            </Link>
    </div>
  )
}

export default BlogItem