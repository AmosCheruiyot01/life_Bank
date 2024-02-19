import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice"
import donorReducer from "./features/operations/donationSlice"
import requestReducer from "./features/operations/requestSlice"
const store = configureStore({
    reducer: {
user: userReducer,
donor: donorReducer,
request: requestReducer
    }
})

export default store;