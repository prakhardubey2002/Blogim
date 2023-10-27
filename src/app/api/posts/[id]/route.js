import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (request,{params})=>{
    const {id}=params
    //fetch
    try{
        await connect();
        const posts=await Post.findById(id)
        return new NextResponse(JSON.stringify(posts),{status:200});

    }catch(err){
        
        return new NextResponse(`Database Error ${err} `,{status:500});
    }

}