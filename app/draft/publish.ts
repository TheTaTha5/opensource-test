export const publishDraft = async ({id} : {id:string}) => {
    console.log(id);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type","application-json")
    const res = await fetch(`https://post-api.opensource-technology.com/api/posts/${id}`,{
        method: "PATCH",
        headers : 
            myHeaders
        ,
        body: JSON.stringify({published : true}),
    }
    )
};

export const echoClick = ({id}:{id:string}) => {
    console.log(id)
};