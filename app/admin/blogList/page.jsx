'use client'

import React, { useEffect, useState } from 'react'
import RowItem from "@/Components/RowItem"
import axios from 'axios'
import { toast } from 'react-toastify'
const page = () => {

  const [blogs,setBlogs] = useState([]);

  const deleteBlog = async id => {
    try {
     const {data} = await axios.delete(`/api/blog?id=${id}`)

     if(data.success){
      setBlogs(blogs.filter(item => item._id!== id))
     }


      
    } catch (error) {
      console.log(error.message)
      toast.error('Couldn\'t delete blog, ',error.message )
    }
   
  }

  useEffect(() => {
    const fetchData = async () => {
      const {data:{posts}} = await axios.get('/api/blog')
     
      setBlogs(posts)
    }
    fetchData()
  },[])
  console.log(blogs)
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-12">
  
      <div className="relative border border-gray-400 h-[80vh] max-w-[55rem] overflow-x-auto hide-scrollbar p-4 rounded-lg shadow-lg">
    
        <table className="w-full bg-gray-400 text-sm">
          <thead className="bg-gray-50 text-gray-700 text-left uppercase">
            <tr>
            <th scope='col' className='hidden sm:block px-6 py-3'>Blog Author</th>
            <th className='px-6 py-3'>Blog Title</th>
            <th className='px-6 py-3'>Blog Date</th>
            <th className='px-6 py-3'>Action</th>
            </tr>

          </thead>
          <tbody>
            {blogs?.map(item => (
               <RowItem key={item._id} deleteBlog = {deleteBlog} id={item._id} title={item.title} date={item.date}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default page