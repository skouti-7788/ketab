import '../css/opinion.css'; 
import { setShowOpinion } from '../app/redux/detailescardSlice';
import {Show} from '../app/redux/logSlice'
import { useDispatch, useSelector } from 'react-redux';
export default function Opinion(){
    const showopinion = useSelector((state)=> state.detailescard.showopinion);
    const dispatch = useDispatch()
    return(
        <>
        {showopinion&&<div className="input-opinion">
            <p onClick={()=>dispatch(setShowOpinion(false))}>x</p>
            <div className='textarea'>
                <h5>Opinion</h5><br/>
                <textarea placeholder='text...'/>
                <button onClick={()=>dispatch(Show(true))}>ajouter</button>
            </div>
            
        </div>}
        </>
        
    );
}