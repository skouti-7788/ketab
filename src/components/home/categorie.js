// import '../../css/categorie.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { Filter } from '../app/redux/cardsSlice';
// export default function Categorie(){
//     const books = useSelector((state)=> state.cards.cards);
//     const dispatch = useDispatch()
//     const newbooks = [...new Set(books.map((b)=>b.category))];    
//     return(
//         <div className='categorie'>
//             <h3>Categorie</h3>
//             <div style={{marginTop:'30px',paddingLeft:'15px'}}>
//                 {newbooks.map((b,index)=>
//                 <div key={index} style={{marginTop:'30px' }}>
//                 <div style={{display:'flex',justifyContent:'space-between'}}><p onClick={()=>dispatch(Filter(b))}>{b}</p><span >{books.filter((c)=> c.category=== b).length}</span></div>
//                 <hr/>
//                 </div>
//                 )}
//             </div>
            
//         </div>
//     );
// }