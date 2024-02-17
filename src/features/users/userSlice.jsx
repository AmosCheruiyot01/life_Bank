import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userName: 'amos',
    email: '',
    password: ''
}


const userSlice  = createSlice({
name: "user",
initialState,
reducers:{
    createUser(state, action){
state.userName = action.payload.username;
state.email = action.payload.email;
state.password = action.payload.password;
    }, 
    logOut(state){
initialState
    }
}
})

// action creator
export const {createUser} = userSlice.actions;

export default userSlice.reducer;