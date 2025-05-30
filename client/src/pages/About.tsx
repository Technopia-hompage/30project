import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/i18n";
import { Target, Eye, Heart, Building, Users, Globe, Award } from "lucide-react";

export function About() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {getTranslation('company.title', language)}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {getTranslation('company.subtitle', language)}
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">30</div>
              <div className="text-slate-600">{getTranslation('company.stats.years', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">2,500+</div>
              <div className="text-slate-600">{getTranslation('company.stats.employees', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">15</div>
              <div className="text-slate-600">{getTranslation('company.stats.locations', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-corporate-blue mb-2">500+</div>
              <div className="text-slate-600">{getTranslation('company.stats.partners', language)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission Card */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.mission.title', language)}
                </h3>
                <p className="text-slate-600 text-lg">
                  {getTranslation('company.mission.content', language)}
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.vision.title', language)}
                </h3>
                <p className="text-slate-600 text-lg">
                  {getTranslation('company.vision.content', language)}
                </p>
              </CardContent>
            </Card>

            {/* Values Card */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-success-green rounded-xl flex items-center justify-center mb-6">
                  <Heart className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.values.title', language)}
                </h3>
                <p className="text-slate-600 text-lg">
                  {getTranslation('company.values.content', language)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="CEO Portrait" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                {language === 'jp' && '代表取締役社長からのメッセージ'}
                {language === 'ko' && '대표이사 사장 메시지'}
                {language === 'en' && 'Message from CEO'}
                {language === 'zh' && 'CEO致辞'}
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {language === 'jp' && '30年という節目を迎え、改めて皆様への感謝の気持ちでいっぱいです。これまでの成長は、お客様、パートナー、そして社員一人ひとりの支えがあってこそ実現できました。今後も変化する時代に対応し、新たな価値創造に挑戦してまいります。'}
                {language === 'ko' && '30년이라는 이정표를 맞이하며, 다시 한번 여러분께 감사의 마음으로 가득합니다. 지금까지의 성장은 고객, 파트너, 그리고 직원 한 사람 한 사람의 지원이 있었기에 실현할 수 있었습니다. 앞으로도 변화하는 시대에 대응하며 새로운 가치 창조에 도전해 나가겠습니다.'}
                {language === 'en' && 'As we reach the milestone of 30 years, I am filled with gratitude to all of you. Our growth has been possible thanks to the support of our customers, partners, and each and every employee. We will continue to respond to changing times and challenge ourselves to create new value.'}
                {language === 'zh' && '迎来30周年这一里程碑，我再次对大家满怀感激之情。迄今为止的成长，是在客户、合作伙伴以及每一位员工的支持下才得以实现的。今后我们将继续应对变化的时代，挑战创造新价值。'}
              </p>
              <div>
                <div className="text-xl font-semibold text-slate-900 mb-1">
                  {language === 'jp' && '田中 太郎'}
                  {language === 'ko' && '다나카 타로'}
                  {language === 'en' && 'Taro Tanaka'}
                  {language === 'zh' && '田中太郎'}
                </div>
                <div className="text-slate-600">
                  {language === 'jp' && '代表取締役社長'}
                  {language === 'ko' && '대표이사 사장'}
                  {language === 'en' && 'President & CEO'}
                  {language === 'zh' && '董事长兼总裁'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '会社概要'}
            {language === 'ko' && '회사 개요'}
            {language === 'en' && 'Company Overview'}
            {language === 'zh' && '公司概况'}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                {language === 'jp' && '基本情報'}
                {language === 'ko' && '기본 정보'}
                {language === 'en' && 'Basic Information'}
                {language === 'zh' && '基本信息'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Building className="h-5 w-5 text-corporate-blue mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {language === 'jp' && '会社名'}
                      {language === 'ko' && '회사명'}
                      {language === 'en' && 'Company Name'}
                      {language === 'zh' && '公司名称'}
                    </div>
                    <div className="text-slate-600">GlobalCorp株式会社</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-5 w-5 text-corporate-blue mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {language === 'jp' && '設立年'}
                      {language === 'ko' && '설립년도'}
                      {language === 'en' && 'Founded'}
                      {language === 'zh' && '成立年份'}
                    </div>
                    <div className="text-slate-600">1994年</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-5 w-5 text-corporate-blue mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {language === 'jp' && '本社および支社'}
                      {language === 'ko' && '본사 및 지사'}
                      {language === 'en' && 'Headquarters & Branches'}
                      {language === 'zh' && '总部及分公司'}
                    </div>
                    <div className="text-slate-600">
                      {language === 'jp' && '〒100-0001 東京都千代田区千代田1-1-1 グローバルタワー 30F'}
                      {language === 'ko' && '〒100-0001 도쿄도 치요다구 치요다1-1-1 글로벌 타워 30F'}
                      {language === 'en' && '〒100-0001 1-1-1 Chiyoda, Chiyoda-ku, Tokyo Global Tower 30F'}
                      {language === 'zh' && '〒100-0001 东京都千代田区千代田1-1-1 全球大厦30F'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                {language === 'jp' && '事業内容'}
                {language === 'ko' && '사업 내용'}
                {language === 'en' && 'Business Areas'}
                {language === 'zh' && '业务内容'}
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && '製造・技術開発'}
                    {language === 'ko' && '제조·기술 개발'}
                    {language === 'en' && 'Manufacturing & Technology Development'}
                    {language === 'zh' && '制造·技术开发'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && '環境・エネルギーソリューション'}
                    {language === 'ko' && '환경·에너지 솔루션'}
                    {language === 'en' && 'Environmental & Energy Solutions'}
                    {language === 'zh' && '环境·能源解决方案'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && 'デジタルトランスフォーメーション'}
                    {language === 'ko' && '디지털 트랜스포메이션'}
                    {language === 'en' && 'Digital Transformation'}
                    {language === 'zh' && '数字化转型'}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="h-4 w-4 text-corporate-blue" />
                  <span>
                    {language === 'jp' && 'グローバルコンサルティング'}
                    {language === 'ko' && '글로벌 컨설팅'}
                    {language === 'en' && 'Global Consulting'}
                    {language === 'zh' && '全球咨询'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
