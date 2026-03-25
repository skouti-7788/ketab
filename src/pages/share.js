import '../css/share.css'; 
import { setShowShare } from '../app/redux/detailescardSlice';
// import {Show} from '../app/redux/logSlice'
import { useDispatch, useSelector } from 'react-redux';
export default function Opinion(){
    const showshare = useSelector((state)=> state.detailescard.showshare);
    const dispatch = useDispatch()
    // const url = ''
    return(
        <>
        {showshare&&<div className="share">
            <p style={{textAlign:'end',paddingRight:'5px',fontSize:'20px',cursor:'pointer'}} onClick={()=>dispatch(setShowShare(false))}>x</p>
            <ul>
                <li>
                    <a className="bi bi-whatsapp" href='https://api.whatsapp.com'  target="_blank" rel="noopener noreferrer"> partager sur WhatsApp
                    </a>
                </li>

                <li>
                    <a className="bi bi-facebook"href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"> partager sur Facebook
                    </a> 
                </li>

                <li> 
                    <a className="bi bi-instagram"href='https://www.instagram.com' target="_blank" rel="noopener noreferrer"> partager sur Instagram</a> 
                </li>

                <li>
                    <a className="bi bi-telegram"href='https://t.me' target="_blank" rel="noopener noreferrer"> partager sur Telegram
                    </a> 
                </li>
             </ul>
        </div>}
        </>
        
    );
}