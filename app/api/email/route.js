import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";

const { connectToDB } = require("@/lib/config/db")


const loadDB = async() => {
    await connectToDB();
}

loadDB()
export async function GET(request){
try {

    const emails = await EmailModel.find({})
    return NextResponse.json({success:true,emails})
 
    
} catch (error) {
    console.log(error.message)
    toast.error(error.message)
    return NextResponse.json({success:false,message:error.message})
}
}
export async function POST(request){

    const formData = await request.formData();

    const email = formData.get('email');
    try {
        await EmailModel.create({email});
        toast.success('Email Added Successfully')
        return NextResponse.json({success:true,message:"Email Supscribed Successfully"})
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)

        return NextResponse.json({success:false,message:"Failed to add Email"})
    }
}

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');

    try {
        await EmailModel.findByIdAndDelete(id);
        return NextResponse.json({success:true,message:'Email Deleted Successfully'})
        toast.success("Email Deleted Successfully")
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
        return NextResponse.json({success:false,message:error.message})
    }
}