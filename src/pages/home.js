// import Panier from "../components/home/panier";
import ImageBox from "../components/home/imageBox";
import Cards from "../components/home/cards"
import StyleImage from "../components/home/styleimage";
// import Footer from "../components/home/footer"
// import Categorie from "../components/categorie";
export default function Home(){

    return(
        <div>
            <ImageBox/>
           
            {/* <div style={{display:'flex',gap:'3%'}}> */}
                 <Cards/>
                 {/* <Categorie/>
            </div> */}
           
        </div>
    )
}