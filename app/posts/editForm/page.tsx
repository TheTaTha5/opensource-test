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
import deletePost from "../delete";
import { patchPost } from "../patch";

const EditForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const postReducer = useSelector(postSelector);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("is publish == " + postReducer.value.published);
    await patchPost({title:postReducer.value.title, content:postReducer.value.content, id:postReducer.value.id, pub:postReducer.value.published}).then((res) => {
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
          <button
            type="submit"
            className="formButtonSet"
            id="saveButton"
            onClick={() => {router.back();
            }}
          >
            Save
          </button>
          <button
            className="formButtonSet"
            id="cancleButton"
            type="button"
            onClick={() => (dispatch(voidAll()), router.back())}
          >
            Cancle
          </button>
        <button
        type="button"
          className="formButtonSet"
          id="deleteButton"
          onClick={() => {
            (deletePost({id:postReducer.value.id}),
            router.back())
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditForm;
