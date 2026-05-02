import { useDispatch, useSelector } from "react-redux"
import '../css/rate.css'
import { setRate, setShowrate } from "../app/redux/detailescardSlice"
import { Show } from '../app/redux/logSlice'
import { useHistory } from "../app/data/historyData"

export default function Rate() {
    const { addHistory } = useHistory()
    const showrate = useSelector((state) => state.detailescard)
    const showlog = useSelector((state) => state.loguser)
    const dispatch = useDispatch()

    // Extraction s7i7a dyal data
    const rateData = showrate.showrate

    const hendleRate = (value) => {
        const rate = parseFloat(value)
        dispatch(setRate(rate))

        if (showlog.ok) {
            if (!rateData.title || !rateData.id) return
            addHistory(rateData.title, rate, rateData.id)
        } else {
            dispatch(Show(true))
        }
        
        // Close modal après avoir noté
        dispatch(setShowrate(false))
    }

    // Labels m3a les étoiles bach ykunu pro
    const ratingLabels = [
        { value: 5, label: 'Excellent', stars: '⭐⭐⭐⭐⭐' },
        { value: 4, label: 'Très bien', stars: '⭐⭐⭐⭐' },
        { value: 3, label: 'Bien', stars: '⭐⭐⭐' },
        { value: 2, label: 'Moyen', stars: '⭐⭐' },
        { value: 1, label: 'Mauvais', stars: '⭐' },
    ]

    if (!rateData.showrate) return null

    return (
        <div className="rate-overlay" onClick={() => dispatch(setShowrate(false))}>
            <div className="rate-modal" onClick={(e) => e.stopPropagation()}>
                
                <button className="rate-close" onClick={() => dispatch(setShowrate(false))}>
                    ✕
                </button>

                <h4 className="rate-title">Noter ce livre</h4>
                {rateData.title && <span className="rate-subtitle">{rateData.title}</span>}

                <div className="rate-options">
                    {ratingLabels.map((item) => (
                        <div 
                            key={item.value} 
                            className="rate-option" 
                            onClick={() => hendleRate(item.value)}
                        >
                            <span className="rate-option-stars">{item.stars}</span>
                            <span className="rate-option-label">{item.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}