import React from 'react';

function Experience({ list, colors }) {
  return (
    <section className="my-5">
      <div className="d-flex align-items-center mb-4">
        <h2 className="h3 fw-bold mb-0" style={{ color: colors.textPrimary }}>工作經歷</h2>
        <div className="flex-grow-1 ms-3" style={{ height: '2px', backgroundColor: colors.accent, opacity: 0.3 }}></div>
      </div>
      {list.map((exp, index) => (
        <div key={index} className="mb-4 ps-4 border-start border-3" style={{ borderColor: colors.muted }}>
          <div className="d-flex justify-content-between align-items-baseline flex-wrap">
            <h4 className="fw-bold" style={{ color: colors.textSecondary }}>{exp.company}</h4>
            <small className="fw-bold" style={{ color: colors.muted }}>{exp.period}</small>
          </div>
          <h5 className="mb-3 fst-italic" style={{ color: colors.accent }}>{exp.role}</h5>
          <ul style={{ color: colors.textSecondary, lineHeight: '1.8' }}>
            {exp.responsibilities.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;