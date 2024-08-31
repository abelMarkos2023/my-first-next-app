//import Sidebar from "@Components/Sidebar"

import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({children}){

    return (
        <>
        <div className="flex">
            <ToastContainer />
        <Sidebar />
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between py-4 px-2 border-b border-black w-full max-h-[4rem]">
                <h3 className="font-medium">Profile</h3>
                <Image alt="" width={40} src={assets.profile_icon} />
            </div>
            {children}
        </div>
     
        </div>
            
        </>
    )
}