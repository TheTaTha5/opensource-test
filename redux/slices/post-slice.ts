import { IPost } from "@/app/interfaces/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface initialState {
        value: IPost
}


const initialState = {
    value: {
        id: "",
        title: "",
        content: "",
        published: false,
        created_at: Date.now()
    }
}

export const post = createSlice({
    name: "post",
    initialState:initialState,
    reducers: {
        addPost: (state, action: PayloadAction<IPost>) => {

        }
    }

})