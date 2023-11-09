import { IPost } from "@/app/interfaces/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { redirect, useRouter } from "next/navigation";
import { fetchingError } from "@/app/errorHander/exceptions";

interface initialState  {
    value: postState
}

interface postState  {
        title:string,
        content:string,
        published:boolean,
        id:string,
        created_at:string,
        term:string
}

const initialState:initialState = {
    value: {
        title:"",
        content:"",
        published:false,
        id:"",
        created_at:"",
        term:""
    }
}

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers: {
        setTitle : (state,action:PayloadAction<string>) => {
            state.value.title = action.payload;
        },
        setContent : (state,action:PayloadAction<string>) => {
            state.value.content = action.payload;
        },
        setID : (state,action:PayloadAction<string>) => {
            state.value.id = action.payload;
        },
        voidAll : (state) => {
            state.value.title = "";
            state.value.content = "";
        },
        submitDraft : (state) => {
            state.value.published = false;
            voidAll();
        },
        isPublished : (state) => {
            state.value.published = true;
        },
        submitPublish : (state) => {
            
            const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "published": true
              });
              const requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
              };
              
            console.log("post id ===" + state.value.id);
            fetch(`https://post-api.opensource-technology.com/api/posts/${state.value.id}`,requestOptions).then((res)=> {
                console.log("publish post now = " + res.body);
                if(res.status==201||200) {
                } else {
                    throw new fetchingError()
                }
            });
            voidAll();
        },
        setTerm : (state,action:PayloadAction<string>) => {
            state.value.term = action.payload;
        }
        },

    }
)
export const postSelector = (state:RootState) => state.postSliceReducer;
export const {setTitle,setContent,voidAll,submitDraft,submitPublish,setID,isPublished,setTerm} = postSlice.actions;
export default postSlice.reducer;