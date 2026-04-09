import { useDispatch, useSelector } from "react-redux";
import '../css/rate.css'
import { setRate, setShowrate,clearRate } from "../app/redux/detailescardSlice";
import { Show } from '../app/redux/logSlice'
import { useNavigate } from "react-router";
import {useHistory} from "../app/data/historyData";
import { useEffect } from "react";
// import { useState } from "react";
export default function Rate(){
    // const [i,setI] = useState(null);
    const { checkHistory ,fetchHistory,addHistory} = useHistory();
    const showrate = useSelector((state)=> state.detailescard);
    const showlog = useSelector((state)=> state.loguser);
    // console.log(showrate.showrate.title)
    // const navidate = useNavigate()
    const dispatch = useDispatch();
    const hendleRate =(value)=>{ 
        // fetchHistory();
        const rate = parseFloat(value);
        dispatch(setRate(rate));
        if(showlog.ok){
        if(!showrate.showrate.title &&!rate&&!showrate.showrate.id) return;
        addHistory(showrate.showrate.title,rate,showrate.showrate.id);
        // checkHistory(showrate.showrate.title,0,showrate.showrate.id); 

        }
       
        if(!showlog.ok){ dispatch(Show(true))}
        // navidate('/history')
     
    }; 
    // useEffect(()=>{
    //     if(!showrate.showrate.title ||!showrate.showrate.id) return;
    //     checkHistory(showrate.showrate.title,0,showrate.showrate.id); 
    // },[showrate.showrate])
    return(
        <>
        {showrate.showrate.showrate&&<div className="favorie">
            <h4 style={{textAlign:'end',paddingRight:'5px',cursor:'pointer'}} onClick={()=>dispatch(setShowrate(false))}>x</h4>
            <ul>
                <li  onClick={()=>{hendleRate(5)}}>{'⭐'.repeat(5)}</li>
                <li  onClick={()=>{hendleRate(4)}}>{'⭐'.repeat(4)}</li>
                <li  onClick={()=>{hendleRate(3)}}>{'⭐'.repeat(3)}</li>
                <li  onClick={()=>{hendleRate(2)}}>{'⭐'.repeat(2)}</li>
                <li  onClick={()=>{hendleRate(1)}}>{'⭐'.repeat(1)}</li>
            </ul>
        </div>}
        </>
    )
}