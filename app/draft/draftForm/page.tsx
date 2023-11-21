"use client";

import { fetchingError } from "@/app/errorHander/exceptions";
import { IPost } from "@/app/interfaces/interface";
import {
  postSelector,
  setContent,
  submitDraft,
  setTitle,
  voidAll,
  setID,
  isPublished,
} from "@/app/redux/feature/postSlices";
import { AppDispatch, store } from "@/app/redux/store";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { publishDraft } from "../publish";
import deletePost from "@/app/posts/delete";
import { patchPost } from "@/app/posts/patch";
import { postPost } from "@/app/posts/post";

const DraftForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const postReducer = useSelector(postSelector);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("post reducer publish == " + postReducer.value.published);

    switch (postReducer.value.published) {
      case true:
      await postPost({content:postReducer.value.content,title:postReducer.value.title}).then(async (res)=> { //set ID state
        if(res.ok) {
          console.log(res.body);
          console.log("start patch");
          await patchPost({content:postReducer.value.content, title:postReducer.value.title, id:store.getState().postSliceReducer.value.id, pub:true}).then(async (res) => {
           if(!res.ok) {
            throw new fetchingError();
           }
          })
          router.push("/");
        } else {
          console.log("post result is == " + res.ok)
        }
      });
        break;
      case false:
        console.log("false publish case => post reducer publish == " + postReducer.value.published);
        await postPost({content:postReducer.value.content,title:postReducer.value.title}).then((res)=> {
          console.log("resok == " +res.ok);
          if(res.ok) {
            dispatch(voidAll());
            router.push("/draft");
          }
        })
        break;
    }
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
        <div className="saveAndCancle">
          <button
            type="submit"
            className="formButtonSet"
            id="saveButton"
            onClick={() => {
              dispatch(submitDraft(),);
            }}
          >
            Save
          </button>
          <button
            className="formButtonSet"
            id="cancleButton"
            type="button"
            onClick={() => (dispatch(voidAll()), router.replace("/"))}
          >
            Cancle
          </button>
        </div>

        <button
          type="submit"
          className="formButtonSet"
          id="publishButton"
          onClick={() => {
            dispatch(isPublished());
          }}
        >
          Publish now
        </button>
      </form>
    </div>
  );
};

export default DraftForm;
