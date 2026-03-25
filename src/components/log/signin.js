import { useDispatch,useSelector } from "react-redux"
import { Show,Hide,setOk,setVerUser,clearMessage,setemailErr,setpasswordErr
    ,setconfPassword,clearMessageErr} from "../../app/redux/logSlice";
import {setShowFavorite} from '../../app/redux/detailescardSlice';
import { useState } from "react";
import { useLog } from "../../app/data/logData";
import '../../css/signIn.css'
import { useEffect } from "react";
export default function SignIn(){
    const {addUsers,verUser} = useLog();
    const [user,setUser] = useState(
        {
            username:'',
            email:'',
            password:'',
            password_confirmation:'',
        }) ;

    const [veruser,setVeruser] = useState(
        {
            email:'',
            password:'', 
        }) ;
    const [messageErr,setMessageErr] = useState('')
    const show = useSelector((state)=> state.loguser);
    // console.log(show) 
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!show.message) return;
        switch(show.message){
            case "User existe deja":
                alert("User existe deja");
                // console.log("User existe deja")
                dispatch(clearMessage());
                dispatch(Hide(true));
                break;
            case "Utilisateur créé avec succès":
                alert("Utilisateur créé avec succès");
                // console.log("Utilisateur créé avec succès");
                dispatch(clearMessage());
                setUser({
                    username:'',
                    email:'',
                    password:'',
                    password_confirmation:'',
                })
                dispatch(Hide(false));
                
                break;
            case "Login success" :
                alert("Login success");
                // console.log("Login success")
                dispatch(Show(false));
                dispatch(setOk(true));
                dispatch(clearMessage());
                localStorage.setItem("ok", true);
                break;
            case "User not found":
                alert("User not found");
                // console.log("User not found")
                dispatch(clearMessage());
                break;
            case 'Password incorrect':
                  setMessageErr('Password incorrect')
                break;
            default:
                dispatch(clearMessage());
               

        }
    }, [show.message]); 
    const Validation =  ()=>{
        const isEmpty = Object.values(show.hide?user:veruser).every(v => v.trim() !== '') ;
        if(isEmpty){
        const valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(show.hide?user.email:veruser.email);
        if(!valEmail){
            dispatch(setemailErr('email incorrect'))
        }
        const valPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(show.hide?user.password:veruser.password)
        if(!valPassword){
            dispatch(setpasswordErr('password incorrect'))
        }
        if(user.password !== user.password_confirmation){
            dispatch(setconfPassword('password_confirmation incorrect'))
        }
        if(show.hide&& valEmail&&valPassword&&user.password === user.password_confirmation){
            addUsers(user);
            // dispatch(Show(true));
            dispatch(clearMessageErr())
        } 
        if(!show.hide&&valPassword&& valEmail){ 
            // console.log(!show.hide,valPassword,valEmail)
         verUser(veruser);
          setMessageErr('');
        }
    }
    }
   
    return(
    <>
        {show.show&&<div className="sign">
            <div>
                <p onClick={()=>{dispatch(Show(false));dispatch(setShowFavorite(false))}}>x</p>
                <h3 style={{textAlign:'center'}}>inscription</h3>
                <div className="form">
                    {show.hide&&  <><label>username </label>
                    <input value={user.username} type='text' onChange={(e)=>setUser({...user,username:e.target.value})}/></>}

                    <label>email:</label>
                    <input value={show.hide?user.email:veruser.email} onChange={(e)=>show.hide?setUser({...user,email:e.target.value}):setVeruser({...veruser,email:e.target.value})} type='email'/>
                    {show.hide&&show.emailErr&&<p style={{color:'red'}}>{show.emailErr}</p>}

                    <label>password:</label>
                    <input value={show.hide?user.password:veruser.password} onChange={(e)=>show.hide?setUser({...user,password:e.target.value}):setVeruser({...veruser,password:e.target.value})} type='password'/>
                    {show.hide&&show.passwordErr&&<p style={{color:'red'}}>{show.passwordErr}</p>}
                    <p style={{color:'red'}}>{messageErr} </p>

                    {show.hide&&<><label>confirme passsword:</label>
                    <input value={user.password_confirmation} onChange={(e)=>setUser({...user,password_confirmation:e.target.value})} type='password'/></>}
                    {show.hide&&show.confPassword&&<p style={{color:'red'}}>{show.confPassword}</p>}
                    <span>{show.hide?'J\'ai un':'Je n\'ai pas de '}<span style={{color:'blue',cursor:'pointer'}} onClick={()=>dispatch(Hide(!show.hide))}> compte</span></span>
                    <button onClick={Validation}> {show.hide?'create accunte':'sign in'}</button>
                </div>
            </div>
            
        </div>}
    </>
    
    );
}