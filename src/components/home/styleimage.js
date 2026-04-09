import { useSelector } from "react-redux"
import '../../css/styleimage.css'
import { useEffect, useState,useRef } from "react";
export default function StyleImage(){
    const livres = useSelector((state)=> state.cards.livres);
    const books =[...livres] 
    const sortlivrews = books.sort((b ,a)=> new Date(a.creationDate) - new Date(b.creationDate)).slice(0,6);
    const newimage = sortlivrews.map((b)=> b.image);
      // PRO pattern generator
    function getPattern(step, n = 5) {
        return Array.from({ length: n }, (_, i) => {
            return ((step + i) % n) + 1;
        }).reverse();
    }
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 5);
        }, 2500);

        return () => clearInterval(interval);
    }, []);
    const order = getPattern(step, 5);
    // const scrollRef = useRef();

    // function scrollLeft() {
    // scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    // }
    // function scrollRight() {
    // scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    // }
    return (
        <div className="styleimage" >
            {order.map((pos, i) => (
                <img
                    key={i}
                    src={newimage[pos - 1]}
                    alt=""
                    className={i === 2 ? "center-img" : i=== 0 || i === 4 ? "img" : ""}
                />
            ))}
        </div>
    );
}