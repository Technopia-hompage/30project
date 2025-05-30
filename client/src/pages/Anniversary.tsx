import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/i18n";
import { Timeline } from "@/components/Timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Trophy, Sparkles } from "lucide-react";

export function Anniversary() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-anniversary-red to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white text-anniversary-red px-6 py-2 text-lg font-bold mb-8">
              <Award className="mr-2 h-5 w-5" />
              {getTranslation('hero.badge', language)}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-yellow-300">30</span>
              {language === 'jp' && '周年'}
              {language === 'ko' && '주년'}
              {language === 'en' && 'th Anniversary'}
              {language === 'zh' && '周年'}
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold mb-8">
              {language === 'jp' && '感謝と共に、新たな未来へ'}
              {language === 'ko' && '감사와 함께, 새로운 미래로'}
              {language === 'en' && 'With Gratitude, Towards a New Future'}
              {language === 'zh' && '怀着感恩，迈向新未来'}
            </h2>
            
            <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
              {language === 'jp' && '1994年の創立から30年。多くの皆様に支えられ、ここまで歩んでまいりました。心より感謝申し上げるとともに、次の30年に向けて新たな挑戦を続けてまいります。'}
              {language === 'ko' && '1994년 창립부터 30년. 많은 분들의 지원으로 여기까지 걸어왔습니다. 진심으로 감사드리며, 다음 30년을 향해 새로운 도전을 계속해 나가겠습니다.'}
              {language === 'en' && '30 years since our founding in 1994. We have come this far with the support of many. We express our heartfelt gratitude and will continue new challenges towards the next 30 years.'}
              {language === 'zh' && '自1994年创立以来30年。在众多人士的支持下走到了今天。我们由衷感谢，并将继续朝着下一个30年的新挑战前进。'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-anniversary-red hover:bg-slate-100">
                <Star className="mr-2 h-5 w-5" />
                {language === 'jp' && '30年のあゆみを見る'}
                {language === 'ko' && '30년의 발걸음 보기'}
                {language === 'en' && 'View 30 Years Journey'}
                {language === 'zh' && '查看30年历程'}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-anniversary-red">
                <Trophy className="mr-2 h-5 w-5" />
                {language === 'jp' && '記念イベント情報'}
                {language === 'ko' && '기념 이벤트 정보'}
                {language === 'en' && 'Anniversary Events'}
                {language === 'zh' && '纪念活动信息'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Anniversary Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '30周年ハイライト'}
              {language === 'ko' && '30주년 하이라이트'}
              {language === 'en' && '30th Anniversary Highlights'}
              {language === 'zh' && '30周年亮点'}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {language === 'jp' && '私たちの歩みの中で特に印象深い出来事をご紹介します。'}
              {language === 'ko' && '우리의 발걸음 중에서 특히 인상 깊은 사건들을 소개합니다.'}
              {language === 'en' && 'Introducing particularly memorable events from our journey.'}
              {language === 'zh' && '介绍我们历程中特别令人印象深刻的事件。'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '革新的技術開発'}
                  {language === 'ko' && '혁신적 기술 개발'}
                  {language === 'en' && 'Innovative Technology'}
                  {language === 'zh' && '创新技术开发'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '業界をリードする革新的な技術の開発により、お客様に新たな価値を提供してきました。'}
                  {language === 'ko' && '업계를 선도하는 혁신적인 기술 개발로 고객에게 새로운 가치를 제공해왔습니다.'}
                  {language === 'en' && 'We have provided new value to customers through the development of innovative technologies that lead the industry.'}
                  {language === 'zh' && '通过开发引领行业的创新技术，为客户提供了新价值。'}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && 'グローバル展開'}
                  {language === 'ko' && '글로벌 전개'}
                  {language === 'en' && 'Global Expansion'}
                  {language === 'zh' && '全球拓展'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '世界15ヶ国に拠点を展開し、グローバルな視点でビジネスを推進してきました。'}
                  {language === 'ko' && '전 세계 15개국에 거점을 전개하며 글로벌한 관점에서 비즈니스를 추진해왔습니다.'}
                  {language === 'en' && 'We have established bases in 15 countries worldwide and promoted business from a global perspective.'}
                  {language === 'zh' && '在全球15个国家设立据点，从全球视角推进业务。'}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '社会貢献活動'}
                  {language === 'ko' && '사회 공헌 활동'}
                  {language === 'en' && 'Social Contribution'}
                  {language === 'zh' && '社会贡献活动'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '持続可能な社会の実現に向けて、様々な社会貢献活動に取り組んできました。'}
                  {language === 'ko' && '지속 가능한 사회 실현을 위해 다양한 사회 공헌 활동에 힘써왔습니다.'}
                  {language === 'en' && 'We have engaged in various social contribution activities towards realizing a sustainable society.'}
                  {language === 'zh' && '为了实现可持续社会，我们一直致力于各种社会贡献活动。'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '30年のあゆみ'}
              {language === 'ko' && '30년의 발걸음'}
              {language === 'en' && '30 Years Journey'}
              {language === 'zh' && '30年历程'}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {language === 'jp' && '1994年の創立から現在まで、私たちの成長の軌跡をご覧ください。'}
              {language === 'ko' && '1994년 창립부터 현재까지 우리의 성장 궤적을 보시기 바랍니다.'}
              {language === 'en' && 'Please see our growth trajectory from our founding in 1994 to the present.'}
              {language === 'zh' && '请查看我们从1994年创立至今的成长轨迹。'}
            </p>
          </div>

          <Timeline />
        </div>
      </section>
    </div>
  );
}
