import { useState } from "react";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
// Add relevant imports for slices if needed

export default function useAcheter() {
    const dispatch = useDispatch();
    // Add selectors as needed
    const [achater,setAchater] = useState([])
    const user = JSON.parse(localStorage.getItem("user")) || {};
    // const status_paye = useSelector((state) => state.detailescard.status_paye);
    const fetchAchater = async () => {
        try{
            const res = await axios.get('/acheter')
           setAchater(res.data)  
        }catch(err){
            console.log(err)
        }
    }
    const acheterBook = async (bookId,status,status_paye) => {
         
        try {
            const res = await axios.post("/acheter", {

                user_id: user.id,
                livre_id: bookId,
                date_achat: new Date().toISOString().split('T')[0],
                status:status,
                // status_paye:status_paye
            });
            if (res.data.message) {
                alert(res.data.message);
            }
        } catch (err) {
            console.log("BACKEND RESPONSE:", err.response?.data);
            if (err.response?.data?.message === 'Invalid token') {
                alert("Please log in again");
                // dispatch(setClose(true));
            }
        }
    };


     const updateAcheter = async (id,status_paye) => {
            
        try {
            const res = await axios.put(`/acheter/${id}`, {
                status_paye:status_paye
            });
            if (res.data.message) {
                alert(res.data.message);
            }
        } catch (err) {
            console.log("BACKEND RESPONSE:", err.response?.data);
            if (err.response?.data?.message === 'Invalid token') {
                alert("Please log in again");
                // dispatch(setClose(true));
            }
        }
    };
    // Add logic to trigger acheterBook when needed

    return {achater,fetchAchater, acheterBook,updateAcheter };
}