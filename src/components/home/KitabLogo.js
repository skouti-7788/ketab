// Logo.jsx
export default function KitabLogo({ onClick }) {
  return (
    <div className="nav-logo" onClick={onClick}>
      <svg width="160" height="40" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
        {/* Book icon */}
        <rect x="2" y="2" width="44" height="76" rx="4" fill="#0F6E56"/>
        <rect x="48" y="2" width="44" height="76" rx="4" fill="#1D9E75"/>
        <rect x="45" y="2" width="5" height="76" fill="#04342C"/>

        {/* Lines left page */}
        <line x1="10" y1="22" x2="40" y2="22" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="33" x2="40" y2="33" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="44" x2="40" y2="44" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="55" x2="30" y2="55" stroke="#5DCAA5" strokeWidth="2" strokeLinecap="round"/>

        {/* Lines right page */}
        <line x1="55" y1="22" x2="85" y2="22" stroke="#E1F5EE" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
        <line x1="55" y1="33" x2="85" y2="33" stroke="#E1F5EE" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
        <line x1="55" y1="44" x2="85" y2="44" stroke="#E1F5EE" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
        <line x1="55" y1="55" x2="72" y2="55" stroke="#E1F5EE" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>

        {/* Wordmark */}
        <text x="102" y="57" fontFamily="Georgia, serif" fontSize="46" fontWeight="700" fill="#1D9E75" letterSpacing="-1">k</text>
        <text x="127" y="57" fontFamily="Georgia, serif" fontSize="46" fontWeight="700" fill="#2C2C2A" letterSpacing="-1">itab</text>
      </svg>
    </div>
  );
}