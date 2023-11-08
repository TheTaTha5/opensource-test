import { useRouter } from "next/router";

 const deletePost = async ({id}:{id:string}) => {
    console.log("DeletePost function called")
    const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`,{
        method:"DELETE"
    })
    if(res.status == 200) {
        console.log("Post Deleted")
        
    }
    location.reload();
}

export default deletePost;