'use client'
import { useEffect, useState } from "react";
import { IPosts,IPost } from "../interfaces/interface";



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

     const PostElement = ({title, content, created_at,key}: {title:string, content:string,created_at:string,key:string}) => {
        return (
            <div id="postChild">
                <div>
                    {title}
                </div>
                <div>
                    {content}
                </div>
                <div>
                    {created_at}
                </div>
                <button>Edit</button>
            </div>
        )
    };
    return (
        <div>
            {postsData?.posts.map((post)=> {
        return PostElement({title:post.title, content:post.content, created_at:post.created_at, key:post.id})
    })}
        </div>
    )

}


export default DisplayPosts;