// src/resumeData.js

export const colors = {
  bgMain: "#E7EBC5",
  textPrimary: "#51344D",
  textSecondary: "#6F5060",
  muted: "#989788",
  accent: "#A78682"
};

export const resumeData = {
  name: "涂芳誠",
  title: "應徵職位:前端開發工程師,前端助理工程師",
  email: "x268900@gmail.com",
  phone: "0910331182", // 新增手機
  availableTime: "下午 16:30 後", // 新增聯絡時間
  WorkDate: "年後上班，或3月初",
  skills: ["React", "Bootstrap", "JavaScript", "AI-Assisted Development"],
  biography: "我是涂芳誠。目前仍在小北百貨工作中，下班後都會抽空利用時間研讀網頁程式相關知識。我對開發網頁有著濃興趣，目前正專注鑽研 React 與 Bootstrap 框架、能使用Vite 快速建構React架構並且能夠使用GitHub上傳網頁讓網頁運作，並熱衷於與 AI 互動、協作開發。作品集專區的成果是我近幾個月的學習產出，雖然大部分架構由 AI 輔助呈現，但我能精確引導 AI 生產出符合需求的畫面與特定功能。在 AI 成為不可忽視趨勢的今日，我將持續精進實力。",
  experience: [
    {
      company: "小北百貨",
      role: "早班外場",
      period: "2024 - 仍在職",
      responsibilities: ["負責盤點跟協助店長叫貨", "處理商品進退貨", "與廠商聯繫"],
    },
    {
      company: "小北百貨",
      role: "大夜主任",
      period: "2022 - 2023",
      responsibilities: ["負責盤點跟協助店長叫貨", "電腦資料處理"]
    }
  ],
  projects: [
    {
      id: "meridian",
      name: "MERIDIAN",
      desc: "品牌展示系統。此專案採用 AI 協作開發模式：由本人主導 UI/UX 構思與架構設計，並透過精確的提示引導 AI 生成程式，後續結合 Console Log 進行除錯與性能優化，確保系統穩定性。",
      img: "images/Protfolio_1.png",
      link: "https://x26890.github.io/react-HomeWork/",
      link_pages: "https://github.com/x26890/react-HomeWork"
    },
    {
      id: "scheduling",
      name: "團隊排班系統",
      desc: "自動化排班解決方案。整合 React 與 Firebase 後端，開發過程中利用 AI 快速複雜的邏輯算法。本人負責資料庫結構設計與 AI 代碼的整合測試，有效縮短開發週。",
      img: "images/Protfolio_2.png",
      link: "https://x26890.github.io/react-MERIDIANWork/",
      link_pages: "https://github.com/x26890/react-MERIDIANWork",
      authList: [
        { label: "Meridian 測試", account: "meridian@admin.com", password: "m123456" },
        { label: "春魚 測試", account: "springfish@admin.com", password: "s123456" }
      ]
    },
    {
      id: "xiaobei-log",
      name: "小北百貨建工店",
      desc: "門市營運網站。運用 AI 輔助處理前端視覺佈局與響應式開發，進行即時除錯與動線優化，實現高效的資訊呈現與視覺陳列記錄。",
      img: "images/Protfolio_3.png",
      link: "https://x26890.github.io/react-ShowbaHomeWork/",
      link_pages: "https://github.com/x26890/react-ShowbaHomeWork",
    },
    {
      id: "work-notes",
      name: "工作紀錄事項",
      desc: "個人化工作日誌系統。整合 React 前端與 Firebase 後端雲端資料庫，實現跨裝置的即時數據同步，並以 AI 作為協作夥伴處理複雜狀態管理。透過 Firebase Authentication 確保資料安全，並經由 Console Log 進行邏輯驗證，確保任務追蹤功能精準無誤。",
      img: "images/Protfolio_4.png",
      link: "https://x26890.github.io/react-ShowbaTodoList/",
      link_pages: "https://github.com/x26890/react-ShowbaTodoList",
      authList: [
        { label: "工作紀錄系統", account: "8875", password: "88758875" },
      ]
    }
  ]
};