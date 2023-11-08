 const deletePost = async ({id}:{id:string}) => {
    console.log("DeletePost function called")
    const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`,{
        method:"DELETE"
    })
    if(res.status == 200) {
        console.log("Post Delete")
    }
}

export default deletePost;