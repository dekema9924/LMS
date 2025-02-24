

import { createSlice } from '@reduxjs/toolkit'

interface UserInterface {

        token: string | null
        name: string | null
        username: string | null
        email: string | null
}
const initialState: UserInterface = {
        token: null,
        name: null,
        username: null,
        email: null,
}


export const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialState},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    }
})

export default userSlice.reducer
export const { login } = userSlice.actions