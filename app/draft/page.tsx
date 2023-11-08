import Link from "next/link";
import DisplayDrafts from "./draftFetcher";

export default function Home() {
    return (
      <div>
        <Link href={'/'}>PostPage</Link>
        <button><Link href="/draft/draftForm">Create New Draft</Link></button>
        <h1>
          Draft posts
          </h1>
          <div>
            <DisplayDrafts/>
          </div>
          <div>
          </div>
          <div>
          </div>
        
      </div>
    )
  }
  