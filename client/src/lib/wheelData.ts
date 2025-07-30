// Wheel lineup data based on Technopia's wheel collection
export interface WheelModel {
  id: number;
  brandId: number;
  name: string;
  nameJp: string;
  imageUrl: string;
  specs: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  description: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  status: 'active' | 'inactive';
}

export interface WheelBrand {
  id: number;
  name: string;
  nameJp: string;
  description: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  active: boolean;
}

export const wheelBrands: WheelBrand[] = [
  {
    id: 1,
    name: "CHARITES",
    nameJp: "カリテス",
    description: {
      jp: "エレガントで洗練されたデザインのプレミアムホイールシリーズ",
      ko: "우아하고 세련된 디자인의 프리미엄 휠 시리즈",
      en: "Premium wheel series with elegant and sophisticated design",
      zh: "优雅精致设计的高端轮毂系列"
    },
    active: true
  },
  {
    id: 2,
    name: "APHRODITE",
    nameJp: "アフロディーテ",
    description: {
      jp: "美しさと機能性を兼ね備えた高性能ホイール",
      ko: "아름다움과 기능성을 겸비한 고성능 휠",
      en: "High-performance wheels combining beauty and functionality",
      zh: "兼具美观与功能性的高性能轮毂"
    },
    active: true
  },
  {
    id: 3,
    name: "ARTEMIS",
    nameJp: "アルテミス",
    description: {
      jp: "スポーティーで力強いデザインのホイール",
      ko: "스포티하고 파워풀한 디자인의 휠",
      en: "Sporty and powerful design wheels",
      zh: "运动强劲设计轮毂"
    },
    active: true
  },
  {
    id: 4,
    name: "ADONIS",
    nameJp: "アドニス",
    description: {
      jp: "クラシックで上品なスタイルのホイール（生産終了）",
      ko: "클래식하고 품격있는 스타일의 휠（생산종료）",
      en: "Classic and elegant style wheels (Discontinued)",
      zh: "经典优雅风格轮毂（停产）"
    },
    active: false
  },
  {
    id: 5,
    name: "KASHINA",
    nameJp: "カシナ",
    description: {
      jp: "モダンで革新的なデザインのホイール",
      ko: "모던하고 혁신적인 디자인의 휠", 
      en: "Modern and innovative design wheels",
      zh: "现代创新设计轮毂"
    },
    active: true
  },
  {
    id: 6,
    name: "LACHESIS",
    nameJp: "ラケシス",
    description: {
      jp: "独特で個性的なデザインのホイール（生産終了）",
      ko: "독특하고 개성적인 디자인의 휠（생산종료）",
      en: "Unique and distinctive design wheels (Discontinued)", 
      zh: "独特个性设计轮毂（停产）"
    },
    active: false
  },
  {
    id: 7,
    name: "MUD CLIFF",
    nameJp: "マッドクリフ",
    description: {
      jp: "オフロード向けの頑強なデザインホイール",
      ko: "오프로드용 견고한 디자인 휠",
      en: "Rugged design wheels for off-road",
      zh: "越野用坚固设计轮毂"
    },
    active: true
  }
];

export const wheelModels: WheelModel[] = [
  // CHARITES Series
  {
    id: 1,
    brandId: 1,
    name: "S10",
    nameJp: "S10",
    imageUrl: "/images/wheel/charites-s10.jpg",
    specs: {
      jp: "12×4.00B～14×4.5J インセット+42～+43 4H-100",
      ko: "12×4.00B～14×4.5J 오프셋+42～+43 4H-100",
      en: "12×4.00B～14×4.5J Offset+42～+43 4H-100",
      zh: "12×4.00B～14×4.5J 偏距+42～+43 4H-100"
    },
    description: {
      jp: "クラシックなスポークデザインで上品な印象を演出。日常使いに最適なホイール。VIA JWL規格適合。",
      ko: "클래식한 스포크 디자인으로 품격있는 인상을 연출. 일상 사용에 최적인 휠. VIA JWL 규격 적합.",
      en: "Creates an elegant impression with classic spoke design. Ideal wheels for daily use. VIA JWL standard compliant.",
      zh: "经典辐条设计营造优雅印象。日常使用的理想轮毂。VIA JWL标准符合。"
    },
    status: 'active'
  },
  {
    id: 2,
    brandId: 1,
    name: "S315",
    nameJp: "S315",
    imageUrl: "/images/wheel/charites-s315.jpg",
    specs: {
      jp: "12×3.50B～15×4.5J インセット+42～+45 4H-100",
      ko: "12×3.50B～15×4.5J 오프셋+42～+45 4H-100",
      en: "12×3.50B～15×4.5J Offset+42～+45 4H-100",
      zh: "12×3.50B～15×4.5J 偏距+42～+45 4H-100"
    },
    description: {
      jp: "エレガントで洗練されたスポークデザイン。コンパクトカーからミニバンまで幅広く対応。VIA JWL規格適合。",
      ko: "우아하고 세련된 스포크 디자인. 컴팩트카부터 미니밴까지 폭넓게 대응. VIA JWL 규격 적합.",
      en: "Elegant and sophisticated spoke design. Compatible with a wide range from compact cars to minivans. VIA JWL standard compliant.",
      zh: "优雅精致的辐条设计。从紧凑型车到小型货车广泛适用。VIA JWL标准符合。"
    },
    status: 'active'
  },
  {
    id: 3,
    brandId: 1,
    name: "S316",
    nameJp: "S316",
    imageUrl: "/images/wheel/charites-s316.jpg",
    specs: {
      jp: "17×7.0J インセット50 5H-114.3",
      ko: "17×7.0J 오프셋50 5H-114.3", 
      en: "17×7.0J Offset50 5H-114.3",
      zh: "17×7.0J 偏距50 5H-114.3"
    },
    description: {
      jp: "シンプルで洗練されたスポークデザイン。幅広い車種に対応する汎用性の高いホイール。",
      ko: "심플하고 세련된 스포크 디자인. 다양한 차종에 대응하는 범용성 높은 휠.",
      en: "Simple and sophisticated spoke design. Versatile wheel compatible with a wide range of vehicles.",
      zh: "简洁精致的辐条设计。适用于各种车型的通用性高的轮毂。"
    },
    status: 'active'
  },
  {
    id: 4,
    brandId: 1,
    name: "S416",
    nameJp: "S416", 
    imageUrl: "/images/wheel/charites-s416.jpg",
    specs: {
      jp: "14×4.5J～15×5.5J インセット+38～+50 4H-100",
      ko: "14×4.5J～15×5.5J 오프셋+38～+50 4H-100",
      en: "14×4.5J～15×5.5J Offset+38～+50 4H-100", 
      zh: "14×4.5J～15×5.5J 偏距+38～+50 4H-100"
    },
    description: {
      jp: "コンパクトカー向けのエレガントなデザイン。軽量化と強度を両立したホイール。VIA JWL規格適合。",
      ko: "컴팩트카용 우아한 디자인. 경량화와 강도를 양립한 휠. VIA JWL 규격 적합.",
      en: "Elegant design for compact cars. Wheels that balance weight reduction and strength. VIA JWL standard compliant.",
      zh: "紧凑型车的优雅设计。兼顾轻量化和强度的轮毂。VIA JWL标准符合。"
    },
    status: 'active'
  },
  
  // APHRODITE Series
  {
    id: 5,
    brandId: 2,
    name: "EF",
    nameJp: "EF",
    imageUrl: "/images/wheel/aphrodite-ef_l.jpg",
    specs: {
      jp: "13×4.00B～18×7.5J インセット+35～+55 4H-100/5H-100/5H-114.3",
      ko: "13×4.00B～18×7.5J 오프셋+35～+55 4H-100/5H-100/5H-114.3",
      en: "13×4.00B～18×7.5J Offset+35～+55 4H-100/5H-100/5H-114.3",
      zh: "13×4.00B～18×7.5J 偏距+35～+55 4H-100/5H-100/5H-114.3"
    },
    description: {
      jp: "流線型のスポークが美しい高級感溢れるデザイン。パフォーマンスと美しさを追求したホイール。VIA JWL規格適合。",
      ko: "유선형 스포크가 아름다운 고급감 넘치는 디자인. 성능과 아름다움을 추구한 휠. VIA JWL 규격 적합.",
      en: "Luxurious design with beautiful streamlined spokes. Wheels pursuing performance and beauty. VIA JWL standard compliant.",
      zh: "流线型辐条美观的豪华设计。追求性能与美观的轮毂。VIA JWL标准符合。"
    },
    status: 'active'
  },
  {
    id: 6,
    brandId: 2,
    name: "GX",
    nameJp: "GX",
    imageUrl: "/images/wheel/aphrodite-gx_l.jpg",
    specs: {
      jp: "17×7.0J インセット48 5H-114.3",
      ko: "17×7.0J 오프셋48 5H-114.3",
      en: "17×7.0J Offset48 5H-114.3",
      zh: "17×7.0J 偏距48 5H-114.3"
    },
    description: {
      jp: "力強いスポークデザインでスポーティーな印象。優れた放熱性能を実現。",
      ko: "강인한 스포크 디자인으로 스포티한 인상. 뛰어난 방열 성능을 실현.",
      en: "Sporty impression with powerful spoke design. Excellent heat dissipation performance.",
      zh: "强劲辐条设计展现运动印象。出色的散热性能。"
    },
    status: 'inactive'
  },
  {
    id: 7,
    brandId: 2,
    name: "HS", 
    nameJp: "HS",
    imageUrl: "/images/wheel/aphrodite-hs_l.jpg",
    specs: {
      jp: "13×4.00B～18×7.5J インセット+35～+55 4H-100/5H-100/5H-114.3",
      ko: "13×4.00B～18×7.5J 오프셋+35～+55 4H-100/5H-100/5H-114.3",
      en: "13×4.00B～18×7.5J Offset+35～+55 4H-100/5H-100/5H-114.3",
      zh: "13×4.00B～18×7.5J 偏距+35～+55 4H-100/5H-100/5H-114.3"
    },
    description: {
      jp: "バランスの取れたデザインで様々な車種にマッチ。安定した走行性能を提供。VIA JWL規格適合。",
      ko: "균형잡힌 디자인으로 다양한 차종에 매치. 안정된 주행 성능을 제공. VIA JWL 규격 적합.",
      en: "Balanced design matches various vehicle types. Provides stable driving performance. VIA JWL standard compliant.",
      zh: "平衡设计适配各种车型。提供稳定的行驶性能。VIA JWL标准符合。"
    },
    status: 'active'
  },
  {
    id: 8,
    brandId: 2,
    name: "IS",
    nameJp: "IS",
    imageUrl: "/images/wheel/aphrodite-is_l.jpg",
    specs: {
      jp: "17×7.0J インセット50 5H-114.3",
      ko: "17×7.0J 오프셋50 5H-114.3",
      en: "17×7.0J Offset50 5H-114.3",
      zh: "17×7.0J 偏距50 5H-114.3"
    },
    description: {
      jp: "シャープなラインが印象的なモダンデザイン。軽量化を追求した構造。",
      ko: "샤프한 라인이 인상적인 모던 디자인. 경량화를 추구한 구조.",
      en: "Modern design with impressive sharp lines. Structure pursuing weight reduction.",
      zh: "锐利线条印象深刻的现代设计。追求轻量化的结构。"
    },
    status: 'inactive'
  },
  {
    id: 9,
    brandId: 2,
    name: "JX",
    nameJp: "JX",
    imageUrl: "/images/wheel/aphrodite-jx.jpg",
    specs: {
      jp: "16×6.0J インセット45 5H-114.3",
      ko: "16×6.0J 오프셋45 5H-114.3",
      en: "16×6.0J Offset45 5H-114.3",
      zh: "16×6.0J 偏距45 5H-114.3"
    },
    description: {
      jp: "クリーンで洗練されたデザイン。日常使いから週末ドライブまで幅広く対応。",
      ko: "깔끔하고 세련된 디자인. 일상 사용부터 주말 드라이브까지 폭넓게 대응.",
      en: "Clean and sophisticated design. Wide coverage from daily use to weekend drives.",
      zh: "简洁精致的设计。从日常使用到周末驾驶的广泛应用。"
    },
    status: 'inactive'
  },
  {
    id: 10,
    brandId: 2,
    name: "KR",
    nameJp: "KR",
    imageUrl: "/images/wheel/aphrodite-kr.jpg",
    specs: {
      jp: "15×6.0J インセット43 5H-114.3",
      ko: "15×6.0J 오프셋43 5H-114.3", 
      en: "15×6.0J Offset43 5H-114.3",
      zh: "15×6.0J 偏距43 5H-114.3"
    },
    description: {
      jp: "コスパに優れたエントリーモデル。シンプルながら美しいデザイン。",
      ko: "코스파가 뛰어난 엔트리 모델. 심플하면서도 아름다운 디자인.",
      en: "Entry model with excellent cost performance. Simple yet beautiful design.",
      zh: "性价比优秀的入门级型号。简约而美观的设计。"
    },
    status: 'inactive'
  },
  {
    id: 11,
    brandId: 2,
    name: "MZ",
    nameJp: "MZ",
    imageUrl: "/images/wheel/aphrodite-mz.jpg",
    specs: {
      jp: "19×8.0J インセット45 5H-114.3\n重量: 約12.5kg\n材質: アルミニウム合金\n製造方法: ローフォージング\n適合車種: レクサス、トヨタ、日産、ホンダ等",
      ko: "19×8.0J 오프셋45 5H-114.3\n무게: 약 12.5kg\n재질: 알루미늄 합금\n제조방법: 로우 포징\n적합 차종: 렉서스, 토요타, 닛산, 혼다 등",
      en: "19×8.0J Offset45 5H-114.3\nWeight: Approx. 12.5kg\nMaterial: Aluminum Alloy\nManufacturing: Low Forging\nCompatible: Lexus, Toyota, Nissan, Honda, etc.", 
      zh: "19×8.0J 偏距45 5H-114.3\n重量: 约12.5kg\n材质: 铝合金\n制造方法: 低压锻造\n适用车型: 雷克萨斯、丰田、日产、本田等"
    },
    description: {
      jp: "大径ホイールでインパクト抜群。ラグジュアリーSUVにも対応する頑強な設計。5スポークのダイナミックデザインで、高級感とスポーティさを両立。ローフォージング製法により軽量化と高剛性を実現。",
      ko: "대구경 휠로 임팩트 발군. 럭셔리 SUV에도 대응하는 견고한 설계. 5스포크의 다이나믹 디자인으로 고급감과 스포티함을 겸비. 로우 포징 제법으로 경량화와 고강성을 실현.",
      en: "Outstanding impact with large diameter wheels. Robust design compatible with luxury SUVs. Dynamic 5-spoke design combines luxury and sportiness. Low forging manufacturing achieves weight reduction and high rigidity.",
      zh: "大直径轮毂冲击力十足。适用于豪华SUV的坚固设计。5辐条动感设计兼具豪华感与运动感。低压锻造工艺实现轻量化与高刚性。"
    },
    status: 'active'
  },
  {
    id: 12,
    brandId: 2,
    name: "SW5",
    nameJp: "SW5",
    imageUrl: "/images/wheel/aphrodite-sw5.jpg",
    specs: {
      jp: "16×6.5J インセット50 5H-114.3",
      ko: "16×6.5J 오프셋50 5H-114.3",
      en: "16×6.5J Offset50 5H-114.3",
      zh: "16×6.5J 偏距50 5H-114.3"
    },
    description: {
      jp: "5スポークの王道デザイン。シンプルで飽きのこないスタイル。",
      ko: "5스포크의 왕도 디자인. 심플하고 질리지 않는 스타일.",
      en: "Classic 5-spoke design. Simple and timeless style.",
      zh: "5辐条的王道设计。简洁而不过时的风格。"
    },
    status: 'inactive'
  },
  {
    id: 13,
    brandId: 2,
    name: "TWS",
    nameJp: "TWS",
    imageUrl: "/images/wheel/aphrodite-tws.jpg",
    specs: {
      jp: "17×7.5J インセット48 5H-114.3",
      ko: "17×7.5J 오프셋48 5H-114.3",
      en: "17×7.5J Offset48 5H-114.3",
      zh: "17×7.5J 偏距48 5H-114.3"
    },
    description: {
      jp: "ツインスポークデザインで独特の存在感。レーシングスピリットを表現。",
      ko: "트윈 스포크 디자인으로 독특한 존재감. 레이싱 스피릿을 표현.",
      en: "Unique presence with twin spoke design. Expresses racing spirit.",
      zh: "双辐条设计独特存在感。表达赛车精神。"
    },
    status: 'inactive'
  },
  {
    id: 14,
    brandId: 2,
    name: "WX",
    nameJp: "WX",
    imageUrl: "/images/wheel/aphrodite-wx.jpg",
    specs: {
      jp: "16×6.5J インセット53 5H-114.3",
      ko: "16×6.5J 오프셋53 5H-114.3",
      en: "16×6.5J Offset53 5H-114.3",
      zh: "16×6.5J 偏距53 5H-114.3"
    },
    description: {
      jp: "ワイドなスポークが特徴的なダイナミックデザイン。迫力ある外観を演出。",
      ko: "와이드한 스포크가 특징적인 다이나믹 디자인. 박력있는 외관을 연출.",
      en: "Dynamic design featuring wide spokes. Creates a powerful appearance.",
      zh: "宽辐条特色的动感设计。营造强劲外观。"
    },
    status: 'inactive'
  },

  // ARTEMIS Series
  {
    id: 14,
    brandId: 3,
    name: "LSW",
    nameJp: "LSW",
    imageUrl: "/images/wheel/artemis-lsw_l.jpg",
    specs: {
      jp: "18×8.0J インセット45 5H-114.3",
      ko: "18×8.0J 오프셋45 5H-114.3",
      en: "18×8.0J Offset45 5H-114.3",
      zh: "18×8.0J 偏距45 5H-114.3"
    },
    description: {
      jp: "ローデザインで迫力のあるスポーツホイール。高い剛性と軽量化を実現。",
      ko: "로우 디자인으로 박력있는 스포츠 휠. 높은 강성과 경량화를 실현.",
      en: "Powerful sports wheel with low design. Achieves high rigidity and weight reduction.",
      zh: "低调设计的强劲运动轮毂。实现高刚性和轻量化。"
    },
    status: 'active'
  },
  {
    id: 15,
    brandId: 3,
    name: "NS9",
    nameJp: "NS9",
    imageUrl: "/images/wheel/artemis-ns9_l.jpg",
    specs: {
      jp: "17×7.0J インセット48 5H-114.3",
      ko: "17×7.0J 오프셋48 5H-114.3",
      en: "17×7.0J Offset48 5H-114.3",
      zh: "17×7.0J 偏距48 5H-114.3"
    },
    description: {
      jp: "9スポークの精密なデザイン。優れた通気性とクーリング効果。",
      ko: "9스포크의 정밀한 디자인. 뛰어난 통기성과 쿨링 효과.",
      en: "Precise 9-spoke design. Excellent ventilation and cooling effect.",
      zh: "9辐条的精密设计。优异的通风和冷却效果。"
    },
    status: 'active'
  },

  // ADONIS Series  
  {
    id: 16,
    brandId: 4,
    name: "HSR",
    nameJp: "HSR",
    imageUrl: "/images/wheel/adonis-hsr_l.jpg",
    specs: {
      jp: "16×6.5J インセット53 5H-114.3",
      ko: "16×6.5J 오프셋53 5H-114.3",
      en: "16×6.5J Offset53 5H-114.3",
      zh: "16×6.5J 偏距53 5H-114.3"
    },
    description: {
      jp: "高品質で上品なクラシックデザイン。長く愛用できる普遍的な美しさ。",
      ko: "고품질로 품격있는 클래식 디자인. 오래 애용할 수 있는 보편적인 아름다움.",
      en: "High-quality elegant classic design. Universal beauty for long-term use.",
      zh: "高品质优雅的经典设计。可长期使用的普遍之美。"
    },
    status: 'inactive'
  },
  {
    id: 17,
    brandId: 4,
    name: "ISR",
    nameJp: "ISR",
    imageUrl: "/images/wheel/adonis-isr_l.jpg",
    specs: {
      jp: "17×7.0J インセット50 5H-114.3",
      ko: "17×7.0J 오프셋50 5H-114.3",
      en: "17×7.0J Offset50 5H-114.3",
      zh: "17×7.0J 偏距50 5H-114.3"
    },
    description: {
      jp: "伝統的なスタイルに現代的な技術を融合。信頼性の高いパフォーマンス。",
      ko: "전통적인 스타일에 현대적인 기술을 융합. 신뢰성 높은 퍼포먼스.",
      en: "Fusion of traditional style with modern technology. Reliable performance.",
      zh: "传统风格与现代技术的融合。可靠的性能。"
    },
    status: 'inactive'
  },
  {
    id: 18,
    brandId: 4,
    name: "JXS",
    nameJp: "JXS",
    imageUrl: "/images/wheel/adonis-jxs_l.jpg",
    specs: {
      jp: "15×6.0J インセット43 5H-114.3",
      ko: "15×6.0J 오프셋43 5H-114.3",
      en: "15×6.0J Offset43 5H-114.3",
      zh: "15×6.0J 偏距43 5H-114.3"
    },
    description: {
      jp: "スタンダードサイズで使いやすい定番モデル。幅広い用途に対応。",
      ko: "스탠다드 사이즈로 사용하기 쉬운 정번 모델. 폭넓은 용도에 대응.",
      en: "Standard size easy-to-use classic model. Supports wide range of applications.",
      zh: "标准尺寸易用的经典型号。支持广泛用途。"
    },
    status: 'inactive'
  },
  {
    id: 19,
    brandId: 4,
    name: "KRS",
    nameJp: "KRS",
    imageUrl: "/images/wheel/adonis-krs_l.jpg",
    specs: {
      jp: "16×6.5J インセット50 5H-114.3",
      ko: "16×6.5J 오프셋50 5H-114.3",
      en: "16×6.5J Offset50 5H-114.3",
      zh: "16×6.5J 偏距50 5H-114.3"
    },
    description: {
      jp: "重厚感のあるデザインで高級感を演出。ラグジュアリーカーにもマッチ。",
      ko: "중후한 디자인으로 고급감을 연출. 럭셔리카에도 매치.",
      en: "Creates luxury with substantial design. Matches luxury cars too.",
      zh: "厚重设计营造豪华感。也适合豪华车。"
    },
    status: 'inactive'
  },

  // KASHINA Series
  {
    id: 20,
    brandId: 5,
    name: "FV7",
    nameJp: "FV7",
    imageUrl: "/images/wheel/kashina-fv7_l.jpg",
    specs: {
      jp: "17×7.0J インセット48 5H-114.3",
      ko: "17×7.0J 오프셋48 5H-114.3",
      en: "17×7.0J Offset48 5H-114.3",
      zh: "17×7.0J 偏距48 5H-114.3"
    },
    description: {
      jp: "未来的なデザインで個性を表現。革新的な技術とスタイルの融合。",
      ko: "미래적인 디자인으로 개성을 표현. 혁신적인 기술과 스타일의 융합.",
      en: "Express individuality with futuristic design. Fusion of innovative technology and style.",
      zh: "未来设计展现个性。创新技术与风格的融合。"
    },
    status: 'active'
  },
  {
    id: 21,
    brandId: 5,
    name: "V1",
    nameJp: "V1",
    imageUrl: "/images/wheel/kashina-v1_l.jpg",
    specs: {
      jp: "16×6.5J インセット53 5H-114.3",
      ko: "16×6.5J 오프셋53 5H-114.3",
      en: "16×6.5J Offset53 5H-114.3",
      zh: "16×6.5J 偏距53 5H-114.3"
    },
    description: {
      jp: "シンプルながら印象的なVスポークデザイン。都市的でスマートな印象。",
      ko: "심플하지만 인상적인 V스포크 디자인. 도시적이고 스마트한 인상.",
      en: "Simple yet impressive V-spoke design. Urban and smart impression.",
      zh: "简约而印象深刻的V辐条设计。都市化智能印象。"
    },
    status: 'active'
  },
  {
    id: 22,
    brandId: 5,
    name: "XV5",
    nameJp: "XV5",
    imageUrl: "/images/wheel/kashina-xv5_l.jpg",
    specs: {
      jp: "15×6.0J インセット45 5H-114.3",
      ko: "15×6.0J 오프셋45 5H-114.3",
      en: "15×6.0J Offset45 5H-114.3",
      zh: "15×6.0J 偏距45 5H-114.3"
    },
    description: {
      jp: "エクストリームなXデザインで強いインパクト。スポーツカーにも似合う攻撃的スタイル。",
      ko: "익스트림한 X디자인으로 강한 임팩트. 스포츠카에도 어울리는 공격적 스타일.",
      en: "Strong impact with extreme X design. Aggressive style that suits sports cars.",
      zh: "极端X设计强烈冲击。适合跑车的激进风格。"
    },
    status: 'active'
  },

  // LACHESIS Series
  {
    id: 23,
    brandId: 6,
    name: "LD1",
    nameJp: "LD1",
    imageUrl: "/images/wheel/lachesis-ld1.jpg", 
    specs: {
      jp: "16×6.0J インセット45 4H-100",
      ko: "16×6.0J 오프셋45 4H-100",
      en: "16×6.0J Offset45 4H-100",
      zh: "16×6.0J 偏距45 4H-100"
    },
    description: {
      jp: "独創的なデザインで他とは違う個性を演出。軽自動車やコンパクトカー専用。",
      ko: "독창적인 디자인으로 다른 것과는 다른 개성을 연출. 경자동차나 컴팩트카 전용.",
      en: "Creates unique personality with original design. Dedicated for mini cars and compact cars.",
      zh: "独创设计营造与众不同的个性。专用于微型车和紧凑型车。"
    },
    status: 'inactive'
  },
  {
    id: 24,
    brandId: 6,
    name: "LF",
    nameJp: "LF",
    imageUrl: "/images/wheel/lachesis-lf.jpg",
    specs: {
      jp: "15×5.5J インセット45 4H-100",
      ko: "15×5.5J 오프셋45 4H-100", 
      en: "15×5.5J Offset45 4H-100",
      zh: "15×5.5J 偏距45 4H-100"
    },
    description: {
      jp: "流れるようなラインが美しいアートピース。機能美を追求したデザイン。",
      ko: "흐르는 듯한 라인이 아름다운 아트피스. 기능미를 추구한 디자인.",
      en: "Beautiful art piece with flowing lines. Design pursuing functional beauty.",
      zh: "流畅线条美丽的艺术品。追求功能美的设计。"
    },
    status: 'inactive'
  },

  // MUD CLIFF Series
  {
    id: 25,
    brandId: 7,
    name: "MUD CLIFF",
    nameJp: "マッドクリフ",
    imageUrl: "/images/wheel/mudcliff.jpg",
    specs: {
      jp: "16×7.0J インセット38 6H-139.7",
      ko: "16×7.0J 오프셋38 6H-139.7",
      en: "16×7.0J Offset38 6H-139.7",
      zh: "16×7.0J 偏距38 6H-139.7"
    },
    description: {
      jp: "オフロード走行に最適化された頑強なホイール。過酷な条件下でも信頼性を発揮。",
      ko: "오프로드 주행에 최적화된 견고한 휠. 혹독한 조건에서도 신뢰성을 발휘.",
      en: "Rugged wheel optimized for off-road driving. Demonstrates reliability even under harsh conditions.",
      zh: "为越野驾驶优化的坚固轮毂。即使在恶劣条件下也能展现可靠性。"
    },
    status: 'active'
  },

  // ===== DISCONTINUED MODELS =====
  
  // ADONIS Discontinued Series
  {
    id: 26,
    brandId: 4,
    name: "HSR",
    nameJp: "HSR",
    imageUrl: "/images/wheel/adonis-hsr_l.jpg",
    specs: {
      jp: "16×6.5J インセット53 5H-114.3",
      ko: "16×6.5J 오프셋53 5H-114.3",
      en: "16×6.5J Offset53 5H-114.3",
      zh: "16×6.5J 偏距53 5H-114.3"
    },
    description: {
      jp: "高品質で上品なクラシックデザイン。長く愛用できる普遍的な美しさ。",
      ko: "고품질로 품격있는 클래식 디자인. 오래 애용할 수 있는 보편적인 아름다움.",
      en: "High-quality elegant classic design. Universal beauty for long-term use.",
      zh: "高品质优雅的经典设计。可长期使用的普遍之美。"
    },
    status: 'inactive'
  },
  {
    id: 27,
    brandId: 4,
    name: "ISR",
    nameJp: "ISR",
    imageUrl: "/images/wheel/adonis-isr_l.jpg",
    specs: {
      jp: "17×7.0J インセット50 5H-114.3",
      ko: "17×7.0J 오프셋50 5H-114.3",
      en: "17×7.0J Offset50 5H-114.3",
      zh: "17×7.0J 偏距50 5H-114.3"
    },
    description: {
      jp: "伝統的なスタイルに現代的な技術を融合。信頼性の高いパフォーマンス。",
      ko: "전통적인 스타일에 현대적인 기술을 융합. 신뢰성 높은 퍼포먼스.",
      en: "Fusion of traditional style with modern technology. Reliable performance.",
      zh: "传统风格与现代技术的融合。可靠的性能。"
    },
    status: 'inactive'
  },
  {
    id: 28,
    brandId: 4,
    name: "JXS",
    nameJp: "JXS",
    imageUrl: "/images/wheel/adonis-jxs_l.jpg",
    specs: {
      jp: "15×6.0J インセット43 5H-114.3",
      ko: "15×6.0J 오프셋43 5H-114.3",
      en: "15×6.0J Offset43 5H-114.3",
      zh: "15×6.0J 偏距43 5H-114.3"
    },
    description: {
      jp: "スタンダードサイズで使いやすい定番モデル。幅広い用途に対応。",
      ko: "스탠다드 사이즈로 사용하기 쉬운 정번 모델. 폭넓은 용도에 대응.",
      en: "Standard size easy-to-use classic model. Supports wide range of applications.",
      zh: "标准尺寸易用的经典型号。支持广泛用途。"
    },
    status: 'inactive'
  },
  {
    id: 29,
    brandId: 4,
    name: "KRS",
    nameJp: "KRS",
    imageUrl: "/images/wheel/adonis-krs_l.jpg",
    specs: {
      jp: "16×6.5J インセット50 5H-114.3",
      ko: "16×6.5J 오프셋50 5H-114.3",
      en: "16×6.5J Offset50 5H-114.3",
      zh: "16×6.5J 偏距50 5H-114.3"
    },
    description: {
      jp: "重厚感のあるデザインで高級感を演出。ラグジュアリーカーにもマッチ。",
      ko: "중후한 디자인으로 고급감을 연출. 럭셔리카에도 매치.",
      en: "Creates luxury with substantial design. Matches luxury cars too.",
      zh: "厚重设计营造豪华感。也适合豪华车。"
    },
    status: 'inactive'
  },

  // APHRODITE Discontinued Series
  {
    id: 30,
    brandId: 2,
    name: "EF(MS)",
    nameJp: "EF(MS)",
    imageUrl: "/images/wheel/aphrodite-efms.jpg",
    specs: {
      jp: "18×7.5J インセット53 5H-114.3",
      ko: "18×7.5J 오프셋53 5H-114.3",
      en: "18×7.5J Offset53 5H-114.3",
      zh: "18×7.5J 偏距53 5H-114.3"
    },
    description: {
      jp: "流線型のスポークが美しい高級感溢れるデザイン。パフォーマンスと美しさを追求したホイール。",
      ko: "유선형 스포크가 아름다운 고급감 넘치는 디자인. 성능과 아름다움을 추구한 휠.",
      en: "Luxurious design with beautiful streamlined spokes. Wheels pursuing performance and beauty.",
      zh: "流线型辐条美观的豪华设计。追求性能与美观的轮毂。"
    },
    status: 'inactive'
  },
  {
    id: 31,
    brandId: 2,
    name: "IS(MS)",
    nameJp: "IS(MS)",
    imageUrl: "/images/wheel/aphrodite-isms.jpg",
    specs: {
      jp: "17×7.0J インセット50 5H-114.3",
      ko: "17×7.0J 오프셋50 5H-114.3",
      en: "17×7.0J Offset50 5H-114.3",
      zh: "17×7.0J 偏距50 5H-114.3"
    },
    description: {
      jp: "シャープなラインが印象的なモダンデザイン。軽量化を追求した構造。",
      ko: "샤프한 라인이 인상적인 모던 디자인. 경량화를 추구한 구조.",
      en: "Modern design with impressive sharp lines. Structure pursuing weight reduction.",
      zh: "锐利线条印象深刻的现代设计。追求轻量化的结构。"
    },
    status: 'inactive'
  },
  {
    id: 32,
    brandId: 2,
    name: "TWS custom",
    nameJp: "TWS custom",
    imageUrl: "/images/wheel/aphrodite-tws-custom.jpg",
    specs: {
      jp: "17×7.5J インセット48 5H-114.3",
      ko: "17×7.5J 오프셋48 5H-114.3",
      en: "17×7.5J Offset48 5H-114.3",
      zh: "17×7.5J 偏距48 5H-114.3"
    },
    description: {
      jp: "カスタム仕様のツインスポークデザイン。個性的で独特の存在感。",
      ko: "커스텀 사양의 트윈 스포크 디자인. 개성적이고 독특한 존재감.",
      en: "Custom specification twin spoke design. Individual and unique presence.",
      zh: "定制规格双辐条设计。个性独特的存在感。"
    },
    status: 'inactive'
  },

  // ARTEMIS Discontinued Series
  {
    id: 33,
    brandId: 3,
    name: "LSW",
    nameJp: "LSW",
    imageUrl: "/images/wheel/artemis-lsw_l.jpg",
    specs: {
      jp: "18×8.0J インセット45 5H-114.3",
      ko: "18×8.0J 오프셋45 5H-114.3",
      en: "18×8.0J Offset45 5H-114.3",
      zh: "18×8.0J 偏距45 5H-114.3"
    },
    description: {
      jp: "ローデザインで迫力のあるスポーツホイール。高い剛性と軽量化を実現。",
      ko: "로우 디자인으로 박력있는 스포츠 휠. 높은 강성과 경량화를 실현.",
      en: "Powerful sports wheel with low design. Achieves high rigidity and weight reduction.",
      zh: "低调设计的强劲运动轮毂。实现高刚性和轻量化。"
    },
    status: 'inactive'
  },

  // LACHESIS Discontinued Series
  {
    id: 34,
    brandId: 6,
    name: "LD1",
    nameJp: "LD1",
    imageUrl: "/images/wheel/lachesis-ld1.jpg",
    specs: {
      jp: "16×6.0J インセット45 4H-100",
      ko: "16×6.0J 오프셋45 4H-100",
      en: "16×6.0J Offset45 4H-100",
      zh: "16×6.0J 偏距45 4H-100"
    },
    description: {
      jp: "独創的なデザインで他とは違う個性を演出。軽自動車やコンパクトカー専用。",
      ko: "독창적인 디자인으로 다른 것과는 다른 개성을 연출. 경자동차나 컴팩트카 전용.",
      en: "Creates unique personality with original design. Dedicated for mini cars and compact cars.",
      zh: "独创设计营造与众不同的个性。专用于微型车和紧凑型车。"
    },
    status: 'inactive'
  },
  {
    id: 35,
    brandId: 6,
    name: "LF",
    nameJp: "LF",
    imageUrl: "/images/wheel/lachesis-lf.jpg",
    specs: {
      jp: "15×5.5J インセット45 4H-100",
      ko: "15×5.5J 오프셋45 4H-100",
      en: "15×5.5J Offset45 4H-100",
      zh: "15×5.5J 偏距45 4H-100"
    },
    description: {
      jp: "流れるようなラインが美しいアートピース。機能美を追求したデザイン。",
      ko: "흐르는 듯한 라인이 아름다운 아트피스. 기능미를 추구한 디자인.",
      en: "Beautiful art piece with flowing lines. Design pursuing functional beauty.",
      zh: "流畅线条美丽的艺术品。追求功能美的设计。"
    },
    status: 'inactive'
  }
];

export const getWheelsByBrand = (brandId: number): WheelModel[] => {
  return wheelModels.filter(wheel => wheel.brandId === brandId && wheel.status === 'active');
};

export const getDiscontinuedWheels = (): WheelModel[] => {
  return wheelModels.filter(wheel => wheel.status === 'inactive');
};

export const getDiscontinuedWheelsByBrand = (brandId: number): WheelModel[] => {
  return wheelModels.filter(wheel => wheel.brandId === brandId && wheel.status === 'inactive');
};

export const getWheelById = (id: number): WheelModel | undefined => {
  return wheelModels.find(wheel => wheel.id === id);
};

export const getBrandById = (id: number): WheelBrand | undefined => {
  return wheelBrands.find(brand => brand.id === id);
}; 