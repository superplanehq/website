export default function ComingSoonMarquee() {
  const text = "Coming Soon";

  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      background: 'blue',
      padding: '10px 0',
      zIndex: 10
    }}>
      <div
        style={{
          display: 'inline-block',
          animation: 'marquee 150s linear infinite',
          fontSize: '0.9rem',
          color: '#fff',
          textTransform: 'uppercase'
        }}
      >
        {/* Duplicate the text enough times to cover + overflow screen width */}
        {[...Array(30)].map((_, i) => (
          <span key={i} style={{ marginRight: '2rem' }}>~/{text}</span>
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
