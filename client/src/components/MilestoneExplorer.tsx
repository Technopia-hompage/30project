import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Trophy, 
  Star, 
  Zap, 
  Target, 
  Award, 
  Rocket,
  Building,
  Users,
  Globe,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Lock,
  Play,
  ArrowRight
} from "lucide-react";

interface Milestone {
  id: number;
  year: number;
  title: {
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
  icon: any;
  category: 'foundation' | 'expansion' | 'innovation' | 'global' | 'achievement';
  points: number;
  unlocked: boolean;
  difficulty: 'easy' | 'medium' | 'hard' | 'legendary';
}

const milestones: Milestone[] = [
  {
    id: 1,
    year: 1994,
    title: {
      jp: "テクノピア創立",
      ko: "테크노피아 창립",
      en: "Technopia Founded",
      zh: "Technopia成立"
    },
    description: {
      jp: "革新的なテクノロジーソリューションの提供を目指して設立",
      ko: "혁신적인 기술 솔루션 제공을 목표로 설립",
      en: "Founded with the goal of providing innovative technology solutions",
      zh: "以提供创新技术解决方案为目标成立"
    },
    icon: Rocket,
    category: 'foundation',
    points: 100,
    unlocked: true,
    difficulty: 'easy'
  },
  {
    id: 2,
    year: 1998,
    title: {
      jp: "初の海外展開",
      ko: "첫 해외 진출",
      en: "First International Expansion",
      zh: "首次海外扩张"
    },
    description: {
      jp: "アジア市場への進出を開始",
      ko: "아시아 시장 진출 시작",
      en: "Started expansion into Asian markets",
      zh: "开始进军亚洲市场"
    },
    icon: Globe,
    category: 'expansion',
    points: 150,
    unlocked: true,
    difficulty: 'medium'
  },
  {
    id: 3,
    year: 2002,
    title: {
      jp: "革新的プロダクト発表",
      ko: "혁신적 제품 발표",
      en: "Innovative Product Launch",
      zh: "创新产品发布"
    },
    description: {
      jp: "業界を変革する画期的な製品をリリース",
      ko: "업계를 변혁하는 획기적인 제품 출시",
      en: "Released groundbreaking products that transformed the industry",
      zh: "发布了改变行业的突破性产品"
    },
    icon: Lightbulb,
    category: 'innovation',
    points: 200,
    unlocked: true,
    difficulty: 'medium'
  },
  {
    id: 4,
    year: 2008,
    title: {
      jp: "グローバル企業認定",
      ko: "글로벌 기업 인증",
      en: "Global Enterprise Certification",
      zh: "全球企业认证"
    },
    description: {
      jp: "国際的な品質基準をクリアし、グローバル企業として認定",
      ko: "국제 품질 기준을 통과하여 글로벌 기업으로 인증",
      en: "Certified as global enterprise after meeting international quality standards",
      zh: "通过国际质量标准，被认证为全球企业"
    },
    icon: Award,
    category: 'achievement',
    points: 250,
    unlocked: true,
    difficulty: 'hard'
  },
  {
    id: 5,
    year: 2015,
    title: {
      jp: "AI技術統合",
      ko: "AI 기술 통합",
      en: "AI Technology Integration",
      zh: "AI技术集成"
    },
    description: {
      jp: "最先端のAI技術をサービスに統合し、業界をリード",
      ko: "최첨단 AI 기술을 서비스에 통합하여 업계를 선도",
      en: "Integrated cutting-edge AI technology into services, leading the industry",
      zh: "将尖端AI技术整合到服务中，引领行业"
    },
    icon: Zap,
    category: 'innovation',
    points: 300,
    unlocked: true,
    difficulty: 'hard'
  },
  {
    id: 6,
    year: 2020,
    title: {
      jp: "デジタル変革達成",
      ko: "디지털 변혁 달성",
      en: "Digital Transformation Achievement",
      zh: "数字化转型成就"
    },
    description: {
      jp: "完全なデジタル変革を実現し、新時代のビジネスモデルを確立",
      ko: "완전한 디지털 변혁을 실현하고 새로운 시대의 비즈니스 모델 확립",
      en: "Achieved complete digital transformation and established new era business model",
      zh: "实现完全数字化转型，建立新时代商业模式"
    },
    icon: TrendingUp,
    category: 'innovation',
    points: 350,
    unlocked: true,
    difficulty: 'legendary'
  },
  {
    id: 7,
    year: 2024,
    title: {
      jp: "創業30周年",
      ko: "창립 30주년",
      en: "30th Anniversary",
      zh: "成立30周年"
    },
    description: {
      jp: "30年間の歩みを振り返り、次の30年に向けた新たなビジョンを発表",
      ko: "30년간의 발걸음을 돌아보고, 다음 30년을 향한 새로운 비전 발표",
      en: "Reflecting on 30 years of progress and announcing new vision for the next 30 years",
      zh: "回顾30年历程，发布未来30年新愿景"
    },
    icon: Trophy,
    category: 'achievement',
    points: 500,
    unlocked: true,
    difficulty: 'legendary'
  }
];

export function MilestoneExplorer() {
  const { language } = useLanguage();
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [userLevel, setUserLevel] = useState(1);
  const [exploredMilestones, setExploredMilestones] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const points = exploredMilestones.reduce((sum, id) => {
      const milestone = milestones.find(m => m.id === id);
      return sum + (milestone?.points || 0);
    }, 0);
    setTotalPoints(points);
    setUserLevel(Math.floor(points / 200) + 1);
  }, [exploredMilestones]);

  const exploreMilestone = (milestone: Milestone) => {
    if (!exploredMilestones.includes(milestone.id)) {
      setExploredMilestones([...exploredMilestones, milestone.id]);
    }
    setSelectedMilestone(milestone);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      case 'legendary': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'foundation': return Building;
      case 'expansion': return Globe;
      case 'innovation': return Lightbulb;
      case 'global': return TrendingUp;
      case 'achievement': return Trophy;
      default: return Star;
    }
  };

  const progressPercentage = (totalPoints / 1850) * 100; // Max possible points

  if (!isPlaying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <Card className="max-w-2xl mx-auto text-center p-8">
          <CardContent className="space-y-6">
            <div className="w-20 h-20 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="text-white h-10 w-10" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'マイルストーン・エクスプローラー'}
              {language === 'ko' && '마일스톤 익스플로러'}
              {language === 'en' && 'Milestone Explorer'}
              {language === 'zh' && '里程碑探索器'}
            </h1>
            <p className="text-slate-600 mb-8">
              {language === 'jp' && 'テクノピアの30年間の歩みをゲーム形式で探索しよう！各マイルストーンを発見してポイントを獲得し、レベルアップを目指そう。'}
              {language === 'ko' && '테크노피아의 30년 여정을 게임 형식으로 탐험해보세요! 각 마일스톤을 발견하여 포인트를 획득하고 레벨업을 노려보세요.'}
              {language === 'en' && 'Explore Technopia\'s 30-year journey in game format! Discover each milestone to earn points and level up.'}
              {language === 'zh' && '以游戏形式探索Technopia的30年历程！发现每个里程碑来获得积分并升级。'}
            </p>
            <Button 
              onClick={() => setIsPlaying(true)}
              className="bg-corporate-blue hover:bg-blue-700 px-8 py-3 text-lg"
            >
              {language === 'jp' && '探索を開始'}
              {language === 'ko' && '탐험 시작'}
              {language === 'en' && 'Start Exploring'}
              {language === 'zh' && '开始探索'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Progress */}
        <div className="mb-8">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">
                  {language === 'jp' && 'マイルストーン・エクスプローラー'}
                  {language === 'ko' && '마일스톤 익스플로러'}
                  {language === 'en' && 'Milestone Explorer'}
                  {language === 'zh' && '里程碑探索器'}
                </h1>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {language === 'jp' && `レベル ${userLevel}`}
                    {language === 'ko' && `레벨 ${userLevel}`}
                    {language === 'en' && `Level ${userLevel}`}
                    {language === 'zh' && `等级 ${userLevel}`}
                  </Badge>
                  <Badge variant="secondary">
                    {totalPoints} {language === 'jp' ? 'ポイント' : language === 'ko' ? '포인트' : language === 'en' ? 'Points' : '积分'}
                  </Badge>
                  <Badge variant="secondary">
                    {exploredMilestones.length}/{milestones.length} {language === 'jp' ? '探索済み' : language === 'ko' ? '탐험 완료' : language === 'en' ? 'Explored' : '已探索'}
                  </Badge>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>
                  {language === 'jp' && '探索進捗'}
                  {language === 'ko' && '탐험 진행률'}
                  {language === 'en' && 'Exploration Progress'}
                  {language === 'zh' && '探索进度'}
                </span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="grid gap-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-corporate-blue to-purple-500 hidden md:block"></div>
            
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const CategoryIcon = getCategoryIcon(milestone.category);
              const isExplored = exploredMilestones.includes(milestone.id);
              
              return (
                <div key={milestone.id} className="relative flex items-start gap-6 mb-8">
                  {/* Timeline Node */}
                  <div className="hidden md:flex w-16 h-16 bg-white rounded-full border-4 border-corporate-blue flex-shrink-0 items-center justify-center relative z-10">
                    <Icon className={`h-8 w-8 ${isExplored ? 'text-corporate-blue' : 'text-slate-400'}`} />
                  </div>
                  
                  {/* Milestone Card */}
                  <Card 
                    className={`flex-1 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedMilestone?.id === milestone.id ? 'ring-2 ring-corporate-blue shadow-xl' : ''
                    } ${isExplored ? 'bg-blue-50' : ''}`}
                    onClick={() => exploreMilestone(milestone)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {milestone.year}
                            </Badge>
                            <Badge className={`text-xs ${getDifficultyColor(milestone.difficulty)} text-white`}>
                              {milestone.difficulty.toUpperCase()}
                            </Badge>
                            <CategoryIcon className="h-4 w-4 text-slate-500" />
                            {isExplored && <CheckCircle className="h-4 w-4 text-green-500" />}
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            {milestone.title[language]}
                          </h3>
                          <p className="text-slate-600 mb-4">
                            {milestone.description[language]}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-corporate-blue font-semibold">
                            <Star className="h-4 w-4" />
                            +{milestone.points}
                          </div>
                        </div>
                      </div>
                      
                      {selectedMilestone?.id === milestone.id && (
                        <div className="border-t pt-4 mt-4 animate-fade-in">
                          <div className="bg-slate-50 rounded-lg p-4">
                            <h4 className="font-semibold text-slate-900 mb-2">
                              {language === 'jp' && '詳細情報'}
                              {language === 'ko' && '상세 정보'}
                              {language === 'en' && 'Detailed Information'}
                              {language === 'zh' && '详细信息'}
                            </h4>
                            <p className="text-slate-600 text-sm mb-3">
                              {milestone.description[language]}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="text-xs">
                                {language === 'jp' && `カテゴリ: ${milestone.category}`}
                                {language === 'ko' && `카테고리: ${milestone.category}`}
                                {language === 'en' && `Category: ${milestone.category}`}
                                {language === 'zh' && `类别: ${milestone.category}`}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {language === 'jp' && `難易度: ${milestone.difficulty}`}
                                {language === 'ko' && `난이도: ${milestone.difficulty}`}
                                {language === 'en' && `Difficulty: ${milestone.difficulty}`}
                                {language === 'zh' && `难度: ${milestone.difficulty}`}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Summary */}
        {exploredMilestones.length === milestones.length && (
          <Card className="mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300">
            <CardContent className="p-8 text-center">
              <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-yellow-800 mb-2">
                {language === 'jp' && 'おめでとうございます！'}
                {language === 'ko' && '축하합니다!'}
                {language === 'en' && 'Congratulations!'}
                {language === 'zh' && '恭喜您！'}
              </h2>
              <p className="text-yellow-700">
                {language === 'jp' && 'すべてのマイルストーンを探索しました！テクノピアの30年間の歩みを完全に体験できました。'}
                {language === 'ko' && '모든 마일스톤을 탐험했습니다! 테크노피아의 30년 여정을 완전히 체험하셨습니다.'}
                {language === 'en' && 'You have explored all milestones! You have completely experienced Technopia\'s 30-year journey.'}
                {language === 'zh' && '您已经探索了所有里程碑！您已经完全体验了Technopia的30年历程。'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}