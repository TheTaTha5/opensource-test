

export const publishDraft = async ({id} : {id:string}) => {

 const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "published": true
    })
 })
 if(res.status) {
    console.log(res.status)
 }
};
    

export const echoClick = ({id}:{id:string}) => {
    console.log(id)
};