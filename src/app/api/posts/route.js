import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (request)=>{
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    //fetch
    try{
        await connect();
        const posts=await Post.find( username && {username} )
        //if user exist specific post is returned else whole content is returned
        return new NextResponse(JSON.stringify(posts),{status:200});

    }catch(err){
        
        return new NextResponse(`Database Error ${err} `,{status:500});
    }

}
export const POST = async (request)=>{
   const body=await request.json();
   const newPost=new Post(body)
    try{
        await connect();
        await newPost.save();

    }catch(err){
        
        return new NextResponse(`Database Error ${err} `,{status:500});
    }

}