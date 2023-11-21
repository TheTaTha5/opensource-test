"use client";
import Link from "next/link";
import {publishDraft } from "./publish";
import deletePost from "../posts/delete";
import { useRouter } from "next/navigation";
import editPost from "../posts/edit";
import { submitDraft } from "../redux/feature/postSlices";
import { store } from "../redux/store";


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
  const datation = new Date(created_at);
  const ftedDate = [datation.getDate(),"-",datation.getMonth()+1,"-",datation.getFullYear()," ",datation.getHours(),":",datation.getMinutes()].join("");

  return (
    <div id="cardElement">
      <div id="title">{title}</div>
      <div id="content">{content}</div>
      <div id="created_at">{ftedDate}</div>
      <div className="Buttons">
        <Link href="/posts/editForm/"><button className="editButton" onClick={() => (editPost({ id: key }),store.dispatch(submitDraft()))}>Edit</button></Link>
        <button className="publishButton" id={key} onClick={() => (publishDraft({ id: key }),router.push('/'))}>
          Publish
        </button>
        <button type="button" className="deleteButton" onClick={() => (deletePost({id:key}))}>
          Delete
        </button>
      </div>
    </div>
  );
};
