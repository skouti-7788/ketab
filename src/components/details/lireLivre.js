import { useSelector, useDispatch } from "react-redux"
import { setLire } from "../../app/redux/profileSlice"
import '../../css/lirelivres.css'
export default function Reader({title,file_url}) {
    const dispatch = useDispatch()

    const showLire = useSelector((state) => state.profile.lire)
    // const book = useSelector((state) => state.books.currentBook)
    // console.log('lirelivres',showLire)

    if (!showLire) return null

    return (
        <>
            {showLire&&<div className="reader-overlay">
                <div className="reader-container">

                    <button
                        className="reader-close"
                        onClick={() => dispatch(setLire(false))}
                    >
                        ✕
                    </button>

                    <h4>{title}</h4>

                    {/* PDF Viewer */}
                    <iframe
                        src={file_url}
                        title="Book Reader"
                        className="reader-frame"
                    />

                </div>
            </div>}
        </>
    )
}