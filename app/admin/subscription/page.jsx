'use client'

import SubscriptionItem from '@/Components/SubscriptionItem';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { toast } from 'react-toastify';

const page = () => {

  const [emails,setEmails] = useState([]);

  const deleteEmail = async id => {
    try {
     const {data} = await axios.delete(`/api/email?id=${id}`)

     if(data.success){
      setEmails(emails.filter(item => item._id!== id))
     }



      
    } catch (error) {
      console.log(error.message)
      toast.error('Couldn\'t delete blog, ',error.message )
    }
   
  }

  useEffect(() => {
    const fetchData = async () => {
      const {data:{emails}} = await axios.get('/api/email')
     
      setEmails(emails)
    }
    fetchData()
  },[])
  console.log(emails)
  return (
    <div className="flex-1 mt-5 px-5 sm:pt-12 sm:px-16">
      <h2 className="text-2xl forn-bold">All Subscriptions</h2>
      <div className="relative mt-4 max-w-[40rem] h-[80vh] border border-gray-400 rounded-lg shadow-lg">
      <table className="w-full bg-gray-400 text-sm">
          <thead className="bg-gray-50 text-gray-700 text-left uppercase flex items-center justify-between w-full">
            <tr className="bg-gray-50 text-gray-700 text-left uppercase flex items-center justify-between w-full">
            <th scope='col' className='px-6 py-3'>Email Sunbscription</th>
            <th className='px-6 py-3'>Date</th>
            <th className='px-6 py-3'>Action</th>
            </tr>

          </thead>
          <tbody>
        {
          emails?.map(email => (
            <SubscriptionItem deleteItem={deleteEmail} email={email.email} date={email.date} id={email._id} />
          ))
        }

            </tbody>
            </table>
      </div>
    </div>
  )
}

export default page