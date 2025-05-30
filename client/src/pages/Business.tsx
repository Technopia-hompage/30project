import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { getMultiLanguageContent } from "@/lib/i18n";
import { BusinessDivision } from "@shared/schema";
import { 
  Cog, 
  Leaf, 
  Cpu, 
  Globe, 
  UserRoundCheck, 
  Handshake, 
  ArrowRight,
  Building,
  TrendingUp,
  Shield
} from "lucide-react";

const iconMap = {
  cog: Cog,
  leaf: Leaf,
  cpu: Cpu,
  globe: Globe,
  user: UserRoundCheck,
  handshake: Handshake,
  building: Building,
  trending: TrendingUp,
  shield: Shield,
};

export function Business() {
  const { language } = useLanguage();

  const { data: divisions, isLoading } = useQuery<BusinessDivision[]>({
    queryKey: ['/api/divisions', language],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="h-8 bg-slate-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-slate-200 rounded w-96 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-slate-200 rounded-xl mb-6"></div>
                    <div className="h-6 bg-slate-200 rounded mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded mb-6"></div>
                    <div className="h-8 bg-slate-200 rounded w-24"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'jp' && '事業部門・ブランド紹介'}
              {language === 'ko' && '사업 부문·브랜드 소개'}
              {language === 'en' && 'Business Divisions & Brands'}
              {language === 'zh' && '业务部门·品牌介绍'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '多様な事業領域で革新的なソリューションを提供し、お客様の成功をサポートしています。'}
              {language === 'ko' && '다양한 사업 영역에서 혁신적인 솔루션을 제공하며 고객의 성공을 지원하고 있습니다.'}
              {language === 'en' && 'We provide innovative solutions across diverse business areas to support our customers\' success.'}
              {language === 'zh' && '在多样化的业务领域提供创新解决方案，支持客户的成功。'}
            </p>
          </div>

          {/* Business Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">6+</div>
              <div className="text-slate-600">
                {language === 'jp' && '事業部門'}
                {language === 'ko' && '사업 부문'}
                {language === 'en' && 'Business Units'}
                {language === 'zh' && '业务部门'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">50+</div>
              <div className="text-slate-600">
                {language === 'jp' && '主要製品'}
                {language === 'ko' && '주요 제품'}
                {language === 'en' && 'Key Products'}
                {language === 'zh' && '主要产品'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">15</div>
              <div className="text-slate-600">
                {language === 'jp' && '対象市場'}
                {language === 'ko' && '대상 시장'}
                {language === 'en' && 'Target Markets'}
                {language === 'zh' && '目标市场'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">98%</div>
              <div className="text-slate-600">
                {language === 'jp' && '顧客満足度'}
                {language === 'ko' && '고객 만족도'}
                {language === 'en' && 'Customer Satisfaction'}
                {language === 'zh' && '客户满意度'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {divisions && divisions.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division) => {
                const IconComponent = iconMap[division.icon as keyof typeof iconMap] || Building;
                
                return (
                  <Card key={division.id} className="hover:shadow-xl transition-all duration-200 group">
                    <CardContent className="p-8">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: division.color }}
                      >
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {getMultiLanguageContent(division.name, language)}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-4">
                        {getMultiLanguageContent(division.description, language)}
                      </p>
                      <Button variant="ghost" className="text-corporate-blue hover:text-blue-700 p-0">
                        {language === 'jp' && '詳細を見る'}
                        {language === 'ko' && '자세히 보기'}
                        {language === 'en' && 'Learn More'}
                        {language === 'zh' && '了解更多'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      {division.featured && (
                        <Badge className="mt-4 bg-corporate-blue">
                          {language === 'jp' && '注目事業'}
                          {language === 'ko' && '주목 사업'}
                          {language === 'en' && 'Featured Business'}
                          {language === 'zh' && '重点业务'}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            // Default divisions when no data is available
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                    <Cog className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' && '製造・技術部門'}
                    {language === 'ko' && '제조·기술 부문'}
                    {language === 'en' && 'Manufacturing & Technology'}
                    {language === 'zh' && '制造·技术部门'}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {language === 'jp' && '最先端の製造技術と品質管理により、業界最高水準の製品を提供しています。'}
                    {language === 'ko' && '최첨단 제조 기술과 품질 관리로 업계 최고 수준의 제품을 제공하고 있습니다.'}
                    {language === 'en' && 'We provide industry-leading products through cutting-edge manufacturing technology and quality control.'}
                    {language === 'zh' && '通过尖端制造技术和质量控制，提供行业领先水平的产品。'}
                  </p>
                  <Button variant="ghost" className="text-corporate-blue hover:text-blue-700 p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-success-green rounded-xl flex items-center justify-center mb-6">
                    <Leaf className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' && '環境・エネルギー部門'}
                    {language === 'ko' && '환경·에너지 부문'}
                    {language === 'en' && 'Environmental & Energy'}
                    {language === 'zh' && '环境·能源部门'}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {language === 'jp' && '持続可能な社会の実現に向けて、環境に配慮したソリューションを開発しています。'}
                    {language === 'ko' && '지속 가능한 사회 실현을 위해 환경을 고려한 솔루션을 개발하고 있습니다.'}
                    {language === 'en' && 'We develop environmentally conscious solutions for the realization of a sustainable society.'}
                    {language === 'zh' && '为了实现可持续社会，开发环保解决方案。'}
                  </p>
                  <Button variant="ghost" className="text-corporate-blue hover:text-blue-700 p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <Cpu className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' && 'デジタル・IT部門'}
                    {language === 'ko' && '디지털·IT 부문'}
                    {language === 'en' && 'Digital & IT'}
                    {language === 'zh' && '数字·IT部门'}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {language === 'jp' && 'デジタル変革をリードし、AI・IoTを活用した革新的なサービスを展開しています。'}
                    {language === 'ko' && '디지털 변혁을 주도하며 AI·IoT를 활용한 혁신적인 서비스를 전개하고 있습니다.'}
                    {language === 'en' && 'We lead digital transformation and deploy innovative services utilizing AI and IoT.'}
                    {language === 'zh' && '引领数字化转型，开展利用AI·IoT的创新服务。'}
                  </p>
                  <Button variant="ghost" className="text-corporate-blue hover:text-blue-700 p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' && 'グローバル事業部門'}
                    {language === 'ko' && '글로벌 사업 부문'}
                    {language === 'en' && 'Global Business'}
                    {language === 'zh' && '全球业务部门'}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {language === 'jp' && 'アジア・太平洋地域を中心とした海外展開を推進し、現地のニーズに対応しています。'}
                    {language === 'ko' && '아시아·태평양 지역을 중심으로 한 해외 전개를 추진하며 현지 니즈에 대응하고 있습니다.'}
                    {language === 'en' && 'We promote overseas expansion centered on the Asia-Pacific region and respond to local needs.'}
                    {language === 'zh' && '推进以亚太地区为中心的海外拓展，应对当地需求。'}
                  </p>
                  <Button variant="ghost" className="text-corporate-blue hover:text-blue-700 p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
                    <UserRoundCheck className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' && 'コンサルティング部門'}
                    {language === 'ko' && '컨설팅 부문'}
                    {language === 'en' && 'Consulting'}
                    {language === 'zh' && '咨询部门'}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {language === 'jp' && '豊富な経験と専門知識により、お客様の課題解決をサポートします。'}
                    {language === 'ko' && '풍부한 경험과 전문 지식으로 고객의 과제 해결을 지원합니다.'}
                    {language === 'en' && 'We support customer problem-solving with extensive experience and expertise.'}
                    {language === 'zh' && '凭借丰富的经验和专业知识，支持客户解决课题。'}
                  </p>
                  <Button variant="ghost" className="text-corporate-blue hover:text-blue-700 p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <Handshake className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' && 'パートナーシップ部門'}
                    {language === 'ko' && '파트너십 부문'}
                    {language === 'en' && 'Partnership'}
                    {language === 'zh' && '合作伙伴部门'}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {language === 'jp' && '戦略的パートナーとの協業により、相乗効果を生み出すソリューションを創出しています。'}
                    {language === 'ko' && '전략적 파트너와의 협업으로 시너지 효과를 창출하는 솔루션을 개발하고 있습니다.'}
                    {language === 'en' && 'We create synergistic solutions through collaboration with strategic partners.'}
                    {language === 'zh' && '通过与战略合作伙伴的协作，创造产生协同效应的解决方案。'}
                  </p>
                  <Button variant="ghost" className="text-corporate-blue hover:text-blue-700 p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
