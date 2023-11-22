import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSelector, setTitle, voidAll } from "../redux/feature/postSlices";
import { AppDispatch } from "../redux/store";
import { IPosts } from "../interfaces/interface";
import { PostElement } from "../posts/postElements";

export const GetByTermForm = () => {
    const [titlePost,setTitlePost] = useState<IPosts>()
  const dispatch = useDispatch<AppDispatch>();
  const postReducer = useSelector(postSelector);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      `https://post-api.opensource-technology.com/api/posts?term=${postReducer.value.title}`
    );
    setTitlePost(await res.json());
    console.log("Get by term url === " + `https://post-api.opensource-technology.com/api/posts?term=${postReducer.value.title}`);
    dispatch(voidAll());
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div id="formDiv"><input
            id="termInput"
          placeholder="insert title"
          type="text"
          value={postReducer.value.title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <button id="termButton" type="submit">
          Search By Title Name
        </button>
        </div>
      </form>
      <div className="OutDisplay">
        {titlePost?.posts.map((post)=> {
            return PostElement({title:post.title,content:post.content,created_at:post.created_at,key:post.id, orange:true})
        })}
      </div>
    </div>
  );
};
