import { useEffect,useState } from "react";
import { useShowlivres } from "../app/data/showlivresData";
import useLivres from "../app/data/database";
import BookCard from "../components/home/bookcard";
import '../css/history.css'
import axios from "../api/axios";
export default function History(){
    const [userEmprunts,setUserEmprunts] = useState([])
    const [showHostoy,setShowHostoy] = useState('')
    const { lireShow ,fetchShowlivres } = useShowlivres();
    const {livres} = useLivres() 
    const ok = JSON.parse(localStorage.getItem('ok')) || null
    const iduser =  ok?JSON.parse(localStorage.getItem('user')).id:null
    const idlireShow =  lireShow.map((show)=> show.user_id === iduser?show.livre_id:false)
    const idlireShowBooks = livres.filter((livre) => idlireShow.includes(livre.id));
    const newemprunt = userEmprunts.map((emprunt)=> emprunt.adherent_id === iduser?emprunt.livre_id:false) 
    const idnewemprunt = livres.filter((livre) => newemprunt.includes(livre.id));
    useEffect(()=>{
        fetchShowlivres()
    },[])
    useEffect(()=>{
        const fetchEmprunts = async () => {
            try {
                const res = await axios.get("/emprunts");
                // console.log("Emprunts fetched successfully", res.data);
                setUserEmprunts(res.data)
            } catch (err) {
                console.log("Error fetching emprunts", err.response?.data);
            }
        }
        fetchEmprunts()
    },[])
    const idtelechargements = []
    const idachats =  []
    const [newnhostoy,setNewnhostoy] = useState([...idlireShowBooks])
    const  history = [
        { label:  'Mes lectures', action: () => setNewnhostoy([...idlireShowBooks]) },
        { label:  'Mes téléchargements', action: () => setNewnhostoy([...idtelechargements])},
        { label:  'Mes achats', action: () => setNewnhostoy([...idachats])},
        { label:  'Mes emprunts', action: () =>  setNewnhostoy([...idnewemprunt])},

    ]
    
    return(
        <div className="cards-f">
            <div style={{marginTop:'50px',marginBottom:'50px'}} className='cards-h'>
                <h3>Historique</h3>
                <ul>
                    {history.map((h)=><li key={h.label} onClick={h.action}>{h.label}</li>)}
                </ul>

                {newnhostoy.length > 0 ?
                <div className='cards'>
                    {newnhostoy.map((b)=>
                        
                        <BookCard  key={b.id} book={b}/>
                    )}
                </div>:<span style={{color:'gray',padding:'129px 0',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>Aucun livre</span>}
            </div>
        </div>
    );
}   