'use client'
import { useEffect, useState } from "react";
import { IPosts,IPost } from "../interfaces/interface";
import { PostElement } from "./postElements";




const PostFetcher = () => {
    const [postsData,setPostsdata] = useState<IPosts>()
    const fetchData = async () => {
        const res = await fetch('https://post-api.opensource-technology.com/api/posts?limit=20')
        if(res.ok) {
            console.log(res.status)
        }
        
        setPostsdata(await res.json())
    }
    useEffect(() => {
        setTimeout(fetchData,200)
        ;
    }, [])
    

    return (
        <div>
            {postsData?.posts.map((post)=> {
        return PostElement({title:post.title, content:post.content, created_at:post.created_at, key:post.id,orange:false})
    })}
        </div>
    )

}


export default PostFetcher;