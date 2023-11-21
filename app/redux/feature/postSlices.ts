import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
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
            console.log("ID settedi in slice == " + action.payload)
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
        setTerm : (state,action:PayloadAction<string>) => {
            state.value.term = action.payload;
        },

        },

    }
)
export const postSelector = (state:RootState) => state.postSliceReducer;
export const {setTitle,setContent,voidAll,submitDraft,setID,isPublished,setTerm} = postSlice.actions;
export default postSlice.reducer;