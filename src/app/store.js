import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from './redux/cardsSlice'
import loguser  from './redux/logSlice';
import detailescardSlice from './redux/detailescardSlice';
import profileSlice from './redux/profileSlice'
const store = configureStore({
    reducer:{
       cards:cardsSlice,
       loguser:loguser,
       detailescard:detailescardSlice,
       profile:profileSlice,
    }
})
export default store;
