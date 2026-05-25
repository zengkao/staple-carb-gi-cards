# 開發紀錄

個人血糖管理工具的開發歷程，記錄每個版本的決策與經驗，方便日後維護或回頭看為什麼這樣設計。

## 2026-05-21｜v0.1 雛形

**Commit:** `cb9546d Build staple carb GI lookup`

第一版基礎查詢工具：純靜態 HTML/CSS/JS，無建置工具。

- 收錄米飯、麵、麵包、穀物、根莖、豆類等主食 GI/碳水資料
- 純文字清單卡片 + 表格兩種檢視
- 篩選：分類、升糖速度、排序
- 資料來源：USDA FoodData Central、Sydney GI Database、TFDA

**關鍵設計決定：** 不載入食物圖片，純文字清單為主，因為餐前查詢主要看數字不看美觀，速度與離線可用性優先。

## 2026-05-21｜v0.2 行動版優化

**Commit:** `3486b46 Make lookup mobile text only`

把版面從桌機優先改成手機優先（吃東西前手機查最常用）。

- 移除所有圖片相關欄位的渲染（但保留資料中的 `imageKey` 欄位，避免破壞資料）
- 簡化 CSS：刪掉約 200 行，視覺更乾淨
- 增加觸控目標尺寸（按鈕 min-height 42px）

## 2026-05-21｜v0.3 個人飲食筆記

**Commit:** `fa069dc Add personal eating experience notes`

每個食物加一個 textarea，可寫個人飲食經驗（例：「半碗還可以」、「飯後偏高」）。

- 用 localStorage 儲存（key: `staple-carb-gi-experience-v1`）
- 不上傳、不同步、完全本機
- 搜尋會涵蓋筆記內容

**經驗：** 一開始想做雲端同步，後來覺得個人血糖數據敏感，本機就好；換手機時可以再做匯出/匯入。

## 2026-05-21｜v0.4 台灣主餐資料

**Commit:** `bd9954d Add Taiwan main meal carb entries`

新增「台灣主餐」分類：便當、雞排、漢堡、滷肉飯、雞肉飯、牛肉麵、炒飯、炒麵、水餃、鍋貼、蚵仔煎、鐵板麵、鹽酥雞等。

**資料口徑挑戰：** 這些都是混合餐，沒有公開 GI。處理方式：
- GI 以主要碳水來源估算（白飯、白麵包、麵條、裹粉）
- `giDisplay` 標「估 75+」這樣的範圍而非單一數字
- `note` 寫明整份的總碳水範圍（每 100g 看起來不高，但整份常常很驚人）

## 2026-05-25｜v0.5 水果資料

**Commit:** `97cdf6e Add common fruit carb entries`

新增 30+ 筆台灣常見水果。重點補充說明：

- 「同樣是水果，新鮮 vs 果汁 vs 果乾差很多」這個觀念在 note 裡反覆強調
- 水分高的水果（西瓜、哈密瓜）每 100g 碳水不高但常一次吃 500g
- 部分有食用注意（楊桃對腎臟病患者、葡萄柚與藥物交互）寫進 note

## 2026-05-25｜v1.0 大改版：份量計算器 + PWA + 紀錄系統

**Commit:** `31c0b25 Add portion calculator, glucose records, favorites, PWA, Taiwan foods`

這是最大的一次重寫，從「查詢工具」進化成「血糖追蹤 App」。

### 核心新功能

| 功能 | 動機 |
|------|------|
| **份量計算器** | 每 100g 碳水要心算，餐前手忙腳亂，乾脆讓 app 直接算 |
| **GL（升糖負荷）** | 西瓜 GI 50 但 GL 只有 4，看 GI 會誤判 — GL 才是實際血糖負擔 |
| **結構化血糖紀錄** | textarea 純文字筆記不夠用，需要日期、份量、餐前/後血糖、Δ |
| **紀錄分頁** | 想看「最近 7 天我吃了什麼、血糖如何」 |
| **工具分頁** | 主題切換、匯出 JSON、清資料、統計 |
| **PWA** | 加到主畫面 + 離線使用，餐廳沒網路也能查 |
| **暗色模式** | 晚上看眼睛舒服 |
| **收藏 ★** | 白飯、地瓜、香蕉這種常吃食物每次都搜很煩 |

### 資料 schema 演進

從單一 `experienceNotes: { foodId: "..." }` 改成統一 `glucose-tracker-v2`：

```json
{
  "notes": { "white-rice": "..." },
  "records": {
    "white-rice": [
      { "id": "...", "date": "2026-05-25", "meal": "lunch",
        "grams": 150, "pre": 100, "post": 178, "comment": "..." }
    ]
  },
  "favorites": ["white-rice"],
  "settings": { "theme": "auto" },
  "lastPortion": { "white-rice": 150 }
}
```

舊資料自動遷移：若沒有 v2 但有 v1 的 `staple-carb-gi-experience-v1`，匯入到 `notes` 欄位。

### 渲染策略決定

舊版 `render()` 每次都同時渲染 cards + table。改成「只渲染當前 view」+ 搜尋輸入 120ms debounce。

textarea 與 portion input 不觸發 render，直接更新 DOM 對應的數字，避免使用者輸入到一半被清掉。

### 新增 60+ 筆台灣常見食物（7 個新分類）

- **早餐店**：蛋餅、蘿蔔糕、燒餅、油條、蔥抓餅、厚片吐司、三明治、飯糰、豆漿、米漿
- **夜市小吃**：刈包、肉圓、蚵仔麵線、臭豆腐、地瓜球、紅豆餅、胡椒餅、香腸、雞蛋糕、潤餅
- **麵食湯品**：陽春麵、餛飩麵、麻醬麵、擔仔麵、米粉湯、肉羹麵、酸辣湯、四神湯、鹹粥
- **台式飯類**：油飯、肉粽、咖哩飯、燴飯、海南雞飯、地瓜飯
- **手搖飲**：珍珠奶茶、加糖紅綠茶、冬瓜茶、木瓜牛奶、楊桃汁、青草茶、無糖茶
- **台式甜點**：豆花、愛玉、芒果冰、紅豆湯、湯圓、麻糬、芋圓、黑糖剉冰
- **便利商店**：御飯糰、茶葉蛋、關東煮蘿蔔/米血糕/甜不辣

### 實作上踩到的坑

- **Edit 工具的 old_string 中文標點對不上**：原檔的 `placeholder="例：半碗還可以..."` 用全形 `：`（U+FF1A），第一次 Edit 我用半形 `:` 結果配對失敗。Lesson：中文檔案要逐字對標點。
- **service worker 快取讓使用者拿到舊版**：每次大改要 bump `CACHE` 版本，否則使用者要手動清快取才看得到更新。
- **details/summary 重渲染會收合**：可以接受，因為紀錄表單通常是「填完送出」一次性流程。

### PWA 設計

- `manifest.json`：standalone display, portrait, theme `#1f8a5f`
- `sw.js`：cache-first 策略 + 背景更新；非同域請求直接放行不快取
- `icon.svg`：簡單綠底 + 白色「糖」字（不放 emoji，純文字 SVG）

## 2026-05-25｜v1.1 連鎖店資料 + servingG

**Commit:** `6f2cfb8 Add MOS Burger, Maiwei Deng, Laya Burger menu items`

加進三家常吃的連鎖早餐店：摩斯漢堡、麥味登、拉亞漢堡。

### 資料抓取過程

| 店家 | 取得方式 | 資料完整度 |
|------|----------|-----------|
| 摩斯漢堡 | 從 dailydietitian.com.tw 彙整的官方表 | ★★★ 完整（kcal/碳水/蛋白/脂肪） |
| 麥味登 | Playwright 直接爬官網每個產品頁 HTML | ★★ 部分（脂肪欄位有 bug） |
| 拉亞漢堡 | 官網只公布熱量，碳水自己估 | ★ 估算（已標註） |

### 麥味登官網的詭異 bug

爬取 `原味蛋餅` 時拿到：
```
熱量 195 kcal, 蛋白質 13g, 脂肪 50g, 碳水 13g
```

50g 脂肪不可能（光脂肪就 450 kcal，已超過總熱量 195）。
反推應該是 `10g` 左右，他們網頁 HTML 是手刻的 table，這幾筆有打字錯誤。
碳水與熱量我相信沒問題，脂肪當沒看到，並在 note 標出此事。

### servingG 新欄位 — 解決份量痛點

問題：所有資料都用 `g/100g`。但連鎖店的單位是「1 個漢堡」「1 杯飲料」，
心算 `38.0 g/100g × 180g = 68.4g` 在餐廳很煩。

方案：食物 schema 加 `servingG` 欄位 = 典型 1 份重量。
打開卡片時計算器自動帶入該份量，立刻看到「1 個漢堡的實際碳水」。

```js
function getLastPortion(id) {
  const stored = data.lastPortion[id];
  if (stored != null && stored !== "") return Number(stored) || 0;
  return Number(FOOD_BY_ID[id]?.servingG) || 100;  // 新預設邏輯
}
```

驗證：摩斯漢堡(牛) servingG=180 → 卡片開啟自動顯示 38.0g 碳水（=官方標示 38.0g）✓

### 拉亞碳水估算原則

官方只給 kcal，我估算邏輯：
- 漢堡類：白麵包 + 蛋白質餅，碳水 ~35-40g
- 貝果類：貝果本身就 ~50g 碳水，幾乎佔大部分
- 蛋餅類：白麵粉皮 ~25-30g
- 加糖飲料：用糖量直接換算
- 美式咖啡：明確標 0 cal、0 糖（血糖控制者的安全選擇，特別標出）

所有估算品項在 `note` 寫「官方僅公布熱量 X kcal;碳水推估約 Y g」並把 `carbSource` 寫「拉亞官方熱量+估算」，讓我之後看到時知道這筆是估的。

## 未來想做

- [ ] 麥當勞、肯德基官方資料（用同樣方法）
- [ ] 個人血糖反應校正（紀錄 N 筆後，按速度/碳水分布回頭調整每筆食物的「我的實際反應」標籤）
- [ ] 圖表：餐後 Δ vs 食物 GL 的散佈圖
- [ ] CSV 匯出（除了 JSON）
- [ ] 紀錄頁加日期區間篩選 + 按食物搜尋
- [ ] 通知：飯後 1.5 / 2 小時提醒測血糖
- [ ] 食物搭配模擬：選 2-3 樣同時看總碳水/GL（混合餐預估）

## 維護筆記

### 加新食物

1. 在 `app.js` 的 `FOODS` 陣列加新物件，必填欄位：`id`、`zh`、`en`、`aliases`、`category`、`carbs`、`gi`、`giDisplay`、`speed`、`note`、`carbSource`、`giSource`
2. 連鎖店或固定份量品項加 `servingG`
3. 新分類會自動出現在篩選下拉
4. bump `sw.js` 的 `CACHE` 版本（例：v3 → v4）

### bump service worker 版本

每次發布要記得改 `sw.js`：
```js
const CACHE = "glucose-tracker-vN";  // ← 改這裡
```
否則使用者拿到的是舊版的 app.js / styles.css。

### 部署

GitHub 推上 main 後，如果有 GitHub Pages 自動部署就完成。本機測試：

```bash
python -m http.server 8765
# 開 http://localhost:8765/
```

PWA 需要 http(s)；直接 `file://` 開不會註冊 service worker，但其他功能正常。
