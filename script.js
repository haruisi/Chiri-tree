const badgeLabelMap = {
  condition: "条件",
  process: "過程",
  climate: "気候",
  vegetation: "植生",
  agriculture: "農業"
};

const treeData = {
  root: {
    id: "root",
    label: "開始要素",
    category: "condition",
    description: "最初に緯度帯を選び、そこから気候・植生・農業の流れをたどります。",
    next: ["low_lat", "mid_lat", "high_lat"]
  },
  low_lat: {
    id: "low_lat",
    label: "低緯度",
    category: "condition",
    description: "太陽高度が高く、年間を通じて気温が高い地域です。",
    next: ["equatorial_low", "year_hot", "seasonal_wind"]
  },
  equatorial_low: {
    id: "equatorial_low",
    label: "赤道低圧帯",
    category: "condition",
    description: "赤道付近で暖められた空気が集まり、気圧が低くなる帯です。",
    next: ["updraft"]
  },
  updraft: {
    id: "updraft",
    label: "上昇気流",
    category: "process",
    description: "暖かい空気が上へ上がり、雲が発達しやすくなります。",
    next: ["rain_all_year"]
  },
  rain_all_year: {
    id: "rain_all_year",
    label: "年中多雨",
    category: "climate",
    description: "年間を通して降水量が多く、乾季がほとんどありません。",
    next: ["af"]
  },
  af: {
    id: "af",
    label: "Af",
    category: "climate",
    description: "熱帯雨林気候。高温多湿で月ごとの降水の偏りが小さい気候です。",
    next: ["rainforest"]
  },
  rainforest: {
    id: "rainforest",
    label: "熱帯雨林",
    category: "vegetation",
    description: "高温多雨を反映して、常緑広葉樹が密生する森林です。",
    next: ["plantation"]
  },
  plantation: {
    id: "plantation",
    label: "プランテーション",
    category: "agriculture",
    description: "輸出向け商品作物を大規模に栽培する農業形態です。",
    next: []
  },
  year_hot: {
    id: "year_hot",
    label: "年中高温",
    category: "climate",
    description: "どの季節でも気温が高く、季節差は降水に表れやすいです。",
    next: ["wet_dry"]
  },
  wet_dry: {
    id: "wet_dry",
    label: "雨季と乾季",
    category: "climate",
    description: "降水の多い時期と少ない時期が分かれる気候の特徴です。",
    next: ["aw"]
  },
  aw: {
    id: "aw",
    label: "Aw",
    category: "climate",
    description: "サバナ気候。年中高温で、雨季と乾季がはっきり分かれます。",
    next: ["savanna"]
  },
  savanna: {
    id: "savanna",
    label: "サバナ",
    category: "vegetation",
    description: "丈の高い草原とまばらな樹木が分布する景観です。",
    next: []
  },
  seasonal_wind: {
    id: "seasonal_wind",
    label: "季節風",
    category: "process",
    description: "季節で風向が変わる風系で、海からの湿った風が夏に強まりやすいです。",
    next: ["rain_summer_focus"]
  },
  rain_summer_focus: {
    id: "rain_summer_focus",
    label: "雨が夏に集中",
    category: "climate",
    description: "高温期に降水量が増え、冬は比較的乾燥しやすい降水パターンです。",
    next: ["am"]
  },
  am: {
    id: "am",
    label: "Am",
    category: "climate",
    description: "熱帯モンスーン気候。高温を保ちながら、雨季に非常に多くの雨が降ります。",
    next: []
  },
  mid_lat: {
    id: "mid_lat",
    label: "中緯度",
    category: "condition",
    description: "偏西風や海陸分布の影響で、地域差が大きい緯度帯です。",
    next: ["east_coast", "west_coast", "subtropical_high"]
  },
  east_coast: {
    id: "east_coast",
    label: "東岸",
    category: "condition",
    description: "季節風の影響を受け、夏に降水が増えやすい地域です。",
    next: ["summer_rain"]
  },
  summer_rain: {
    id: "summer_rain",
    label: "夏に雨が多い",
    category: "climate",
    description: "高温期に降水が集中し、農業に利用しやすい水資源が得られます。",
    next: ["cfa"]
  },
  cfa: {
    id: "cfa",
    label: "Cfa",
    category: "climate",
    description: "温暖湿潤気候。夏は高温多湿で、冬も比較的温和です。",
    next: ["laurel_forest"]
  },
  laurel_forest: {
    id: "laurel_forest",
    label: "照葉樹林",
    category: "vegetation",
    description: "温暖湿潤な環境に適応した常緑広葉樹林です。",
    next: ["rice"]
  },
  rice: {
    id: "rice",
    label: "稲作",
    category: "agriculture",
    description: "多雨と高温を利用し、水田でコメを栽培する農業です。",
    next: []
  },
  west_coast: {
    id: "west_coast",
    label: "西岸",
    category: "condition",
    description: "偏西風や寒流・暖流の影響が現れやすい地域です。",
    next: ["westerlies", "summer_dry"]
  },
  westerlies: {
    id: "westerlies",
    label: "偏西風",
    category: "process",
    description: "中緯度で西から東へ吹く卓越風で、西岸の気候形成に関わります。",
    next: ["cfb"]
  },
  cfb: {
    id: "cfb",
    label: "Cfb",
    category: "climate",
    description: "西岸海洋性気候。年間の気温差が比較的小さく、湿潤です。",
    next: ["mixed_forest"]
  },
  mixed_forest: {
    id: "mixed_forest",
    label: "混合林",
    category: "vegetation",
    description: "針葉樹と広葉樹が混在する森林です。",
    next: ["dairy", "mixed_farming"]
  },
  dairy: {
    id: "dairy",
    label: "酪農",
    category: "agriculture",
    description: "牧草を利用して乳牛を飼育し、乳製品を生産する農業です。",
    next: []
  },
  mixed_farming: {
    id: "mixed_farming",
    label: "混合農業",
    category: "agriculture",
    description: "畑作と家畜飼育を組み合わせる農業形態です。",
    next: []
  },
  summer_dry: {
    id: "summer_dry",
    label: "夏に乾燥",
    category: "climate",
    description: "夏に乾燥し、冬に降水が増える降水パターンです。",
    next: ["cs"]
  },
  cs: {
    id: "cs",
    label: "Cs",
    category: "climate",
    description: "地中海性気候。夏は乾燥し、冬に降水が多くなります。",
    next: ["sclerophyll"]
  },
  sclerophyll: {
    id: "sclerophyll",
    label: "硬葉樹林",
    category: "vegetation",
    description: "乾燥に耐える厚い葉を持つ常緑樹が中心の植生です。",
    next: ["med_agri"]
  },
  med_agri: {
    id: "med_agri",
    label: "地中海式農業",
    category: "agriculture",
    description: "果樹やオリーブ、野菜などを組み合わせる農業です。",
    next: []
  },
  subtropical_high: {
    id: "subtropical_high",
    label: "亜熱帯高圧帯",
    category: "condition",
    description: "南北回帰線付近に広がる高圧帯で、空気が下がるため雲ができにくい地域です。",
    next: ["descending", "semi_arid"]
  },
  descending: {
    id: "descending",
    label: "下降気流",
    category: "process",
    description: "上空から空気が下がる動きで、断熱昇温により相対湿度が下がり晴天が続きやすくなります。",
    next: ["little_rain"]
  },
  little_rain: {
    id: "little_rain",
    label: "少雨",
    category: "climate",
    description: "年間降水量が小さく、蒸発量が降水量を上回りやすい乾燥傾向を示します。",
    next: ["bw"]
  },
  bw: {
    id: "bw",
    label: "BW",
    category: "climate",
    description: "砂漠気候。降水がごく少なく、植生はまばらでオアシス周辺に人間活動が集中します。",
    next: ["desert"]
  },
  desert: {
    id: "desert",
    label: "砂漠",
    category: "vegetation",
    description: "植生が非常に乏しい乾燥景観です。",
    next: ["pastoralism"]
  },
  pastoralism: {
    id: "pastoralism",
    label: "遊牧",
    category: "agriculture",
    description: "水や草を求めて移動しながら家畜を飼育する生業です。",
    next: []
  },
  semi_arid: {
    id: "semi_arid",
    label: "少雨だが砂漠ほどではない",
    category: "climate",
    description: "乾燥するが、砂漠よりは降水があり草本植生が成立します。",
    next: ["bs"]
  },
  bs: {
    id: "bs",
    label: "BS",
    category: "climate",
    description: "ステップ気候。BWほど乾燥しない半乾燥域で、短草草原が発達しやすい気候です。",
    next: ["steppe"]
  },
  steppe: {
    id: "steppe",
    label: "ステップ",
    category: "vegetation",
    description: "乾燥に強い草本植物が広がる短草草原です。",
    next: ["grain_farming"]
  },
  grain_farming: {
    id: "grain_farming",
    label: "企業的穀物農業",
    category: "agriculture",
    description: "大規模経営で小麦などを機械化して生産する農業です。",
    next: []
  },
  high_lat: {
    id: "high_lat",
    label: "高緯度",
    category: "condition",
    description: "太陽高度が低く、寒冷な気候が中心となる緯度帯です。",
    next: ["continental_interior", "cool_short_summer"]
  },
  continental_interior: {
    id: "continental_interior",
    label: "大陸内部",
    category: "condition",
    description: "海洋の影響が弱く、季節による気温差が大きくなります。",
    next: ["large_annual_range"]
  },
  large_annual_range: {
    id: "large_annual_range",
    label: "年較差が大きい",
    category: "climate",
    description: "夏と冬の気温差が大きい内陸性の特徴です。",
    next: ["dw"]
  },
  dw: {
    id: "dw",
    label: "Dw",
    category: "climate",
    description: "冷帯冬季少雨気候。冬の寒さが厳しく、降水は夏に偏ります。",
    next: ["coniferous"]
  },
  coniferous: {
    id: "coniferous",
    label: "針葉樹林",
    category: "vegetation",
    description: "寒冷な気候に適応した針葉樹が広がる森林です。",
    next: []
  },
  cool_short_summer: {
    id: "cool_short_summer",
    label: "夏が短く冷涼",
    category: "climate",
    description: "暖かい期間が短く、樹木の生育に必要な熱量が不足しがちです。",
    next: ["et"]
  },
  et: {
    id: "et",
    label: "ET",
    category: "climate",
    description: "ツンドラ気候。最暖月が10℃未満で森林が成立しません。",
    next: ["tundra"]
  },
  tundra: {
    id: "tundra",
    label: "ツンドラ",
    category: "vegetation",
    description: "コケ類や地衣類が中心の寒冷地植生です。",
    next: []
  }
};

const pathState = [];

const candidateList = document.getElementById("candidateList");
const pathTrail = document.getElementById("pathTrail");
const detailCard = document.getElementById("detailCard");
const stepHint = document.getElementById("stepHint");
const backButton = document.getElementById("backButton");
const resetButton = document.getElementById("resetButton");

function getCurrentNode() {
  const lastId = pathState[pathState.length - 1];
  return treeData[lastId] ?? treeData.root;
}

function getCurrentCandidates() {
  return getCurrentNode().next.map((id) => treeData[id]);
}

function createBadge(category) {
  const badge = document.createElement("span");
  badge.className = `badge ${category}`;
  badge.textContent = badgeLabelMap[category] ?? "分類";
  return badge;
}

function renderPath() {
  pathTrail.textContent = "";

  if (pathState.length === 0) {
    const placeholder = document.createElement("span");
    placeholder.className = "detail-empty";
    placeholder.textContent = "まだ選択していません";
    pathTrail.appendChild(placeholder);
    return;
  }

  pathState.forEach((id, index) => {
    const node = treeData[id];
    const item = document.createElement("span");
    item.className = "path-item";
    item.textContent = node.label;
    pathTrail.appendChild(item);

    if (index !== pathState.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "path-arrow";
      arrow.textContent = "→";
      pathTrail.appendChild(arrow);
    }
  });
}

function renderCandidates() {
  candidateList.textContent = "";
  const candidates = getCurrentCandidates();

  if (candidates.length === 0) {
    const done = document.createElement("article");
    done.className = "detail-card";
    done.innerHTML = "<h3>この流れはここで終了です</h3><p>別の要素を試すには「1つ戻る」または「リセット」を使ってください。</p>";
    candidateList.appendChild(done);
    stepHint.textContent = "候補はありません";
    return;
  }

  stepHint.textContent = "カードを1つ選ぶと、次の候補だけに切り替わります。";

  candidates.forEach((node) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "candidate-card";
    card.setAttribute("role", "listitem");

    const top = document.createElement("div");
    top.className = "card-top";

    const label = document.createElement("span");
    label.className = "card-label";
    label.textContent = node.label;

    top.append(label, createBadge(node.category));

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = node.description;

    card.append(top, desc);
    card.addEventListener("click", () => {
      pathState.push(node.id);
      render();
    });

    candidateList.appendChild(card);
  });
}

function renderDetail() {
  const node = getCurrentNode();
  detailCard.textContent = "";

  const title = document.createElement("h3");
  title.textContent = node.label;

  const badge = createBadge(node.category);

  const desc = document.createElement("p");
  desc.textContent = node.description;

  const nextHint = document.createElement("p");
  if (node.next.length === 0) {
    nextHint.textContent = "次: この要素は終点です。";
  } else {
    nextHint.textContent = "次: 中央の候補から1つ選びます。";
  }

  detailCard.append(title, badge, desc, nextHint);
}

function renderControls() {
  backButton.disabled = pathState.length === 0;
}

function render() {
  renderPath();
  renderCandidates();
  renderDetail();
  renderControls();
}

backButton.addEventListener("click", () => {
  if (pathState.length > 0) {
    pathState.pop();
    render();
  }
});

resetButton.addEventListener("click", () => {
  pathState.length = 0;
  render();
});

render();
