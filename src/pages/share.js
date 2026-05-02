import '../css/share.css'  
import { setShowShare } from '../app/redux/detailescardSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Share() {
    const showshare = useSelector((state) => state.detailescard.showshare)
    const dispatch = useDispatch()

    // Récupérer l'URL actuelle pour la partager correctement
    const currentUrl = encodeURIComponent(window.location.href)

    if (!showshare) return null

    return (
        <div className="share-overlay" onClick={() => dispatch(setShowShare(false))}>
            <div className="share-modal" onClick={(e) => e.stopPropagation()}>
                
                <button className="share-close" onClick={() => dispatch(setShowShare(false))}>
                    ✕
                </button>

                <h4 className="share-title">Partager ce livre</h4>

                <ul className="share-links">
                    <li>
                        <a 
                            className="share-link-item bi bi-whatsapp" 
                            href={`https://api.whatsapp.com/send?text=Regarde ce livre incroyable : ${currentUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span>Partager sur WhatsApp</span>
                        </a>
                    </li>

                    <li>
                        <a 
                            className="share-link-item bi bi-facebook" 
                            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span>Partager sur Facebook</span>
                        </a>
                    </li>

                    <li> 
                        <a 
                            className="share-link-item bi bi-instagram" 
                            href="https://www.instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span>Partager sur Instagram</span>
                        </a>
                    </li>

                    <li>
                        <a 
                            className="share-link-item bi bi-telegram" 
                            href={`https://t.me/share/url?url=${currentUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span>Partager sur Telegram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}