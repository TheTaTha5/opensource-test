"use client";
import Link from "next/link";
import {publishDraft } from "./publish";
import deletePost from "../posts/delete";
import { useRouter } from "next/navigation";
import editPost from "../posts/edit";


export const DraftElement = ({
  title,
  content,
  created_at,
  key,
}: {
  title: string;
  content: string;
  created_at: string;
  key: string;
}) => {
  const router = useRouter();
  const deleteFunc = async ({id}: {id:string}) => {
    const res  = await deletePost({id:id});
    if(res.ok) {
      window.location.reload();
;
    }
  }
  return (
    <div id="cardElement">
      <div id="title">{title}</div>
      <div id="content">{content}</div>
      <div id="created_at">{created_at}</div>
      <div className="Buttons">
        <Link href="/posts/editForm/"><button className="editButton" onClick={() => editPost({ id: key })}>Edit</button></Link>
        <button className="publishButton" id={key} onClick={() => publishDraft({ id: key })}>
          Publish
        </button>
        <button className="deleteButton" onClick={() => (deleteFunc({id:key}))}>
          Delete
        </button>
        <div>
          {key}
        </div>
      </div>
    </div>
  );
};
