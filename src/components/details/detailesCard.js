import '../../css/detailescard.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams  } from "react-router";
import {setShowrate,setShowFavorite,setShowOpinion,setShowShare} from '../../app/redux/detailescardSlice';
import opinion from '../../images/opinion.png';
import favorite1 from '../../images/favorite1.png';
import favorite2 from '../../images/favorite2.png';
import rate from '../../images/rate.png';
import share from '../../images/share.png';
import { Show } from '../../app/redux/logSlice'
export default function DetailesCard(){
    const cards = useSelector((state)=> state.cards)
    const detailescard = useSelector((state)=> state.detailescard)
    const { id } = useParams()
    const oneCard = cards.cards.find((c)=> c.id === Number(id))
    const dispatch = useDispatch()
    console.log(detailescard.showfavorite)
    return(
        <>
       
        <div className="detailes">
            <div className='img'>
                <img src={oneCard.image} alt={oneCard.title}/>
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
                        <p> :{oneCard.rank}</p>
                        <p> :{oneCard.prix} DH</p>
                    </div>
               </div>
              
                   
               <div className='btn-book'>
                <p onClick={()=>dispatch(setShowrate(true))} ><img style={{width:'20px',marginTop:'-7px'}} src={rate} alt='rate'/> <span>Rate</span></p>
                <p onClick={()=>{dispatch(setShowFavorite(true)); dispatch(Show(true));}} onDoubleClick={()=>dispatch(setShowFavorite())}><img style={{width:'20px',marginTop:'-7px'}} src={detailescard.showfavorite?favorite1:favorite2} alt='favorie'/> <span>favorite</span></p>
                <p  onClick={()=>{dispatch(setShowOpinion(true));}}><img style={{width:'20px',marginTop:'-7px'}} src={opinion} alt='opinion'/> <span>opinions</span></p>
                <p onClick={()=>dispatch(setShowShare(true))} ><img style={{width:'20px',marginTop:'-7px'}} src={share} alt='share'/> <span>share</span></p>
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
        <div className='opinions'>
            <h4>opinions</h4>
            {detailescard.opinions.map((opinion)=>
            <div className='opinion'>
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