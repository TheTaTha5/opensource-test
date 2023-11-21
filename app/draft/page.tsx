'use client'
import Link from "next/link";
import DisplayDrafts from "./draftFetcher";
import { store } from "../redux/store";
import { voidAll } from "../redux/feature/postSlices";

export default function Home() {
    return (
      <div>
        <Link href={'/'}>DraftMode</Link>
        <Link href="/draft/draftForm"><button className="CreateButton" onClick={()=> store.dispatch(voidAll())}>Create New Draft</button></Link>
        <h1>
          Draft posts
          </h1>
          
          <div className="OutDisplay">
            <DisplayDrafts/>
          </div>
          <div>
          </div>
          <div>
          </div>
        
      </div>
    )
  }
  