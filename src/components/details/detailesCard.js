import '../../css/detailescard.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams  } from "react-router";
import {setShowrate,setShowFavorite,clearIsShowLivre,
    clearIsRate,setShowOpinion,setShowShare} from '../../app/redux/detailescardSlice';
import opinion from '../../images/opinion.png';
import favorite1 from '../../images/favorite1.png';
import favorite2 from '../../images/favorite2.png';
import rate from '../../images/rate.png';
import share from '../../images/share.png';
import stars from '../../images/star.png';
import { Show } from '../../app/redux/logSlice'
import AchCard from './achCard';
import { useHistory } from '../../app/data/historyData';
import { useCallback, useEffect, useRef,useState } from 'react';
import useLivres from '../../app/data/database';
import axios from '../../api/axios';
import { useFavorite } from '../../app/data/favoriteData';
import { useShowlivres } from '../../app/data/showlivresData';
import { setLire ,setLireFavorite} from '../../app/redux/profileSlice';
export default function DetailesCard(){
    // const { isRate,checkHistory} = useHistory();
    const [star,setStar] = useState(false);
    const { fetchLivres} = useLivres();
    const dispatch = useDispatch();
    const cards = useSelector((state)=> state.cards)
    const detailescard = useSelector((state)=> state.detailescard)
    // const showrate = useSelector((state)=> state.detailescard);
    const ok = useSelector((state)=> state.loguser)
    const profile = useSelector((state)=> state.profile)
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const { id } = useParams()
    const Card = null ;
    const oneCard = { ...Card,...cards.livres.find((c)=> c.id === Number(id))}
    const { checkFavorite ,toggleFavorite, isFavorite} = useFavorite();
    const { addShowlivres }  = useShowlivres();
    
    if (user.id && id &&profile.lire&&ok.ok) {
        addShowlivres(user.id, id);
        dispatch(setLire(false));
    }
    if (  user.id && id && ok.ok) {
        checkFavorite(user.id, id);
    }
    if(detailescard.isRate || detailescard.isShowLivre){
       fetchLivres();
        dispatch(clearIsRate())
        dispatch(clearIsShowLivre())
        setStar(true)
        setTimeout(() => {
            setStar(false)
        }, 2000);
    }

     
         
    

    
       
    
    return(
        <>
       
        <div className="detailes">
            <div className='img'>
                <img src={oneCard.image } alt={oneCard.title}/>
            </div>
            <div className='ifno'>
               <h3>{oneCard.title}</h3>
               <p style={{paddingLeft:'20px'}}>{oneCard.author}</p>
               <div style={{display:'flex',gap:'90px'}}>
                    <div style={{paddingLeft:'40px'}}>
                        <p>category </p>
                        <p>showLiver </p>
                        <p>pages </p>
                        <p>fileSize </p>
                        <p>extension </p>
                        <p>rank </p>
                        <p>prix </p>
                    </div>
                    <div>
                        <p> :{oneCard.category}</p>
                        <p> :{oneCard.showLiver}</p>
                        <p> :{oneCard.pages}</p>
                        <p> :{oneCard.fileSize}</p>
                        <p> :{oneCard.extension}</p>
                        <p style={{}}> :{oneCard.book_rank} <img style={{width:'20px',paddingBottom:'5px'
                            ,transform:star?'scale(1.5)':'none',transition:'transform 0.2s ease',}} src={stars} alt='star'/></p>
                        <p> :{oneCard.prix} DH</p>
                    </div>
               </div>
              
                   
               <div className='btn-book'>
                <p onClick={()=>dispatch(setShowrate({title:oneCard.title,showrate:true,id:oneCard.id}))} ><img style={{width:'20px',marginTop:'-7px'}} src={rate} alt='rate'/> <span>Rate</span></p>
                <p onClick={()=>  {ok.ok?toggleFavorite(user.id,id): dispatch(Show(true)) }} >
                <img style={{width:'20px',marginTop:'-7px'}} src={ isFavorite  ? (favorite1) : favorite2} alt='favorie'/> <span>favorite</span></p>
                <p  onClick={()=> dispatch(setShowOpinion(true))}><img style={{width:'20px',marginTop:'-7px'}} src={opinion} alt='opinion'/> <span>opinions</span></p>
                <p onClick={()=> dispatch(setShowShare(true))} ><img style={{width:'20px',marginTop:'-7px'}} src={share} alt='share'/> <span>share</span></p>
               </div>
            </div>
        </div>
        <div className='discrip'>
            <h4>description</h4>
            <p>Un ouvrage historique narratif qui revisite les Croisades du point 
               de vue arabe, offrant ainsi un récit alternatif à l’histoire traditionnelle.
                Maalouf s’appuie sur des sources authentiques pour révéler la complexité de cette 
                période et mettre en lumière les interactions culturelles et politiques entre l’Orient 
                et l’Occident, loin des stéréotypes habituels. Avec un style clair et profond, il offre au 
                lecteur une compréhension renouvelée d’une époque décisive qui a marqué durablement la mémoire 
                kcollective.</p>
        </div>
        <AchCard/>
        <div className='opinions'>
            <h4>opinions</h4>
            {detailescard.opinions.map((opinion)=>
            <div key={opinion.id} className='opinion'>
                <div className='user'>
                    <img src={opinion.image} alt={opinion.name}/>   
                    <p>{opinion.name}</p> 
                </div>
                <p>{opinion.opinion}</p> 
            </div>)}   
        </div>
        </>
     )
}