import '../../css/cards.css';
import { useDispatch,useSelector } from 'react-redux';
import BookCard from './bookcard'
import {setNextNew,setBackNew,setBackShow,setNextShow}  from '../../app/redux/cardsSlice';
import useLivres from '../../app/data/database';
import { useEffect } from 'react';
import { setLivres } from '../../app/redux/cardsSlice';
export default function Cards(){
    const cards = useSelector((state)=> state.cards)
    // console.log(cards)
    
    const dispatch = useDispatch();
    // console.log('livres :',livres);
    
    // const dispatch = useDispatch();
    // const searsh = useSelector((state)=> state.cards.searsh);
    const books = [...cards.cards];                                                                      
    const newBooks = books.sort((b ,a)=> new Date(a.creationDate) - new Date(b.creationDate)).slice(cards.new,cards.new+10);
    const ShowBooks = books.sort((b,a)=> a.showLiver - b.showLiver).slice(cards.show,cards.show+10);
    // console.log(cards.showSearch);
    return(
        <>
          {books.length > 0?(
            <div className='cards-f'>
              <div  className='cards-h'>
                <h3>{cards.showSearch?'livres':(cards.hidCard?'Nouveaux livres':`categotes ${cards.onecat}`)}</h3>
                <div className='cards'>
                    {newBooks.length > 0?(newBooks.map((b)=>
                    <BookCard key={b.id} book={b}/>
                    )):('Livre introuvable')}
                </div>
                <div className='Next-Back'>
                    {cards.new >0&&<h4 onClick={()=>dispatch(setBackNew())}>Back</h4>}
                    {cards.new+10 !== books.length&&<h4 onClick={()=>dispatch(setNextNew())}>Next</h4>}
                </div>
             
            </div>
                
           {cards.hidCard&&<div  className='cards-h'>
                <h3>livres plus consultée </h3>
                <div className='cards'>
                    {ShowBooks.length > 0?(ShowBooks.map((b)=>
                     <BookCard key={b.id} book={b}/>
                    )):('Livre introuvable')}
                </div>
                <div className='Next-Back'>
                    {cards.show >0 &&<h4 onClick={()=>dispatch(setBackShow())}>Back</h4>}
                    {cards.show+10 !== books.length&&<h4 onClick={()=>dispatch(setNextShow())}>Next</h4>}
                </div>
            </div>}
            
         </div>):(<p style={{textAlign:'center'}} className='loading'>Aucun livre trouvé</p>)}
        </>
        
    );
}