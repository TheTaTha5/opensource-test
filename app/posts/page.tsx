'use client';
import postFetcher from "./postFetcher"


export default function Post() {
    return (
        <main>
            <div>
                 title
            </div>
            <div>
                 content
            </div>
            <div>
                Date&time
            </div>
            <button onClick={( )=> postFetcher()}>Edit</button>
        </main>
    )
}

