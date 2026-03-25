import { useDispatch, useSelector } from "react-redux";
import '../css/rate.css'
import { setFavorite, setShowrate } from "../app/redux/detailescardSlice";
import { Show } from '../app/redux/logSlice'
import { useNavigate } from "react-router";
// import { useState } from "react";
export default function Favorie(){
    // const [i,setI] = useState(null);
    const showrate = useSelector((state)=> state.detailescard);
    // const showlog = useSelector((state)=> state.loguser);
    // const navidate = useNavigate()
    const dispatch = useDispatch();
    const hendleFavorite =()=>{
        dispatch(Show(true))
    }
    return(
        <>
        {showrate.showrate&&<div className="favorie">
            <h4 style={{textAlign:'end',paddingRight:'5px',cursor:'pointer'}} onClick={()=>dispatch(setShowrate(false))}>x</h4>
            <ul>
                <li  onClick={()=>{dispatch(setFavorite(5));hendleFavorite()}}>{'⭐'.repeat(5)}</li>
                <li  onClick={()=>{dispatch(setFavorite(4));hendleFavorite()}}>{'⭐'.repeat(4)}</li>
                <li  onClick={()=>{dispatch(setFavorite(3));hendleFavorite()}}>{'⭐'.repeat(3)}</li>
                <li  onClick={()=>{dispatch(setFavorite(2));hendleFavorite()}}>{'⭐'.repeat(2)}</li>
                <li  onClick={()=>{dispatch(setFavorite(1));hendleFavorite()}}>{'⭐'.repeat(1)}</li>
            </ul>
        </div>}
        </>
    )
}