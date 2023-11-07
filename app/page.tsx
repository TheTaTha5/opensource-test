import Link from "next/link";
import DisplayPosts from "./posts/postFetcher";

export default async function Home() {
  return (
    <main>
      <Link href={'/draft/'}>Draft</Link>
      <div>
        Display publish post
        <div>
        <DisplayPosts/>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </main>
  )
}
