"use client";

import { postSelector } from "@/app/redux/feature/postSlices";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

const DraftForm = ({
  ftitle,
  fcontent,
}: {
  ftitle?: string;
  fcontent?: string;
}) => {
  const postReducer = useSelector(postSelector);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let raw = JSON.stringify({
      title: title.toString(),
      content: content.toString(),
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const res = await fetch(
      "https://post-api.opensource-technology.com/api/posts",
      requestOptions
    );
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
    if (res.status == 200) {
      console.log("router called");
      console.log(res.body);
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={postReducer.value.content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value="Save" />
        <div>
          <Link href="/draft">Cancle</Link>
          <button>Publish Now</button>
        </div>
      </form>
    </div>
  );
};

export default DraftForm;
