import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser : (state, {payload}) => {
            state.user = payload
        }
    },
    extraReducers: {}
})

export const { setUser } = user.actions

export const selectUser = (state) => (state.user.user)

export default user.reducer