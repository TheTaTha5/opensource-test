"use client";
import Link from "next/link";
import { echoClick, publishDraft } from "./publish";
import deletePost from "../posts/delete";
import { useRouter } from "next/navigation";
import editPost from "../posts/edit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setContent, setTitle } from "../redux/feature/postSlices";


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
    <div id="postChild">
      <div>{title}</div>
      <div>{content}</div>
      <div>{created_at}</div>
      <div className="Buttons">
        <Link href="/draft/draftForm"><button onClick={() => editPost({ id: key })}>Edit</button></Link>
        <button id={key} onClick={() => publishDraft({ id: key })}>
          Publish
        </button>
        <Link href="/draft"><button onClick={() => (deletePost({ id: key }))}>
          Delete
        </button></Link>
      </div>
    </div>
  );
};
