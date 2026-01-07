import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { colors, resumeData } from './resumeData';
import './App.css'; // 引入剛剛建立的外部 CSS 檔案

// 引入自定義元件
import Header from './components/Header';
import Biography from './components/Biography';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      {/* 1. 外層主容器 (.app-container)：負責背景漸層與最小高度 
          2. 內容包裹器 (.content-wrapper)：負責最大寬度限制 (900px)
      */}
      <div className="app-container">
        
        <div className="container shadow-lg p-4 p-md-5 rounded-4 bg-white bg-opacity-75 content-wrapper">
          
          {/* 1. 頁首區塊 - 傳入履歷資料與顏色設定 */}
          <Header data={resumeData} colors={colors} />

          {/* 2. 自傳區塊 - 樣式已抽離至 .bio-text */}
          <Biography text={resumeData.biography} colors={colors} />

          {/* 3. 經歷區塊 */}
          <Experience list={resumeData.experience} colors={colors} />

          {/* 4. 作品集專區 - 包含內部的左側列表導航與右側詳情顯示 */}
          <Projects projects={resumeData.projects} colors={colors} />

        </div>

        {/* 5. 頁腳 - 使用 .app-footer 樣式 */}
        <Footer name={resumeData.name}></Footer>
      </div>
    </Router>
  );
}

export default App;