import { IPost } from "@/app/interfaces/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface initialState  {
    value: postState
}

interface postState  {
        title:string,
        content:string,
        published:boolean,
        id:string,
        created_at:string,
}

const initialState:initialState = {
    value: {
        title:"",
        content:"",
        published:false,
        id:"",
        created_at:"",
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
        voidAll : (state) => {
            state.value.title = "";
            state.value.content = "";
        },
        submitPublish : (state) => {
            state.value.published = true;
            voidAll();
        },
        submitDraft : (state) => {
            state.value.published = false;
            voidAll();
        }
        },

    }
)
export const postSelector = (state:RootState) => state.postSliceReducer;
export const {setTitle,setContent,voidAll,submitDraft,submitPublish} = postSlice.actions;
export default postSlice.reducer;