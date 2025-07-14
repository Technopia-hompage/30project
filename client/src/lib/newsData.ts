// Static news data based on Technopia's recruitment requirements
export const newsData = [
  {
    id: 1,
    title: {
      jp: "応募者に求める志向性・人物像",
      ko: "지원자에게 요구하는 지향성 및 인물상",
      en: "Required Qualities and Characteristics for Applicants",
      zh: "对应聘者要求的素质和品格"
    },
    excerpt: {
      jp: "ポジティブな思考、新たな価値を創造したいという意欲、これを実現する様々な能力が集まった結果だと思います。",
      ko: "긍정적인 사고, 새로운 가치를 창조하고자 하는 의욕, 이를 실현하는 다양한 능력이 모인 결과라고 생각합니다.",
      en: "We believe it's the result of combining positive thinking, the desire to create new value, and various abilities to realize this.",
      zh: "我们认为这是积极思维、创造新价值的意愿以及实现这一目标的各种能力相结合的结果。"
    },
    content: {
      jp: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-slate-900">応募者に求める志向性・人物像</h2>
          
          <p class="text-lg text-slate-700 leading-relaxed">
            ポジティブな思考、新たな価値を創造したいという意欲、これを実現する様々な能力が集まった結果だと思います。
            このような能力を備えた方々と共に弊社は新たな価値を創造し、お客様を支える企業を目指し成長して
            いきたいと考えております。
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-blue-600 font-bold">1</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">自発的な行動力</h3>
              </div>
              <p class="text-slate-700">情報を収集分析してビジネスを構築するための能力</p>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-purple-600 font-bold">2</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">論理的思考能力</h3>
              </div>
              <p class="text-slate-700">物事のストーリーを整理して分析し説明するための能力</p>
            </div>
            
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-green-600 font-bold">3</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">リーダーシップ</h3>
              </div>
              <p class="text-slate-700">関係者のやる気を引き出し、チームをまとめあげる能力</p>
            </div>
            
            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-orange-600 font-bold">4</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">コミュニケーション能力</h3>
              </div>
              <p class="text-slate-700">相手の伝えたいことを理解し、こちらの伝えたいことを確実に相手に理解させる能力</p>
            </div>
          </div>
          
          <div class="bg-slate-100 p-6 rounded-lg mt-6">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">採用に関するお問い合わせ</h3>
            <p class="text-slate-700">
              <strong>Email:</strong> hk.lee@technopia.co.jp<br>
              <strong>TEL:</strong> 03-3221-4862<br>
              <strong>FAX:</strong> 03-3221-4764
            </p>
          </div>
        </div>
      `,
      ko: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-slate-900">지원자에게 요구하는 지향성 및 인물상</h2>
          
          <p class="text-lg text-slate-700 leading-relaxed">
            긍정적인 사고, 새로운 가치를 창조하고자 하는 의욕, 이를 실현하는 다양한 능력이 모인 결과라고 생각합니다.
            이러한 능력을 갖춘 분들과 함께 저희 회사는 새로운 가치를 창조하고, 고객을 지원하는 기업을 목표로 성장해
            나가고자 합니다.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-blue-600 font-bold">1</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">자발적인 행동력</h3>
              </div>
              <p class="text-slate-700">정보를 수집 분석하여 비즈니스를 구축하는 능력</p>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-purple-600 font-bold">2</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">논리적 사고능력</h3>
              </div>
              <p class="text-slate-700">사물의 스토리를 정리하여 분석하고 설명하는 능력</p>
            </div>
            
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-green-600 font-bold">3</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">리더십</h3>
              </div>
              <p class="text-slate-700">관계자들의 의욕을 이끌어내고, 팀을 통합하는 능력</p>
            </div>
            
            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-orange-600 font-bold">4</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">커뮤니케이션 능력</h3>
              </div>
              <p class="text-slate-700">상대방이 전하고자 하는 것을 이해하고, 우리가 전하고자 하는 것을 확실히 상대방에게 이해시키는 능력</p>
            </div>
          </div>
          
          <div class="bg-slate-100 p-6 rounded-lg mt-6">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">채용 관련 문의</h3>
            <p class="text-slate-700">
              <strong>Email:</strong> hk.lee@technopia.co.jp<br>
              <strong>TEL:</strong> 03-3221-4862<br>
              <strong>FAX:</strong> 03-3221-4764
            </p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-slate-900">Required Qualities and Characteristics for Applicants</h2>
          
          <p class="text-lg text-slate-700 leading-relaxed">
            We believe it's the result of combining positive thinking, the desire to create new value, and various abilities to realize this.
            Together with individuals who possess such capabilities, our company aims to create new value and grow as an enterprise that supports our customers.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-blue-600 font-bold">1</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">Proactive Action</h3>
              </div>
              <p class="text-slate-700">Ability to gather and analyze information to build business</p>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-purple-600 font-bold">2</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">Logical Thinking</h3>
              </div>
              <p class="text-slate-700">Ability to organize, analyze, and explain the story of things</p>
            </div>
            
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-green-600 font-bold">3</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">Leadership</h3>
              </div>
              <p class="text-slate-700">Ability to motivate stakeholders and bring teams together</p>
            </div>
            
            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-orange-600 font-bold">4</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">Communication Skills</h3>
              </div>
              <p class="text-slate-700">Ability to understand what others want to convey and ensure that what we want to communicate is clearly understood</p>
            </div>
          </div>
          
          <div class="bg-slate-100 p-6 rounded-lg mt-6">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">Recruitment Inquiries</h3>
            <p class="text-slate-700">
              <strong>Email:</strong> hk.lee@technopia.co.jp<br>
              <strong>TEL:</strong> 03-3221-4862<br>
              <strong>FAX:</strong> 03-3221-4764
            </p>
          </div>
        </div>
      `,
      zh: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-slate-900">对应聘者要求的素质和品格</h2>
          
          <p class="text-lg text-slate-700 leading-relaxed">
            我们认为这是积极思维、创造新价值的意愿以及实现这一目标的各种能力相结合的结果。
            我们希望与具备这些能力的人才一起，创造新的价值，成长为支持客户的企业。
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-blue-600 font-bold">1</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">主动行动力</h3>
              </div>
              <p class="text-slate-700">收集分析信息以构建业务的能力</p>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-purple-600 font-bold">2</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">逻辑思维能力</h3>
              </div>
              <p class="text-slate-700">整理事物故事并进行分析说明的能力</p>
            </div>
            
            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-green-600 font-bold">3</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">领导力</h3>
              </div>
              <p class="text-slate-700">激发相关人员积极性，团结团队的能力</p>
            </div>
            
            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <div class="flex items-center mb-4">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-orange-600 font-bold">4</span>
                </div>
                <h3 class="text-xl font-semibold text-slate-900">沟通能力</h3>
              </div>
              <p class="text-slate-700">理解对方想要传达的内容，并确保对方理解我们想要传达内容的能力</p>
            </div>
          </div>
          
          <div class="bg-slate-100 p-6 rounded-lg mt-6">
            <h3 class="text-lg font-semibold text-slate-900 mb-3">招聘咨询</h3>
            <p class="text-slate-700">
              <strong>Email:</strong> hk.lee@technopia.co.jp<br>
              <strong>TEL:</strong> 03-3221-4862<br>
              <strong>FAX:</strong> 03-3221-4764
            </p>
          </div>
        </div>
      `
    },
    category: "recruitment",
    published: true,
    publishedAt: "2025-07-14",
    createdAt: "2025-07-14",
    featured: true
  }
];

export const newsCategories = [
  {
    value: "all",
    label: {
      jp: "すべて",
      ko: "전체",
      en: "All",
      zh: "全部"
    }
  },
  {
    value: "recruitment",
    label: {
      jp: "採用情報",
      ko: "채용정보",
      en: "Recruitment",
      zh: "招聘信息"
    }
  },
  {
    value: "announcement", 
    label: {
      jp: "お知らせ",
      ko: "공지사항",
      en: "Announcements",
      zh: "公告"
    }
  },
  {
    value: "medical",
    label: {
      jp: "医療情報",
      ko: "의료정보", 
      en: "Medical",
      zh: "医疗信息"
    }
  }
];