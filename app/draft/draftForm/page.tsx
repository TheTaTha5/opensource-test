"use client"
import { METHODS } from "http";
import Link from "next/link";
import { useState } from "react";

 const  DraftForm = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const handleSubmit = async () => {
        let res = await fetch('https://post-api.opensource-technology.com/api/posts', {
            method: "POST",
            body: JSON.stringify(
                {
                    content:content,
                    title:title,
                    
                }
            ),
            headers: {"accept": "application-json",
            "Content-Type":"application-json"
        }
        }).catch((e)=>console.log(e));
    }
    return (
        <div>
            <form onSubmit={()=>handleSubmit()}>
                <label>Title</label>
                <input type="text" id="title" name="title" onChange={(e)=> setTitle(e.target.value)}/>
                <label>content</label>
                <input type="text" id="content" name="content" onChange={(e)=> setContent(e.target.value)}/>
                <input type="submit" value="Save" />
                <div>
                    <Link href="/draft">Cancle</Link>
                    <button>Publish Now</button>
                </div>
            </form>
        </div>
    )
}

export default DraftForm;