"use client"
import { useDispatch } from "react-redux";
import DraftForm from "../draft/draftForm/page";
import { IPost } from "../interfaces/interface";
import { setContent, setTitle, setID } from "../redux/feature/postSlices";
import { AppDispatch, store } from "../redux/store";
import EditForm from "./editForm/page";


 const setFormState = async ({id}: {id:string}) => {
    const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`)
    const post:IPost = await res.json();
    store.dispatch(setTitle(post.title));
    store.dispatch(setContent(post.content));
    store.dispatch(setID(post.id));
    return (
        <div>
            <EditForm/>
        </div>
    )
}
export default setFormState;