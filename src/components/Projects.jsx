import React, { useState } from 'react'; // 引入 useState
import ProjectDisplay from './ProjectDisplay';

function Projects({ projects, colors }) {
  // 建立一個狀態來追蹤目前選中的專案，預設為第一個
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  // 根據 activeProjectId 找到對應的專案資料
  const currentProject = projects.find(p => p.id === activeProjectId);

  return (
    <section className="my-5">
      <div className="d-flex align-items-center mb-4">
        <h2 className="h3 fw-bold mb-0" style={{ color: colors.textPrimary }}>作品集專區</h2>
        <div className="flex-grow-1 ms-3" style={{ height: '2px', backgroundColor: colors.accent, opacity: 0.3 }}></div>
      </div>

      <div className="row g-4">
        {/* 左側選單：改用 button 觸發 setActiveProjectId */}
        <div className="col-md-4">
          <div className="nav flex-column">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setActiveProjectId(proj.id)}
                className={`nav-link-custom text-start border-0 mb-2 ${
                  activeProjectId === proj.id ? 'nav-link-active' : ''
                }`}
                style={{ background: 'none', textAlign: 'left' }}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>

        {/* 右側內容區：直接渲染 ProjectDisplay 並傳入當前專案 */}
        <div className="col-md-8">
          <ProjectDisplay project={currentProject} colors={colors} />
        </div>
      </div>
    </section>
  );
}

export default Projects;