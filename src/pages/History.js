import { useEffect } from "react";
import { useShowlivres } from "../app/data/showlivresData";
import useLivres from "../app/data/database";
import BookCard from "../components/home/bookcard";
export default function History(){
    const { lireShow ,fetchShowlivres } = useShowlivres();
    const {livres} = useLivres() 
    const ok = JSON.parse(localStorage.getItem('ok')) || null
    const iduser =  ok?JSON.parse(localStorage.getItem('user')).id:null
    const idlireShow =  lireShow.map((show)=> show.user_id === iduser?show.livre_id:false)
    const idlireShowBooks = livres.filter((livre) => idlireShow.includes(livre.id));
    useEffect(()=>{
        fetchShowlivres()
    },[])
    return(
        <div style={{marginTop:'50px',marginBottom:'50px'}} className='cards-h'>
            <h3>My history</h3>
            <div className='cards'>
            {idlireShowBooks.map((b)=>
             
                <BookCard  key={b.id} book={b}/>
            )}
            </div>
        </div>
    );
}