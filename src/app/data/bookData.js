import axios from "../../api/axios";
import { setEmprunter } from "../redux/detailescardSlice";
import { useDispatch, useSelector } from "react-redux";
import { setClose } from "../redux/logSlice";
export default function useBook(){
    const dispatch = useDispatch();
    const emprunter = useSelector((state)=> state.detailescard.emprunter)
    const show = useSelector((state)=> state.loguser)
    // console.log(show.ok)
    const user = JSON.parse( localStorage.getItem("user")) || {};
    // console.log(user)
    const emprunterBook = async () => {
      try{
          const res = await axios.post("/adherents",{
            nom: user.username,
            email: user.email,
            phone: 'form.phone',
            datadahestion:  new Date().toISOString().split('T')[0],
            status: 1,
            livre: 'form.livre',
          });
          //  console.log(res.data.message2);
            if(res.data.message2){
              alert(res.data.message2);
            }
        }catch(err){ 
          console.log("BACKEND RESPONSE:", err.response?.data);
            if(err.response?.data?.message === 'Invalid token'){
              alert("Please log in again");
              dispatch(setClose(true));
            };
        }
       
    } 

    if(emprunter === 'emprunter' && show.ok){
      emprunterBook()
      dispatch(setEmprunter(null))
      
    }
     
   
}
 