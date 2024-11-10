# TKUIMWD網站設計

## Github Page

[https://tkuimwd.github.io/MidtermProject/](https://tkuimwd.github.io/MidtermProject/)

## 網站設計

TKUIMWD 團隊網站的設計風格靈感源於刀劍神域的「星爆」，整體網站以此為主題，帶來強烈的視覺效果和深刻的風格記憶點。這個網站主要介紹團隊和成員，網站內容包括團隊介紹、成員簡介、還設計了一款小遊戲「幫桐人撐十秒」，並加入了油油的功能。我們也精心設置了與星爆主題相關的小彩蛋，讓用戶在探索網站的同時體驗到更多的驚喜。

## 設計概念、風格介紹

專案開始的時間是11/5，而11/7 是刀劍神域通關日期。為了致敬這部作品，且因為 HPW 在撰寫專案時同步觀看刀劍神域動畫直播，於是決定採用星爆主題，並圍繞這個主題設計整體網站的風格。網站設計了一個名為「幫桐人撐十秒」的趣味小遊戲，讓用戶感受星爆精神，並在整個網站中採用星爆的藍黑配色，以符合該主題的視覺效果，營造出沉浸式的感受。

網站整體色彩搭配強調科技感和未來感的藍黑色系，細節之處融入微小的動畫效果和視覺裝飾，以增強網站的沉浸感，同時也帶來動態的視覺體驗。

## 設計原則

- ### 現代簡約設計
    以注重簡潔和功能性的風格進行網站設計，採用高對比色彩，背景主要使用深色，並搭配白色字體和亮色陰影形成對比效果，讓我們的網站內容更突出。
    
- ### 陰影呈現
    主要採用兩種陰影顏色，營造網站的層次感，並強調重要元素。

- ### 圖片效果
    滑鼠指向圖片時有懸停設計，增加網頁動態感。
    
- ### 元素一致性
    採用相同元素進行設計，網頁中的字體、按鈕樣式、區塊陰影等風格都保持一致。
    
- ### 星爆！
    ZZY幫我撐十秒！！！

## 技術選用

- ### Vite

    透過快速的熱重載和打包速度，採用現代化的 ES 模組加載方式，特別適合大型應用的增量開發需求，減少開發者在編譯和打包上的等待時間，讓開發過程更為流暢，大幅地簡化了前端建構的流程與時間。
  
- ### React

    我們使用React作為前端框架，元件化架構讓代碼能夠更好地重用，從而提升代碼的維護性，並且方便團隊協作。虛擬 DOM 技術能有效優化渲染效率，使得頁面加載更加順暢。
  
- ### TypeScript
    
    我們的主要開發語言是TypeScript，TypeScript 透過靜態的強型別支援，在編譯期間便能檢測錯誤，增強了代碼的可靠性。
    
- ### CSS

    CSS 能夠提供直觀且靈活的樣式控制，方便設計精確的版面佈局，並支援響應式設計需求。

## 其他

- ### Github Actions Workflows

    專案還使用 workflows 自動化 build 和部署流程。當推送到 main 分支或手動觸發 (workflow_dispatch) 時，會自動：

    - 生成 production-ready 的 build 檔案
    - 上傳 dist 目錄的內容為 artifact 到 gh-pages 分支 以便後續部署
    - 將 dist 中的檔案部署到 GitHub Pages

    #### 使用和配置

    ##### .env :

    `VITE_IS_GH_PAGE` 變數
    
    - 讓 Vite 在 build 時能夠判斷是否為 GitHub Pages 配置
    - 讓`src/data/BaseImgPath.tsx` 的 `BaseImgPath` 初始化成正確路徑
    - 將 `src/assets` 移到 `public/assets`

    產出結果可查看 gh-pages 分支