"use client";

import { postSelector, setContent, submitDraft, submitPublish, setTitle, voidAll } from "@/app/redux/feature/postSlices";
import { AppDispatch, store } from "@/app/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DraftForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const postReducer = useSelector(postSelector);

  // const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<string>("");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = 
    JSON.stringify({
      title: postReducer.value.title.toString(),
      content: postReducer.value.content.toString(),
      published: postReducer.value.published.toString(),
    });
    console.log("raw log = "+ raw);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const res = await fetch(
      "https://post-api.opensource-technology.com/api/posts",
      requestOptions
    );
    if (res.status == 200) {
      console.log("router called");
      console.log(res.body);
    } else {
      console.log(res.status)
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={postReducer.value.title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <label>content</label>
        <textarea
          id="content"
          name="content"
          value={postReducer.value.content}
          onChange={(e) => dispatch(setContent(e.target.value))}
        />
        <button onClick={()=>{dispatch(submitDraft())}}><input type="submit" value="Save" /></button>
        <button onClick={()=>{(dispatch(submitPublish()),router.replace('/'))}}><input type="submit" value="Publish Now"  /></button>
        <div>
          <Link href="/draft"><button onClick={()=> dispatch(voidAll())}>Cancle</button></Link>
        </div>
      </form>
    </div>
  );
};

export default DraftForm;
