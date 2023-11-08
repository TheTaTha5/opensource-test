"use client"
import DraftForm from "../draft/draftForm/page";
import { IPost } from "../interfaces/interface";

 const editPost = async ({id}: {id:string}) => {
    const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`)
    const post:IPost = await res.json();

    return (
        <div>
            <DraftForm/>
        </div>
    )
}
export default editPost;