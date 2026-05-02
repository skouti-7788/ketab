import { createSlice } from "@reduxjs/toolkit";
import { clear } from "@testing-library/user-event/dist/clear";
const detailescardSlice = createSlice({
    name:'detailescard',
    initialState:{
        showrate:false,
        opinions:[],
        rate:0,
        isRate:0,
        favorie:0,
        showfavorite:null,
        showopinion:false,
        showshare:null,
        emprunter:null,
        isShowLivre:null,
        isOpinion:'',


    },
    reducers:{
            setShowrate:(state,action)=>{state.showrate = action.payload},
            setShowFavorite:(state,action)=>{state.showfavorite = action.payload},
            clearShowFavorite:(state)=>{state.showfavorite = null },
            setShowOpinion:(state,action)=>{state.showopinion = action.payload},
            clearShowOpinion:(state)=>{state.showopinion = null },
            setRate:(state,action)=>{state.rate = action.payload},
            setIsRate:(state,action)=>{state.isRate = action.payload},
            setFavorite:(state,action)=>{state.favorie = action.payload},
            clearRate:(state)=>{state.rate = 0},
            clearIsRate:(state)=>{state.isRate = 0},
            setIsShowLivre:(state,action)=>{state.isShowLivre = action.payload},
            clearIsShowLivre:(state)=>{state.isShowLivre = null},
            setShowShare:(state,action)=>{state.showshare = action.payload},
            setEmprunter:(state,action)=>{state.emprunter = action.payload},
            setOpinion:(state,action)=>{state.opinions = action.payload},
            setIsOpinion:(state,action)=>{state.isOpinion = action.payload},
            clearIsOpinion:(state)=>{state.isOpinion = ''},

    }
})
export const {setShowrate,setIsRate,setRate,setShowFavorite,setShowOpinion,setShowShare,setEmprunter,
             setFavorite,clearRate,clearIsRate,setIsShowLivre,clearIsShowLivre,setOpinion,clearIsOpinion
            ,setIsOpinion} = detailescardSlice.actions;
export default detailescardSlice.reducer;