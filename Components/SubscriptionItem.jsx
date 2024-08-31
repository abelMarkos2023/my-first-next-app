import React from 'react'

const SubscriptionItem = ({email,date,id,deleteItem}) => {
  return (
    <tr className="bg-white border-b text-left flex items-center justify-between">
        <th className="px-4 py-6 font-medium text-gray-900">
                {email}
        </th>
        <th className="px-6 py-4 hidden sm:block">
            {new Date(date).toDateString()}
        </th>
        <th className="px-6 py-4 text-2xl cursor-pointer" onClick = {() => deleteItem(id)}>X</th>
    </tr>
  )
}

export default SubscriptionItem