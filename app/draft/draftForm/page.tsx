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
    console.log(postReducer.value.published);

    switch (postReducer.value.published) {
      case true:
      await postPost({content:postReducer.value.content,title:postReducer.value.title}).then(async (res)=> { //set ID state
        if(res.ok) {
          console.log(res.body);
          console.log("start patch");
          // console.log("patching post id == " + store.getState().postSliceReducer.value.id);
          await patchPost({content:postReducer.value.content, title:postReducer.value.title, id:store.getState().postSliceReducer.value.id}).then(async (res) => {
           if(res.ok) {
            // await deletePost({id:postReducer.value.id});
           } else {
            throw new fetchingError();
           }
          })
        } else {
          console.log("post result is == " + res.ok)
        }
      });
        break;
      case false:
        const postDraft = fetch(
          "https://post-api.opensource-technology.com/api/posts/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: postReducer.value.title,
              content: postReducer.value.content,
            }),
          }
        ).then(async (res) => {
          console.log(
            "SubmitPublishFunctionCalled status === " + res.status + res.body
          );
          if (!res.ok) {
            throw new fetchingError();
          }
        });
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
        <div>
          <button
            type="submit"
            className="formButtonSet"
            id="saveButton"
            onClick={() => {
              dispatch(submitDraft(),), router.push("/draft");
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
