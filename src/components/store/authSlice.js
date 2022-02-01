import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth:[]
    },
    reducers:{
        changeHandler(state, action) {


        }

    }
})

export const {changeHandler} = authSlice.actions
export default authSlice.reducer