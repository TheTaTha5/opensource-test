'use client'
import { useEffect, useState } from "react";
import { IPosts,IPost } from "../interfaces/interface";
import { PostElement } from "./postElements";



const DisplayPosts = () => {
    const [postsData,setPostsdata] = useState<IPosts>()
    const fetchData = async () => {
        const res = await fetch('https://post-api.opensource-technology.com/api/posts?limit=20')
        if(res.ok) {
            console.log(res.status)
        }
        
        setPostsdata(await res.json())
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            {postsData?.posts.map((post)=> {
        return PostElement({title:post.title, content:post.content, created_at:post.created_at, key:post.id})
    })}
        </div>
    )

}


export default DisplayPosts;