import { IPost } from "../interfaces/interface";
import { setID } from "../redux/feature/postSlices";
import { store } from "../redux/store"

export const postPost = async ({title,content}: {title:string,content:string}) => {
    const result = await fetch(`https://post-api.opensource-technology.com/api/posts`, {
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify({
            content : content,
            title : title,
        })
    })
    if (!result.ok) {
        postPost({title:title,content:content});
    }
        const res:IPost = await result.json();
        const t = store.dispatch(setID(res.id));
        console.log("id setted  " + store.getState().postSliceReducer.value.id);
        console.log("post ok == "+ result.ok)
        return result;
    
}