'use client'
import { useEffect, useState } from "react";
import { IPosts,IPost } from "../interfaces/interface";
import { PostElement } from "../posts/postElements";
import { DraftElement } from "./draftPage";



const DisplayDrafts = () => {
    const [draftData,setdraftdata] = useState<IPosts>()
    const fetchData = async () => {
        const res = await fetch('https://post-api.opensource-technology.com/api/posts/draft')
        if(res.ok) {
            console.log(res.status)
        }
        
        setdraftdata(await res.json())
    }
    useEffect(() => {
        setTimeout(fetchData,200)
    }, [])

     
    return (
        <div>
            {draftData?.posts.map((draft)=> {
        return DraftElement({title:draft.title, content:draft.content, created_at:draft.created_at, key:draft.id})
    })}
        </div>
    )

}


export default DisplayDrafts;