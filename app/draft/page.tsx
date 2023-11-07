import Link from "next/link";
import DisplayDrafts from "./draftFetcher";

export default function Home() {
    return (
      <div>
        <Link href={'/'}>Post</Link>
        <button><Link href="/draft/draftForm">Create New Draft</Link></button>
        <div>
          Display Draft posts
          <div>
            <DisplayDrafts/>
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
  