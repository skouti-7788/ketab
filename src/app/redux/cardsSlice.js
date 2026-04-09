import { createSlice } from "@reduxjs/toolkit";
// import {books} from '../data/database';
import { categories } from "../data/database";
const cardsSlice = createSlice({
    name:'cards',
    initialState:{
        livres:[],
        cards:[],
        search:'',
        categories:categories,
        hidCard:true,
        // OneCard:{},
        hide:true,
        new:0,
        show:0,
        onecat:'',
        // descriptions:booksDescription 
        showSearch:null
        

    },
    reducers:{
            setLivres:(state,action)=>{state.cards = action.payload;state.livres = action.payload},
            Filter:(state,action) =>{state.cards = state.livres.filter((b)=> b.category === action.payload); state.onecat = action.payload},
            AllBooks:(state) => {state.cards = state.livres},
            SearshBar:(state,action)=> {state.cards = state.livres.filter((b)=> b.title.toLowerCase().includes(action.payload.toLowerCase())); state.search = action.payload},

    //         setOneCard:(state,action)=> {state.OneCard = action.payload },
            setHide:(state,action)=> {state.hide = action.payload },
            sethidCard:(state,action)=> {state.hidCard = action.payload },
            setNextNew:(state) => {state.new += 10},
            setBackNew:(state) => {state.new -= 10},
            setNextShow:(state) => {state.show += 10},
            setBackShow:(state) => {state.show -= 10},
            setshowSearch:(state,action)=> {state.showSearch = action.payload },

            // clearNextBack:(state)=>{state.new = 0 ;state.show = 0},
            // setNewBooks:(state)=>{state.cards = books.sort((b ,a)=> new Date(a.creationDate) - new Date(b.creationDate)).slice( state.newB, state.newB+10)},
            // setShowBooks:(state)=>{state.cards = books.sort((b,a)=> a.showLiver - b.showLiver).slice( state.show, state.show+10)},


            // setDescriptions:(state,action)=> {state.descriptions = action.payload },
    }
})
export const {Filter,AllBooks,SearshBar,setOneCard,setHide,sethidCard,
              setNextNew,setBackNew,setBackShow,setNextShow,clearNextBack,
              setshowSearch,setLivres} = cardsSlice.actions;
export default cardsSlice.reducer;