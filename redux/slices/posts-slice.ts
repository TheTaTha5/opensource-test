import { IPosts } from "@/app/interfaces/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface initialState {
        value: IPosts
}


const initialState = {
    value: {
        posts: [],
        page: null,
        limit: null,
        count: null,
        total_page: null,
    }
}

export const post = createSlice({
    name: "post",
    initialState:initialState,
    reducers: {
        addPosts: (state,action) => {
            
        }
    }

})