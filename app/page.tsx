import Link from "next/link";
import DisplayPosts from "./posts/postFetcher";
export default function Home() {
  return (
    <main>
      <Link href={'/draft/'}>PostMode</Link>
      <Link href="/draft/draftForm"><button className="CreateButton">Create New Draft</button></Link>
      <h1>
        Published posts
        </h1>
        <div className="OutDisplay">
        <DisplayPosts/>
        </div>
        <div>
        </div>
        <div>
        </div>
    </main>
  )
}
