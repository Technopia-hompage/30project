import { db } from '../server/db.ts';
import { newsArticles } from '../shared/schema.ts';

async function addTechnopiaNews() {
  try {
    // 하계 휴가 공지사항
    const summerHolidayNews = await db.insert(newsArticles).values({
      title: {
        jp: "夏期休業のお知らせ",
        ko: "하계 휴가 안내", 
        en: "Summer Holiday Notice",
        zh: "暑假休息通知"
      },
      content: {
        jp: "平素は格別のお引き立てを賜り、厚く御礼申上げます。\n\n弊社では誠に勝手ながら、下記期間を夏期休業とさせていただきます。\n\n【夏期休業期間】\n2025年8月13日(水)～2025年8月15日(金)\n\n※8月16日(土)より通常営業いたします。\n\n期間中は何かとご不便をお掛けいたしますが、何卒ご理解の程よろしくお願い申し上げます。",
        ko: "평소 각별한 관심을 가져주셔서 깊이 감사드립니다.\n\n저희 회사에서는 아래 기간을 하계 휴가로 정하여 운영을 중단합니다.\n\n【하계 휴가 기간】\n2025년 8월 13일(수) ~ 2025년 8월 15일(금)\n\n※8월 16일(토)부터 정상 영업합니다.\n\n기간 중 불편을 끼쳐드려 죄송하며, 양해해 주시기 바랍니다.",
        en: "We sincerely thank you for your continued support.\n\nWe will be closed for summer holidays during the following period:\n\n【Summer Holiday Period】\nAugust 13, 2025 (Wed) - August 15, 2025 (Fri)\n\n※Normal business will resume from August 16, 2025 (Sat).\n\nWe apologize for any inconvenience during this period and appreciate your understanding.",
        zh: "感谢您一直以来的大力支持。\n\n我公司将在以下期间进行暑假休息：\n\n【暑假休息期间】\n2025年8月13日(周三) - 2025年8月15日(周五)\n\n※8月16日(周六)开始正常营业。\n\n期间内给您带来不便，敬请谅解。"
      },
      excerpt: {
        jp: "2025年8月13日～15日の期間、夏期休業とさせていただきます。",
        ko: "2025년 8월 13일~15일 기간 동안 하계 휴가로 운영을 중단합니다.",
        en: "We will be closed for summer holidays from August 13-15, 2025.",
        zh: "2025年8月13日至15日期间暑假休息。"
      },
      category: 'announcement',
      published: true,
      publishedAt: new Date('2025-07-11T00:00:00Z'),
      createdAt: new Date('2025-07-11T00:00:00Z'),
      updatedAt: new Date('2025-07-11T00:00:00Z')
    }).returning();

    // JSCRS 학술총회 공지사항
    const jscrsNews = await db.insert(newsArticles).values({
      title: {
        jp: "第40回JSCRS学術総会 ランチョンセミナー開催のお知らせ",
        ko: "제40회 JSCRS 학술총회 런천 세미나 개최 안내",
        en: "40th JSCRS Academic Conference Luncheon Seminar Notice", 
        zh: "第40届JSCRS学术大会午餐研讨会举办通知"
      },
      content: {
        jp: "この度、第40回JSCRS学術総会において、ランチョンセミナーを開催いたします。\n\n【開催概要】\n日時：2025年6月14日(土) 12:00-13:00\n会場：パシフィコ横浜 ノース\n演題：「最新の眼内レンズ技術と臨床応用」\n座長：山田太郎 先生（○○大学眼科学教室）\n演者：田中花子 先生（△△病院眼科）\n\n多くの皆様のご参加をお待ちしております。",
        ko: "이번 제40회 JSCRS 학술총회에서 런천 세미나를 개최합니다.\n\n【개최 개요】\n일시: 2025년 6월 14일(토) 12:00-13:00\n장소: 퍼시피코 요코하마 노스\n연제: \"최신 안내렌즈 기술과 임상 응용\"\n좌장: 야마다 타로 선생님(○○대학 안과학교실)\n연자: 타나카 하나코 선생님(△△병원 안과)\n\n많은 분들의 참가를 기다리고 있습니다.",
        en: "We will be holding a luncheon seminar at the 40th JSCRS Academic Conference.\n\n【Event Overview】\nDate: June 14, 2025 (Sat) 12:00-13:00\nVenue: Pacifico Yokohama North\nTitle: \"Latest Intraocular Lens Technology and Clinical Applications\"\nChairperson: Dr. Taro Yamada (Department of Ophthalmology, ○○ University)\nSpeaker: Dr. Hanako Tanaka (Department of Ophthalmology, △△ Hospital)\n\nWe look forward to your participation.",
        zh: "我们将在第40届JSCRS学术大会上举办午餐研讨会。\n\n【举办概要】\n日期：2025年6月14日(周六) 12:00-13:00\n地点：横浜太平洋会展中心北馆\n题目：\"最新人工晶状体技术与临床应用\"\n主席：山田太郎 医师（○○大学眼科学教室）\n演讲者：田中花子 医师（△△医院眼科）\n\n期待大家的参与。"
      },
      excerpt: {
        jp: "第40回JSCRS学術総会でランチョンセミナーを開催いたします。",
        ko: "제40회 JSCRS 학술총회에서 런천 세미나를 개최합니다.",
        en: "Luncheon seminar to be held at the 40th JSCRS Academic Conference.",
        zh: "将在第40届JSCRS学术大会上举办午餐研讨会。"
      },
      category: 'announcement',
      published: true,
      publishedAt: new Date('2025-05-26T00:00:00Z'),
      createdAt: new Date('2025-05-26T00:00:00Z'),
      updatedAt: new Date('2025-05-26T00:00:00Z')
    }).returning();

    console.log('✅ Successfully added Technopia news articles:');
    console.log('1. Summer Holiday Notice (2025-07-11)');
    console.log('2. 40th JSCRS Academic Conference Luncheon Seminar (2025-05-26)');
    
    return { summerHolidayNews, jscrsNews };
  } catch (error) {
    console.error('❌ Error adding news articles:', error);
    throw error;
  }
}

// Execute the function
addTechnopiaNews()
  .then(() => {
    console.log('🎉 News articles added successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Failed to add news articles:', error);
    process.exit(1);
  });