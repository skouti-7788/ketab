import '../../css/footer.css'
import KitabLogo from './KitabLogo'
export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-container">
            <div className="footer-logo">
                 <KitabLogo/>
            </div>

            <div className="footer">
                <div className="about">
                    <h4>À propos de Ketab</h4>
                    <p>
                        Ketab est une plateforme de bibliothèque en ligne qui
                        rassemble des ouvrages de différents genres et horizons.
                    </p>
                    <p>
                        Notre objectif est de faciliter l'accès à la lecture, que
                        ce soit pour l'apprentissage, la recherche ou le plaisir.
                    </p>
                </div>

                <div className="terms">
                    <h4>Informations</h4>
                    <p>Politique de confidentialité</p>
                    <p>Conditions d'utilisation</p>
                    <p>Mentions légales</p>
                    <p>FAQ</p>
                </div>

                <div className="contact">
                    <h4>Contact</h4>
                    <p>
                        <i className="bi bi-whatsapp"></i>
                        <a href="https://wa.me/212684386753" target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a>
                    </p>
                    <p>
                        <i className="bi bi-facebook"></i>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </p>
                    <p>
                        <i className="bi bi-instagram"></i>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </p>
                    <p>
                        <i className="bi bi-telegram"></i>
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                            Telegram
                        </a>
                    </p>
                    <p>
                        <i className="bi bi-envelope"></i>
                        <a href="mailto:radwansakouti@77gmail.com" target="_blank" rel="noopener noreferrer">
                            radwansakouti@77gmail.com
                        </a>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} Ketab. Tous droits réservés.</p>
                <p>
                    Fait avec <span>♥</span> au Maroc
                </p>
            </div>
        </footer>
    )
}