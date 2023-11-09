import Link from "next/link";
import editPost from "./edit";



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
           <Link href="/draft/draftForm"><button className="editButton" onClick={() => editPost({ id: key })}>Edit</button></Link>
        </div>
    )
};
