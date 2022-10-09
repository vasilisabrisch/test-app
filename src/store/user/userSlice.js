import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        email: undefined,
        phone: undefined,
        firstName: undefined,
        lastName: undefined,
    }
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser : (state, {payload}) => {
            const {email, phone} = payload
            state.user.email = email
            state.user.phone = phone
        }
    },
    extraReducers: {}
})

export const { setUser } = user.actions

export const selectUser = (state) => (state.user.user)

export default user.reducer