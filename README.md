# 主食碳水與升糖速度查詢

這是一個純靜態 GitHub Pages 查詢網站，收錄常見主食的每 100g 碳水與 GI 升糖速度分類。版面以手機查詢為主，使用純文字清單，不載入食物圖片。

## 資料口徑

- 碳水：以熟食或可直接食用重量的每 100g 總碳水為主。
- 升糖速度：以 GI 分類，低 GI 為 55 以下，中 GI 為 56-69，高 GI 為 70 以上。
- 台灣主餐、便當、漢堡、炸物多為混合餐；若沒有公開 GI，會以主要碳水來源（白飯、白麵包、麵條、裹粉）估算升糖速度，並在備註寫明整份碳水差異。
- GI 會因品種、烹調、冷卻、搭配食物與個人狀態改變；網站數值用於快速查詢，不取代醫療建議。
- 每個食物可輸入「飲食經驗」備註，資料存在使用者自己的瀏覽器 localStorage，不會上傳或同步。

## 主要資料來源

- [USDA FoodData Central](https://fdc.nal.usda.gov/api-guide/)
- [University of Sydney Glycemic Index Database](https://glycemicindex.com/gi-search/)
- [University of Sydney GI rice guide](https://glycemicindex.com/2020/12/your-gi-shopping-guide-2/)
- [衛生福利部食品藥物管理署：台灣地區食品營養成分資料庫](https://www.fda.gov.tw/tc/site.aspx?r=979237699&sid=271)
- 國立陽明交通大學餐飲營養分析表、台灣餐飲品牌公開營養資訊與營養師整理資料

## 本機開啟

直接開啟 `index.html` 即可使用。若要用本機伺服器：

```bash
python -m http.server 8080
```
