export type Language = 'jp' | 'ko' | 'en' | 'zh';

export interface TranslationContent {
  jp: string;
  ko: string;
  en: string;
  zh: string;
}

export const translations = {
  nav: {
    home: { jp: 'ホーム', ko: '홈', en: 'Home', zh: '首页' },
    about: { jp: '会社紹介', ko: '회사 소개', en: 'About Us', zh: '关于我们' },
    anniversary: { jp: '30周年', ko: '30주년', en: '30th Anniversary', zh: '30周年' },
    business: { jp: '事業紹介', ko: '사업 소개', en: 'Business', zh: '业务介绍' },
    careers: { jp: '採用情報', ko: '채용 정보', en: 'Careers', zh: '招聘信息' },
    contact: { jp: 'お問い合わせ', ko: '문의', en: 'Contact', zh: '联系我们' },

    news: { jp: 'ニュース', ko: '뉴스', en: 'News', zh: '新闻' },
    admin: { jp: '管理', ko: '관리', en: 'Admin', zh: '管理' }
  },
  hero: {
    badge: { jp: '創立30周年記念', ko: '30주년 기념', en: '30th Anniversary', zh: '30周年纪念' },
    title1: { jp: 'IMPOSSIBLEを', ko: 'IMPOSSIBLE을', en: 'Transforming IMPOSSIBLE', zh: '将不可能' },
    title2: { jp: 'I\'m POSSIBLEに変える企業', ko: 'I\'m POSSIBLE로 바꾸는 기업', en: 'to I\'m POSSIBLE', zh: '变为可能的企业' },
    subtitle: { jp: 'テクノピアはオルソケラトロジーレンズ「マイエメラルド」やアルミホイール、AI顔認証検温測定機「TOLLGATE」などを取り扱う企業です。', ko: '테크노피아는 오르토케라톨로지 렌즈 "마이에메랄드"와 알루미늄 휠, AI 안면인식 검온기 "TOLLGATE" 등을 취급하는 기업입니다.', en: 'Technopia handles orthokeratology lenses "My Emerald", aluminum wheels, and AI facial recognition thermometer "TOLLGATE".', zh: '技术乌托邦经营角膜塑形镜"My Emerald"、铝合金轮毂和AI人脸识别测温仪"TOLLGATE"等产品。' },
    ceoMessage: { jp: 'CEOメッセージを見る', ko: 'CEO 메시지 보기', en: 'View CEO Message', zh: '查看CEO信息' },
    learnMore: { jp: '会社紹介', ko: '회사 소개', en: 'Learn More', zh: '了解更多' }
  },
  company: {
    title: { jp: 'テクノピアについて', ko: '회사 소개', en: 'About Our Company', zh: '关于我们公司' },
    subtitle: { jp: '革新的な技術ソリューションで社会に貢献し、お客様と共に成長し続ける企業です。', ko: '글로벌하게 전개하는 우리의 기업 이념과 고객, 사회에 대한 약속을 소개합니다.', en: 'Introducing our global corporate philosophy and promises to customers and society.', zh: '介绍我们全球展开的企业理念以及对客户和社会的承诺。' },
    stats: {
      years: { jp: '年の歴史', ko: '년', en: 'Years', zh: '年' },
      employees: { jp: '従業員数', ko: '직원 수', en: 'Employees', zh: '员工数' },
      locations: { jp: '事業拠点', ko: '글로벌 거점', en: 'Global Locations', zh: '全球据点' },
      partners: { jp: 'パートナー企業', ko: '파트너 기업', en: 'Partner Companies', zh: '合作伙伴企业' }
    },
    mission: {
      title: { jp: 'ミッション', ko: '미션', en: 'Mission', zh: '使命' },
      content: { jp: '最先端の技術ソリューションを通じて、お客様のビジネス成功を支援し、社会の持続的発展に貢献します。', ko: '기술 혁신과 서비스 향상을 통해 고객의 성공과 사회 발전에 기여하고 지속 가능한 미래를 창조합니다.', en: 'Through technological innovation and service improvement, we contribute to customer success and social development, creating a sustainable future.', zh: '通过技术创新和服务改进，为客户成功和社会发展做出贡献，创造可持续的未来。' }
    },
    vision: {
      title: { jp: 'ビジョン', ko: '비전', en: 'Vision', zh: '愿景' },
      content: { jp: '技術革新のリーディングカンパニーとして、世界中のお客様に信頼される企業になります。', ko: '글로벌 리더로서 업계 변혁을 이끌고 모든 이해관계자로부터 신뢰받는 기업을 목표로 합니다.', en: 'As a global leader, we aim to drive industry transformation and become a company trusted by all stakeholders.', zh: '作为全球领导者，我们致力于推动行业变革，成为所有利益相关者信赖的企业。' }
    },
    values: {
      title: { jp: '価値観', ko: '핵심 가치', en: 'Core Values', zh: '核心价值' },
      content: { jp: '誠実、革新、品質、お客様第一の精神で、長期的なパートナーシップを築きます。', ko: '성실성, 혁신성, 협력성을 축으로 고객 우선의 정신으로 고품질 솔루션을 제공합니다.', en: 'Based on integrity, innovation, and collaboration, we provide high-quality solutions with a customer-first mindset.', zh: '以诚信、创新、协作为核心，以客户至上的精神提供高质量的解决方案。' }
    }
  },
  values: {
    title: { jp: '企業理念', ko: '기업 이념', en: 'Our Philosophy', zh: '企业理念' },
    subtitle: { jp: 'テクノピアの使命、ビジョン、価値観をご紹介します', ko: '테크노피아의 사명, 비전, 가치관을 소개합니다', en: 'Introducing Technopia\'s mission, vision, and values', zh: '介绍Technopia的使命、愿景和价值观' },
    mission: {
      title: { jp: 'ミッション', ko: '미션', en: 'Mission', zh: '使命' },
      description: { jp: '最先端の技術ソリューションを通じて、お客様のビジネス成功を支援し、社会の持続的発展に貢献します。', ko: '최첨단 기술 솔루션을 통해 고객의 비즈니스 성공을 지원하고, 사회의 지속적 발전에 기여합니다.', en: 'Through cutting-edge technology solutions, we support our customers\' business success and contribute to sustainable social development.', zh: '通过尖端技术解决方案，支持客户的业务成功，为社会的可持续发展做出贡献。' }
    },
    vision: {
      title: { jp: 'ビジョン', ko: '비전', en: 'Vision', zh: '愿景' },
      description: { jp: '技術革新のリーディングカンパニーとして、世界中のお客様に信頼される企業になります。', ko: '기술 혁신의 선도 기업으로서, 전 세계 고객에게 신뢰받는 기업이 됩니다.', en: 'As a leading company in technological innovation, we aim to become a company trusted by customers worldwide.', zh: '作为技术创新的领先企业，我们致力于成为全世界客户信赖的企业。' }
    },
    values: {
      title: { jp: '価値観', ko: '가치관', en: 'Values', zh: '价值观' },
      description: { jp: '誠実、革新、品質、お客様第一の精神で、長期的なパートナーシップを築きます。', ko: '성실, 혁신, 품질, 고객 우선의 정신으로 장기적인 파트너십을 구축합니다.', en: 'We build long-term partnerships with integrity, innovation, quality, and a customer-first spirit.', zh: '以诚信、创新、质量、客户至上的精神构建长期合作伙伴关系。' }
    }
  },
  cta: {
    title: { jp: 'テクノピアと共に未来を創造しませんか', ko: '테크노피아와 함께 미래를 창조하지 않으시겠습니까', en: 'Create the Future with Technopia', zh: '与Technopia一起创造未来' },
    subtitle: { jp: 'お客様のビジネス成功をサポートするパートナーとして、共に成長していきましょう。', ko: '고객의 비즈니스 성공을 지원하는 파트너로서, 함께 성장해 나갑시다.', en: 'Let\'s grow together as a partner supporting your business success.', zh: '作为支持您业务成功的合作伙伴，让我们共同成长。' },
    careers: { jp: '採用情報', ko: '채용 정보', en: 'Careers', zh: '招聘信息' },
    contact: { jp: 'お問い合わせ', ko: '문의하기', en: 'Contact Us', zh: '联系我们' }
  },
  contact: {
    title: { jp: 'お問い合わせ', ko: '문의', en: 'Contact Us', zh: '联系我们' },
    subtitle: { jp: 'ご質問やご相談がございましたら、お気軽にお問い合わせください。', ko: '질문이나 상담이 있으시면 언제든지 문의해 주세요.', en: 'If you have any questions or consultations, please feel free to contact us.', zh: '如果您有任何问题或咨询，请随时联系我们。' },
    form: {
      name: { jp: 'お名前', ko: '이름', en: 'Name', zh: '姓名' },
      company: { jp: '会社名', ko: '회사명', en: 'Company', zh: '公司名' },
      email: { jp: 'メールアドレス', ko: '이메일 주소', en: 'Email Address', zh: '邮箱地址' },
      category: { jp: 'お問い合わせ種別', ko: '문의 종류', en: 'Inquiry Type', zh: '咨询类型' },
      message: { jp: 'メッセージ', ko: '메시지', en: 'Message', zh: '信息' },
      submit: { jp: '送信する', ko: '전송', en: 'Send Message', zh: '发送消息' }
    }
  }
};

export function getTranslation(key: string, language: Language): string {
  const keys = key.split('.');
  let current: any = translations;
  
  for (const k of keys) {
    current = current[k];
    if (!current) return key;
  }
  
  return current[language] || current.en || key;
}

export function getMultiLanguageContent(content: any, language: Language): string {
  if (typeof content === 'string') return content;
  if (typeof content === 'object' && content[language]) {
    return content[language];
  }
  return content?.en || '';
}
