import { addpost, getpost } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET= async (req:Request)=>{
    try {
        const posts=getpost();
        return NextResponse.json({message:"Ok",posts},{status:200})
    } catch (error) {
        return NextResponse.json({message:error},{status:500})
    }
};
export const POST = async (req: Request) => {
    const { title, desc } = await req.json();
    try {
      const post = { title, desc, date: new Date().toISOString(), id: Date.now().toString() };
      addpost(post);
      return NextResponse.json({ message: "Ok", post }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
    }
  };