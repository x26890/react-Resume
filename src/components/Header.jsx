import React from 'react';

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

      {/* 聯絡資訊區塊 */}
      <div
        className="border-top border-bottom py-3 d-inline-block px-4"
        style={{ color: colors.muted, borderColor: `${colors.muted}66` }}
      >
        <div>
          ✉️ {data.email}
        </div>
        <div className="mt-2" style={{ fontSize: '0.95rem' }}>
          📞 {data.phone} | 🕒 聯絡時間：{data.availableTime}
        </div>
        <div
          className="mt-2 py-1 px-3 rounded"
          style={{
            backgroundColor: `${colors.accent}15`, // 使用 accent 色的 15% 透明度作為背景
            borderLeft: `4px solid ${colors.accent}`,
            color: colors.textPrimary
          }}
        >
          🚀 <strong>可上班日期：</strong>{data.WorkDate}
        </div>
      </div>
    </header>
  );
}

export default Header;