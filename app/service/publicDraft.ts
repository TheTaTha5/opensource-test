// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch } from "../redux/store";
// import { postSelector, setID } from "../redux/feature/postSlices";
// import { fetchingError } from "../errorHander/exceptions";
// import { IPost } from "../interfaces/interface";

//  export const submitPublish = () => {     
//   const dispatch = useDispatch<AppDispatch>();
//   const postReducer = useSelector(postSelector); 
//     const post = fetch("https://post-api.opensource-technology.com/api/posts/",{
//       method: 'POST',
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({
//         title : postReducer.value.title,
//         content : postReducer.value.content
//       })
//     }).then(async (res)=> {
//       console.log("SubmitPublishFunctionCalled status === " + res.status + res.body)
//       if(!res.ok) {
//         throw new fetchingError();
//       } else {
//         const result:IPost = await res.json();
//         dispatch(setID(result.id))
//       }
//     });
//             const myHeaders = new Headers();
//             myHeaders.append("Content-Type", "application/json");
//         const raw = JSON.stringify({
//             "published": true
//           });
//           const requestOptions = {
//             method: 'PATCH',
//             headers: myHeaders,
//             body: raw,
//           };
          
//         console.log("post id ===" + postReducer.value.id);
//         fetch(`https://post-api.opensource-technology.com/api/posts/${postReducer.value.id}`,requestOptions).then((res)=> {
//             console.log("publish post now = " + res.body);
//             if(!res.ok) { //TODO: change because this line will eventually be true 
//             } else {
//                 throw new fetchingError()
//             }
//         });
//         return null;
//     }    