
import { fetchingError } from "../errorHander/exceptions";

 const deletePost = async ({id}:{id:string}) => {
    console.log("DeletePost function called")
    const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`,{
        method:"DELETE"
    })
    if(!res.ok) {
        deletePost({id:id});
       

    } else {
        console.log("Post ok = " + res.status);
    }
    return res;
}

export default deletePost;