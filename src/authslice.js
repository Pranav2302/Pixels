import {createSlice} from "@reduxjs/toolkit"

const initialState={
    status:false,
    userData:null
}

const authslice =createSlice({  //in slice we write name,initialize,reducers
    name:"auth",
    initialState,
    reducers:{       //we have export reducer and we have export individuals functions 
        login:(state,action)=>{
            state.status=true,
            state.userData=action.payload.userData
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }   

}) 
export const {login,logout} = authslice.actions

export default authslice.reducer