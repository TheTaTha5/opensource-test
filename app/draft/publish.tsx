import { fetchingError } from "../errorHander/exceptions";


export const publishDraft = async ({id} : {id:string})  => {
    const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: JSON.stringify({
          "published": true,
        }),
      };
 const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`, requestOptions).then((result)=> {
    console.log("patch publish to true === "+ id)
    if(!result.ok) {
      publishDraft({id:id});
    } else {
      console.log("publish darft succeed " + result.status)
    }
    return result;
 })

};