import '../../css/panier.css'
import k from '../../images/k.png'
import title from'../../images/titlebooks.png'
import { useDispatch,useSelector } from 'react-redux';
import { Filter,AllBooks,sethidCard,clearNextBack} from '../../app/redux/cardsSlice';
import { Show,setOk,setClose } from '../../app/redux/logSlice';
import {useNavigate} from 'react-router-dom';
// import axios from 'axios';
import{ setShowProfile} from '../../app/redux/profileSlice';
import api from '../../api/axios';
export default function Panier(){
    const books = useSelector((state)=> state.cards)
    const ok = useSelector((state)=> state.loguser)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    //  const logout = async () => {
    //     try {
    //         await axios.post("http://127.0.0.1:8000/api/logout",
    //             {
    //          withCredentials: true
    //         }
    //         );
    //         console.log("Logged out");
    //         dispatch(setOk(false))
    //     } catch (err) {
    //         console.log("Logout failed");
    //     }
    // };
    const logout = async () => {
        try {
            await api.post("/logout");
            localStorage.removeItem('ok');
            localStorage.removeItem('token'); 
            localStorage.removeItem('user');  
            navigate('/')
            dispatch(setOk(false));
        } catch (err) {
            console.log("Logout failed", err.response?.data);
        }
    };  
    // console.log(ok.close)  
    if(ok.close){
        logout();
        dispatch(setClose(null))
    }
     
    return(
       <div className='containre'>
            <div>
                
                <h3><img   style={{width:'20px'}} src={k} alt='k'/>e<img style={{width:'25px',marginTop:'-8px'}} src={title} alt='titlebooks'/>ab</h3>
            </div>
            <ul>
                <li onClick={()=>{navigate('/');}}>Home</li>
                <li>
                    <select style={{border:'none',width:'100px',corsur:'pointer'}} value={books.search} onChange={(e)=>{dispatch(Filter(e.target.value));dispatch(sethidCard(false))}}>
                        <option value='' disabled>Catigorie</option>
                        {books.categories.map((cat)=>
                        <option key={cat.id} value={cat.name}>{cat.name}</option>)}
                    </select>
                </li>
               {/* <li onClick={()=>dispatch(AllBooks())}>tous Catigorie</li>
                <li>searsh</li> */}
               
                {ok.ok&&<li className='Sign-out' onClick={logout}>Sign out</li>}
                <li className='Sign-in' onClick={()=>dispatch(Show(true))}>Sign in </li>
                
               
            </ul>
             {ok.ok&&<div  style={{ cursor: 'pointer', color:'rgba(186, 16, 238, 0.4)',fontSize:'30px'}} className='profile' onClick={()=>dispatch(setShowProfile(true))}>
                {JSON.parse(localStorage.getItem('user')).username.charAt(0).toUpperCase()}</div>}
       </div>);
}