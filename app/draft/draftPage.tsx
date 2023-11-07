import Link from "next/link";

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
            <button>Publish</button>
            <button>Delete</button>
            </div>
            
        </div>
    )
};
