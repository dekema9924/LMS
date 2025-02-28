

import { createSlice } from '@reduxjs/toolkit'

interface UserInterface {

        token: string | null
        name: string | null
        username: string | null
        email: string | null
        id: string | null
}
const initialState: UserInterface = {
        token: null,
        name: null,
        username: null,
        email: null,
        id: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialState},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state)=> {
            state.value =  initialState
        }
    }
})

export default userSlice.reducer
export const { login, logout } = userSlice.actions