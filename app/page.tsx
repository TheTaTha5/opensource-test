'use client'
import Link from "next/link";
import DisplayPosts from "./posts/postFetcher";
import { store } from "./redux/store";
import { voidAll } from "./redux/feature/postSlices";
export default function Home() {
  return (
    <main>
      <Link href={'/draft/'}>PostMode</Link>
      <Link href="/draft/draftForm"><button className="CreateButton" onClick={()=> {store.dispatch(voidAll())}}>Create New Draft</button></Link>
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
