"use client"
import { useDispatch } from "react-redux";
import DraftForm from "../draft/draftForm/page";
import { IPost } from "../interfaces/interface";
import { setContent, setTitle } from "../redux/feature/postSlices";
import { AppDispatch, store } from "../redux/store";


 const editPost = async ({id}: {id:string}) => {
    console.log("EditPost called");
    const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`)
    const post:IPost = await res.json();
    store.dispatch(setTitle(post.title));
    store.dispatch(setContent(post.content));
    return (
        <div>
            <DraftForm/>
        </div>
    )
}
export default editPost;