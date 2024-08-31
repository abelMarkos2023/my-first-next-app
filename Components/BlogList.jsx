'use client'

import { blog_data } from '@/Assets/assets'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

import BlogItem from './BlogItem'

const BlogList = () => {

   
    const [data,setData] = useState([])
    const [search,setSearch] = useState('all')
     const handleFilter = (category) => {
    //     if(category === 'all'){
    //         setData(blog_data)
    //     }
    //     else{
    //         setData(blog_data.filter(item => item.category === category))
    //     }
    //      setSearch(category)
      }
      useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get('/api/blog');
            setData(response.data.posts)

            
        }
        fetchData();
        console.log(data)
     }, [])

     const filteredData = search === 'all' ? data : data.filter(item => item.category === search)
  return (
    <div>
        <div className="flex items-center justify-center gap-2 px-6 my-10">
            <button onClick={() => setSearch('all')} className={`py-1 px-4 rounded-md ${search === 'all' && 'bg-black text-white'}`}>
                All
            </button>
            <button className={`py-1 px-4 rounded-md ${search === 'Technology' && 'bg-black text-white'}`} onClick={() => setSearch('Technology')}>Technology</button>
            <button className={`py-1 px-4 rounded-md ${search === 'Startup' && 'bg-black text-white'}`} onClick={() => setSearch('Startup')}>Startup</button>
            <button className={`py-1 px-4 rounded-md ${search === 'Lifestyle' && 'bg-black text-white'}`} onClick={() => setSearch('Lifestyle')}>Lifestyle</button>
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 lg:mx-24">
        {
            filteredData?.map(item => (<BlogItem key={item._id} item={item}/>))
        }
        </div>
    </div>
  )
}

export default BlogList