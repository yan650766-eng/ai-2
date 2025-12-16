# AI Fashion Site

一個線上服飾商品服務介紹網站，配備AI客服系統。

## 專案概述

本專案旨在建立一個服飾商品展示網站，透過AI客服提供尺寸建議、穿搭建議與商品諮詢，提升使用者購物體驗。

### 主要功能
- 服飾商品展示（款式、尺寸、顏色、價格）
- 商品與穿搭介紹
- 即時AI聊天客服（尺寸建議、商品搭扮推薦、常見問題回覆）
- 響應式設計支援各種裝置

## 技術棧
- **後端**: Vercel Serverless Functions (Node.js)
- **前端**: HTML + CSS + Vanilla JavaScript
- **設計風格**: 現代簡約，玻璃擬態
- **主題**: 溫暖色調

## 專案結構
```
/
├── api/              # Vercel serverless functions
│   ├── chat.js       # AI聊天客服
│   ├── contact.js    # 聯絡路由
│   └── health.js     # 健康檢查
├── public/           # 前端靜態文件
│   ├── index.html    # 主頁
│   ├── css/
│   │   └── style.css # 樣式
│   ├── js/
│   │   └── script.js # 前端JavaScript
│   └── assets/       # 圖片等資源
├── utils/            # 工具函式
├── middleware/       # 中介層
├── .env              # 環境變數
├── .gitignore        # Git忽略文件
├── package.json      # 依賴配置
├── vercel.json       # Vercel配置
└── README.md         # 本文件
```

## 安裝與運行

### 本地開發
1. 安裝依賴:
   ```bash
   npm install
   ```

2. 安裝Vercel CLI (如果尚未安裝):
   ```bash
   npm install -g vercel
   ```

3. 本地運行:
   ```bash
   npm run dev
   # 或
   vercel dev
   ```
   這將啟動本地開發服務器，您可以在 http://localhost:3000 查看網站。

### 部署到Vercel
1. 登入Vercel:
   ```bash
   vercel login
   ```

2. 部署:
   ```bash
   vercel
   # 選擇專案設定，然後
   vercel --prod
   ```

3. 部署完成後，您將獲得一個URL，可以在該URL上查看您的網站。

### AI代理人功能
網站包含一個簡單的AI聊天代理人，可以回答基本的服飾相關問題。要使用更進階的AI功能，請參考 `proj_ai.md` 文件。

## 開發規範
- 程式語言: JavaScript (ES6+)
- 命名規範: camelCase (變數/函式), PascalCase (類別)
- 註解: 主要函式需加JSDoc，關鍵邏輯需註解
- 錯誤處理: 使用try-catch + 錯誤中介層

## 授權
MIT