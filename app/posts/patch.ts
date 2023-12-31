import { submitDraft, voidAll } from "../redux/feature/postSlices";
import { store } from "../redux/store";

export const patchPost = async ({id,title,content,pub}: {id:string,title:string,content:string,pub:boolean}) => {
    // let patchFinish = false;
    console.log("patching => " + store.getState().postSliceReducer.value.id)
    const result = await fetch(`https://post-api.opensource-technology.com/api/posts/${store.getState().postSliceReducer.value.id}`, {
        method : 'PATCH',
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify({
            content : content,
            title : title,
            published : pub
        })
    });
    if(!result.ok) {
        patchPost({id:id,title:title,content:content,pub});
    } 
    // else {
    //     patchFinish = true;
    // }
    console.log("patch ok =="+result.ok);

    return result;
}