'use client'

import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddPost = () => {
  const [img,setImg] = useState({url:assets.upload_area,file:null})
  const [data,setData] = useState({title:'',description:'',category:''})

  const handleImageUpload = e => {
    const url = URL.createObjectURL(e.target.files[0])
    setImg({url,file:e.target.files[0]})
  }

  const handleInputChanges = e => {
    let name = e.target.name;
    let value = e.target.value;

    setData({...data,[name]:value})
  }

  const handleFormSubmision = async e => {
    e.preventDefault();
    console.log(data)
    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('image',img.file);
    formData.append('author','abel Markos');
    formData.append('authorImg','avatar.png');
    try {
      const response = await axios.post('/api/blog',formData);
      console.log(response.data)
   
      if(response.data.success){
        toast.success(`post ${data.title} added successfully`)
        setData({title:'',description:'',category:''})
        setImg({url:assets.upload_area,file:null})
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }

  
  }
  return (
   <>
    <form className="pt-3 px-5 sm:pt-8 pl-16" onSubmit={handleFormSubmision}>
      <p className="text-xl mb-4">Upload Thumbnail</p>
      <label htmlFor="thumbnail" className='cursor-pointer'>
        <Image alt='' src={img.url} width={180} height={50} />
      </label>
      <input type="file" name="image" id="thumbnail" onChange={handleImageUpload} hidden  />
      <p className="mt-3 text-xl">Post Title</p>
      <input onChange={handleInputChanges}
       name='title' 
        type="text" 
       className="w-full sm:w-[500px] p-3 mt-3 border border-blue-600 rounded-lg outline-none" 
       placeholder='Post Title.....' 
       value={data.title}/>
      <p className="mt-3 text-xl">Post Description</p>
      <textarea onChange={handleInputChanges}
       name='description' 
       type="text" 
       className="w-full outline-none sm:w-[500px] p-3 mt-3 border border-blue-600 rounded-lg" 
       defaultValue={data.description}
        placeholder='Post Description.....' rows='4'></textarea>
      <p className="mt-3 text-xl">Post Category</p>
      <select onChange={handleInputChanges}
       className="w-full sm:w-[500px] outline-none p-3 mt-3 border border-blue-600 rounded-lg" 
       name='category'
        value={data.category}>
        <option>Startup</option>
        <option>Technology</option>
        <option>Lifestyle</option>
        <option>Sports</option>
        <option>Economy</option>
        <option>Entertainment</option>

      </select>
      <button className="py-3 px-6 shadow-lg rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-800 transition text-white mt-4  block">Publish</button>
    </form>
   </>
  )
}

export default AddPost