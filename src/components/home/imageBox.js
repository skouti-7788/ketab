import '../../css/imageBox.css';
import { useDispatch,useSelector } from 'react-redux';
import { Filter,AllBooks ,SearshBar,sethidCard, setshowSearch} from '../../app/redux/cardsSlice';
export default function ImageBox(){
    const searsh = useSelector((state)=> state.cards.searsh);
    const dispatch  = useDispatch();
    return(
        <div>
            <div className='image-box'>
                <h3>Bibliothèque Ketab</h3>
                <h4 className='h4'>Trouvez votre prochain livre en un instant</h4>

                <input type='text' value={searsh} onChange={(e)=>{dispatch(SearshBar(e.target.value));dispatch(sethidCard(false));dispatch(setshowSearch(true))}}/>
            </div>
            <div className='cont-books'>
                <h4>Catégorie de livres la plus consultée</h4>
                <ul>
                    <li onClick={()=>{dispatch(AllBooks());dispatch(sethidCard(true));dispatch(setshowSearch(false))}}>Livres</li>
                    <li onClick={()=>{dispatch(Filter('Religion'));dispatch(sethidCard(false));dispatch(setshowSearch(false))}}>Livres Religion </li>
                    <li onClick={()=>{dispatch(Filter('Éducation'));dispatch(sethidCard(false));dispatch(setshowSearch(false))}}>Livres Éducation</li>
                    <li onClick={()=>{dispatch(Filter('Générale'));dispatch(sethidCard(false));dispatch(setshowSearch(false))}}>Livres Générale</li>
                    <li onClick={()=>{dispatch(Filter('Histoires'));dispatch(sethidCard(false));dispatch(setshowSearch(false))}}>Livres Histoires</li>
                    <li onClick={()=>{dispatch(Filter('Romans'));dispatch(sethidCard(false));dispatch(setshowSearch(false))}}>Livres Romans</li>
                </ul>
            </div>

        </div>
    
    );
}