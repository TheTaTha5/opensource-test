import Link from "next/link";
import DisplayPosts from "./posts/postFetcher";


export default async function Home() {
  return (
    <main>
      <Link href={'/draft/'}>Draft</Link>
      <button className="CreateButton"><Link href="/draft/draftForm">Create New Draft</Link></button>
      <h1>
        Display publish post
        </h1>
        <div>
        <DisplayPosts/>
        </div>
        <div>
        </div>
        <div>
        </div>
    </main>
  )
}
