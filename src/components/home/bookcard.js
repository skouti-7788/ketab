// import useBookCover from './useBookCover';
// import { setOneCard,setHide } from "../../app/redux/cardsSlice";
import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";
export default function BookCard({book}) {
    // const cover = useBookCover(book.title,book.author);
    // console.log(book.image)
    // const dispatch = useDispatch()
    const navigaie = useNavigate()
    return (
        <div className='card'>
            <img
                src={book.image}
                // src={cover}
                alt={book.title}
                // onError={(e) => {
                //     e.target.onerror = null;
                //     e.target.src = `https://placehold.co/200x300/1a472a/ffffff?text=${encodeURIComponent(book.title)}`;
                // }}
            />
            <button className='detail' onClick={()=>{navigaie(`/detailes/${book.id}`)}}>detailes</button>
        </div>
    );
}