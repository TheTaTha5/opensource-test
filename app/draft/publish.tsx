import { fetchingError } from "../errorHander/exceptions";


export const publishDraft = async ({id} : {id:string})  => {
    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
    const raw = 
    JSON.stringify({
      "published": true,
    });
    const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
      };
 const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`, requestOptions).then((result)=> {
    console.log("patch publish to true === "+ id)
    if(!result.ok) {
      throw new fetchingError();
    } 
    return result;
 })

};