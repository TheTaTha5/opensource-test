


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
            <button>Edit</button>
        </div>
    )
};
