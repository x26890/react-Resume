import React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import ProjectDisplay from './ProjectDisplay';

function Projects({ projects, colors }) {
  return (
    <section className="my-5">
      <div className="d-flex align-items-center mb-4">
        <h2 className="h3 fw-bold mb-0" style={{ color: colors.textPrimary }}>作品集專區</h2>
        <div className="flex-grow-1 ms-3" style={{ height: '2px', backgroundColor: colors.accent, opacity: 0.3 }}></div>
      </div>

      <div className="row g-4">
        {/* 左側選單 */}
        <div className="col-md-4">
          <div className="nav flex-column">
            {projects.map((proj) => (
              <NavLink
                key={proj.id}
                to={`/project/${proj.id}`}
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {proj.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* 右側內容區 */}
        <div className="col-md-8">
          <Routes>
            <Route path="/" element={<Navigate to={`/project/${projects[0].id}`} replace />} />
            <Route path="/project/:projectId" element={<ProjectDisplay projects={projects} colors={colors} />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default Projects;