import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from './redux/cardsSlice'
import loguser  from './redux/logSlice';
import detailescardSlice from './redux/detailescardSlice';
const store = configureStore({
    reducer:{
       cards:cardsSlice,
       loguser:loguser,
       detailescard:detailescardSlice
    }
})
export default store;
