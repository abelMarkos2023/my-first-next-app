'use client'


import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/Components/Footer'
import { connectToDB } from '@/lib/config/db'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = ({params}) => {

    const [blog,setBlog] = useState({})

  useEffect( () => {
    const fetchBlogData = async () => {
    const {data:{post}} = await axios.get('/api/blog?id='+params.id)
    setBlog(post)
   // await connectToDB()
    }
    fetchBlogData()
   
  },[])

  console.log(blog)

  /*
  mongodb+srv://abelmarkos2023:wwe11@WWE11@cluster01.ccpm02x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01

  */
  console.log(blog.title)
  return (
    <>
    <div className="py-5 px-5 bg-gray-200 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
            <Link href={`/`}>
            <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-auto' />
            </Link>
            <button className="font-medium py-1 px-3 sm:px-6 sm:py-3 flex items-center gap-2 border border-black shadow-md">Get Started <Image src={assets.arrow} /></button>
        </div>
        <div className="text-center py-24">
            <h1 className='text-2xl font-bold sm:text-4xl max-w-[700px] mx-auto'>{blog.title}

            </h1>
            <Image src={blog.author_img} alt='' className='mx-auto mt-6 border border-white rounded-full' width={80} height={80} />
            <p className="text-xl mt-1 text-center max-w-[740px] mx-auto pb-3 font-bold">{blog.author}</p>
        </div>
        <div className="mx-5 md:mx-auto max-w-[800px] mt-[-100px]">
            <Image className='border-4 border-white' src={blog.image} alt='' width={1280} height={740} />
            <h3 className="py-4 text-[26px] font-semibold">Introduction :</h3>
            <p>{blog.description}</p>

            <h3 className="font-semibold my-5 text-[18px]">Step 1 : Lorem, ipsum dolor.</h3>
            <p className="mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam quibusdam consequatur.</p>

            
            <h3 className="font-semibold my-5 text-[18px]">Step 1 : Lorem, ipsum dolor.</h3>
            <p className="mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam quibusdam consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, enim. Suscipit amet impedit illo asperiores nisi, rerum ea beatae libero.</p>

            
            <h3 className="font-semibold my-5 text-[18px]">Step 1 : Lorem, ipsum dolor.</h3>
            <p className="mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam quibusdam consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi enim quidem tempora eos sed voluptatem earum officiis nam blanditiis. Voluptates.</p>
            <h3 className="font-semibold my-5 text-[18px]">Step 1 : Lorem, ipsum dolor.</h3>
            <p className="mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam quibusdam consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi enim quidem tempora eos sed voluptatem earum officiis nam blanditiis. Voluptates Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque unde est sunt reiciendis ea officiis, dolore aut accusamus magnam..</p>

            <h3 className="font-semibold my-5 text-[18px]">Conculosion</h3>
            <p className="mx-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam quibusdam consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi enim quidem tempora eos sed voluptatem earum officiis nam blanditiis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat est, reprehenderit fugit facere quod unde corrupti natus? Pariatur, vitae eligendi.. Voluptates.</p>

            <h2 className="mt-4  font-bold text2xl">Share This Article On Social Medis</h2>
            <div className=" mt-2 flex gap-1">
                <Image width={40} src={assets.facebook_icon} alt=''/>
                <Image width={40} src={assets.twitter_icon} alt=''/>
                <Image width={40} src={assets.googleplus_icon} alt=''/>

            </div>
        </div>
        
    </div>
    <Footer />
    </>
  )
}

export default page