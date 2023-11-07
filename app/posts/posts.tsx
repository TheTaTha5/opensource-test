'use client';



export default function Post(title:string, content:string) {
    return (
        <main>
            <div>
                 {title}
            </div>
            <div>
                 {content}
            </div>
            <div>
                Date&time
            </div>
            <button>Edit</button>
        </main>
    )
}

