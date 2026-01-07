import React from 'react';

// 接收 data (個人資訊) 與 colors (顏色設定) 作為 Props
function Header({ data, colors }) {
  return (
    <header className="text-center mb-5">
      <h1 
        className="display-3 fw-bold mb-3" 
        style={{ color: colors.textPrimary, letterSpacing: '4px' }}
      >
        個人履歷表
      </h1>
      <div className="mb-4">
        <h2 className="h4 fw-bold" style={{ color: colors.textSecondary }}>
          {data.name}
        </h2>
        <p className="lead fw-bold" style={{ color: colors.accent }}>
          {data.title}
        </p>
      </div>
      <p 
        className="border-top border-bottom py-2 d-inline-block px-4" 
        style={{ color: colors.muted, borderColor: `${colors.muted}66` }}
      >
        {data.email} | 📍 高雄市
      </p>
    </header>
  );
}

export default Header;