import '../../css/footer.css';
import k from '../../images/k.png';
import title from '../../images/titlebooks.png';
export default function Fouter(){
    return(
        <div style={{background: '#173f42',color:'white',padding: '20px'}}>
            <h3 style={{padding:' 0 0 2% 5%'}}><img  style={{width:'20px',height:'20px'}} src={k} alt='k'/>e<img style={{width:'25px',marginTop:'-8px'}} src={title} alt='titlebooks'/>ab</h3>
            <div className='footer'>
            <div className='about'>
                <h4>About Ketab</h4>
                   <p>Ketab est une plateforme de bibliothèque en ligne qui
                     rassemble des ouvrages de différents genres et horizons.</p>
                    <p>Notre objectif est de faciliter l’accès à la lecture, que
                         ce soit pour l’apprentissage, la recherche ou le plaisir.</p>
                    {/* <p>Nous mettons en avant des livres soigneusement sélectionnés afin d’offrir une expérience de lecture riche et variée.</p>
                    <p>Chaque lecteur peut découvrir, sauvegarder et revenir facilement à ses titres préférés.</p> */}
            </div>
            <div className='tems'>
                <h4>Terms and Conditions</h4>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
            </div>
            <div className='contact'>
                <h4>Contact Us</h4>
                    <p><i className="bi bi-whatsapp"></i><a style={{textDecoration:'none',color:'white'}} href="https://wa.me/212684386753" target="_blank" rel="noopener noreferrer"> WhatsApp </a></p>
                    <p><i className="bi bi-facebook"></i><a style={{textDecoration:'none',color:'white'}} href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a></p>
                    <p><i className="bi bi-instagram"></i> <a style={{textDecoration:'none',color:'white'}} href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a></p>
                    <p><i className="bi bi-telegram"></i> <a style={{textDecoration:'none',color:'white'}} href="https://t.me" target="_blank" rel="noopener noreferrer"> Telegram</a></p>
                    <p> <i className="bi bi-envelope"></i> <a style={{textDecoration:'none',color:'white'}} href="mailto:radwansakouti@77gmail.com" target="_blank" rel="noopener noreferrer"> radwansakouti@77gmail.com</a></p>
            </div>
            </div>
        </div>
        
        
    );
}