import React from 'react';

// 改為接收 project 物件作為參數
function ProjectDisplay({ project, colors }) {
  
  if (!project) return null;

  return (
    // 使用 project.id 作為 key，這樣 React 切換時會重新渲染動畫
    <div key={project.id} className="card border-0 shadow-sm overflow-hidden project-card-animation" style={{ borderRadius: '15px' }}>
      <div style={{ width: '100%', height: '280px', backgroundColor: '#f8f9fa', overflow: 'hidden' }}>
        <img
          src={project.img}
          alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="card-body bg-white p-4">
        <h4 className="fw-bold" style={{ color: colors.textPrimary }}>{project.name}</h4>
        <p className="card-text mt-3" style={{ color: colors.textSecondary, lineHeight: '1.6', fontSize: '0.95rem' }}>
          {project.desc}
        </p>

        {project.authList && (
          <div className="test-info-box">
            <h6 className="fw-bold mb-3" style={{ color: colors.accent }}>💡 測試登入資訊</h6>
            {project.authList.map((auth, index) => (
              <div key={index} className="auth-item mb-2">
                <div className="small fw-bold mb-1" style={{ color: colors.textPrimary }}>{auth.label}：</div>
                <div style={{ fontSize: '0.85rem', color: colors.textSecondary }}>
                  <div><strong>帳號：</strong> {auth.account}</div>
                  <div><strong>密碼：</strong> {auth.password}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-custom">點擊前往作品</a>
          )}
          {project.link_pages && (
            <a href={project.link_pages} target="_blank" rel="noopener noreferrer" className="btn-github ms-2">前往 GitHub 連結</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;