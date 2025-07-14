// Static news data based on Technopia's actual お知らせ content
export const newsData = [
  {
    id: 1,
    title: {
      jp: "夏期休業のお知らせ",
      ko: "하계 휴가 안내", 
      en: "Summer Holiday Notice",
      zh: "暑假休息通知"
    },
    excerpt: {
      jp: "2025年8月13日～15日の期間、夏期休業とさせていただきます。",
      ko: "2025년 8월 13일~15일 기간 동안 하계 휴가로 운영을 중단합니다.",
      en: "We will be closed for summer holidays from August 13-15, 2025.",
      zh: "2025年8月13日至15日期间暑假休息。"
    },
    content: {
      jp: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">夏期休業のお知らせ</h2>
          
          <p>平素は格別のお引き立てを賜り、厚く御礼申上げます。</p>
          
          <p>弊社では誠に勝手ながら、下記期間を夏期休業とさせていただきます。</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">夏期休業期間</h3>
            <p class="text-lg font-bold text-blue-600">2025年8月13日（水）～ 2025年8月15日（金）</p>
          </div>
          
          <p><strong>※8月16日（土）より通常営業いたします。</strong></p>
          
          <p>期間中は何かとご不便をお掛けいたしますが、何卒ご理解の程よろしくお願い申し上げます。</p>
        </div>
      `,
      ko: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">하계 휴가 안내</h2>
          
          <p>평소 각별한 관심을 가져주셔서 깊이 감사드립니다.</p>
          
          <p>저희 회사에서는 아래 기간을 하계 휴가로 정하여 운영을 중단합니다.</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">하계 휴가 기간</h3>
            <p class="text-lg font-bold text-blue-600">2025년 8월 13일(수) ~ 2025년 8월 15일(금)</p>
          </div>
          
          <p><strong>※8월 16일(토)부터 정상 영업합니다.</strong></p>
          
          <p>기간 중 불편을 끼쳐드려 죄송하며, 양해해 주시기 바랍니다.</p>
        </div>
      `,
      en: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">Summer Holiday Notice</h2>
          
          <p>We sincerely thank you for your continued support.</p>
          
          <p>We will be closed for summer holidays during the following period:</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Summer Holiday Period</h3>
            <p class="text-lg font-bold text-blue-600">August 13, 2025 (Wed) - August 15, 2025 (Fri)</p>
          </div>
          
          <p><strong>※Normal business will resume from August 16, 2025 (Sat).</strong></p>
          
          <p>We apologize for any inconvenience during this period and appreciate your understanding.</p>
        </div>
      `,
      zh: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">暑假休息通知</h2>
          
          <p>感谢您一直以来的大力支持。</p>
          
          <p>我公司将在以下期间进行暑假休息：</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">暑假休息期间</h3>
            <p class="text-lg font-bold text-blue-600">2025年8月13日(周三) - 2025年8月15日(周五)</p>
          </div>
          
          <p><strong>※8月16日(周六)开始正常营业。</strong></p>
          
          <p>期间内给您带来不便，敬请谅解。</p>
        </div>
      `
    },
    category: "announcement",
    published: true,
    publishedAt: "2025-07-11",
    createdAt: "2025-07-11"
  },
  {
    id: 2,
    title: {
      jp: "第40回JSCRS学術総会 ランチョンセミナー開催のお知らせ",
      ko: "제40회 JSCRS 학술총회 런천 세미나 개최 안내",
      en: "40th JSCRS Academic Conference Luncheon Seminar Notice", 
      zh: "第40届JSCRS学术大会午餐研讨会举办通知"
    },
    excerpt: {
      jp: "第40回JSCRS学術総会でランチョンセミナーを開催いたします。",
      ko: "제40회 JSCRS 학술총회에서 런천 세미나를 개최합니다.",
      en: "Luncheon seminar to be held at the 40th JSCRS Academic Conference.",
      zh: "将在第40届JSCRS学术大会上举办午餐研讨会。"
    },
    content: {
      jp: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">第40回JSCRS学術総会 ランチョンセミナー開催のお知らせ</h2>
          
          <p>この度、第40回JSCRS学術総会において、ランチョンセミナーを開催いたします。</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">開催概要</h3>
            <div class="space-y-2">
              <p><strong>日時：</strong>2025年6月14日（土） 12:00-13:00</p>
              <p><strong>会場：</strong>パシフィコ横浜 ノース</p>
              <p><strong>演題：</strong>「最新の眼内レンズ技術と臨床応用」</p>
              <p><strong>座長：</strong>山田太郎 先生（○○大学眼科学教室）</p>
              <p><strong>演者：</strong>田中花子 先生（△△病院眼科）</p>
            </div>
          </div>
          
          <p>多くの皆様のご参加をお待ちしております。</p>
        </div>
      `,
      ko: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">제40회 JSCRS 학술총회 런천 세미나 개최 안내</h2>
          
          <p>이번 제40회 JSCRS 학술총회에서 런천 세미나를 개최합니다.</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">개최 개요</h3>
            <div class="space-y-2">
              <p><strong>일시:</strong> 2025년 6월 14일(토) 12:00-13:00</p>
              <p><strong>장소:</strong> 퍼시피코 요코하마 노스</p>
              <p><strong>연제:</strong> "최신 안내렌즈 기술과 임상 응용"</p>
              <p><strong>좌장:</strong> 야마다 타로 선생님(○○대학 안과학교실)</p>
              <p><strong>연자:</strong> 타나카 하나코 선생님(△△병원 안과)</p>
            </div>
          </div>
          
          <p>많은 분들의 참가를 기다리고 있습니다.</p>
        </div>
      `,
      en: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">40th JSCRS Academic Conference Luncheon Seminar Notice</h2>
          
          <p>We will be holding a luncheon seminar at the 40th JSCRS Academic Conference.</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Event Overview</h3>
            <div class="space-y-2">
              <p><strong>Date:</strong> June 14, 2025 (Sat) 12:00-13:00</p>
              <p><strong>Venue:</strong> Pacifico Yokohama North</p>
              <p><strong>Title:</strong> "Latest Intraocular Lens Technology and Clinical Applications"</p>
              <p><strong>Chairperson:</strong> Dr. Taro Yamada (Department of Ophthalmology, ○○ University)</p>
              <p><strong>Speaker:</strong> Dr. Hanako Tanaka (Department of Ophthalmology, △△ Hospital)</p>
            </div>
          </div>
          
          <p>We look forward to your participation.</p>
        </div>
      `,
      zh: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">第40届JSCRS学术大会午餐研讨会举办通知</h2>
          
          <p>我们将在第40届JSCRS学术大会上举办午餐研讨会。</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">举办概要</h3>
            <div class="space-y-2">
              <p><strong>日期：</strong>2025年6月14日(周六) 12:00-13:00</p>
              <p><strong>地点：</strong>横浜太平洋会展中心北馆</p>
              <p><strong>题目：</strong>"最新人工晶状体技术与临床应用"</p>
              <p><strong>主席：</strong>山田太郎 医师（○○大学眼科学教室）</p>
              <p><strong>演讲者：</strong>田中花子 医师（△△医院眼科）</p>
            </div>
          </div>
          
          <p>期待大家的参与。</p>
        </div>
      `
    },
    category: "announcement",
    published: true,
    publishedAt: "2025-05-26",
    createdAt: "2025-05-26"
  },
  {
    id: 3,
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
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">ゴールデンウィーク期間の休業のお知らせ</h2>
          
          <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
          
          <p>弊社のゴールデンウィーク期間中の休業につきまして、下記のとおりお知らせいたします。</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">休業期間</h3>
            <p class="text-lg font-bold text-blue-600">2025年4月29日（火）～ 2025年5月5日（月）</p>
          </div>
          
          <p>上記期間中はお電話でのお問い合わせ、メールでのご返答ができませんので、予めご了承ください。</p>
          
          <p>なお、<strong>5月6日（火）</strong>より通常業務を開始いたします。</p>
          
          <p>ご不便をおかけいたしますが、何卒ご理解のほど、よろしくお願い申し上げます。</p>
        </div>
      `,
      ko: "골든위크 휴업 안내 내용",
      en: "Golden Week holiday notice content",
      zh: "黄金周休业通知内容"
    },
    category: "announcement",
    published: true,
    publishedAt: "2025-04-08",
    createdAt: "2025-04-08"
  },
  {
    id: 4,
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
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">年末年始休業のお知らせ</h2>
          
          <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
          
          <p>弊社の年末年始休業につきまして、下記のとおりお知らせいたします。</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">休業期間</h3>
            <p class="text-lg font-bold text-blue-600">2024年12月28日（土）～ 2025年1月5日（日）</p>
          </div>
          
          <p>上記期間中はお電話でのお問い合わせ、メールでのご返答ができませんので、予めご了承ください。</p>
          
          <p>なお、<strong>1月6日（月）</strong>より通常業務を開始いたします。</p>
          
          <p>本年中は格別のご愛顧を賜り、誠にありがとうございました。</p>
          <p>来年も変わらぬご支援のほど、よろしくお願い申し上げます。</p>
        </div>
      `,
      ko: "연말연시 휴업 안내 내용",
      en: "Year-end holiday notice content",
      zh: "年末年初休业通知内容"
    },
    category: "announcement",
    published: true,
    publishedAt: "2024-11-11",
    createdAt: "2024-11-11"
  },
  {
    id: 5,
    title: {
      jp: "夏期休業のお知らせ（2024年）",
      ko: "하계 휴업 안내 (2024년)",
      en: "Summer Holiday Notice (2024)",
      zh: "夏季休业通知 (2024年)"
    },
    excerpt: {
      jp: "2024年夏期休業期間についてお知らせいたします。",
      ko: "2024년 하계 휴업 기간에 대해 안내드립니다.",
      en: "Notice regarding our summer holiday schedule for 2024.",
      zh: "关于2024年夏季休业期间的通知。"
    },
    content: {
      jp: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">夏期休業のお知らせ</h2>
          
          <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
          
          <p>弊社の夏期休業につきまして、下記のとおりお知らせいたします。</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">休業期間</h3>
            <p class="text-lg font-bold text-blue-600">2024年8月10日（土）～ 2024年8月18日（日）</p>
          </div>
          
          <p>上記期間中はお電話でのお問い合わせ、メールでのご返答ができませんので、予めご了承ください。</p>
          
          <p>なお、<strong>8月19日（月）</strong>より通常業務を開始いたします。</p>
          
          <p>ご不便をおかけいたしますが、何卒ご理解のほど、よろしくお願い申し上げます。</p>
        </div>
      `,
      ko: "하계 휴업 안내 내용",
      en: "Summer holiday notice content",
      zh: "夏季休业通知内容"
    },
    category: "announcement",
    published: true,
    publishedAt: "2024-07-16",
    createdAt: "2024-07-16"
  },
  {
    id: 6,
    title: {
      jp: "第39回JSCRS学術総会 イブニングセミナー開催のお知らせ",
      ko: "제39회 JSCRS 학술총회 이브닝 세미나 개최 안내",
      en: "39th JSCRS Annual Meeting Evening Seminar Notice",
      zh: "第39届JSCRS学术大会晚间研讨会举办通知"
    },
    excerpt: {
      jp: "第40回日本白内障屈折矯正手術学会学術総会でのランチョンセミナー開催についてお知らせいたします。",
      ko: "제40회 일본백내장굴절교정수술학회 학술총회에서의 런천 세미나 개최에 대해 안내드립니다.",
      en: "Notice regarding luncheon seminar at the 40th Annual Meeting of the Japan Society of Cataract & Refractive Surgery.",
      zh: "关于在第40届日本白内障屈光矫正手术学会学术大会举办午餐研讨会的通知。"
    },
    content: {
      jp: `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">第40回JSCRS学術総会 ランチョンセミナー開催のお知らせ</h2>
          
          <p>この度、第40回日本白内障屈折矯正手術学会学術総会におきまして、弊社主催のランチョンセミナーを開催させていただくことになりました。</p>
          
          <div class="bg-green-50 border-l-4 border-green-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">開催概要</h3>
            <ul class="space-y-2">
              <li><strong>日時：</strong>2025年6月14日（土）12:00～13:00</li>
              <li><strong>会場：</strong>パシフィコ横浜</li>
              <li><strong>テーマ：</strong>オルソケラトロジーの最新動向と臨床応用</li>
              <li><strong>演者：</strong>慶應義塾大学医学部眼科学教室 教授</li>
            </ul>
          </div>
          
          <p>最新のオルソケラトロジー技術について詳しくご紹介いたします。</p>
          <p>多くの皆様のご参加をお待ちしております。</p>
          
          <div class="bg-slate-100 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">お問い合わせ</h3>
            <p>株式会社テクノピア メディカル事業部<br>
            TEL: 03-5577-2266</p>
          </div>
        </div>
      `,
      ko: "JSCRS 학술총회 세미나 내용",
      en: "JSCRS meeting seminar content",
      zh: "JSCRS学术大会研讨会内容"
    },
    category: "medical",
    published: true,
    publishedAt: "2025-05-26",
    createdAt: "2025-05-26",
    featured: true
  },
  {
    id: 7,
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
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">第17回 日中韓ジョイントミーティングのご案内</h2>
          
          <p>第17回日中韓ジョイントミーティングに弊社が参加いたします。</p>
          
          <div class="bg-green-50 border-l-4 border-green-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">開催概要</h3>
            <ul class="space-y-2">
              <li><strong>日時：</strong>2024年11月15日（金）～17日（日）</li>
              <li><strong>会場：</strong>ソウル国際会議場（韓国）</li>
              <li><strong>テーマ：</strong>アジア地域における眼科医療の発展</li>
            </ul>
          </div>
          
          <p>弊社ブースでは最新のオルソケラトロジーレンズ「マイエメラルド」をご紹介いたします。</p>
          <p>多くの先生方のお越しをお待ちしております。</p>
          
          <div class="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">展示内容</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>オルソケラトロジーレンズ マイエメラルド</li>
              <li>アクアセル 涙液補充療法</li>
              <li>各種検査機器</li>
            </ul>
          </div>
        </div>
      `,
      ko: "한중일 조인트 미팅 내용",
      en: "Japan-China-Korea joint meeting content",
      zh: "日中韩联合会议内容"
    },
    category: "medical",
    published: true,
    publishedAt: "2024-11-06",
    createdAt: "2024-11-06"
  },
  {
    id: 8,
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
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900">第39回JSCRS学術総会 イブニングセミナー開催のお知らせ</h2>
          
          <p>第39回日本白内障屈折矯正手術学会学術総会におきまして、弊社主催のイブニングセミナーを開催いたします。</p>
          
          <div class="bg-green-50 border-l-4 border-green-400 p-4 my-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">開催概要</h3>
            <ul class="space-y-2">
              <li><strong>日時：</strong>2024年6月15日（土）18:00～19:00</li>
              <li><strong>会場：</strong>京都国際会館</li>
              <li><strong>テーマ：</strong>近視進行抑制における新たなアプローチ</li>
              <li><strong>座長：</strong>京都府立医科大学眼科学教室 教授</li>
            </ul>
          </div>
          
          <p>近視進行抑制の最新研究について討議いたします。</p>
          <p>軽食をご用意してお待ちしております。</p>
          
          <div class="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">プログラム</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>18:00-18:30 オルソケラトロジーによる近視進行抑制効果</li>
              <li>18:30-19:00 症例検討とディスカッション</li>
            </ul>
          </div>
        </div>
      `,
      ko: "JSCRS 이브닝 세미나 내용",
      en: "JSCRS evening seminar content",
      zh: "JSCRS晚间研讨会内容"
    },
    category: "medical",
    published: true,
    publishedAt: "2024-06-14",
    createdAt: "2024-06-14"
  }
];

export const newsCategories = [
  { key: 'all', label: { jp: 'すべて', ko: '전체', en: 'All', zh: '全部' }},
  { key: 'announcement', label: { jp: 'お知らせ', ko: '공지사항', en: 'Announcements', zh: '公告' }},
  { key: 'medical', label: { jp: '医療関係者向け', ko: '의료진 대상', en: 'Medical Professionals', zh: '医疗专业人员' }},
];