import { createSlice } from "@reduxjs/toolkit";
import { requestsData } from "../../DB";


const initialState = {
    requests: []
}

const requestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        addRequest(state, action){
            state.requests.push(action.payload)
        }
    }
})

export const {addRequest} = requestSlice.actions;
export default requestSlice.reducer;