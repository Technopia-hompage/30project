// Wheel lineup data based on Technopia's wheel collection
export interface WheelModel {
  id: number;
  brandId: number;
  name: string;
  nameJp: string;
  imageUrl: string;
  specs?: {
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
  features?: {
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
      jp: "クラシックで上品なスタイルのホイール。VIA、JWL規格適合。在庫限りで生産終了。",
      ko: "클래식하고 품격있는 스타일의 휠. VIA, JWL 규격 적합. 재고 한정으로 생산 종료.",
      en: "Classic and elegant style wheels. VIA, JWL certified. Production discontinued, limited stock.",
      zh: "经典优雅风格轮毂。VIA、JWL认证。停产，库存有限。"
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
    description: {
      jp: "カラー:メタリックシルバー、付属品:キャップ 補修価格¥1,000　バルブ(TR413C) 補修価格¥800、VIA JWL規格適合、＊はJWL-T規格適合",
      ko: "색상: 메탈릭 실버, 부속품: 캡 수리 가격 ¥1,000, 밸브(TR413C) 수리 가격 ¥800, VIA JWL 규격 적합, *는 JWL-T 규격 적합",
      en: "Color: Metallic Silver, Accessories: Cap repair price ¥1,000, Valve (TR413C) repair price ¥800, VIA JWL certified, * is JWL-T certified",
      zh: "颜色：金属银，配件：轮毂盖维修价格¥1,000，气门嘴(TR413C)维修价格¥800，VIA JWL认证，*为JWL-T认证"
    },
    features: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'active'
  },
  {
    id: 2,
    brandId: 1,
    name: "S315",
    nameJp: "S315",
    imageUrl: "/images/wheel/charites-s315.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'active'
  },
  {
    id: 3,
    brandId: 1,
    name: "S316",
    nameJp: "S316",
    imageUrl: "/images/wheel/charites-s316.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'active'
  },
  {
    id: 4,
    brandId: 1,
    name: "S416",
    nameJp: "S416", 
    imageUrl: "/images/wheel/charites-s416.jpg",
   
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 6,
    brandId: 2,
    name: "GX",
    nameJp: "GX",
    imageUrl: "/images/wheel/aphrodite-gx_l.jpg",
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 7,
    brandId: 2,
    name: "HS", 
    nameJp: "HS",
    imageUrl: "/images/wheel/aphrodite-hs_l.jpg",
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 8,
    brandId: 2,
    name: "IS",
    nameJp: "IS",
    imageUrl: "/images/wheel/aphrodite-is_l.jpg",
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 9,
    brandId: 2,
    name: "JX",
    nameJp: "JX",
    imageUrl: "/images/wheel/aphrodite-jx.jpg",
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 10,
    brandId: 2,
    name: "KR",
    nameJp: "KR",
    imageUrl: "/images/wheel/aphrodite-kr.jpg",
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 11,
    brandId: 2,
    name: "MZ",
    nameJp: "MZ",
    imageUrl: "/images/wheel/aphrodite-mz.jpg",
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'active'
  },
  {
    id: 12,
    brandId: 2,
    name: "SW5",
    nameJp: "SW5",
    imageUrl: "/images/wheel/aphrodite-sw5.jpg",
   
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 13,
    brandId: 2,
    name: "TWS",
    nameJp: "TWS",
    imageUrl: "/images/wheel/aphrodite-tws.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 14,
    brandId: 2,
    name: "WX",
    nameJp: "WX",
    imageUrl: "/images/wheel/aphrodite-wx.jpg",
   
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'active'
  },
  {
    id: 15,
    brandId: 3,
    name: "NS9",
    
    nameJp: "NS9",
    imageUrl: "/images/wheel/artemis-ns9_l.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 17,
    brandId: 4,
    name: "ISR",
    nameJp: "ISR",
    imageUrl: "/images/wheel/adonis-isr_l.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 18,
    brandId: 4,
    name: "JXS",
    nameJp: "JXS",
    imageUrl: "/images/wheel/adonis-jxs_l.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 19,
    brandId: 4,
    name: "KRS",
    nameJp: "KRS",
    imageUrl: "/images/wheel/adonis-krs_l.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'active'
  },
  {
    id: 21,
    brandId: 5,
    name: "V1",
    nameJp: "V1",
    imageUrl: "/images/wheel/kashina-v1_l.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'active'
  },
  {
    id: 22,
    brandId: 5,
    name: "XV5",
    nameJp: "XV5",
    imageUrl: "/images/wheel/kashina-xv5_l.jpg",
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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
   
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 24,
    brandId: 6,
    name: "LF",
    nameJp: "LF",
    imageUrl: "/images/wheel/lachesis-lf.jpg",
   
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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
    
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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

    description: {
      jp: "メタリックシルバー仕上げの高級感あふれるデザイン。VIA、JWL規格適合。一部サイズはJWL-T規格適合。",
      ko: "메탈릭 실버 마감의 고급감 넘치는 디자인. VIA, JWL 규격 적합. 일부 사이즈는 JWL-T 규격 적합.",
      en: "Luxurious design with metallic silver finish. VIA, JWL certified. Some sizes are JWL-T certified.",
      zh: "金属银色饰面的豪华设计。VIA、JWL认证。部分尺寸符合JWL-T标准。"
    },
    status: 'inactive'
  },
  {
    id: 31,
    brandId: 2,
    name: "IS(MS)",
    nameJp: "IS(MS)",
    imageUrl: "/images/wheel/aphrodite-isms.jpg",
  
    description: {
      jp: "メタリックシルバー仕上げの高級感あふれるデザイン。VIA、JWL規格適合。一部サイズはJWL-T規格適合。",
      ko: "메탈릭 실버 마감의 고급감 넘치는 디자인. VIA, JWL 규격 적합. 일부 사이즈는 JWL-T 규격 적합.",
      en: "Luxurious design with metallic silver finish. VIA, JWL certified. Some sizes are JWL-T certified.",
      zh: "金属银色饰面的豪华设计。VIA、JWL认证。部分尺寸符合JWL-T标准。"
    },
    status: 'inactive'
  },
  {
    id: 32,
    brandId: 2,
    name: "TWS custom",
    nameJp: "TWS custom",
    imageUrl: "/images/wheel/aphrodite-tws-custom.jpg",
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
    },
    status: 'inactive'
  },
  {
    id: 35,
    brandId: 6,
    name: "LF",
    nameJp: "LF",
    imageUrl: "/images/wheel/lachesis-lf.jpg",
    description: {
      jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
      ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
      en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
      zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
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