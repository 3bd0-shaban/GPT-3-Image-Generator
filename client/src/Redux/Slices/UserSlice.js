import { createSlice } from "@reduxjs/toolkit"
const UserSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        token: null,
    },
    reducers: {
        setCredentials(state, action) {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        LogOut(state) {
            state.user = {};
            state.token = null;
        },
    }
})
export const { setCredentials, LogOut } = UserSlice.actions;
export default UserSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
