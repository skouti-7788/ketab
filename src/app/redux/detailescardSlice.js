import { createSlice } from "@reduxjs/toolkit";
import {opinions} from '../data/database'
const detailescardSlice = createSlice({
    name:'detailescard',
    initialState:{
        showrate:false,
        opinions:opinions,
        favorie:[],
        showfavorite:null,
        showopinion:false,
        showshare:false,


    },
    reducers:{
            setShowrate:(state,action)=>{state.showrate = action.payload},
            setShowFavorite:(state,action)=>{state.showfavorite = action.payload},
            clearShowFavorite:(state)=>{state.showfavorite = null },
            setShowOpinion:(state,action)=>{state.showopinion = action.payload},
            clearShowOpinion:(state)=>{state.showopinion = null },
            setFavorite:(state,action)=>{state.favorie = action.payload},
            setShowShare:(state,action)=>{state.showshare = action.payload},

    }
})
export const {setShowrate,setFavorite,setShowFavorite,setShowOpinion,setShowShare} = detailescardSlice.actions;
export default detailescardSlice.reducer;