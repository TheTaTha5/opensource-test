import { submitDraft } from "../redux/feature/postSlices";
import { store } from "../redux/store";

export const patchPost = async ({id,title,content}: {id:string,title:string,content:string}) => {
    // let patchFinish = false;
    console.log("patching " + id)
    const result = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`, {
        method : 'PATCH',
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify({
            content : content,
            title : title,
            published : true
        })
    });
    if(!result.ok) {
        patchPost({id:id,title:title,content:content});
    } 
    // else {
    //     patchFinish = true;
    // }
    console.log("patch ok =="+result.ok);
    return result;
}