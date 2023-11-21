import Link from "next/link";
import editPost from "./edit";
import setFormState from "./edit";
import deletePost from "./delete";
import { store } from "../redux/store";
import { isPublished } from "../redux/feature/postSlices";



export const PostElement = ({title, content, created_at,key}: {title:string, content:string,created_at:string,key:string}) => {

    return (
        <div id="cardElement">
            <div id="title">
                {title}
            </div>
            <div id="content">
                {content}
            </div>
            <div id="created_at">
                {created_at}
            </div>
           <Link href="/posts/editForm/"><button className="editButton" onClick={() => (setFormState({ id: key }),store.dispatch(isPublished()))}>Edit</button></Link>
           <div>
            {key}
           </div>
        </div>
    )
};
