import '../css/notification.css';
export default function Notifications() {
  return (
    <div className="notif-container">
      <h3 className="notif-title">Notifications</h3>

      <div className="notif-card">
        <h4 className="notif-welcome">Bienvenue sur la bibliothèque électronique Ketab !</h4>

        <p className="notif-text">
          Nous sommes ravis de vous compter parmi nous. Vous pouvez désormais télécharger des livres gratuitement,
          ajouter vos avis et citations, et suivre vos auteurs préférés.
        </p>
      </div>
    </div>
  );
}
