interface StachubLogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export function StachubLogo({ className = "", variant = 'default' }: StachubLogoProps) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#1E293B';
  const dotColor = '#F59E0B';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#1E40AF" />
        <line x1="20" y1="2" x2="20" y2="10" stroke="#1E40AF" strokeWidth="2"/>
        <line x1="20" y1="30" x2="20" y2="38" stroke="#1E40AF" strokeWidth="2"/>
        <line x1="2" y1="20" x2="10" y2="20" stroke="#1E40AF" strokeWidth="2"/>
        <line x1="30" y1="20" x2="38" y2="20" stroke="#1E40AF" strokeWidth="2"/>
        <line x1="7" y1="7" x2="13" y2="13" stroke="#1E40AF" strokeWidth="2"/>
        <line x1="27" y1="27" x2="33" y2="33" stroke="#1E40AF" strokeWidth="2"/>
        <line x1="33" y1="7" x2="27" y2="13" stroke="#1E40AF" strokeWidth="2"/>
        <line x1="13" y1="27" x2="7" y2="33" stroke="#1E40AF" strokeWidth="2"/>
        <circle cx="20" cy="2" r="3" fill={dotColor}/>
        <circle cx="20" cy="38" r="3" fill={dotColor}/>
        <circle cx="2" cy="20" r="3" fill={dotColor}/>
        <circle cx="38" cy="20" r="3" fill={dotColor}/>
        <text x="20" y="20" textAnchor="middle" dominantBaseline="central" fill="white" fontSize="20" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">S</text>
      </svg>
      <span className="text-2xl tracking-tight" style={{ color: textColor, fontFamily: 'serif', fontWeight: 700 }}>
        Stachub
      </span>
    </div>
  );
}