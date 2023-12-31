import { configureStore } from '@reduxjs/toolkit'
import postSliceReducer from './feature/postSlices'

// ...

export const store = configureStore({
  reducer: {
    postSliceReducer,

  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
