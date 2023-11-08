import Link from "next/link";
import { echoClick, publishDraft } from "./publish";

export const DraftElement = ({title, content, created_at,key}: {title:string, content:string,created_at:string,key:string}) => {
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
            <button>Edit</button>
            <button id={key} onClick={()=> publishDraft({id:key})}>Publish</button>
            <button>Delete</button>
            </div>
            
        </div>
    )
};
