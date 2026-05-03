import { useSelector, useDispatch } from "react-redux"
import { setLire } from "../../app/redux/profileSlice"
import '../../css/lirelivres.css'
import { useState, useEffect } from "react"

export default function Reader({ title, file_url }) {
    const dispatch = useDispatch()
    const showLire = useSelector((state) => state.profile.lire)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (showLire) {
            setLoading(true);  
        }
    }, [showLire]);

    if (!showLire) return null;

    return (
        <div className="reader-overlay">
            <div className="reader-container">

                <button
                    className="reader-close"
                    onClick={() => dispatch(setLire(false))}
                >
                    ✕
                </button>

                <h4>{title}</h4>

                {loading && (
                    <div className="loading">
                        <div className="spinner"></div>
                    </div>
                )}

                <iframe
                    src={file_url}
                    title="Book Reader"
                    className="reader-frame"
                    onLoad={() => setLoading(false)}
                />

            </div>
        </div>
    );
}