
'use client'
import Link from "next/link";
import { echoClick, publishDraft } from "./publish";
import { useState } from "react";
import { IPost } from "../interfaces/interface";
import  deletePost  from "../posts/delete";
import { useRouter } from "next/navigation";
import  editPost  from "../posts/edit";

export const DraftElement = ({title, content, created_at,key}: {title:string, content:string,created_at:string,key:string}) => {
const router = useRouter();
const handleRefresh = () => {
    router.refresh;
    console.log("router refresh called")
  };

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
            <div className="Buttons">
            <button onClick={()=> editPost({id:key})}>Edit</button>
            <button id={key} onClick={()=> publishDraft({id:key})}>Publish</button>
            <button onClick={()=>(deletePost({id:key}),handleRefresh)}>Delete</button>
            </div>
            
        </div>
    )
};
