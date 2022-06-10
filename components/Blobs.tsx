export const Blobs = () => {
  return (
    <div style={{ position: 'relative', zIndex: '-99999999', pointerEvents: 'none' }}>
      <div
        style={{
          left: '-80px',
          top: '-40px',
          position: 'absolute',
          width: '350px',
          height: '350px',
          opacity: '0.2',
          borderRadius: '50%',
          background: 'var(--hue-col-2)',
          filter: 'blur(50px)',
        }}
      ></div>
    </div>
  );
};
