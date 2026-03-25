import { createSlice } from "@reduxjs/toolkit";
const logSlice = createSlice({
    name:'loguser',
    initialState:{
       show:false,
       hide:false,
       ok:localStorage.getItem('ok'),
    //    users:null,
       message:null,
    //    token:localStorage.getItem('verUser')||null,
    //    veruser:''
      emailErr:null,
      passwordErr:null,
      confPassword:null
       
    },
    reducers:{
            Show:(state,action)=>{state.show = action.payload},
            Hide:(state,action)=>{state.hide = action.payload},
            setOk:(state,action)=>{state.ok = action.payload},
            // setUsers:(state,action) => {state.users = action.payload},
            setMessage: (state, action) => {state.message = action.payload;},
            clearMessage:(state) => {state.message = null},
            // addUser:(state,action)=> {state.users =action.payload;},
         //   setVerUser: (state, action) => { state.veruser = action.payload; },
        setemailErr:(state,action)=>{ state.emailErr = action.payload  },
        setpasswordErr:(state,action)=>{ state.passwordErr = action.payload  },
        setconfPassword:(state,action)=>{ state.confPassword = action.payload  },
        clearMessageErr:(state)=>{ state.emailErr = null ; state.passwordErr = null ;state.confPassword = null},



    },
    
})
export const {Show,Hide,setUsers,addUser,setVerUser,setOk,clearMessage,
             setMessage,setemailErr,setpasswordErr,setconfPassword,clearMessageErr} = logSlice.actions;
export default logSlice.reducer;