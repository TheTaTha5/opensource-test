"use client"

import Link from "next/link";
import { FormEvent, useState } from "react";

 const  DraftForm = () => {
    const [title,setTitle] = useState<string>('');
    const [content,setContent] = useState<string>('');
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
        "title": title.toString(),
        "content": content.toString()
        });

        let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        };

        fetch("https://post-api.opensource-technology.com/api/posts", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    //     const res = await fetch('https://post-api.opensource-technology.com/api/posts',{

    //         method:'POST',
    //         headers: {
    //             "Content-Type":"application-json"
    //         },
    //         body: JSON.stringify({
    //             "content":content,
    //             "title":title
    //         }),
            

    //     })
    //     if(res.status!= 200) {
    //         console.log(res.status)
    //     }
    }
    return (
        <div>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <label>Title</label>
                <input type="text" id="title" name="title" onChange={(e)=> setTitle(e.target.value)}/>
                <label>content</label>
                <input type="text" id="content" name="content" onChange={(e)=> setContent(e.target.value)}/>
                <input type="submit" value="Save"/>
                <div>
                    <Link href="/draft">Cancle</Link>
                    <button>Publish Now</button>
                </div>
            </form>
        </div>
    )
}

export default DraftForm;