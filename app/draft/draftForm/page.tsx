"use client";

import { IPost } from "@/app/interfaces/interface";
import { postSelector, setContent, submitDraft, submitPublish, setTitle, voidAll, setID, isPublished } from "@/app/redux/feature/postSlices";
import { AppDispatch, store } from "@/app/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DraftForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const postReducer = useSelector(postSelector);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    const raw = 
    JSON.stringify({
      title: postReducer.value.title.toString(),
      content: postReducer.value.content.toString(),
      // published: postReducer.value.published.toString(),
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
    ).then(function(res)
    { 
      console.log(res.status)
      return res.json();
    }).then((resString:IPost) => {
      dispatch(setID(resString.id));
      if(postReducer.value.published === true) {
        dispatch(submitPublish());
      }
    })
  };
  return (
    <div className="Form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={postReducer.value.title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <label>Content</label>
        <textarea
          id="content"
          name="content"
          rows={20}
          value={postReducer.value.content}
          onChange={(e) => dispatch(setContent(e.target.value))}
        />
        <button type="submit"className="formButtonSet" id="saveButton" onClick={()=>{(dispatch(submitDraft()),router.push("/draft"),voidAll())}}>Save</button>
        <button type="submit" className="formButtonSet" id="publishButton"onClick={()=>{(dispatch(isPublished()),router.push("/"))}}>Publish now</button>
        <button type="submit" className="formButtonSet" id="cancleButton" onClick={()=> (dispatch(voidAll()),router.back())}>Cancle</button>
      </form>
    </div>
  );
};

export default DraftForm;
