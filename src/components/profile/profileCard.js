import '../../css/profileCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { setShowProfile } from '../../app/redux/profileSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setNotification } from '../../app/redux/logSlice'

export default function ProfileCard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile)
    const notification = useSelector((state) => state.loguser.notification)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                dispatch(setShowProfile(false))
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [dispatch])

    const handleNavigate = (path) => {
        navigate(path)
        dispatch(setShowProfile(false))
    }

    if (!profile.showProfile) return null

    return (
        <>
            {/* Invisible overlay to close menu if clicking outside */}
            <div 
                className="profile-overlay" 
                onClick={() => dispatch(setShowProfile(false))} 
            />
            
            <div className="profile-card" onClick={(e) => e.stopPropagation()}>
                <div className="profile-close">
                    <button onClick={() => dispatch(setShowProfile(false))}>
                        ✕
                    </button>
                </div>

                <div className="profile-info">
                    <ul>
                        <li className="item" onClick={() => handleNavigate('/')}>
                            Home
                        </li>
                        <li className="item" onClick={() => handleNavigate('/account')}>
                            Account
                        </li>
                        <li className="item" onClick={() => handleNavigate('/history')}>
                            History
                        </li>
                        <li className="item" onClick={() => handleNavigate('/favorites')}>
                            Favorites
                        </li>
                        <li className="item" onClick={() => {handleNavigate('/notifications');dispatch(setNotification(false))}}>
                            Notifications{notification && <p style={{fontSize:'60px',color:'red',position:'relative',right:'50px',top:'-15px'}}>.</p>}
                        </li>
                    </ul>

                    <div className="profile-settings">
                        <ul>
                            <li className="item">
                                <label>Background</label>
                                <select>
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                </select>
                            </li>
                            <li className="item">
                                <label>Language</label>
                                <select>
                                    <option value="fr">French</option>
                                    <option value="ar">Arabic</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}