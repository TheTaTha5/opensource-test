"use client";
import Link from "next/link";
import { echoClick, publishDraft } from "./publish";
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

  return (
    <div id="cardElement">
      <div id="title">{title}</div>
      <div id="content">{content}</div>
      <div id="created_at">{created_at}</div>
      <div className="Buttons">
        <Link href="/draft/draftForm"><button className="editButton" onClick={() => editPost({ id: key })}>Edit</button></Link>
        <button className="publishButton" id={key} onClick={() => publishDraft({ id: key })}>
          Publish
        </button>
        <Link href="/draft"><button className="deleteButton" onClick={() => (deletePost({ id: key }))}>
          Delete
        </button></Link>
      </div>
    </div>
  );
};
