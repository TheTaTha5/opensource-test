import DisplayPosts from "./posts/postFetcher";

export default async function Home() {
  return (
    <main>
      <button>
        Create/Draft
      </button>
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
