

 const deletePost = async ({id}:{id:string}) => {
    console.log("DeletePost function called")
    console.log("Deleting" + id)
    const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`,{
        method:"DELETE",
        
    })
    if(res.status !== 204) {
        
        deletePost({id:id});
        
    } else {
        console.log("Delete ok = " + res.status);
        window.location.reload();
    }
    
    return res;
}

export default deletePost;