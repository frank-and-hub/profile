import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
})

const usersSlice = createSlice({
    name: 'userDetails',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {
        currentUser: () => { },
        addNewUser: () => { },
        removeUser: () => { },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.list = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
            })
    },
})

export const { currentUser, addNewUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
