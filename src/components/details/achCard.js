import '../../css/achCard.css';
import { setEmprunter } from '../../app/redux/detailescardSlice';
import { useDispatch, useSelector } from "react-redux";
import { Show } from '../../app/redux/logSlice';
import useBook from '../../app/data/bookData';
import { setLire } from '../../app/redux/profileSlice';

export default function AchCard(){
    useBook();
   
    const ok = useSelector((state)=> state.loguser.ok)
    const dispatch = useDispatch();
    return(
        <div className='achcard'>
            <div className='achcard-info'>
                <button onClick={()=> dispatch(setLire(true))}>Lire</button>
                <button>Télécharger</button>
                <button  onClick={()=>{dispatch(setEmprunter('emprunter'));dispatch(Show(ok?null:true))}}>Emprunter</button>
                <button>Acheter</button>
            </div>
        </div>
    );
}