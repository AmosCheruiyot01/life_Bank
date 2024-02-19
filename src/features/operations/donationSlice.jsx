import { createSlice } from "@reduxjs/toolkit"
import { donorData } from "../../DB";;


const initialState = {
    donations: [],
}



const donorSlice = createSlice({
    name: "donor",
    initialState,
    reducers: {
        addDonor(state, action){
            state.donations.push(action.payload)
        }
    }
})

export const {addDonor} = donorSlice.actions;

export default donorSlice.reducer;