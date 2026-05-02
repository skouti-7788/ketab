import '../css/opinion.css'  
import { setShowOpinion } from '../app/redux/detailescardSlice'
import { Show } from '../app/redux/logSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {setIsOpinion} from '../app/redux/detailescardSlice'
export default function Opinion() {
    const showopinion = useSelector((state) => state.detailescard.showopinion)
    const loguser  = useSelector((state) => state.loguser)
    const dispatch = useDispatch()
    const [opnion,setOpinion ] = useState('');
    
    const handleClose = () => {
        dispatch(setShowOpinion(false))
    }

    if (!showopinion) return null
    const handleOpinion = ()=>{
        if(opnion){
        dispatch(setIsOpinion(opnion))
        // console.log(opnion)
        }
        dispatch(Show(loguser.ok?false:true))
         dispatch(setShowOpinion(false))
    }
    return (
        <div className="opinion-overlay" onClick={handleClose}>
            <div className="opinion-modal" onClick={(e) => e.stopPropagation()}>
                
                <button className="opinion-close" onClick={handleClose}>✕</button>
                
                <h5>Ajouter une opinion</h5>
                
                <textarea  
                      value={opnion}
                      onChange={(e)=>setOpinion(e.target.value)}
                    className="opinion-textarea" 
                    placeholder="Écrivez votre avis ici..."
                />
                
                <button 
                    className="opinion-btn" 
                    onClick={handleOpinion}
                >
                    Ajouter
                </button>
            </div>
        </div>
    )
}