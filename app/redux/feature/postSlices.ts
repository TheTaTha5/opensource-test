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
        title:"test1",
        content:"test1",
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
        }
        },

    }
)
export const postSelector = (state:RootState) => state.postSliceReducer;
export const {setTitle,setContent} = postSlice.actions;
export default postSlice.reducer;