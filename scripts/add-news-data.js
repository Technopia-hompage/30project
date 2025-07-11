import fetch from 'node-fetch';

const newsArticles = [
  // General Announcements
  {
    title: {
      jp: "ゴールデンウィーク期間の休業のお知らせ",
      ko: "골든위크 기간 휴업 안내",
      en: "Golden Week Holiday Notice",
      zh: "黄金周期间休业通知"
    },
    excerpt: {
      jp: "2025年ゴールデンウィーク期間中の休業についてお知らせいたします。",
      ko: "2025년 골든위크 기간 중 휴업에 대해 안내드립니다.",
      en: "Notice regarding our holiday schedule during Golden Week 2025.",
      zh: "关于2025年黄金周期间休业的通知。"
    },
    content: {
      jp: `
        <h2>ゴールデンウィーク期間の休業のお知らせ</h2>
        <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
        <p>弊社のゴールデンウィーク期間中の休業につきまして、下記のとおりお知らせいたします。</p>
        
        <h3>休業期間</h3>
        <p><strong>2025年4月29日（火）～ 2025年5月5日（月）</strong></p>
        
        <p>上記期間中はお電話でのお問い合わせ、メールでのご返答ができませんので、予めご了承ください。</p>
        <p>なお、5月6日（火）より通常業務を開始いたします。</p>
        
        <p>ご不便をおかけいたしますが、何卒ご理解のほど、よろしくお願い申し上げます。</p>
      `,
      ko: "골든위크 휴업 안내 내용",
      en: "Golden Week holiday notice content",
      zh: "黄金周休业通知内容"
    },
    category: "announcement",
    published: true,
    featured: false,
    publishedAt: "2025-04-08"
  },
  {
    title: {
      jp: "年末年始休業のお知らせ",
      ko: "연말연시 휴업 안내",
      en: "Year-End Holiday Notice",
      zh: "年末年初休业通知"
    },
    excerpt: {
      jp: "2024年年末年始の休業期間についてお知らせいたします。",
      ko: "2024년 연말연시 휴업 기간에 대해 안내드립니다.",
      en: "Notice regarding our year-end holiday schedule for 2024.",
      zh: "关于2024年年末年初休业期间的通知。"
    },
    content: {
      jp: `
        <h2>年末年始休業のお知らせ</h2>
        <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
        <p>弊社の年末年始休業につきまして、下記のとおりお知らせいたします。</p>
        
        <h3>休業期間</h3>
        <p><strong>2024年12月28日（土）～ 2025年1月5日（日）</strong></p>
        
        <p>上記期間中はお電話でのお問い合わせ、メールでのご返答ができませんので、予めご了承ください。</p>
        <p>なお、1月6日（月）より通常業務を開始いたします。</p>
        
        <p>本年中は格別のご愛顧を賜り、誠にありがとうございました。</p>
        <p>来年も変わらぬご支援のほど、よろしくお願い申し上げます。</p>
      `,
      ko: "연말연시 휴업 안내 내용",
      en: "Year-end holiday notice content",
      zh: "年末年初休业通知内容"
    },
    category: "announcement",
    published: true,
    featured: false,
    publishedAt: "2024-11-11"
  },
  {
    title: {
      jp: "夏期休業のお知らせ",
      ko: "하계 휴업 안내",
      en: "Summer Holiday Notice",
      zh: "夏季休业通知"
    },
    excerpt: {
      jp: "2024年夏期休業期間についてお知らせいたします。",
      ko: "2024년 하계 휴업 기간에 대해 안내드립니다.",
      en: "Notice regarding our summer holiday schedule for 2024.",
      zh: "关于2024年夏季休业期间的通知。"
    },
    content: {
      jp: `
        <h2>夏期休業のお知らせ</h2>
        <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
        <p>弊社の夏期休業につきまして、下記のとおりお知らせいたします。</p>
        
        <h3>休業期間</h3>
        <p><strong>2024年8月10日（土）～ 2024年8月18日（日）</strong></p>
        
        <p>上記期間中はお電話でのお問い合わせ、メールでのご返答ができませんので、予めご了承ください。</p>
        <p>なお、8月19日（月）より通常業務を開始いたします。</p>
        
        <p>ご不便をおかけいたしますが、何卒ご理解のほど、よろしくお願い申し上げます。</p>
      `,
      ko: "하계 휴업 안내 내용",
      en: "Summer holiday notice content",
      zh: "夏季休业通知内容"
    },
    category: "announcement",
    published: true,
    featured: false,
    publishedAt: "2024-07-16"
  },
  
  // Medical Industry Announcements
  {
    title: {
      jp: "第40回JSCRS学術総会 ランチョンセミナー開催のお知らせ",
      ko: "제40회 JSCRS 학술총회 런천 세미나 개최 안내",
      en: "40th JSCRS Annual Meeting Luncheon Seminar Notice",
      zh: "第40届JSCRS学术大会午餐研讨会举办通知"
    },
    excerpt: {
      jp: "第40回日本白内障屈折矯正手術学会学術総会でのランチョンセミナー開催についてお知らせいたします。",
      ko: "제40회 일본백내장굴절교정수술학회 학술총회에서의 런천 세미나 개최에 대해 안내드립니다.",
      en: "Notice regarding luncheon seminar at the 40th Annual Meeting of the Japan Society of Cataract & Refractive Surgery.",
      zh: "关于在第40届日本白内障屈光矫正手术学会学术大会举办午餐研讨会的通知。"
    },
    content: {
      jp: `
        <h2>第40回JSCRS学術総会 ランチョンセミナー開催のお知らせ</h2>
        <p>この度、第40回日本白内障屈折矯正手術学会学術総会におきまして、弊社主催のランチョンセミナーを開催させていただくことになりました。</p>
        
        <h3>開催概要</h3>
        <ul>
          <li><strong>日時：</strong>2025年6月14日（土）12:00～13:00</li>
          <li><strong>会場：</strong>パシフィコ横浜</li>
          <li><strong>テーマ：</strong>オルソケラトロジーの最新動向と臨床応用</li>
          <li><strong>演者：</strong>慶應義塾大学医学部眼科学教室 教授</li>
        </ul>
        
        <p>最新のオルソケラトロジー技術について詳しくご紹介いたします。</p>
        <p>多くの皆様のご参加をお待ちしております。</p>
        
        <h3>お問い合わせ</h3>
        <p>株式会社テクノピア メディカル事業部<br>
        TEL: 03-5577-2266</p>
      `,
      ko: "JSCRS 학술총회 세미나 내용",
      en: "JSCRS meeting seminar content",
      zh: "JSCRS学术大会研讨会内容"
    },
    category: "events",
    published: true,
    featured: true,
    publishedAt: "2025-05-26"
  },
  {
    title: {
      jp: "第17回 日中韓ジョイントミーティングのご案内",
      ko: "제17회 한중일 조인트 미팅 안내",
      en: "17th Japan-China-Korea Joint Meeting Notice",
      zh: "第17届日中韩联合会议通知"
    },
    excerpt: {
      jp: "第17回日中韓ジョイントミーティングへの参加についてご案内いたします。",
      ko: "제17회 한중일 조인트 미팅 참가에 대해 안내드립니다.",
      en: "Information about participation in the 17th Japan-China-Korea Joint Meeting.",
      zh: "关于参加第17届日中韩联合会议的信息。"
    },
    content: {
      jp: `
        <h2>第17回 日中韓ジョイントミーティングのご案内</h2>
        <p>第17回日中韓ジョイントミーティングに弊社が参加いたします。</p>
        
        <h3>開催概要</h3>
        <ul>
          <li><strong>日時：</strong>2024年11月15日（金）～17日（日）</li>
          <li><strong>会場：</strong>ソウル国際会議場（韓国）</li>
          <li><strong>テーマ：</strong>アジア地域における眼科医療の発展</li>
        </ul>
        
        <p>弊社ブースでは最新のオルソケラトロジーレンズ「マイエメラルド」をご紹介いたします。</p>
        <p>多くの先生方のお越しをお待ちしております。</p>
        
        <h3>展示内容</h3>
        <ul>
          <li>オルソケラトロジーレンズ マイエメラルド</li>
          <li>アクアセル 涙液補充療法</li>
          <li>各種検査機器</li>
        </ul>
      `,
      ko: "한중일 조인트 미팅 내용",
      en: "Japan-China-Korea joint meeting content",
      zh: "日中韩联合会议内容"
    },
    category: "events",
    published: true,
    featured: false,
    publishedAt: "2024-11-06"
  },
  {
    title: {
      jp: "第39回JSCRS学術総会 イブニングセミナー開催のお知らせ",
      ko: "제39회 JSCRS 학술총회 이브닝 세미나 개최 안내",
      en: "39th JSCRS Annual Meeting Evening Seminar Notice",
      zh: "第39届JSCRS学术大会晚间研讨会举办通知"
    },
    excerpt: {
      jp: "第39回JSCRS学術総会でのイブニングセミナー開催についてお知らせいたします。",
      ko: "제39회 JSCRS 학술총회에서의 이브닝 세미나 개최에 대해 안내드립니다.",
      en: "Notice regarding evening seminar at the 39th JSCRS Annual Meeting.",
      zh: "关于在第39届JSCRS学术大会举办晚间研讨会的通知。"
    },
    content: {
      jp: `
        <h2>第39回JSCRS学術総会 イブニングセミナー開催のお知らせ</h2>
        <p>第39回日本白内障屈折矯正手術学会学術総会におきまして、弊社主催のイブニングセミナーを開催いたします。</p>
        
        <h3>開催概要</h3>
        <ul>
          <li><strong>日時：</strong>2024年6月15日（土）18:00～19:00</li>
          <li><strong>会場：</strong>京都国際会館</li>
          <li><strong>テーマ：</strong>近視進行抑制における新たなアプローチ</li>
          <li><strong>座長：</strong>京都府立医科大学眼科学教室 教授</li>
        </ul>
        
        <p>近視進行抑制の最新研究について討議いたします。</p>
        <p>軽食をご用意してお待ちしております。</p>
        
        <h3>プログラム</h3>
        <ul>
          <li>18:00-18:30 オルソケラトロジーによる近視進行抑制効果</li>
          <li>18:30-19:00 症例検討とディスカッション</li>
        </ul>
      `,
      ko: "JSCRS 이브닝 세미나 내용",
      en: "JSCRS evening seminar content",
      zh: "JSCRS晚间研讨会内容"
    },
    category: "events",
    published: true,
    featured: false,
    publishedAt: "2024-06-14"
  }
];

async function addNewsData() {
  const baseUrl = 'http://localhost:5000';
  
  for (const article of newsArticles) {
    try {
      const response = await fetch(`${baseUrl}/api/news`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`✓ Added: ${article.title.jp}`);
      } else {
        console.error(`✗ Failed to add: ${article.title.jp}`);
      }
    } catch (error) {
      console.error(`Error adding article: ${article.title.jp}`, error);
    }
  }
}

addNewsData();