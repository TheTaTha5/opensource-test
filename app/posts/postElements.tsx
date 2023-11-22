import Link from "next/link";
import editPost from "./edit";
import setFormState from "./edit";
import deletePost from "./delete";
import { store } from "../redux/store";
import { isPublished } from "../redux/feature/postSlices";
import { stringify } from "querystring";



export const PostElement = ({title, content, created_at,key,orange}: {title:string, content:string,created_at:string,key:string,orange:boolean}) => {
const datation = new Date(created_at);
function addZeroMinuts(i:any) {
    if (i < 10) {i = "0" + i}
    return i;
  }
const ftedDate = [datation.getDate(),"-",datation.getMonth()+1,"-",datation.getFullYear()," ",datation.getHours(),":",addZeroMinuts(datation.getMinutes())].join("");

    return (
        <div id={orange?"cardElementOrange":"cardElement"}>
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
