const FOODS = [
  {
    id: "white-rice",
    zh: "白飯",
    en: "White rice, cooked",
    aliases: ["白米飯", "米飯", "飯", "rice"],
    category: "米飯",
    carbs: 28.6,
    gi: 83,
    giDisplay: "75-83",
    speed: "fast",
    imageKey: "rice",
    note: "一般熟白米飯；低 GI 特用品種會明顯較低。",
    carbSource: "USDA FDC 168930",
    giSource: "Sydney GI: white rice",
  },
  {
    id: "jasmine-rice",
    zh: "茉莉香米飯",
    en: "Jasmine rice, cooked",
    aliases: ["泰國香米", "jasmine", "香米", "白飯"],
    category: "米飯",
    carbs: 28.6,
    gi: 89,
    giDisplay: "79-109",
    speed: "fast",
    imageKey: "rice",
    note: "茉莉香米多數測試為高 GI；咀嚼與品牌會改變結果。",
    carbSource: "USDA FDC 168930",
    giSource: "Sydney GI: jasmine rice",
  },
  {
    id: "basmati-rice",
    zh: "印度香米飯",
    en: "Basmati rice, cooked",
    aliases: ["basmati", "巴斯馬蒂", "香米", "長米"],
    category: "米飯",
    carbs: 28.6,
    gi: 58,
    giDisplay: "50-67",
    speed: "medium",
    imageKey: "rice",
    note: "白印度香米常落在低到中 GI，快速熟化品種可能較高。",
    carbSource: "USDA FDC 168930",
    giSource: "Sydney GI: basmati rice",
  },
  {
    id: "brown-rice",
    zh: "糙米飯",
    en: "Brown rice, cooked",
    aliases: ["brown rice", "全穀米", "糙米"],
    category: "米飯",
    carbs: 25.6,
    gi: 66,
    giDisplay: "58-72",
    speed: "medium",
    imageKey: "rice",
    note: "品種差異很大；有些即食或特定品種可到高 GI。",
    carbSource: "USDA FDC / SR Legacy",
    giSource: "Sydney GI: brown rice",
  },
  {
    id: "glutinous-rice",
    zh: "糯米飯",
    en: "Glutinous rice, cooked",
    aliases: ["sticky rice", "糯米", "油飯", "粽子"],
    category: "米飯",
    carbs: 21.1,
    gi: 94,
    giDisplay: "92-98",
    speed: "fast",
    imageKey: "rice",
    note: "低直鏈澱粉的糯米通常升糖很快。",
    carbSource: "USDA FDC 169711",
    giSource: "Sydney GI: glutinous rice",
  },
  {
    id: "rice-porridge",
    zh: "白粥",
    en: "Rice porridge / congee",
    aliases: ["稀飯", "congee", "rice porridge", "粥"],
    category: "米飯",
    carbs: 11.5,
    gi: 69,
    giDisplay: "66-88",
    speed: "medium",
    imageKey: "rice",
    note: "水分多讓每 100g 碳水較低，但不少白米粥 GI 仍偏中高。",
    carbSource: "USDA FDC 173914",
    giSource: "Sydney GI: rice porridge",
  },
  {
    id: "wild-rice",
    zh: "野米飯",
    en: "Wild rice, cooked",
    aliases: ["wild rice", "加拿大野米"],
    category: "米飯",
    carbs: 21.3,
    gi: 58,
    giDisplay: "58",
    speed: "medium",
    imageKey: "rice",
    note: "口感完整，常作為低到中 GI 米飯替代。",
    carbSource: "USDA FDC 168897",
    giSource: "Sydney GI: Saskatchewan wild rice",
  },
  {
    id: "spaghetti",
    zh: "義大利麵",
    en: "Spaghetti, cooked",
    aliases: ["pasta", "spaghetti", "義麵", "義大利麵條"],
    category: "麵 / 粉",
    carbs: 30.9,
    gi: 44,
    giDisplay: "33-45",
    speed: "slow",
    imageKey: "noodles",
    note: "白義大利麵煮到有咬感時 GI 通常較低。",
    carbSource: "USDA FDC 168934",
    giSource: "Sydney GI: spaghetti",
  },
  {
    id: "macaroni",
    zh: "通心粉",
    en: "Macaroni / short pasta",
    aliases: ["macaroni", "penne", "短管麵", "pasta"],
    category: "麵 / 粉",
    carbs: 30.9,
    gi: 63,
    giDisplay: "44-63",
    speed: "medium",
    imageKey: "noodles",
    note: "短麵形、烹煮時間與冷卻會影響 GI。",
    carbSource: "USDA FDC 168934",
    giSource: "Sydney GI: macaroni / penne",
  },
  {
    id: "egg-noodles",
    zh: "雞蛋麵",
    en: "Egg noodles, cooked",
    aliases: ["蛋麵", "noodles", "egg noodles", "黃麵"],
    category: "麵 / 粉",
    carbs: 25.2,
    gi: 58,
    giDisplay: "58",
    speed: "medium",
    imageKey: "noodles",
    note: "以 Hokkien noodles 測試值作為中式熟麵參考。",
    carbSource: "USDA FDC 169732",
    giSource: "Sydney GI: Hokkien noodles",
  },
  {
    id: "udon",
    zh: "烏龍麵",
    en: "Udon noodles, cooked",
    aliases: ["udon", "烏冬", "うどん"],
    category: "麵 / 粉",
    carbs: 21.4,
    gi: 57,
    giDisplay: "57-62",
    speed: "medium",
    imageKey: "noodles",
    note: "不同日本麵條含水量不同；以熟烏龍麵 GI 測試值標示。",
    carbSource: "USDA FDC / Japanese noodles",
    giSource: "Sydney GI: udon noodles",
  },
  {
    id: "soba",
    zh: "蕎麥麵",
    en: "Soba noodles, cooked",
    aliases: ["soba", "蕎麥", "buckwheat noodles"],
    category: "麵 / 粉",
    carbs: 21.4,
    gi: 46,
    giDisplay: "46-59",
    speed: "slow",
    imageKey: "noodles",
    note: "純蕎麥比例越高，通常越有利於降低升糖速度。",
    carbSource: "USDA FDC 168907",
    giSource: "Sydney GI: soba / buckwheat noodles",
  },
  {
    id: "somen",
    zh: "麵線 / 素麵",
    en: "Somen noodles, cooked",
    aliases: ["麵線", "somen", "細麵", "thin noodles"],
    category: "麵 / 粉",
    carbs: 27.5,
    gi: 62,
    giDisplay: "62",
    speed: "medium",
    imageKey: "noodles",
    note: "細白麵條熟後水分高；GI 以相近日本白麵條參考。",
    carbSource: "USDA FDC 168909",
    giSource: "Sydney GI: udon/plain noodles",
  },
  {
    id: "rice-noodles",
    zh: "米粉 / 河粉",
    en: "Rice noodles, cooked",
    aliases: ["米粉", "河粉", "粿條", "beehoon", "rice vermicelli", "rice noodles"],
    category: "麵 / 粉",
    carbs: 24.0,
    gi: 56,
    giDisplay: "35-61",
    speed: "medium",
    imageKey: "noodles",
    note: "新鮮、乾燥、扁麵與細粉差異大。",
    carbSource: "USDA FDC 168914",
    giSource: "Sydney GI: rice noodles / vermicelli",
  },
  {
    id: "glass-noodles",
    zh: "冬粉 / 粉絲",
    en: "Mung bean glass noodles, cooked",
    aliases: ["冬粉", "粉絲", "glass noodles", "cellophane noodles", "bean thread"],
    category: "麵 / 粉",
    carbs: 20.7,
    gi: 39,
    giDisplay: "20-45",
    speed: "slow",
    imageKey: "noodles",
    note: "真正綠豆澱粉冬粉 GI 低；仿製粉條可能較高。",
    carbSource: "USDA FDC 2708355",
    giSource: "Sydney GI: mung bean noodles",
  },
  {
    id: "instant-noodles",
    zh: "泡麵",
    en: "Instant noodles, prepared",
    aliases: ["速食麵", "instant noodles", "ramen", "方便麵"],
    category: "麵 / 粉",
    carbs: 26.0,
    gi: 52,
    giDisplay: "48-52",
    speed: "slow",
    imageKey: "noodles",
    note: "GI 不一定高，但鈉與油脂通常較高。",
    carbSource: "USDA / prepared noodles",
    giSource: "Sydney GI: instant noodles",
  },
  {
    id: "white-bread",
    zh: "白吐司",
    en: "White bread",
    aliases: ["白麵包", "toast", "吐司", "white bread"],
    category: "麵包",
    carbs: 49.4,
    gi: 75,
    giDisplay: "70-75",
    speed: "fast",
    imageKey: "bread",
    note: "精製白麵包通常升糖較快。",
    carbSource: "USDA FDC 174924",
    giSource: "Sydney GI / Inquis: white bread",
  },
  {
    id: "whole-wheat-bread",
    zh: "全麥吐司",
    en: "Whole wheat bread",
    aliases: ["全麥麵包", "whole wheat", "wholemeal", "全麥"],
    category: "麵包",
    carbs: 42.7,
    gi: 65,
    giDisplay: "61-73",
    speed: "medium",
    imageKey: "bread",
    note: "細磨全麥仍可能中到高 GI；看是否有完整穀粒與纖維。",
    carbSource: "USDA FDC 172688",
    giSource: "Sydney GI: wholemeal bread",
  },
  {
    id: "sourdough",
    zh: "酸種麵包",
    en: "Sourdough bread",
    aliases: ["sourdough", "酸麵包", "歐包"],
    category: "麵包",
    carbs: 49.4,
    gi: 54,
    giDisplay: "52-54",
    speed: "slow",
    imageKey: "bread",
    note: "發酵與配方可能降低 GI，但不同產品差異很大。",
    carbSource: "USDA FDC 174924",
    giSource: "Sydney GI: sourdough bread",
  },
  {
    id: "bagel",
    zh: "貝果",
    en: "Bagel",
    aliases: ["bagel", "貝果麵包"],
    category: "麵包",
    carbs: 53.0,
    gi: 73,
    giDisplay: "61-77",
    speed: "fast",
    imageKey: "bread",
    note: "份量常比吐司大；查詢值是每 100g。",
    carbSource: "USDA FDC 174901",
    giSource: "Sydney GI: bagel",
  },
  {
    id: "pita",
    zh: "白口袋餅",
    en: "White pita bread",
    aliases: ["pita", "口袋餅", "皮塔餅"],
    category: "麵包",
    carbs: 55.7,
    gi: 68,
    giDisplay: "68",
    speed: "medium",
    imageKey: "bread",
    note: "全麥口袋餅常略低，白口袋餅偏中 GI。",
    carbSource: "USDA FDC 174915",
    giSource: "Sydney GI: pita bread",
  },
  {
    id: "corn-tortilla",
    zh: "玉米餅皮",
    en: "Corn tortilla",
    aliases: ["tortilla", "玉米餅", "墨西哥餅"],
    category: "麵包",
    carbs: 44.6,
    gi: 52,
    giDisplay: "49-60",
    speed: "slow",
    imageKey: "corn",
    note: "尼克斯塔馬爾化玉米餅多為低到中 GI。",
    carbSource: "USDA FDC 175036",
    giSource: "Sydney GI: corn tortilla",
  },
  {
    id: "rolled-oats",
    zh: "傳統燕麥粥",
    en: "Rolled oat porridge",
    aliases: ["燕麥", "oats", "oatmeal", "rolled oats", "porridge"],
    category: "穀物",
    carbs: 12.0,
    gi: 57,
    giDisplay: "51-57",
    speed: "medium",
    imageKey: "oats",
    note: "厚片燕麥通常較慢；煮熟後含水量讓每 100g 碳水下降。",
    carbSource: "USDA FDC / cooked oats",
    giSource: "Sydney GI: rolled oat porridge",
  },
  {
    id: "instant-oats",
    zh: "即食燕麥粥",
    en: "Instant oat porridge",
    aliases: ["即食燕麥", "instant oats", "quick oats", "oatmeal"],
    category: "穀物",
    carbs: 11.4,
    gi: 82,
    giDisplay: "82-87",
    speed: "fast",
    imageKey: "oats",
    note: "加工較細、熟化較快的燕麥測試值可達高 GI。",
    carbSource: "USDA FDC / cooked oats",
    giSource: "Sydney GI: instant oat porridge",
  },
  {
    id: "barley",
    zh: "珍珠大麥",
    en: "Pearled barley, cooked",
    aliases: ["大麥", "barley", "pearl barley", "薏仁替代"],
    category: "穀物",
    carbs: 28.2,
    gi: 44,
    giDisplay: "39-44",
    speed: "slow",
    imageKey: "grains",
    note: "富含可溶性纖維，通常是慢升糖主食選項。",
    carbSource: "USDA FDC 170285",
    giSource: "Sydney GI: pearl barley porridge",
  },
  {
    id: "quinoa",
    zh: "藜麥",
    en: "Quinoa, cooked",
    aliases: ["quinoa", "藜麥飯", "藜麥米"],
    category: "穀物",
    carbs: 21.3,
    gi: 53,
    giDisplay: "50-54",
    speed: "slow",
    imageKey: "grains",
    note: "熟藜麥為低 GI 邊緣，蛋白質與纖維較白飯高。",
    carbSource: "USDA FDC 168917",
    giSource: "Sydney GI: quinoa",
  },
  {
    id: "couscous",
    zh: "古斯米",
    en: "Couscous, cooked",
    aliases: ["couscous", "庫斯庫斯", "蒸粗麥粉"],
    category: "穀物",
    carbs: 23.2,
    gi: 65,
    giDisplay: "62-70",
    speed: "medium",
    imageKey: "grains",
    note: "一般古斯米偏中 GI；珍珠或全麥品項可能較低。",
    carbSource: "USDA FDC 169700",
    giSource: "Sydney GI: couscous",
  },
  {
    id: "bulgur",
    zh: "布格麥",
    en: "Bulgur, cooked",
    aliases: ["bulgur", "bulgur wheat", "碎小麥"],
    category: "穀物",
    carbs: 18.6,
    gi: 47,
    giDisplay: "46-53",
    speed: "slow",
    imageKey: "grains",
    note: "熟布格麥保留顆粒結構，通常低 GI。",
    carbSource: "USDA FDC 170287",
    giSource: "Sydney GI: bulgur",
  },
  {
    id: "buckwheat-groats",
    zh: "蕎麥粒",
    en: "Buckwheat groats, cooked",
    aliases: ["buckwheat", "蕎麥飯", "kasha"],
    category: "穀物",
    carbs: 19.9,
    gi: 59,
    giDisplay: "59",
    speed: "medium",
    imageKey: "grains",
    note: "以蕎麥麵測試值作為參考；整粒蕎麥常作為飯類替代。",
    carbSource: "USDA FDC 170686",
    giSource: "Sydney GI: buckwheat noodles",
  },
  {
    id: "millet",
    zh: "小米飯",
    en: "Millet, cooked",
    aliases: ["millet", "小米", "小米粥"],
    category: "穀物",
    carbs: 23.7,
    gi: 64,
    giDisplay: "64",
    speed: "medium",
    imageKey: "grains",
    note: "小米飯可為中 GI；稀粥或糊化程度高時可能更快。",
    carbSource: "USDA FDC 168871",
    giSource: "Sydney GI: foxtail millet cooked",
  },
  {
    id: "millet-porridge",
    zh: "小米粥",
    en: "Millet porridge",
    aliases: ["小米糊", "millet porridge", "小米"],
    category: "穀物",
    carbs: 12.0,
    gi: 94,
    giDisplay: "94",
    speed: "fast",
    imageKey: "oats",
    note: "長時間煮成粥後澱粉更易消化，GI 可高於小米飯。",
    carbSource: "USDA / cooked millet estimate",
    giSource: "Sydney GI: foxtail millet porridge",
  },
  {
    id: "sweet-corn",
    zh: "熟甜玉米",
    en: "Sweet corn, cooked",
    aliases: ["玉米", "corn", "sweet corn"],
    category: "玉米 / 其他",
    carbs: 21.0,
    gi: 52,
    giDisplay: "52",
    speed: "slow",
    imageKey: "corn",
    note: "整粒甜玉米通常比玉米粉糊更慢。",
    carbSource: "USDA FDC 169999",
    giSource: "Common GI tables / Sydney-linked references",
  },
  {
    id: "cornmeal-porridge",
    zh: "玉米糊",
    en: "Cornmeal porridge / polenta",
    aliases: ["polenta", "cornmeal", "玉米粉", "玉米粥"],
    category: "玉米 / 其他",
    carbs: 18.0,
    gi: 68,
    giDisplay: "68-69",
    speed: "medium",
    imageKey: "corn",
    note: "研磨後再煮成糊，通常比整粒玉米更快。",
    carbSource: "USDA / cooked cornmeal estimate",
    giSource: "Sydney GI: cornmeal porridge",
  },
  {
    id: "boiled-potato",
    zh: "水煮馬鈴薯",
    en: "Boiled potato",
    aliases: ["馬鈴薯", "土豆", "potato", "boiled potato"],
    category: "根莖",
    carbs: 20.1,
    gi: 82,
    giDisplay: "70-94",
    speed: "fast",
    imageKey: "roots",
    note: "品種與是否冷卻差異很大；一般水煮馬鈴薯多偏高 GI。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI: boiled potato varieties",
  },
  {
    id: "baked-potato",
    zh: "烤馬鈴薯",
    en: "Baked potato",
    aliases: ["baked potato", "烤土豆", "烤薯"],
    category: "根莖",
    carbs: 21.4,
    gi: 93,
    giDisplay: "93",
    speed: "fast",
    imageKey: "roots",
    note: "乾熱烘烤常讓每 100g 碳水與 GI 都偏高。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI: baked potato",
  },
  {
    id: "boiled-sweet-potato",
    zh: "水煮地瓜",
    en: "Boiled sweet potato",
    aliases: ["地瓜", "番薯", "sweet potato", "yam"],
    category: "根莖",
    carbs: 17.7,
    gi: 48,
    giDisplay: "41-49",
    speed: "slow",
    imageKey: "sweetPotato",
    note: "水煮地瓜多為低 GI；和烤地瓜差異很大。",
    carbSource: "USDA FDC 168484",
    giSource: "Sydney GI: boiled sweet potato",
  },
  {
    id: "baked-sweet-potato",
    zh: "烤地瓜",
    en: "Baked sweet potato",
    aliases: ["烤番薯", "烤地瓜", "sweet potato"],
    category: "根莖",
    carbs: 20.7,
    gi: 87,
    giDisplay: "82-94",
    speed: "fast",
    imageKey: "sweetPotato",
    note: "同樣是地瓜，烘烤測試值常到高 GI。",
    carbSource: "USDA FDC 168483",
    giSource: "Sydney GI: baked sweet potato",
  },
  {
    id: "taro",
    zh: "蒸芋頭",
    en: "Taro, cooked",
    aliases: ["芋頭", "taro", "芋仔"],
    category: "根莖",
    carbs: 34.6,
    gi: 49,
    giDisplay: "48-54",
    speed: "slow",
    imageKey: "roots",
    note: "台灣蒸芋頭測試為低 GI，但每 100g 碳水較高。",
    carbSource: "USDA / SR Legacy taro",
    giSource: "Sydney GI: Taiwan taro",
  },
  {
    id: "cassava",
    zh: "水煮木薯",
    en: "Cassava, boiled",
    aliases: ["木薯", "樹薯", "cassava", "tapioca"],
    category: "根莖",
    carbs: 38.1,
    gi: 46,
    giDisplay: "46",
    speed: "slow",
    imageKey: "cassava",
    note: "水煮木薯可為低 GI；木薯粉或粉圓類會不同。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI: boiled cassava",
  },
  {
    id: "green-plantain",
    zh: "水煮青蕉",
    en: "Green plantain, boiled",
    aliases: ["plantain", "大蕉", "青蕉", "料理香蕉"],
    category: "根莖",
    carbs: 29.1,
    gi: 39,
    giDisplay: "39",
    speed: "slow",
    imageKey: "plantain",
    note: "青蕉澱粉較多、糖較少；熟成大蕉 GI 會升高。",
    carbSource: "USDA FDC 168216",
    giSource: "Sydney GI: green plantain",
  },
  {
    id: "chickpeas",
    zh: "熟鷹嘴豆",
    en: "Chickpeas, cooked",
    aliases: ["鷹嘴豆", "garbanzo", "chickpeas"],
    category: "豆類",
    carbs: 27.4,
    gi: 38,
    giDisplay: "35-38",
    speed: "slow",
    imageKey: "legumes",
    note: "豆類通常升糖慢，但也要把碳水算進總份量。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI: chickpeas",
  },
  {
    id: "lentils",
    zh: "熟扁豆",
    en: "Lentils, cooked",
    aliases: ["扁豆", "lentils", "小扁豆"],
    category: "豆類",
    carbs: 20.1,
    gi: 42,
    giDisplay: "29-42",
    speed: "slow",
    imageKey: "legumes",
    note: "低 GI，高纖維與蛋白質，是常見主食替代。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI: lentils",
  },
  {
    id: "black-beans",
    zh: "熟黑豆",
    en: "Black beans, cooked",
    aliases: ["黑豆", "black beans"],
    category: "豆類",
    carbs: 23.7,
    gi: 31,
    giDisplay: "31",
    speed: "slow",
    imageKey: "legumes",
    note: "低 GI；適合和白飯混搭降低整餐升糖負擔。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI: black beans",
  },
  {
    id: "kidney-beans",
    zh: "熟紅腰豆",
    en: "Kidney beans, cooked",
    aliases: ["紅腰豆", "kidney beans", "red beans"],
    category: "豆類",
    carbs: 22.8,
    gi: 29,
    giDisplay: "23-43",
    speed: "slow",
    imageKey: "legumes",
    note: "熟豆類普遍低 GI；罐頭與加糖料理需另看配方。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI: kidney beans",
  },
  {
    id: "kara-chicken-cutlet",
    zh: "卡啦雞腿排",
    en: "Crispy spicy chicken thigh cutlet",
    aliases: ["卡拉雞", "卡啦雞", "咔啦雞", "雞腿排", "炸雞排", "kara chicken"],
    category: "台灣主餐",
    carbs: 9.8,
    gi: 55,
    giDisplay: "估 55",
    speed: "medium",
    note: "單吃碳水主要來自裹粉；油脂多可能讓血糖延後上升，不等於沒有影響。",
    carbSource: "NYCU 營養分析表",
    giSource: "混合餐估算",
  },
  {
    id: "kara-chicken-burger",
    zh: "卡啦雞堡",
    en: "Crispy spicy chicken burger",
    aliases: ["卡拉雞堡", "卡啦雞腿堡", "咔啦雞蛋漢堡", "雞腿堡", "漢堡"],
    category: "台灣主餐",
    carbs: 24.2,
    gi: 72,
    giDisplay: "估 70+",
    speed: "fast",
    note: "漢堡麵包加裹粉雞排；一份估約 55-66g 碳水，醬料會再增加變動。",
    carbSource: "NYCU 營養分析表",
    giSource: "以白麵包/炸粉混合估算",
  },
  {
    id: "crispy-chicken-burger",
    zh: "香雞排堡",
    en: "Crispy chicken burger",
    aliases: ["香雞堡", "雞排堡", "麥香雞", "漢堡"],
    category: "台灣主餐",
    carbs: 24.4,
    gi: 72,
    giDisplay: "估 70+",
    speed: "fast",
    note: "主要碳水來自漢堡麵包；一份常落在 39-47g 碳水上下。",
    carbSource: "NYCU / McDonald's TW nutrition",
    giSource: "以白麵包/炸粉混合估算",
  },
  {
    id: "big-mac",
    zh: "大麥克",
    en: "Big Mac",
    aliases: ["麥當勞", "漢堡", "big mac"],
    category: "台灣主餐",
    carbs: 24.3,
    gi: 72,
    giDisplay: "估 70+",
    speed: "fast",
    note: "官方營養資訊常見每份約 51g 碳水；麵包是主要升糖來源。",
    carbSource: "McDonald's TW nutrition",
    giSource: "以白麵包混合餐估算",
  },
  {
    id: "fried-chicken-leg",
    zh: "炸雞腿",
    en: "Fried chicken leg",
    aliases: ["炸雞腿排", "雞腿", "便當主菜"],
    category: "台灣主餐",
    carbs: 12.1,
    gi: 55,
    giDisplay: "估 55",
    speed: "medium",
    note: "不配飯時碳水主要在裹粉；配便當白飯時整餐通常變快升糖。",
    carbSource: "自由健康網/營養師整理",
    giSource: "混合餐估算",
  },
  {
    id: "braised-chicken-leg",
    zh: "滷雞腿",
    en: "Braised chicken leg",
    aliases: ["滷雞腿排", "雞腿", "便當主菜"],
    category: "台灣主餐",
    carbs: 0.0,
    gi: 10,
    giDisplay: "低碳",
    speed: "slow",
    note: "主菜本身幾乎無碳水；真正影響血糖的是配飯、滷汁糖量與份量。",
    carbSource: "自由健康網/營養師整理",
    giSource: "低碳主菜",
  },
  {
    id: "fried-chicken-cutlet",
    zh: "炸雞排",
    en: "Fried chicken cutlet",
    aliases: ["雞排", "炸雞排", "便當主菜", "鹽酥雞排"],
    category: "台灣主餐",
    carbs: 11.3,
    gi: 55,
    giDisplay: "估 55",
    speed: "medium",
    note: "單吃碳水在裹粉；若加甜辣醬或配飯，總碳水會明顯增加。",
    carbSource: "NYCU 便當營養分析表",
    giSource: "混合餐估算",
  },
  {
    id: "fried-chicken-leg-bento",
    zh: "炸雞腿便當",
    en: "Fried chicken leg bento",
    aliases: ["雞腿便當", "炸雞腿飯", "便當"],
    category: "台灣主餐",
    carbs: 12.8,
    gi: 78,
    giDisplay: "估 75+",
    speed: "fast",
    note: "每 100g 因含菜和肉看似不高；整份範例約 93g 碳水，白飯仍是主因。",
    carbSource: "NYCU 便當營養分析表",
    giSource: "白飯主導估算",
  },
  {
    id: "chicken-cutlet-bento",
    zh: "雞排便當",
    en: "Fried chicken cutlet bento",
    aliases: ["炸雞排便當", "雞排飯", "便當"],
    category: "台灣主餐",
    carbs: 16.4,
    gi: 78,
    giDisplay: "估 75+",
    speed: "fast",
    note: "整份範例約 108g 碳水；雞排裹粉加白飯，通常比單吃雞排更影響血糖。",
    carbSource: "NYCU 便當營養分析表",
    giSource: "白飯主導估算",
  },
  {
    id: "braised-chicken-leg-bento",
    zh: "滷雞腿便當",
    en: "Braised chicken leg bento",
    aliases: ["滷雞腿飯", "雞腿便當", "便當"],
    category: "台灣主餐",
    carbs: 14.3,
    gi: 76,
    giDisplay: "估 75+",
    speed: "fast",
    note: "主菜比炸雞腿少裹粉，但整份範例仍約 98g 碳水，主要來自白飯。",
    carbSource: "NYCU 便當營養分析表",
    giSource: "白飯主導估算",
  },
  {
    id: "braised-pork-rib-bento",
    zh: "滷排骨便當",
    en: "Braised pork rib bento",
    aliases: ["排骨便當", "排骨飯", "滷排骨飯", "便當"],
    category: "台灣主餐",
    carbs: 15.0,
    gi: 76,
    giDisplay: "估 75+",
    speed: "fast",
    note: "整份範例約 102g 碳水；若飯量減半，血糖負擔會差很多。",
    carbSource: "NYCU 便當營養分析表",
    giSource: "白飯主導估算",
  },
  {
    id: "kongrou-bento",
    zh: "控肉便當",
    en: "Braised pork belly bento",
    aliases: ["焢肉便當", "控肉飯", "焢肉飯", "便當"],
    category: "台灣主餐",
    carbs: 17.4,
    gi: 76,
    giDisplay: "估 75+",
    speed: "fast",
    note: "整份範例約 118g 碳水；控肉脂肪多可能讓飯後血糖延後。",
    carbSource: "NYCU 便當營養分析表",
    giSource: "白飯主導估算",
  },
  {
    id: "minced-pork-rice",
    zh: "滷肉飯",
    en: "Braised pork rice",
    aliases: ["魯肉飯", "肉燥飯", "爌肉飯", "lu rou fan"],
    category: "台灣主餐",
    carbs: 30.0,
    gi: 80,
    giDisplay: "估 80",
    speed: "fast",
    note: "每 100g 估約 30g 碳水；肉燥油脂可能延後血糖，但白飯和滷汁仍要算。",
    carbSource: "滷肉世家營養比較",
    giSource: "白飯主導估算",
  },
  {
    id: "chicken-rice",
    zh: "雞肉飯",
    en: "Taiwanese chicken rice",
    aliases: ["嘉義雞肉飯", "火雞肉飯", "雞肉飯便當"],
    category: "台灣主餐",
    carbs: 29.0,
    gi: 78,
    giDisplay: "估 75+",
    speed: "fast",
    note: "以白飯加雞肉絲/雞油估算；少淋雞油不會少太多碳水，減飯量才是關鍵。",
    carbSource: "白飯+雞肉飯估算",
    giSource: "白飯主導估算",
  },
  {
    id: "beef-noodle-soup",
    zh: "牛肉麵",
    en: "Taiwanese beef noodle soup",
    aliases: ["紅燒牛肉麵", "清燉牛肉麵", "牛肉湯麵"],
    category: "台灣主餐",
    carbs: 9.7,
    gi: 72,
    giDisplay: "估 70+",
    speed: "fast",
    note: "每 100g 因含湯看似低；整碗常約 90-120g 碳水，麵量才是重點。",
    carbSource: "牛肉麵營養資料彙整",
    giSource: "小麥麵條主導估算",
  },
  {
    id: "fried-rice",
    zh: "蛋炒飯",
    en: "Egg fried rice",
    aliases: ["炒飯", "蝦仁炒飯", "雞肉炒飯", "火腿炒飯"],
    category: "台灣主餐",
    carbs: 24.0,
    gi: 78,
    giDisplay: "估 75+",
    speed: "fast",
    note: "每 100g 約 24g 碳水；油脂會延後吸收，但白飯炒過後仍是主要升糖來源。",
    carbSource: "炒飯營養資料彙整",
    giSource: "白飯主導估算",
  },
  {
    id: "fried-noodles",
    zh: "炒麵",
    en: "Taiwanese fried noodles",
    aliases: ["台式炒麵", "油麵", "肉絲炒麵"],
    category: "台灣主餐",
    carbs: 25.0,
    gi: 72,
    giDisplay: "估 70+",
    speed: "fast",
    note: "以熟麵條加油脂估算；醬汁勾芡或甜味醬會讓血糖更明顯。",
    carbSource: "熟麵條+台式炒麵估算",
    giSource: "小麥麵條主導估算",
  },
  {
    id: "pork-dumplings",
    zh: "豬肉水餃",
    en: "Pork dumplings",
    aliases: ["水餃", "餃子", "韭菜水餃", "高麗菜水餃"],
    category: "台灣主餐",
    carbs: 25.0,
    gi: 60,
    giDisplay: "約 60",
    speed: "medium",
    note: "麵皮是主要碳水；一顆看似小，吃到 10-15 顆總碳水會很快累積。",
    carbSource: "水餃營養資料彙整",
    giSource: "Logi pork dumpling GI",
  },
  {
    id: "potstickers",
    zh: "鍋貼",
    en: "Potstickers",
    aliases: ["煎餃", "鍋貼水餃", "八方雲集"],
    category: "台灣主餐",
    carbs: 28.0,
    gi: 65,
    giDisplay: "估 65",
    speed: "medium",
    note: "比水餃多煎油；麵皮仍是主碳水，甜辣醬/醬油膏也要算。",
    carbSource: "水餃/煎餃估算",
    giSource: "麵皮混合餐估算",
  },
  {
    id: "oyster-omelet",
    zh: "蚵仔煎",
    en: "Oyster omelet",
    aliases: ["蚵仔煎", "蚵仔煎加醬", "夜市"],
    category: "台灣主餐",
    carbs: 20.0,
    gi: 68,
    giDisplay: "估 68",
    speed: "medium",
    note: "太白粉/地瓜粉和甜醬是主要碳水；醬少一點通常比較穩。",
    carbSource: "台灣小吃估算",
    giSource: "澱粉糊+甜醬估算",
  },
  {
    id: "teppan-noodles",
    zh: "鐵板麵",
    en: "Taiwanese teppan noodles",
    aliases: ["早餐店鐵板麵", "蘑菇鐵板麵", "黑胡椒鐵板麵"],
    category: "台灣主餐",
    carbs: 25.0,
    gi: 72,
    giDisplay: "估 70+",
    speed: "fast",
    note: "麵條加勾芡醬汁；加蛋主要增加蛋白質，碳水多半還是在麵和醬。",
    carbSource: "熟麵條+早餐店估算",
    giSource: "小麥麵條主導估算",
  },
  {
    id: "salt-pepper-chicken",
    zh: "鹽酥雞",
    en: "Taiwanese popcorn chicken",
    aliases: ["鹹酥雞", "炸物", "雞米花", "夜市"],
    category: "台灣主餐",
    carbs: 8.0,
    gi: 50,
    giDisplay: "估 50",
    speed: "slow",
    note: "單吃碳水不算高，但常搭配甜不辣、米血、地瓜薯條時整袋碳水會暴增。",
    carbSource: "炸雞裹粉估算",
    giSource: "低碳炸物估算",
  },
  {
    id: "apple",
    zh: "蘋果",
    en: "Apple, raw",
    aliases: ["青蘋果", "紅蘋果", "富士蘋果", "apple"],
    category: "水果",
    carbs: 14.8,
    gi: 44,
    giDisplay: "44",
    speed: "slow",
    note: "帶皮吃纖維較多；一顆中大型蘋果常超過 150g，總碳水要乘上份量。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI / International GI tables",
  },
  {
    id: "banana",
    zh: "香蕉",
    en: "Banana, raw",
    aliases: ["芭蕉", "熟香蕉", "banana"],
    category: "水果",
    carbs: 22.8,
    gi: 57,
    giDisplay: "47-57",
    speed: "medium",
    note: "越熟越甜、GI 可能較高；一根常約 100-120g，可直接當一份主碳水看。",
    carbSource: "USDA FDC 173944",
    giSource: "Sydney GI banana guide",
  },
  {
    id: "guava",
    zh: "芭樂",
    en: "Guava, raw",
    aliases: ["番石榴", "珍珠芭樂", "紅心芭樂", "guava"],
    category: "水果",
    carbs: 14.3,
    gi: 31,
    giDisplay: "31",
    speed: "slow",
    note: "纖維高、升糖通常較慢；但半顆到一顆的重量差很多，仍要看實際份量。",
    carbSource: "USDA FDC 173044",
    giSource: "Taiwan guava GI study / low-GI references",
  },
  {
    id: "orange",
    zh: "柳橙",
    en: "Orange, raw",
    aliases: ["橙子", "香吉士", "orange"],
    category: "水果",
    carbs: 11.8,
    gi: 43,
    giDisplay: "43",
    speed: "slow",
    note: "整顆水果和柳橙汁不同；打成果汁少了咀嚼和纖維感，通常更容易喝過量。",
    carbSource: "USDA FDC 169097",
    giSource: "International GI tables",
  },
  {
    id: "mandarin",
    zh: "橘子",
    en: "Mandarin orange / Tangerine, raw",
    aliases: ["桶柑", "茂谷柑", "蜜柑", "mandarin", "tangerine"],
    category: "水果",
    carbs: 13.3,
    gi: 47,
    giDisplay: "估 47",
    speed: "slow",
    note: "小顆容易連吃好幾顆；血糖紀錄建議用顆數和重量一起記。",
    carbSource: "USDA FDC 169105",
    giSource: "citrus low-GI estimate",
  },
  {
    id: "grapes",
    zh: "葡萄",
    en: "Grapes, raw",
    aliases: ["無籽葡萄", "巨峰葡萄", "綠葡萄", "grapes"],
    category: "水果",
    carbs: 18.1,
    gi: 59,
    giDisplay: "約 59",
    speed: "medium",
    note: "一口一顆很容易吃超過 200g；甜度高時，份量比單看 GI 更重要。",
    carbSource: "USDA FDC 174683",
    giSource: "International GI tables",
  },
  {
    id: "watermelon",
    zh: "西瓜",
    en: "Watermelon, raw",
    aliases: ["無籽西瓜", "watermelon"],
    category: "水果",
    carbs: 7.6,
    gi: 50,
    giDisplay: "50",
    speed: "slow",
    note: "每 100g 碳水低，但常吃大份量；新版 Sydney GI 列為 50，舊表曾列高 GI。",
    carbSource: "USDA FDC 167765",
    giSource: "Sydney GI watermelon 2021",
  },
  {
    id: "mango",
    zh: "芒果",
    en: "Mango, raw",
    aliases: ["愛文芒果", "金煌芒果", "土芒果", "mango"],
    category: "水果",
    carbs: 15.0,
    gi: 51,
    giDisplay: "51",
    speed: "slow",
    note: "一顆芒果可食部常不只 100g；半顆或切丁一碗都要重新估總碳水。",
    carbSource: "USDA FDC 169910",
    giSource: "Sydney GI shopping guide",
  },
  {
    id: "pineapple",
    zh: "鳳梨",
    en: "Pineapple, raw",
    aliases: ["金鑽鳳梨", "菠蘿", "pineapple"],
    category: "水果",
    carbs: 13.1,
    gi: 59,
    giDisplay: "59",
    speed: "medium",
    note: "酸甜感不一定代表低糖；切片吃時可先抓一拳頭大小再觀察血糖。",
    carbSource: "USDA FDC 169124",
    giSource: "Sydney GI shopping guide",
  },
  {
    id: "papaya",
    zh: "木瓜",
    en: "Papaya, raw",
    aliases: ["番木瓜", "papaya"],
    category: "水果",
    carbs: 10.8,
    gi: 56,
    giDisplay: "56",
    speed: "medium",
    note: "碳水密度不高，但一盤切木瓜可能 200g 以上；飯後吃要一起算進餐後血糖。",
    carbSource: "USDA FDC 169926",
    giSource: "Sydney GI shopping guide",
  },
  {
    id: "strawberry",
    zh: "草莓",
    en: "Strawberry, raw",
    aliases: ["草莓", "strawberries", "strawberry"],
    category: "水果",
    carbs: 7.7,
    gi: 40,
    giDisplay: "估 40",
    speed: "slow",
    note: "原味草莓碳水較低；煉乳、糖粉、果醬會讓整體升糖完全不同。",
    carbSource: "USDA FDC 167762",
    giSource: "fruit GI reference",
  },
  {
    id: "blueberry",
    zh: "藍莓",
    en: "Blueberry, raw",
    aliases: ["藍莓", "blueberries", "blueberry"],
    category: "水果",
    carbs: 14.6,
    gi: 53,
    giDisplay: "約 53",
    speed: "slow",
    note: "一小盒常見 125g 左右；原味可，若拌優格要另外算優格糖分。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI reference",
  },
  {
    id: "kiwifruit",
    zh: "奇異果",
    en: "Kiwifruit, green, raw",
    aliases: ["獼猴桃", "綠奇異果", "黃金奇異果", "kiwi"],
    category: "水果",
    carbs: 14.7,
    gi: 53,
    giDisplay: "約 53",
    speed: "slow",
    note: "一顆通常約 70-100g；黃金奇異果甜度較高，建議用自己的血糖紀錄校正。",
    carbSource: "USDA FDC 168153",
    giSource: "fruit GI reference",
  },
  {
    id: "pear",
    zh: "梨子",
    en: "Pear, raw",
    aliases: ["水梨", "西洋梨", "新興梨", "pear"],
    category: "水果",
    carbs: 15.2,
    gi: 33,
    giDisplay: "33-38",
    speed: "slow",
    note: "GI 低但水梨通常很大顆；吃半顆和一顆的總碳水差距很明顯。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI pear guide",
  },
  {
    id: "peach",
    zh: "桃子",
    en: "Peach, raw",
    aliases: ["水蜜桃", "甜桃", "peach"],
    category: "水果",
    carbs: 9.5,
    gi: 42,
    giDisplay: "約 42",
    speed: "slow",
    note: "新鮮桃子通常比糖水罐頭穩；罐頭糖漿版不要套用這筆資料。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI reference",
  },
  {
    id: "plum",
    zh: "李子",
    en: "Plum, raw",
    aliases: ["紅李", "黑李", "plum"],
    category: "水果",
    carbs: 11.4,
    gi: 39,
    giDisplay: "約 39",
    speed: "slow",
    note: "新鮮李子和蜜餞完全不同；蜜餞常有額外糖和鈉，不適用這筆。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI reference",
  },
  {
    id: "cherries",
    zh: "櫻桃",
    en: "Sweet cherries, raw",
    aliases: ["美國櫻桃", "車厘子", "cherry", "cherries"],
    category: "水果",
    carbs: 16.0,
    gi: 22,
    giDisplay: "約 22",
    speed: "slow",
    note: "GI 低但每 100g 碳水不算低；一盒分次吃比邊看電視邊吃穩。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI reference",
  },
  {
    id: "grapefruit",
    zh: "葡萄柚",
    en: "Grapefruit, raw",
    aliases: ["西柚", "grapefruit"],
    category: "水果",
    carbs: 8.1,
    gi: 25,
    giDisplay: "約 25",
    speed: "slow",
    note: "碳水和 GI 都偏低；若正在用藥，葡萄柚可能有交互作用，需依醫囑。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI reference",
  },
  {
    id: "pomelo",
    zh: "柚子 / 文旦",
    en: "Pomelo, raw",
    aliases: ["文旦", "麻豆文旦", "柚子", "pomelo"],
    category: "水果",
    carbs: 9.6,
    gi: 30,
    giDisplay: "估 30",
    speed: "slow",
    note: "中秋常一次剝很多瓣；每 100g 不高，但整顆分量大，建議秤重或用碗量。",
    carbSource: "USDA / TFDA nutrition data",
    giSource: "citrus low-GI estimate",
  },
  {
    id: "cantaloupe",
    zh: "哈密瓜",
    en: "Cantaloupe / Rockmelon, raw",
    aliases: ["哈蜜瓜", "香瓜", "rockmelon", "cantaloupe"],
    category: "水果",
    carbs: 8.2,
    gi: 68,
    giDisplay: "68",
    speed: "medium",
    note: "每 100g 碳水低，但 GI 偏中高；冰冰甜甜容易吃到大碗，份量要留意。",
    carbSource: "USDA FoodData Central",
    giSource: "Sydney GI shopping guide",
  },
  {
    id: "honeydew",
    zh: "美濃瓜",
    en: "Honeydew melon, raw",
    aliases: ["洋香瓜", "蜜瓜", "honeydew"],
    category: "水果",
    carbs: 9.1,
    gi: 62,
    giDisplay: "估 62",
    speed: "medium",
    note: "水分高、碳水密度低；血糖反應常取決於一次吃多少片。",
    carbSource: "USDA FoodData Central",
    giSource: "melon GI estimate",
  },
  {
    id: "lychee",
    zh: "荔枝",
    en: "Lychee, raw",
    aliases: ["玉荷包", "黑葉荔枝", "litchi", "lychee"],
    category: "水果",
    carbs: 16.5,
    gi: 79,
    giDisplay: "估 50-79",
    speed: "fast",
    note: "GI 資料差異大，保守列為快速；一顆小但連吃很多顆時糖量累積很快。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI references vary",
  },
  {
    id: "longan",
    zh: "龍眼",
    en: "Longan, raw",
    aliases: ["桂圓", "新鮮龍眼", "longan"],
    category: "水果",
    carbs: 15.1,
    gi: 60,
    giDisplay: "估 60",
    speed: "medium",
    note: "新鮮龍眼和龍眼乾差非常多；龍眼乾是濃縮糖分，不能用這筆估。",
    carbSource: "USDA FoodData Central",
    giSource: "sweet tropical fruit estimate",
  },
  {
    id: "persimmon",
    zh: "柿子",
    en: "Persimmon, raw",
    aliases: ["甜柿", "脆柿", "富有柿", "persimmon"],
    category: "水果",
    carbs: 18.6,
    gi: 50,
    giDisplay: "估 50",
    speed: "slow",
    note: "每 100g 碳水偏高；一顆甜柿常超過 150g，實際血糖負擔不低。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI estimate",
  },
  {
    id: "passionfruit",
    zh: "百香果",
    en: "Passion fruit, raw",
    aliases: ["百香果", "passion fruit", "granadilla"],
    category: "水果",
    carbs: 23.4,
    gi: 30,
    giDisplay: "約 30",
    speed: "slow",
    note: "每 100g 數字高，但一顆可食部常只有十幾克；加糖做果汁時另計。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI reference",
  },
  {
    id: "wax-apple",
    zh: "蓮霧",
    en: "Wax apple, raw",
    aliases: ["黑珍珠蓮霧", "wax apple", "rose apple"],
    category: "水果",
    carbs: 8.6,
    gi: 35,
    giDisplay: "估 35",
    speed: "slow",
    note: "水分高、碳水偏低；不同品種甜度差很多，黑珍珠等甜品種仍要看份量。",
    carbSource: "TFDA / Taiwan nutrition summaries",
    giSource: "low-carb fruit estimate",
  },
  {
    id: "jujube-fresh",
    zh: "棗子",
    en: "Fresh jujube",
    aliases: ["印度棗", "蜜棗", "青棗", "jujube"],
    category: "水果",
    carbs: 20.2,
    gi: 60,
    giDisplay: "估 60",
    speed: "medium",
    note: "新鮮棗子碳水密度比多數水果高；大顆蜜棗一顆就可能接近一份水果碳水。",
    carbSource: "USDA / fruit nutrition references",
    giSource: "sweet fruit estimate",
  },
  {
    id: "custard-apple",
    zh: "釋迦",
    en: "Custard apple / Sugar apple",
    aliases: ["番荔枝", "大目釋迦", "鳳梨釋迦", "custard apple", "sugar apple"],
    category: "水果",
    carbs: 23.6,
    gi: 54,
    giDisplay: "約 54",
    speed: "slow",
    note: "碳水密度高、果肉甜；即使 GI 不算高，半顆到一顆的總碳水很可觀。",
    carbSource: "USDA / TFDA nutrition data",
    giSource: "Sydney GI custard apple",
  },
  {
    id: "avocado",
    zh: "酪梨",
    en: "Avocado, raw",
    aliases: ["牛油果", "avocado"],
    category: "水果",
    carbs: 8.5,
    gi: 15,
    giDisplay: "估 15",
    speed: "slow",
    note: "總碳水多來自纖維，脂肪高、升糖慢；加布丁、牛奶、糖打成果汁就不同。",
    carbSource: "USDA FDC 171705",
    giSource: "low-GI estimate",
  },
  {
    id: "pomegranate",
    zh: "石榴",
    en: "Pomegranate, raw",
    aliases: ["紅石榴", "pomegranate"],
    category: "水果",
    carbs: 18.7,
    gi: 53,
    giDisplay: "估 53",
    speed: "slow",
    note: "籽粒小容易一把接一把吃；石榴汁通常更快喝過量，不套用整果數值。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI estimate",
  },
  {
    id: "fig",
    zh: "無花果",
    en: "Fig, raw",
    aliases: ["新鮮無花果", "fig"],
    category: "水果",
    carbs: 19.2,
    gi: 35,
    giDisplay: "估 35",
    speed: "slow",
    note: "這是新鮮無花果；乾燥無花果水分少、碳水濃縮很多，不要混用。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI estimate",
  },
  {
    id: "starfruit",
    zh: "楊桃",
    en: "Starfruit, raw",
    aliases: ["五斂子", "carambola", "starfruit"],
    category: "水果",
    carbs: 6.7,
    gi: 36,
    giDisplay: "估 36",
    speed: "slow",
    note: "碳水低；腎臟病患者不建議自行食用楊桃，需依醫囑。",
    carbSource: "USDA FoodData Central",
    giSource: "low-carb fruit estimate",
  },
  {
    id: "durian",
    zh: "榴槤",
    en: "Durian, raw",
    aliases: ["榴蓮", "durian"],
    category: "水果",
    carbs: 27.1,
    gi: 49,
    giDisplay: "估 49",
    speed: "slow",
    note: "每 100g 碳水高且熱量高；即使升糖不一定快，總量很容易超標。",
    carbSource: "USDA FoodData Central",
    giSource: "fruit GI estimate",
  },
  {
    id: "egg-pancake",
    zh: "蛋餅",
    en: "Taiwanese egg pancake",
    aliases: ["原味蛋餅", "起司蛋餅", "egg pancake", "早餐"],
    category: "早餐店",
    carbs: 24.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "麵糊皮加蛋,一份常 100-140g、總碳水約 24-34g;加起司、火腿、培根熱量會升高但碳水變化不大。",
    carbSource: "早餐店營養估算",
    giSource: "白麵粉皮估算",
  },
  {
    id: "radish-cake",
    zh: "蘿蔔糕",
    en: "Pan-fried radish cake",
    aliases: ["菜頭粿", "煎蘿蔔糕", "radish cake", "早餐"],
    category: "早餐店",
    carbs: 20.0,
    gi: 80,
    giDisplay: "估 80",
    speed: "fast",
    note: "在來米漿主體,煎後外脆;一片約 50-70g、總碳水 10-14g,搭蛋或醬油膏會再加。",
    carbSource: "USDA / 在來米估算",
    giSource: "Sydney GI: rice cake",
  },
  {
    id: "shaobing",
    zh: "燒餅",
    en: "Sesame flatbread",
    aliases: ["芝麻燒餅", "shaobing", "燒餅油條"],
    category: "早餐店",
    carbs: 48.0,
    gi: 72,
    giDisplay: "估 72",
    speed: "fast",
    note: "層次酥烤麵餅;一份約 60-80g、總碳水 28-38g,夾油條會再多麵粉碳水。",
    carbSource: "中式麵點營養估算",
    giSource: "白麵粉烘烤估算",
  },
  {
    id: "youtiao",
    zh: "油條",
    en: "Fried cruller",
    aliases: ["油炸鬼", "youtiao"],
    category: "早餐店",
    carbs: 45.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "高溫油炸的白麵粉長條;一根約 40-60g、碳水 18-27g,熱量主要來自油脂。",
    carbSource: "炸麵食估算",
    giSource: "白麵粉油炸估算",
  },
  {
    id: "scallion-pancake",
    zh: "蔥抓餅",
    en: "Scallion pancake",
    aliases: ["蔥油餅", "抓餅", "scallion pancake"],
    category: "早餐店",
    carbs: 38.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "白麵粉層次餅;一份約 80-120g、碳水 30-46g,加蛋、起司、九層塔不大幅改變碳水。",
    carbSource: "中式麵點營養估算",
    giSource: "白麵粉烘烤估算",
  },
  {
    id: "thick-toast",
    zh: "厚片吐司",
    en: "Thick toast (sweet spread)",
    aliases: ["奶酥厚片", "花生厚片", "巧克力厚片", "thick toast"],
    category: "早餐店",
    carbs: 52.0,
    gi: 78,
    giDisplay: "估 75+",
    speed: "fast",
    note: "白吐司一片約 50g、加奶酥/巧克力醬一份可達 30-40g 碳水;醬料糖分要加進去算。",
    carbSource: "白吐司+甜醬估算",
    giSource: "白麵包+糖醬估算",
  },
  {
    id: "ham-sandwich",
    zh: "火腿三明治",
    en: "Ham sandwich (Taiwan breakfast)",
    aliases: ["三明治", "火腿蛋三明治", "肉鬆三明治"],
    category: "早餐店",
    carbs: 28.0,
    gi: 72,
    giDisplay: "估 72",
    speed: "fast",
    note: "白吐司 2-3 片夾火腿/蛋/小黃瓜;一份約 120-180g、碳水 34-50g。",
    carbSource: "早餐三明治估算",
    giSource: "白麵包主導估算",
  },
  {
    id: "rice-ball-fantuan",
    zh: "傳統飯糰",
    en: "Taiwanese rice roll",
    aliases: ["紫米飯糰", "fantuan", "早餐飯糰", "飯糰"],
    category: "早餐店",
    carbs: 35.0,
    gi: 82,
    giDisplay: "估 80+",
    speed: "fast",
    note: "糯米/白米飯包油條、肉鬆、菜脯;一顆約 150-200g、碳水 50-70g,糯米升糖較快。",
    carbSource: "糯米飯糰估算",
    giSource: "糯米主導估算",
  },
  {
    id: "sweet-soy-milk",
    zh: "加糖豆漿",
    en: "Sweetened soy milk",
    aliases: ["甜豆漿", "soy milk", "豆奶"],
    category: "早餐店",
    carbs: 6.0,
    gi: 34,
    giDisplay: "34",
    speed: "slow",
    note: "每 100ml 約 5-7g 碳水;一杯 350-500ml 約 18-30g,主要來自加的糖。",
    carbSource: "豆漿營養估算",
    giSource: "Sydney GI: soy milk",
  },
  {
    id: "unsweet-soy-milk",
    zh: "無糖豆漿",
    en: "Unsweetened soy milk",
    aliases: ["原味豆漿", "無糖豆漿"],
    category: "早餐店",
    carbs: 1.5,
    gi: 30,
    giDisplay: "估 30",
    speed: "slow",
    note: "幾乎不含糖,蛋白質約 3-4g/100ml;適合低升糖早餐搭配。",
    carbSource: "USDA / 豆漿估算",
    giSource: "Sydney GI: soy milk",
  },
  {
    id: "rice-milk-drink",
    zh: "米漿",
    en: "Rice peanut milk drink",
    aliases: ["花生米漿", "rice milk", "米奶"],
    category: "早餐店",
    carbs: 12.0,
    gi: 75,
    giDisplay: "估 75",
    speed: "fast",
    note: "白米加花生打成、加糖;一杯 350-500ml 碳水可達 40-60g,升糖比豆漿快很多。",
    carbSource: "米漿營養估算",
    giSource: "白米糊+糖估算",
  },
  {
    id: "gua-bao",
    zh: "刈包 / 割包",
    en: "Gua bao (steamed bun with pork)",
    aliases: ["割包", "刈包", "虎咬豬", "gua bao"],
    category: "夜市小吃",
    carbs: 30.0,
    gi: 72,
    giDisplay: "估 72",
    speed: "fast",
    note: "白饅頭夾滷肉、酸菜、花生粉、香菜;一份約 120-150g、碳水 36-45g。",
    carbSource: "刈包估算",
    giSource: "白饅頭主導估算",
  },
  {
    id: "ba-wan",
    zh: "肉圓",
    en: "Ba wan (Taiwanese meatball)",
    aliases: ["彰化肉圓", "清蒸肉圓", "炸肉圓", "ba wan"],
    category: "夜市小吃",
    carbs: 22.0,
    gi: 65,
    giDisplay: "估 65",
    speed: "medium",
    note: "地瓜粉加在來米皮包肉;一顆約 100-150g、碳水 22-33g,甜辣醬另外算糖。",
    carbSource: "肉圓營養估算",
    giSource: "澱粉皮+甜醬估算",
  },
  {
    id: "oyster-vermicelli",
    zh: "蚵仔麵線",
    en: "Oyster vermicelli",
    aliases: ["大腸麵線", "麵線糊", "oyster vermicelli"],
    category: "夜市小吃",
    carbs: 14.0,
    gi: 65,
    giDisplay: "估 65",
    speed: "medium",
    note: "白麵線加勾芡湯;一碗約 300g、碳水 35-45g,勾芡與烏醋糖分都要算。",
    carbSource: "麵線糊估算",
    giSource: "白麵線+勾芡估算",
  },
  {
    id: "stinky-tofu",
    zh: "炸臭豆腐",
    en: "Fried stinky tofu",
    aliases: ["臭豆腐", "stinky tofu", "夜市"],
    category: "夜市小吃",
    carbs: 8.0,
    gi: 40,
    giDisplay: "估 40",
    speed: "slow",
    note: "豆腐本身碳水低;一份 4 塊約 150g、總碳水 10-12g,泡菜含糖另計。",
    carbSource: "豆腐+裹粉估算",
    giSource: "低碳油炸估算",
  },
  {
    id: "sweet-potato-balls",
    zh: "地瓜球",
    en: "Fried sweet potato balls",
    aliases: ["QQ 球", "地瓜球", "夜市"],
    category: "夜市小吃",
    carbs: 38.0,
    gi: 78,
    giDisplay: "估 75+",
    speed: "fast",
    note: "地瓜加樹薯粉油炸;一份 100g 約 38g 碳水,糖粉/醬會再增加。",
    carbSource: "炸澱粉球估算",
    giSource: "澱粉油炸估算",
  },
  {
    id: "red-bean-cake",
    zh: "紅豆餅 / 車輪餅",
    en: "Red bean wheel cake",
    aliases: ["車輪餅", "今川燒", "紅豆餅", "奶油餅"],
    category: "夜市小吃",
    carbs: 45.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "白麵粉皮包紅豆/奶油內餡;一顆約 70-90g、碳水 30-40g,奶油版油脂高。",
    carbSource: "車輪餅估算",
    giSource: "白麵粉皮+糖估算",
  },
  {
    id: "pepper-bun",
    zh: "胡椒餅",
    en: "Pepper bun",
    aliases: ["福州胡椒餅", "pepper bun"],
    category: "夜市小吃",
    carbs: 35.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "白麵皮包蔥肉烤製;一顆約 150g、碳水 50-55g,通常熱量也偏高。",
    carbSource: "胡椒餅估算",
    giSource: "白麵粉烘烤估算",
  },
  {
    id: "grilled-sausage",
    zh: "烤香腸",
    en: "Grilled Taiwanese sausage",
    aliases: ["香腸", "台式香腸", "烤香腸"],
    category: "夜市小吃",
    carbs: 4.0,
    gi: 28,
    giDisplay: "估 28",
    speed: "slow",
    note: "本身碳水低,但加工肉品鈉與亞硝酸鹽要注意;蒜頭與糯米腸搭配時主要碳水在配料。",
    carbSource: "USDA / 香腸估算",
    giSource: "低碳肉品估算",
  },
  {
    id: "egg-waffle-cake",
    zh: "雞蛋糕",
    en: "Taiwanese egg waffle",
    aliases: ["雞蛋糕", "egg cake", "夜市"],
    category: "夜市小吃",
    carbs: 50.0,
    gi: 75,
    giDisplay: "估 75",
    speed: "fast",
    note: "麵粉糖蛋打成糊烤;一份 6-8 顆約 120-160g、碳水 60-80g。",
    carbSource: "雞蛋糕估算",
    giSource: "白麵粉+糖估算",
  },
  {
    id: "popiah",
    zh: "潤餅",
    en: "Popiah (Taiwanese spring roll)",
    aliases: ["潤餅", "春捲", "popiah"],
    category: "夜市小吃",
    carbs: 28.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "白麵粉皮包高麗菜、肉、花生糖粉;一捲 150-200g 約 40-55g 碳水,花生糖粉加糖。",
    carbSource: "潤餅估算",
    giSource: "白麵粉皮估算",
  },
  {
    id: "yangchun-noodles",
    zh: "陽春麵",
    en: "Plain noodle soup",
    aliases: ["清湯麵", "陽春麵"],
    category: "麵食湯品",
    carbs: 18.0,
    gi: 65,
    giDisplay: "估 65",
    speed: "medium",
    note: "白麵加清湯;一碗約 250-300g、碳水 45-55g,沒勾芡升糖比羹麵慢。",
    carbSource: "白麵+湯估算",
    giSource: "小麥麵條估算",
  },
  {
    id: "wonton-noodles",
    zh: "餛飩麵",
    en: "Wonton noodle soup",
    aliases: ["雲吞麵", "餛飩麵", "扁食麵"],
    category: "麵食湯品",
    carbs: 20.0,
    gi: 65,
    giDisplay: "估 65",
    speed: "medium",
    note: "白麵加餛飩皮雙重澱粉;一碗約 300g、碳水 55-65g。",
    carbSource: "餛飩麵估算",
    giSource: "小麥麵+皮估算",
  },
  {
    id: "sesame-paste-noodles",
    zh: "麻醬麵",
    en: "Sesame paste noodles",
    aliases: ["麻醬麵", "涼麵醬料"],
    category: "麵食湯品",
    carbs: 30.0,
    gi: 60,
    giDisplay: "估 60",
    speed: "medium",
    note: "麻醬油脂多可能稍降 GI;一份 200-250g、碳水 55-70g,醬本身也帶糖。",
    carbSource: "麻醬麵估算",
    giSource: "小麥麵+油脂估算",
  },
  {
    id: "danzai-noodles",
    zh: "擔仔麵",
    en: "Danzai noodles",
    aliases: ["擔仔麵", "度小月", "danzai"],
    category: "麵食湯品",
    carbs: 15.0,
    gi: 62,
    giDisplay: "估 62",
    speed: "medium",
    note: "小份油麵加肉燥蝦湯;一碗約 200g、碳水 28-35g,分量小單獨吃血糖負擔較輕。",
    carbSource: "擔仔麵估算",
    giSource: "油麵估算",
  },
  {
    id: "rice-vermicelli-soup",
    zh: "米粉湯",
    en: "Rice vermicelli soup",
    aliases: ["新竹米粉湯", "炊粉湯", "米粉湯"],
    category: "麵食湯品",
    carbs: 14.0,
    gi: 58,
    giDisplay: "估 58",
    speed: "medium",
    note: "米粉湯水分多;一碗約 300-350g、碳水 38-50g,黑白切配料另外算。",
    carbSource: "米粉湯估算",
    giSource: "Sydney GI: rice vermicelli",
  },
  {
    id: "thick-soup-noodles",
    zh: "肉羹麵",
    en: "Thick pork soup noodles",
    aliases: ["肉羹麵", "魷魚羹麵", "羹麵"],
    category: "麵食湯品",
    carbs: 18.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "勾芡湯加白麵;一碗約 300g、碳水 50-60g,勾芡讓血糖反應比清湯麵快。",
    carbSource: "肉羹麵估算",
    giSource: "勾芡澱粉估算",
  },
  {
    id: "hot-sour-soup",
    zh: "酸辣湯",
    en: "Hot and sour soup",
    aliases: ["酸辣湯", "hot and sour"],
    category: "麵食湯品",
    carbs: 5.0,
    gi: 60,
    giDisplay: "估 60",
    speed: "medium",
    note: "勾芡加少量配料;一碗約 250g、碳水 12-18g,搭餃子或飯時整餐才是重點。",
    carbSource: "酸辣湯估算",
    giSource: "勾芡澱粉估算",
  },
  {
    id: "four-spirits-soup",
    zh: "四神湯",
    en: "Four spirits soup",
    aliases: ["四神湯", "四臣湯"],
    category: "麵食湯品",
    carbs: 8.0,
    gi: 48,
    giDisplay: "估 48",
    speed: "slow",
    note: "薏仁/茯苓/淮山/蓮子煮豬腸或排骨;一碗約 300g、碳水 20-28g,屬於低升糖湯品。",
    carbSource: "四神湯估算",
    giSource: "薏仁+蓮子估算",
  },
  {
    id: "savory-rice-porridge",
    zh: "鹹粥",
    en: "Taiwanese savory rice porridge",
    aliases: ["鹹粥", "海鮮粥", "皮蛋瘦肉粥"],
    category: "麵食湯品",
    carbs: 12.0,
    gi: 72,
    giDisplay: "估 72",
    speed: "fast",
    note: "煮糊白米加配料;一碗 350g 約 40g 碳水,糊化程度高升糖比飯快。",
    carbSource: "鹹粥估算",
    giSource: "糊化白米估算",
  },
  {
    id: "you-fan",
    zh: "油飯",
    en: "Taiwanese sticky rice",
    aliases: ["麻油雞飯", "彌月油飯", "you fan"],
    category: "台式飯類",
    carbs: 35.0,
    gi: 88,
    giDisplay: "估 85+",
    speed: "fast",
    note: "糯米炒麻油香菇蝦米;一份 200g 約 70g 碳水,糯米升糖很快。",
    carbSource: "糯米+油估算",
    giSource: "Sydney GI: glutinous rice",
  },
  {
    id: "zongzi",
    zh: "肉粽",
    en: "Zongzi (sticky rice dumpling)",
    aliases: ["北部粽", "南部粽", "肉粽", "zongzi", "粽子"],
    category: "台式飯類",
    carbs: 32.0,
    gi: 87,
    giDisplay: "估 85+",
    speed: "fast",
    note: "糯米包肉栗子;一顆 150-220g、碳水 50-70g,糯米升糖很快、油脂可能延後。",
    carbSource: "肉粽估算",
    giSource: "糯米估算",
  },
  {
    id: "curry-rice",
    zh: "咖哩飯",
    en: "Curry rice",
    aliases: ["日式咖哩飯", "雞肉咖哩", "豬肉咖哩"],
    category: "台式飯類",
    carbs: 25.0,
    gi: 75,
    giDisplay: "估 75",
    speed: "fast",
    note: "白飯加勾芡咖哩塊;一份 400-500g、碳水 100-125g,咖哩塊本身含麵粉糖。",
    carbSource: "咖哩飯估算",
    giSource: "白飯+勾芡估算",
  },
  {
    id: "rice-with-sauce",
    zh: "燴飯",
    en: "Rice with starchy sauce",
    aliases: ["蝦仁燴飯", "牛肉燴飯", "燴飯"],
    category: "台式飯類",
    carbs: 22.0,
    gi: 78,
    giDisplay: "估 75+",
    speed: "fast",
    note: "白飯淋勾芡湯汁;一份 400g 約 88g 碳水,勾芡讓升糖比清炒更快。",
    carbSource: "燴飯估算",
    giSource: "白飯+勾芡估算",
  },
  {
    id: "hainan-chicken-rice",
    zh: "海南雞飯",
    en: "Hainan chicken rice",
    aliases: ["海南雞", "新加坡雞飯", "hainan"],
    category: "台式飯類",
    carbs: 27.0,
    gi: 78,
    giDisplay: "估 78",
    speed: "fast",
    note: "雞油雞高湯煮白飯;一份 350-400g、碳水 95-108g,雞油與飯量都會影響。",
    carbSource: "海南雞飯估算",
    giSource: "白飯+雞油估算",
  },
  {
    id: "sweet-potato-rice",
    zh: "地瓜飯",
    en: "Sweet potato rice",
    aliases: ["地瓜飯", "地瓜稀飯"],
    category: "台式飯類",
    carbs: 25.0,
    gi: 68,
    giDisplay: "估 68",
    speed: "medium",
    note: "白飯混蒸地瓜塊;一份 300g 約 75g 碳水,GI 比純白飯稍低但仍偏中高。",
    carbSource: "白飯+地瓜估算",
    giSource: "混合飯估算",
  },
  {
    id: "bubble-milk-tea",
    zh: "珍珠奶茶",
    en: "Bubble milk tea (full sugar)",
    aliases: ["珍奶", "波霸奶茶", "bubble tea", "boba"],
    category: "手搖飲",
    carbs: 12.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "每 100ml 約 10-14g 糖;一杯 500-700ml 加珍珠約 50-80g 碳水,珍珠是濃縮澱粉。",
    carbSource: "手搖飲糖度估算",
    giSource: "糖+珍珠估算",
  },
  {
    id: "sugared-black-tea",
    zh: "加糖紅茶 / 綠茶",
    en: "Sweetened tea",
    aliases: ["全糖紅茶", "古早味紅茶", "綠茶", "紅茶"],
    category: "手搖飲",
    carbs: 10.0,
    gi: 70,
    giDisplay: "估 70",
    speed: "fast",
    note: "純糖水溶液升糖很快;一杯 500ml 約 50g 糖,半糖約 25-30g。",
    carbSource: "手搖飲糖度估算",
    giSource: "蔗糖估算",
  },
  {
    id: "winter-melon-tea",
    zh: "冬瓜茶",
    en: "Winter melon tea",
    aliases: ["冬瓜茶", "winter melon"],
    category: "手搖飲",
    carbs: 12.0,
    gi: 75,
    giDisplay: "估 75",
    speed: "fast",
    note: "冬瓜熬糖磚為主;一杯 500ml 約 50-65g 糖,屬於濃糖飲。",
    carbSource: "冬瓜茶估算",
    giSource: "蔗糖估算",
  },
  {
    id: "papaya-milk",
    zh: "木瓜牛奶",
    en: "Papaya milk",
    aliases: ["木瓜牛奶", "papaya milk"],
    category: "手搖飲",
    carbs: 11.0,
    gi: 50,
    giDisplay: "估 50",
    speed: "slow",
    note: "牛奶加木瓜糖;一杯 500ml 約 50-60g 碳水,牛奶蛋白與脂肪會稍緩升糖。",
    carbSource: "木瓜牛奶估算",
    giSource: "果+乳+糖估算",
  },
  {
    id: "starfruit-juice",
    zh: "楊桃汁",
    en: "Starfruit juice",
    aliases: ["楊桃汁", "starfruit juice"],
    category: "手搖飲",
    carbs: 11.0,
    gi: 55,
    giDisplay: "估 55",
    speed: "medium",
    note: "楊桃榨汁加糖;500ml 約 50g 糖。腎臟病患者需依醫囑避免楊桃。",
    carbSource: "楊桃汁估算",
    giSource: "果汁+糖估算",
  },
  {
    id: "herbal-tea-sugared",
    zh: "青草茶 / 仙草茶",
    en: "Herbal tea (sweetened)",
    aliases: ["青草茶", "仙草茶", "herbal tea"],
    category: "手搖飲",
    carbs: 10.0,
    gi: 68,
    giDisplay: "估 68",
    speed: "medium",
    note: "傳統市場版常加二砂糖;500ml 約 40-50g 糖,「無糖」版才能視為近 0 碳水。",
    carbSource: "青草茶估算",
    giSource: "蔗糖估算",
  },
  {
    id: "unsweet-tea",
    zh: "無糖茶",
    en: "Unsweetened tea",
    aliases: ["無糖紅茶", "無糖綠茶", "無糖烏龍茶", "unsweetened tea"],
    category: "手搖飲",
    carbs: 0.0,
    gi: 0,
    giDisplay: "0",
    speed: "slow",
    note: "純茶無糖、無熱量;適合配主食穩定餐後血糖。",
    carbSource: "無糖飲品",
    giSource: "無糖",
  },
  {
    id: "tofu-pudding",
    zh: "豆花",
    en: "Tofu pudding (with syrup)",
    aliases: ["豆花", "傳統豆花", "douhua"],
    category: "台式甜點",
    carbs: 15.0,
    gi: 65,
    giDisplay: "估 65",
    speed: "medium",
    note: "豆花本身近 0 碳水,糖水加料(粉圓、花生、紅豆)是主因;一碗 300g 約 45g 碳水。",
    carbSource: "豆花+糖水估算",
    giSource: "糖水+配料估算",
  },
  {
    id: "aiyu-jelly",
    zh: "愛玉",
    en: "Aiyu jelly (with lemon syrup)",
    aliases: ["愛玉", "檸檬愛玉", "aiyu"],
    category: "台式甜點",
    carbs: 12.0,
    gi: 58,
    giDisplay: "估 58",
    speed: "medium",
    note: "愛玉本體幾乎 0 碳水;碳水主要在加糖檸檬汁,一碗 300g 約 35g 碳水。",
    carbSource: "愛玉+糖水估算",
    giSource: "糖水估算",
  },
  {
    id: "mango-shaved-ice",
    zh: "芒果冰",
    en: "Mango shaved ice",
    aliases: ["芒果剉冰", "芒果雪花冰", "mango ice"],
    category: "台式甜點",
    carbs: 25.0,
    gi: 72,
    giDisplay: "估 72",
    speed: "fast",
    note: "雪花冰加芒果煉乳糖水;一份 350-450g 約 80-110g 碳水,煉乳糖量高。",
    carbSource: "芒果冰估算",
    giSource: "糖+果+乳估算",
  },
  {
    id: "red-bean-soup",
    zh: "紅豆湯",
    en: "Sweet red bean soup",
    aliases: ["紅豆湯", "紅豆湯圓", "red bean soup"],
    category: "台式甜點",
    carbs: 22.0,
    gi: 55,
    giDisplay: "估 55",
    speed: "slow",
    note: "紅豆本身低 GI,但加大量糖;一碗 250g 約 50-60g 碳水,加湯圓再加糯米碳水。",
    carbSource: "紅豆湯估算",
    giSource: "豆+糖估算",
  },
  {
    id: "tang-yuan",
    zh: "湯圓",
    en: "Glutinous rice balls in sweet soup",
    aliases: ["湯圓", "鮮肉湯圓", "甜湯圓", "tang yuan"],
    category: "台式甜點",
    carbs: 22.0,
    gi: 85,
    giDisplay: "估 85",
    speed: "fast",
    note: "糯米皮加甜湯;一碗 6-8 顆約 250g、碳水 50-60g,糯米升糖快、甜湯再加糖。",
    carbSource: "湯圓營養估算",
    giSource: "糯米+糖估算",
  },
  {
    id: "mochi",
    zh: "麻糬",
    en: "Mochi",
    aliases: ["麻糬", "花生麻糬", "草莓大福", "mochi"],
    category: "台式甜點",
    carbs: 50.0,
    gi: 85,
    giDisplay: "估 85",
    speed: "fast",
    note: "糯米團加糖加花生粉;一顆約 30-50g、碳水 15-25g,屬高升糖甜點。",
    carbSource: "麻糬估算",
    giSource: "糯米+糖估算",
  },
  {
    id: "taro-balls",
    zh: "芋圓",
    en: "Taro balls in sweet soup",
    aliases: ["芋圓", "QQ 芋圓", "綜合芋圓", "taro ball"],
    category: "台式甜點",
    carbs: 30.0,
    gi: 75,
    giDisplay: "估 75",
    speed: "fast",
    note: "芋頭/地瓜加樹薯粉加糖水;一碗 300g 約 65-85g 碳水,粉圓料分量越多越快。",
    carbSource: "芋圓估算",
    giSource: "澱粉+糖估算",
  },
  {
    id: "brown-sugar-shaved-ice",
    zh: "黑糖剉冰",
    en: "Brown sugar shaved ice",
    aliases: ["黑糖刨冰", "黑糖剉冰", "brown sugar ice"],
    category: "台式甜點",
    carbs: 22.0,
    gi: 80,
    giDisplay: "估 80",
    speed: "fast",
    note: "冰加黑糖加配料(紅豆/綠豆/芋圓/花豆);一份 400g 約 80-100g 碳水。",
    carbSource: "剉冰估算",
    giSource: "糖+澱粉料估算",
  },
  {
    id: "convenience-rice-ball",
    zh: "御飯糰",
    en: "Convenience store rice ball",
    aliases: ["御飯糰", "三角飯糰", "便利商店飯糰"],
    category: "便利商店",
    carbs: 35.0,
    gi: 80,
    giDisplay: "估 80",
    speed: "fast",
    note: "三角白飯糰一顆約 100-120g、碳水 38-46g,鮪魚/鮭魚/烤肉口味碳水近似。",
    carbSource: "便利商店標示",
    giSource: "白飯主導估算",
  },
  {
    id: "tea-egg",
    zh: "茶葉蛋",
    en: "Tea egg",
    aliases: ["茶葉蛋", "tea egg", "滷蛋"],
    category: "便利商店",
    carbs: 1.0,
    gi: 0,
    giDisplay: "0",
    speed: "slow",
    note: "幾乎不含碳水,主要是蛋白與脂肪;適合搭主食穩定升糖速度。",
    carbSource: "茶葉蛋估算",
    giSource: "蛋白質為主",
  },
  {
    id: "oden-radish",
    zh: "關東煮 蘿蔔",
    en: "Oden daikon",
    aliases: ["關東煮", "白蘿蔔", "oden"],
    category: "便利商店",
    carbs: 4.0,
    gi: 30,
    giDisplay: "估 30",
    speed: "slow",
    note: "白蘿蔔本身低碳低 GI;但同碗的米血、年糕、甜不辣才是主碳水。",
    carbSource: "USDA 白蘿蔔",
    giSource: "低澱粉蔬菜估算",
  },
  {
    id: "oden-rice-blood",
    zh: "米血糕",
    en: "Pig blood rice cake (oden)",
    aliases: ["米血糕", "豬血糕", "rice blood"],
    category: "便利商店",
    carbs: 28.0,
    gi: 78,
    giDisplay: "估 75+",
    speed: "fast",
    note: "糯米加豬血壓製;一塊 50-80g、碳水 14-22g,沾花生粉糖會再加。",
    carbSource: "米血糕估算",
    giSource: "糯米估算",
  },
  {
    id: "oden-fish-cake",
    zh: "甜不辣",
    en: "Tempura fish cake (oden)",
    aliases: ["甜不辣", "黑輪", "fish cake"],
    category: "便利商店",
    carbs: 15.0,
    gi: 60,
    giDisplay: "估 60",
    speed: "medium",
    note: "魚漿加澱粉;一份 100g 碳水 15g 左右,甜辣醬糖分另算。",
    carbSource: "甜不辣估算",
    giSource: "魚漿+澱粉估算",
  },
];

const SPEED_META = {
  slow: { text: "慢", detail: "低 GI", className: "slow" },
  medium: { text: "中", detail: "中 GI", className: "medium" },
  fast: { text: "快", detail: "高 GI", className: "fast" },
};

const MEAL_LABELS = {
  "": "未指定",
  breakfast: "早餐",
  lunch: "午餐",
  dinner: "晚餐",
  snack: "點心",
  late: "消夜",
};

const STORAGE_KEY = "glucose-tracker-v2";
const LEGACY_NOTES_KEY = "staple-carb-gi-experience-v1";
const FOOD_BY_ID = Object.fromEntries(FOODS.map((f) => [f.id, f]));

const defaultData = () => ({
  notes: {},
  records: {},
  favorites: [],
  settings: { theme: "auto" },
  lastPortion: {},
});

let data = loadData();

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return deepMerge(defaultData(), parsed);
    }
    const legacy = localStorage.getItem(LEGACY_NOTES_KEY);
    if (legacy) {
      const notes = JSON.parse(legacy) || {};
      return { ...defaultData(), notes };
    }
  } catch (e) {
    console.warn("loadData failed", e);
  }
  return defaultData();
}

function deepMerge(target, source) {
  for (const key in source) {
    const sv = source[key];
    if (sv && typeof sv === "object" && !Array.isArray(sv)) {
      target[key] = deepMerge(target[key] || {}, sv);
    } else {
      target[key] = sv;
    }
  }
  return target;
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("saveData failed", e);
  }
}

function getNote(id) { return data.notes[id] || ""; }
function setNote(id, value) {
  if (String(value).trim()) data.notes[id] = value;
  else delete data.notes[id];
  saveData();
}

function getRecords(id) { return data.records[id] || []; }
function addRecord(id, record) {
  if (!data.records[id]) data.records[id] = [];
  data.records[id].push({ id: makeId(), createdAt: Date.now(), ...record });
  saveData();
}
function deleteRecord(foodId, recordId) {
  if (!data.records[foodId]) return;
  data.records[foodId] = data.records[foodId].filter((r) => r.id !== recordId);
  if (data.records[foodId].length === 0) delete data.records[foodId];
  saveData();
}
function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function isFavorite(id) { return data.favorites.includes(id); }
function toggleFavorite(id) {
  data.favorites = isFavorite(id)
    ? data.favorites.filter((x) => x !== id)
    : [...data.favorites, id];
  saveData();
}

function getLastPortion(id) { return Number(data.lastPortion[id]) || 100; }
function setLastPortion(id, g) {
  data.lastPortion[id] = Number(g) || 100;
  saveData();
}

function applyTheme() {
  document.body.dataset.theme = data.settings.theme || "auto";
}
function setTheme(t) {
  data.settings.theme = t;
  saveData();
  applyTheme();
}

function carbsFor(food, grams) { return (food.carbs * (Number(grams) || 0)) / 100; }
function computeGL(food, grams) { return (food.gi * food.carbs * (Number(grams) || 0)) / 10000; }

function allRecordsFlat() {
  const out = [];
  for (const fid in data.records) {
    for (const r of data.records[fid]) out.push({ ...r, foodId: fid });
  }
  return out;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function normalize(value) { return String(value).trim().toLowerCase(); }

function todayIso() {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d - tz).toISOString().slice(0, 10);
}

function highlight(text, query) {
  const safe = escapeHtml(text);
  if (!query) return safe;
  const q = String(query).trim();
  if (!q) return safe;
  const idx = safe.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return safe;
  return safe.slice(0, idx) + "<mark>" + safe.slice(idx, idx + q.length) + "</mark>" + safe.slice(idx + q.length);
}

const state = {
  query: "",
  category: "全部",
  speed: "all",
  view: "cards",
  sort: "name",
  favOnly: false,
};

const els = {
  search: document.querySelector("#searchInput"),
  category: document.querySelector("#categoryFilter"),
  sort: document.querySelector("#sortSelect"),
  cards: document.querySelector("#cards"),
  tableWrap: document.querySelector("#tableWrap"),
  table: document.querySelector("#foodTable"),
  diary: document.querySelector("#diary"),
  tools: document.querySelector("#tools"),
  empty: document.querySelector("#emptyState"),
  resultCount: document.querySelector("#resultCount"),
  favCount: document.querySelector("#favCount"),
  recordCount: document.querySelector("#recordCount"),
  speedTabs: document.querySelectorAll(".speed-tab"),
  viewTabs: document.querySelectorAll(".view-tab"),
  favOnlyBtn: document.querySelector("#favOnlyBtn"),
  importFile: document.querySelector("#importFileInput"),
};

function getSearchText(food) {
  return normalize([
    food.zh, food.en, food.category, food.note,
    getNote(food.id),
    food.giDisplay,
    SPEED_META[food.speed].text,
    SPEED_META[food.speed].detail,
    ...food.aliases,
  ].join(" "));
}

function getFilteredFoods() {
  const query = normalize(state.query);
  return FOODS
    .filter((food) => {
      if (state.favOnly && !isFavorite(food.id)) return false;
      const matchesQuery = !query || getSearchText(food).includes(query);
      const matchesCategory = state.category === "全部" || food.category === state.category;
      const matchesSpeed = state.speed === "all" || food.speed === state.speed;
      return matchesQuery && matchesCategory && matchesSpeed;
    })
    .sort((a, b) => {
      const aFav = isFavorite(a.id), bFav = isFavorite(b.id);
      if (aFav !== bFav) return aFav ? -1 : 1;
      if (state.sort === "carbsDesc") return b.carbs - a.carbs || a.zh.localeCompare(b.zh, "zh-Hant");
      if (state.sort === "carbsAsc") return a.carbs - b.carbs || a.zh.localeCompare(b.zh, "zh-Hant");
      if (state.sort === "giDesc") return b.gi - a.gi || b.carbs - a.carbs;
      if (state.sort === "giAsc") return a.gi - b.gi || a.carbs - b.carbs;
      if (state.sort === "glDesc") return (b.gi * b.carbs) - (a.gi * a.carbs);
      if (state.sort === "glAsc") return (a.gi * a.carbs) - (b.gi * b.carbs);
      return a.zh.localeCompare(b.zh, "zh-Hant");
    });
}

function renderCategoryOptions() {
  const categories = ["全部", ...new Set(FOODS.map((f) => f.category))];
  els.category.innerHTML = categories
    .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
    .join("");
}

function renderSummary(foods) {
  els.resultCount.textContent = foods.length;
  els.favCount.textContent = data.favorites.length;
  els.recordCount.textContent = Object.values(data.records).reduce((s, l) => s + l.length, 0);
}

function deltaClass(d) {
  if (d >= 60) return "high";
  if (d >= 30) return "mid";
  return "low";
}

function cardHtml(food) {
  const speed = SPEED_META[food.speed];
  const portion = getLastPortion(food.id);
  const carbsPortion = carbsFor(food, portion);
  const glPortion = computeGL(food, portion);
  const glPer100 = computeGL(food, 100);
  const fav = isFavorite(food.id);
  const records = getRecords(food.id).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const query = state.query;
  return `
    <article class="food-card" data-food-id="${escapeHtml(food.id)}">
      <div class="card-head">
        <div class="card-title">
          <h2>${highlight(food.zh, query)}</h2>
          <p>${highlight(food.en, query)}</p>
        </div>
        <div class="card-head-actions">
          <button type="button" class="fav-btn ${fav ? "on" : ""}" data-fav-id="${escapeHtml(food.id)}" aria-pressed="${fav}" title="收藏">${fav ? "★" : "☆"}</button>
          <span class="speed-label ${speed.className}">${speed.text}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="macro-grid">
          <div class="metric">
            <strong>${food.carbs.toFixed(1)}</strong>
            <span>碳水 g / 100g</span>
          </div>
          <div class="metric">
            <strong>${escapeHtml(food.giDisplay)}</strong>
            <span>GI 參考</span>
          </div>
          <div class="metric">
            <strong>${glPer100.toFixed(1)}</strong>
            <span>GL / 100g</span>
          </div>
          <div class="metric speed-metric ${speed.className}">
            <strong>${speed.text}</strong>
            <span>${speed.detail}</span>
          </div>
        </div>

        <div class="calculator">
          <label class="calc-input">
            <span>實際吃幾 g</span>
            <input type="number" inputmode="numeric" min="0" step="10" value="${portion}" data-portion-id="${escapeHtml(food.id)}" />
          </label>
          <div class="calc-result">
            <div><span>實際碳水</span><strong data-calc-carbs="${escapeHtml(food.id)}">${carbsPortion.toFixed(1)}</strong> g</div>
            <div><span>實際 GL</span><strong data-calc-gl="${escapeHtml(food.id)}">${glPortion.toFixed(1)}</strong></div>
          </div>
        </div>

        <p class="note">${highlight(food.note, query)}</p>

        <details class="experience-note">
          <summary>飲食筆記</summary>
          <textarea
            rows="2"
            data-experience-id="${escapeHtml(food.id)}"
            placeholder="例：半碗還可以、飯後偏高、配菜一起吃比較穩"
          >${escapeHtml(getNote(food.id))}</textarea>
        </details>

        <details class="record-form-wrap">
          <summary>新增血糖紀錄</summary>
          <form class="record-form" data-record-form="${escapeHtml(food.id)}">
            <label>
              <span>日期</span>
              <input type="date" name="date" value="${todayIso()}" required />
            </label>
            <label>
              <span>用餐時段</span>
              <select name="meal">
                <option value="">未指定</option>
                <option value="breakfast">早餐</option>
                <option value="lunch">午餐</option>
                <option value="dinner">晚餐</option>
                <option value="snack">點心</option>
                <option value="late">消夜</option>
              </select>
            </label>
            <label>
              <span>份量 (g)</span>
              <input type="number" inputmode="numeric" min="0" step="10" name="grams" value="${portion}" />
            </label>
            <label>
              <span>餐前血糖</span>
              <input type="number" inputmode="numeric" min="0" step="1" name="pre" placeholder="mg/dL" />
            </label>
            <label>
              <span>餐後血糖</span>
              <input type="number" inputmode="numeric" min="0" step="1" name="post" placeholder="mg/dL" />
            </label>
            <label class="full">
              <span>備註</span>
              <input type="text" name="comment" placeholder="搭配什麼、運動、睡眠..." />
            </label>
            <button type="submit">儲存紀錄</button>
          </form>
        </details>

        ${records.length ? `
        <details class="records-list">
          <summary>已記錄 ${records.length} 筆</summary>
          ${records.map((r) => recordRowHtml(food, r)).join("")}
        </details>` : ""}

        <div class="source-line">
          <span>${escapeHtml(food.carbSource)}</span>
          <span>${escapeHtml(food.giSource)}</span>
        </div>
      </div>
    </article>
  `;
}

function recordRowHtml(food, r) {
  const carbs = carbsFor(food, r.grams);
  const gl = computeGL(food, r.grams);
  const meal = MEAL_LABELS[r.meal || ""] || "未指定";
  const hasGlucose = (r.pre != null && r.pre !== "") || (r.post != null && r.post !== "");
  const showDelta = r.pre && r.post;
  const delta = (Number(r.post) || 0) - (Number(r.pre) || 0);
  return `
    <div class="record-row">
      <div class="record-meta">
        <strong>${escapeHtml(r.date || "")}</strong>
        <span class="meal-tag">${escapeHtml(meal)}</span>
        <span>${escapeHtml(r.grams || 0)} g · 碳水 ${carbs.toFixed(1)} g · GL ${gl.toFixed(1)}</span>
      </div>
      ${hasGlucose ? `<div class="record-glucose">血糖 ${r.pre || "?"} → ${r.post || "?"} ${showDelta ? `<span class="delta ${deltaClass(delta)}">${delta >= 0 ? "+" : ""}${delta}</span>` : ""}</div>` : ""}
      ${r.comment ? `<div class="record-comment">${escapeHtml(r.comment)}</div>` : ""}
      <div class="record-actions">
        <button type="button" class="link-btn" data-action="delete-record" data-food-id="${escapeHtml(food.id)}" data-record-id="${escapeHtml(r.id)}">刪除</button>
      </div>
    </div>
  `;
}

function renderCards(foods) {
  els.cards.innerHTML = foods.map(cardHtml).join("");
}

function renderTable(foods) {
  const query = state.query;
  els.table.innerHTML = foods.map((food) => {
    const speed = SPEED_META[food.speed];
    const gl = computeGL(food, 100);
    const fav = isFavorite(food.id);
    const recs = getRecords(food.id).length;
    return `
      <tr>
        <td><button type="button" class="fav-btn ${fav ? "on" : ""}" data-fav-id="${escapeHtml(food.id)}">${fav ? "★" : "☆"}</button></td>
        <td class="food-name-cell">
          <strong>${highlight(food.zh, query)}</strong>
          <span>${highlight(food.en, query)}</span>
        </td>
        <td>${escapeHtml(food.category)}</td>
        <td>${food.carbs.toFixed(1)} g</td>
        <td>${escapeHtml(food.giDisplay)}</td>
        <td>${gl.toFixed(1)}</td>
        <td><span class="speed-label ${speed.className}">${speed.text}</span></td>
        <td>${recs > 0 ? `<span class="rec-count">${recs}</span>` : ""}</td>
        <td>${escapeHtml(food.note)}</td>
      </tr>
    `;
  }).join("");
}

function renderDiary() {
  const all = allRecordsFlat().sort((a, b) => (b.date || "").localeCompare(a.date || "") || (b.createdAt || 0) - (a.createdAt || 0));
  const total = all.length;
  const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 7);
  const last7 = all.filter((r) => r.date && new Date(r.date) >= cutoff).length;
  const withGlucose = all.filter((r) => r.pre && r.post);
  const avgDelta = withGlucose.length
    ? Math.round(withGlucose.reduce((s, r) => s + (Number(r.post) - Number(r.pre)), 0) / withGlucose.length)
    : null;

  if (total === 0) {
    els.diary.innerHTML = `
      <div class="diary-header">
        <h2>我的血糖紀錄</h2>
        <p class="muted">在任何食物卡片展開「新增血糖紀錄」就能開始記錄。</p>
      </div>
    `;
    return;
  }

  const byDate = {};
  for (const r of all) {
    const key = r.date || "未指定日期";
    (byDate[key] = byDate[key] || []).push(r);
  }
  const dates = Object.keys(byDate).sort((a, b) => b.localeCompare(a));

  els.diary.innerHTML = `
    <div class="diary-header">
      <h2>我的血糖紀錄</h2>
      <div class="diary-stats">
        <div><strong>${total}</strong><span>總筆數</span></div>
        <div><strong>${last7}</strong><span>最近 7 天</span></div>
        <div><strong>${avgDelta == null ? "—" : (avgDelta >= 0 ? "+" : "") + avgDelta}</strong><span>平均餐後 Δ</span></div>
      </div>
    </div>
    ${dates.map((date) => `
      <div class="diary-day">
        <h3>${escapeHtml(date)}</h3>
        ${byDate[date].map((r) => diaryEntryHtml(r)).join("")}
      </div>
    `).join("")}
  `;
}

function diaryEntryHtml(r) {
  const food = FOOD_BY_ID[r.foodId];
  if (!food) return "";
  const carbs = carbsFor(food, r.grams);
  const gl = computeGL(food, r.grams);
  const meal = MEAL_LABELS[r.meal || ""] || "未指定";
  const speed = SPEED_META[food.speed];
  const showDelta = r.pre && r.post;
  const delta = (Number(r.post) || 0) - (Number(r.pre) || 0);
  const hasGlucose = (r.pre != null && r.pre !== "") || (r.post != null && r.post !== "");
  return `
    <article class="diary-entry">
      <div class="diary-entry-head">
        <div class="diary-entry-title">
          <strong>${escapeHtml(food.zh)}</strong>
          <span class="meal-tag">${escapeHtml(meal)}</span>
          <span class="speed-label ${speed.className}">${speed.text}</span>
        </div>
        <button type="button" class="link-btn" data-action="delete-record" data-food-id="${escapeHtml(food.id)}" data-record-id="${escapeHtml(r.id)}">刪除</button>
      </div>
      <div class="diary-entry-body">
        <div>${escapeHtml(r.grams || 0)} g · 碳水 ${carbs.toFixed(1)} g · GL ${gl.toFixed(1)}</div>
        ${hasGlucose ? `<div>血糖 ${r.pre || "?"} → ${r.post || "?"} ${showDelta ? `<span class="delta ${deltaClass(delta)}">${delta >= 0 ? "+" : ""}${delta}</span>` : ""}</div>` : ""}
        ${r.comment ? `<div class="muted">${escapeHtml(r.comment)}</div>` : ""}
      </div>
    </article>
  `;
}

function renderTools() {
  const theme = data.settings.theme || "auto";
  const recordTotal = Object.values(data.records).reduce((s, l) => s + l.length, 0);
  const noteCount = Object.keys(data.notes).filter((k) => data.notes[k]).length;

  const speedStats = ["slow", "medium", "fast"].map((sp) => {
    const recs = allRecordsFlat().filter((r) => FOOD_BY_ID[r.foodId]?.speed === sp && r.pre && r.post);
    const avg = recs.length
      ? Math.round(recs.reduce((s, r) => s + (Number(r.post) - Number(r.pre)), 0) / recs.length)
      : null;
    return { sp, count: recs.length, avg };
  });

  els.tools.innerHTML = `
    <section class="tools-block">
      <h2>主題</h2>
      <div class="theme-options">
        <label><input type="radio" name="theme" value="auto" ${theme === "auto" ? "checked" : ""} /> 自動 (跟隨系統)</label>
        <label><input type="radio" name="theme" value="light" ${theme === "light" ? "checked" : ""} /> 亮色</label>
        <label><input type="radio" name="theme" value="dark" ${theme === "dark" ? "checked" : ""} /> 暗色</label>
      </div>
    </section>

    <section class="tools-block">
      <h2>備份 / 還原</h2>
      <p class="muted">所有資料只存在你的瀏覽器 localStorage，定期匯出可避免清快取時遺失。</p>
      <div class="btn-row">
        <button type="button" data-action="export">匯出我的資料</button>
        <button type="button" data-action="import">匯入備份</button>
        <button type="button" class="danger" data-action="clear-all">清除所有資料</button>
      </div>
    </section>

    <section class="tools-block">
      <h2>統計</h2>
      <div class="stats-grid">
        <div><strong>${data.favorites.length}</strong><span>收藏食物</span></div>
        <div><strong>${recordTotal}</strong><span>血糖紀錄</span></div>
        <div><strong>${noteCount}</strong><span>飲食筆記</span></div>
      </div>
      <h3 class="sub">依升糖速度看餐後 Δ 平均</h3>
      <div class="stats-grid">
        ${speedStats.map((s) => `
          <div>
            <strong>${s.avg == null ? "—" : (s.avg >= 0 ? "+" : "") + s.avg}</strong>
            <span><span class="speed-label ${s.sp}">${SPEED_META[s.sp].text}</span> · ${s.count} 筆</span>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="tools-block">
      <h2>關於</h2>
      <p class="muted">這是個人離線使用的血糖追蹤工具。可加到主畫面當 App 用 (PWA)，沒有網路也能查詢與紀錄。</p>
      <p class="muted">GI 與碳水值僅供參考，實際血糖反應因人而異，請依醫療專業建議調整飲食。</p>
    </section>
  `;
}

function render() {
  const foods = getFilteredFoods();
  renderSummary(foods);

  const empty = foods.length === 0 && (state.view === "cards" || state.view === "table");
  els.empty.classList.toggle("hidden", !empty);

  els.cards.classList.toggle("hidden", state.view !== "cards" || empty);
  els.tableWrap.classList.toggle("hidden", state.view !== "table" || empty);
  els.diary.classList.toggle("hidden", state.view !== "diary");
  els.tools.classList.toggle("hidden", state.view !== "tools");

  if (state.view === "cards") renderCards(foods);
  else if (state.view === "table") renderTable(foods);
  else if (state.view === "diary") renderDiary();
  else if (state.view === "tools") renderTools();
}

function setActiveButtons(buttons, attr, value) {
  buttons.forEach((b) => b.classList.toggle("active", b.dataset[attr] === value));
}

let searchDebounce;
function bindEvents() {
  els.search.addEventListener("input", (e) => {
    const v = e.target.value;
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      state.query = v;
      render();
    }, 120);
  });

  els.category.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
  });

  els.sort.addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  els.speedTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.speed = btn.dataset.speed;
      setActiveButtons(els.speedTabs, "speed", state.speed);
      render();
    });
  });

  els.viewTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.view = btn.dataset.view;
      setActiveButtons(els.viewTabs, "view", state.view);
      render();
    });
  });

  els.favOnlyBtn.addEventListener("click", () => {
    state.favOnly = !state.favOnly;
    els.favOnlyBtn.setAttribute("aria-pressed", String(state.favOnly));
    els.favOnlyBtn.classList.toggle("on", state.favOnly);
    render();
  });

  document.body.addEventListener("input", (e) => {
    const t = e.target;
    if (t.matches("[data-experience-id]")) {
      setNote(t.dataset.experienceId, t.value);
      return;
    }
    if (t.matches("[data-portion-id]")) {
      const id = t.dataset.portionId;
      const g = Number(t.value) || 0;
      const food = FOOD_BY_ID[id];
      if (!food) return;
      setLastPortion(id, g);
      const cEl = document.querySelector(`[data-calc-carbs="${CSS.escape(id)}"]`);
      const gEl = document.querySelector(`[data-calc-gl="${CSS.escape(id)}"]`);
      if (cEl) cEl.textContent = carbsFor(food, g).toFixed(1);
      if (gEl) gEl.textContent = computeGL(food, g).toFixed(1);
    }
  });

  document.body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-fav-id], [data-action]");
    if (!t) return;
    if (t.dataset.favId) {
      toggleFavorite(t.dataset.favId);
      render();
      return;
    }
    const action = t.dataset.action;
    if (action === "delete-record") {
      if (confirm("確定刪除這筆紀錄？")) {
        deleteRecord(t.dataset.foodId, t.dataset.recordId);
        render();
      }
    } else if (action === "export") {
      exportData();
    } else if (action === "import") {
      els.importFile.click();
    } else if (action === "clear-all") {
      if (confirm("會清除所有收藏、筆記、紀錄、設定。確定？")) {
        data = defaultData();
        saveData();
        applyTheme();
        render();
      }
    }
  });

  document.body.addEventListener("change", (e) => {
    if (e.target.name === "theme" && e.target.matches("input[type=radio]")) {
      setTheme(e.target.value);
    }
  });

  document.body.addEventListener("submit", (e) => {
    if (!e.target.matches("[data-record-form]")) return;
    e.preventDefault();
    const foodId = e.target.dataset.recordForm;
    const fd = new FormData(e.target);
    addRecord(foodId, {
      date: fd.get("date") || todayIso(),
      meal: fd.get("meal") || "",
      grams: Number(fd.get("grams")) || 0,
      pre: fd.get("pre") ? Number(fd.get("pre")) : null,
      post: fd.get("post") ? Number(fd.get("post")) : null,
      comment: String(fd.get("comment") || "").trim(),
    });
    render();
  });

  els.importFile.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const imported = JSON.parse(text);
      if (!imported || typeof imported !== "object") throw new Error("檔案格式無效");
      data = deepMerge(defaultData(), imported);
      saveData();
      applyTheme();
      render();
      alert("匯入成功！");
    } catch (err) {
      alert("匯入失敗：" + err.message);
    } finally {
      els.importFile.value = "";
    }
  });
}

function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `glucose-tracker-${todayIso()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

function registerSW() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch((e) => console.warn("SW failed", e));
    });
  }
}

applyTheme();
renderCategoryOptions();
bindEvents();
render();
registerSW();
