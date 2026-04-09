import '../../css/profileCard.css';
import { useDispatch,useSelector } from "react-redux";
import { setShowProfile } from '../../app/redux/profileSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ProfileCard(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const profile = useSelector((state) =>state.profile);
    // console.log(profile);
    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            dispatch(setShowProfile(false));
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
            
            {profile.showProfile&&<div className='profile-card'>
                <h5 style={{cursor:'pointer',textAlign:'end',marginRight:'5px'}} onClick={()=>dispatch(setShowProfile(false))}>x</h5>
                <div className='profile-info'>
                <ul>
                    <li class="item" onClick={() => {navigate('/');dispatch(setShowProfile(false))}}>Home</li>
                    <li class="item" onClick={() => {navigate('/account');dispatch(setShowProfile(false))}}>Account</li>
                    <li class="item" onClick={() => {navigate('/history');dispatch(setShowProfile(false))}}>History</li>
                    <li class="item" onClick={() => {navigate('/favorites');dispatch(setShowProfile(false))}}>Favorites</li>
                    <li class="item" onClick={() => {navigate('/notifications');dispatch(setShowProfile(false))}}>Notifications</li>
                    <li class="item">
                        <label>Background</label>
                        < select style={{marginLeft:'10px',cursor:'pointer'}}>
                            <option value="white">White</option>
                            <option value="black">Black</option> 
                        </select>
                    </li> 
                    <li class="item language">
                        <label>Language</label>
                        <select style={{marginLeft:'10px',cursor:'pointer'}}>
                            <option value="fr">French</option>
                            <option value="ar">Arabic</option>
                        </select>
                    </li>
                    
                </ul>
                </div>
            </div>}
        </>
    );
}