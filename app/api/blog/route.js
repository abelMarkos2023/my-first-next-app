import { connectToDB } from '@/lib/config/db'
import BlogModel from '@/lib/models/blogModel'

const {NextResponse} =   require('next/server')
import {writeFile} from 'fs/promises'
import fs from 'fs'
import { existsSync } from 'node:fs';

const loadDB = async () => {
    await connectToDB()
}

 loadDB();
export async function GET(request){

    const blogId = request.nextUrl.searchParams.get('id');

    if(blogId){
        try{
            const post = await BlogModel.findById(blogId);
            return  NextResponse.json({
                message:"post loaded successfully",
                success:true,
                post,
                code:200
            })
        }catch(error){
            console.log(error.message)
            return  NextResponse.json({
                message:error.message,
                success:false,
               
                code:204
            })
        }
    }
    else {

        try{
            const posts = await BlogModel.find({});
            return  NextResponse.json({
                message:"posts loaded successfully",
                success:true,
                posts,
                code:200
            })
        }catch(error){
            console.log(error.message)
            return  NextResponse.json({
                message:error.message,
                success:false,
               
                code:204
            })
        }
    }
   
  
}
export async function POST(request){

    const timestamp = Date.now();

    const formData = await request.formData();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer()
    const buffer = Buffer.from(imageByteData);

    const path = `./public/blogPic/${timestamp}_${image.name}`;
    

    // console.log(imgURL)
    const imgURL = `/blogPic/${timestamp}_${image.name}`
    await writeFile(path,buffer)
    const blogData = {
        title : formData.get('title'),
        description : formData.get('description'),
        category : formData.get('category'),
        author : formData.get('author'),
        authorImg : formData.get('authorImg'),
        image : imgURL


    }

   try {
    await BlogModel.create(blogData)
    return NextResponse.json({success:true,msg:"Blog Added Successfully",blogData})
   } catch (error) {
    console.log(error.message)
    return NextResponse.json({success:false,msg:error.message})
   }
    

}

export async function DELETE(request){

    const blogId = request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(blogId);

    if(!blog){
        return NextResponse.json({success:false,msg:"Blog not found"})
    }

    try {
        const blogImagePath = `./public/blogPic/${blog.image}`;
        if(existsSync(blogImagePath)){
            fs.unlinkSync(blogImagePath)  // deletes the file
        }
        await BlogModel.findByIdAndDelete(blogId)
        return NextResponse.json({success:true,msg:"Blog removed Successfully"})
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({success:false,msg:error.message})
    }

}