# 主食碳水與升糖速度查詢

這是一個純靜態 GitHub Pages 查詢網站，收錄常見主食的每 100g 碳水與 GI 升糖速度分類。

## 資料口徑

- 碳水：以熟食或可直接食用重量的每 100g 總碳水為主。
- 升糖速度：以 GI 分類，低 GI 為 55 以下，中 GI 為 56-69，高 GI 為 70 以上。
- GI 會因品種、烹調、冷卻、搭配食物與個人狀態改變；網站數值用於快速查詢，不取代醫療建議。

## 主要資料來源

- [USDA FoodData Central](https://fdc.nal.usda.gov/api-guide/)
- [University of Sydney Glycemic Index Database](https://glycemicindex.com/gi-search/)
- [University of Sydney GI rice guide](https://glycemicindex.com/2020/12/your-gi-shopping-guide-2/)

## 本機開啟

直接開啟 `index.html` 即可使用。若要用本機伺服器：

```bash
python -m http.server 8080
```
