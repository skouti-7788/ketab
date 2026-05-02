import React, { useState } from 'react';
import '../../css/paymentpage.css';
 

export default  function PaymentPage({bookData,setShowPaye}) {
   
    const [formData, setFormData] = useState({
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePay = (e) => {
        e.preventDefault();
        console.log("Données envoyées à Laravel:", formData);
        alert("Traitement du paiement sécurisé en cours...");
    };
    const book = bookData || {
        title: "Livre PDF (Library Manager)",
        price: 49.00,
        currency: "DH"
    };
    console.log(book)
    return (
        <div className="checkout-container">
            <span  className='back-button'
            onClick={()=>setShowPaye(false)}>back</span>
            {/* L-jiha dyal l-Formulaire */}
            <div className="payment-form-section">
                <h2 style={{marginBottom: '20px'}}>Paiement par Carte Bancaire</h2>
                
                <div className="bank-badges">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Logo_CIH_Bank.png" alt="CIH" />
                </div>

                <form onSubmit={handlePay}>
                    <div className="form-group">
                        <label>Nom sur la carte</label>
                        <input 
                            type="text" 
                            name="cardName" 
                            placeholder="M. REDWAN XXXX" 
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Numéro de carte</label>
                        <input 
                            type="text" 
                            name="cardNumber" 
                            placeholder="0000 0000 0000 0000" 
                            maxLength="16"
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="card-details-grid">
                        <div className="form-group">
                            <label>Date d'expiration</label>
                            <input 
                                type="text" 
                                name="expiry" 
                                placeholder="MM/YY" 
                                maxLength="5"
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>CVV</label>
                            <input 
                                type="password" 
                                name="cvv" 
                                placeholder="123" 
                                maxLength="3"
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    </div>

                    <button type="submit" className="pay-button">
                        Confirmer
                    </button>
                </form>
                
                <p style={{fontSize: '12px', color: '#9ca3af', marginTop: '15px', textAlign: 'center'}}>
                    🔒 Vos données sont cryptées et sécurisées.
                </p>
            </div>

            {/* L-jiha dyal Summary (Résumé) */}
            {/* <div className="order-summary">
                <h3 style={{marginBottom: '15px'}}>Résumé de la commande</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>Livre PDF (Library Manager)</span>
                    <strong>49.00 DH</strong>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>Frais de service</span>
                    <strong>0.00 DH</strong>
                </div>
                <hr style={{margin: '15px 0', border: '0', borderTop: '1px solid #e5e7eb'}} />
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold'}}>
                    <span>Total</span>
                    <span style={{color: '#2563eb'}}>49.00 DH</span>
                </div>
            </div> */}
            <div className="checkout-container">
            {/* ... L-jiha dyal l-form (nefs l-kod li fat) ... */}

            <div className="order-summary">
                <h3 style={{marginBottom: '15px'}}>Résumé de la commande</h3>
                
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    {/* Hna t-beddel smiya */}
                    <span>{book.title}</span>
                    <strong>{book.prix } {'DH'||book.currency}</strong>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                    <span>Frais de service</span>
                    <strong>0.00 {book.currency}</strong>
                </div>

                <hr style={{margin: '15px 0', border: '0', borderTop: '1px solid #e5e7eb'}} />
                
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold'}}>
                    <span>Total</span>
                    {/* Hna l-x-am3 l-total */}
                    <span style={{color: '#2563eb'}}>
                        {book.prix} {book.currency}
                    </span>
                </div>
            </div>
        </div>
        </div>
    );
};
 