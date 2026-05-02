import React from 'react';
import '../../css/newsletter.css'
 

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-box">
        <div className="newsletter-content">
          <div className="nl-icon">📩</div>
          <h2>Rejoignez le Club</h2>
          <p>Abonnez-vous pour recevoir les dernières sorties et des offres exclusives.</p>
        </div>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Votre adresse email" required />
          <button type="submit">Je m'inscris</button>
        </form>
      </div>
    </section>
  );
}