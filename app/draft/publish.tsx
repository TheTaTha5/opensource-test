import { fetchingError } from "../errorHander/exceptions";


export const publishDraft = async ({id} : {id:string}) => {
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
    console.log(id);
    console.log("patch publish to true === ")
    // if(result.status != 200) {
    //   throw new fetchingError();
    // }
 }).catch((e)=> {
  if(e) {
    console.log("PulishDraft failed error = = " + e)
  }
 });

};
    

export const echoClick = ({id}:{id:string}) => {
    console.log(id)
};