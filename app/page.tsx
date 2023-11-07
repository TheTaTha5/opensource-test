import Post from './posts/page';
import postFetcher from './posts/postFetcher';


export default async function Home() {
  return (
    <main>
      <button>
        Create Draft
      </button>
      <div>
        Display publish post
      </div>
      <Post/>
      

    </main>
  )
}
