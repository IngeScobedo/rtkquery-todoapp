import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  finished: [],
  onProgress: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state) => {
      state.onProgress.push({
        text: 'New Message'
      })
    }
  }
})

export const { add } = todosSlice.actions

export default todosSlice.reducer
