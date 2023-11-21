import Link from "next/link";
import editPost from "./edit";
import setFormState from "./edit";
import deletePost from "./delete";
import { store } from "../redux/store";
import { isPublished } from "../redux/feature/postSlices";
import { stringify } from "querystring";



export const PostElement = ({title, content, created_at,key}: {title:string, content:string,created_at:string,key:string}) => {
const datation = new Date(created_at);
const ftedDate = [datation.getDate(),"-",datation.getMonth()+1,"-",datation.getFullYear()," ",datation.getHours(),":",datation.getMinutes()].join("");

    return (
        <div id="cardElement">
            <div id="title">
                {title}
            </div>
            <div id="content">
                {content}
            </div>
            <div id="created_at">
                {ftedDate}
            </div>
           <Link href="/posts/editForm/"><button className="editButton" onClick={() => (setFormState({ id: key }),store.dispatch(isPublished()))}>Edit</button></Link>
        </div>
    )
};
