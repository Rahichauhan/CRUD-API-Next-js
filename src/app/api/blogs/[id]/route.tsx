import { GETbyID, deletepost, updatepost } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET=async(req:Request)=>{
const id=req.url.split("blogs/")[1];
const post=GETbyID(id);
console.log(id);
if(!post)
{
   return NextResponse.json({Message:"Error"},{status:404})
}
return NextResponse.json({message:"ok",post},{status:200})

}

export const PUT=async(req:Request)=>{
    try {
        const { title, desc } = await req.json();
        const id=req.url.split("blogs/")[1];
        updatepost(id,title,desc);
        return NextResponse.json({message:"ok"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error"},{status:500})
    }
   
}

export const DELETE=async(req:Request)=>{
    try {
        
        const id=req.url.split("blogs/")[1];
        deletepost(id);
        return NextResponse.json({message:"ok"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error"},{status:500})
    }
}
