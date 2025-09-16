export default function ComingSoonMarquee() {
  const text = "COMING SOON";

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      background: '#9ED8F7',
      mixBlendMode: 'difference',
      zIndex: 10
    }}>
      <div
        style={{
          display: 'inline-block',
          animation: 'marquee 150s linear infinite',
          fontSize: '2rem',
          fontWeight: '500',
          color: '#000',
          textTransform: 'uppercase'
        }}
      >
        {/* Duplicate the text enough times to cover + overflow screen width */}
        {[...Array(30)].map((_, i) => (
          <span key={i} style={{ marginRight: '1rem' }}>{text}</span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
