import Link from "next/link";
import editPost from "./edit";



export const PostElement = ({title, content, created_at,key}: {title:string, content:string,created_at:string,key:string}) => {
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
           <Link href="/draft/draftForm"><button onClick={() => editPost({ id: key })}>Edit</button></Link>
        </div>
    )
};
