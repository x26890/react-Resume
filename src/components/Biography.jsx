import React from 'react';

function Biography({ text, colors }) {
  return (
    <section className="my-5">
      <div className="d-flex align-items-center mb-4">
        <h2 className="h3 fw-bold mb-0" style={{ color: colors.textPrimary }}>我的自傳</h2>
        <div className="flex-grow-1 ms-3" style={{ height: '2px', backgroundColor: colors.accent, opacity: 0.3 }}></div>
      </div>
      <div className="bio-text shadow-sm">
        {text}
      </div>
    </section>
  );
}

export default Biography;