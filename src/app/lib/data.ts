type Post={
    id:string,
    title:string,
    desc:string,
    date:string,
};
let posts:Post[]=[];
//handlers
export const getpost=()=>posts;
export const addpost=(post:Post)=>
{
    posts.push(post);
}
export const deletepost=(id:string)=>
{
   posts= posts.filter((post)=>post.id!==id)
}
export const updatepost=(id:string,title:string,desc:string)=>
{
   const post= posts.find((post)=>post.id === id);
   if(post)
   {
    post.title=title;
    post.desc=desc;

   }
   else{
    throw new Error("No post found");
   }
}

export const GETbyID =(id:string)=>{
return posts.find((post)=>post.id === id)
}