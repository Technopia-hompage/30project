import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation, getMultiLanguageContent } from "@/lib/i18n";
import { newsData } from "@/lib/newsData";
import { Link } from "wouter";
import { NewsArticle, GalleryImage } from "@shared/schema";
import { Play, ChevronDown, Target, Eye, Heart, Award, Stethoscope, Car, Lightbulb, Calendar, FileText } from "lucide-react";
import homeBgImage from "@assets/ChatGPT Image 2025年6月6日 11_50_37.png";

export function Home() {
  const { language, getLanguageRoute } = useLanguage();

  // Use static news data with filtering for recent articles
  const news = newsData.slice(0, 6);

  const { data: featuredImages } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery', language, { featured: true, limit: 6 }],
  });

  const { data: stats } = useQuery({
    queryKey: ['/api/stats'],
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-corporate-blue to-blue-700 overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeBgImage})`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              {getTranslation('hero.title1', language)}
              <br />
              <span className="text-white">{getTranslation('hero.title2', language)}</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mt-8">
              <Link href={getLanguageRoute('/ceo-message')}>
                <Button size="lg" className="bg-white text-corporate-blue hover:bg-slate-100">
                  <Play className="mr-2 h-5 w-5" />
                  {getTranslation('hero.ceoMessage', language)}
                </Button>
              </Link>
              <Link href={getLanguageRoute('/about')}>
                <Button size="lg" className="bg-white text-corporate-blue hover:bg-slate-100">
                  {language === 'jp' && '会社紹介'}
                  {language === 'ko' && '회사 소개'}
                  {language === 'en' && 'About Us'}
                  {language === 'zh' && '公司介绍'}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="text-white text-xl h-6 w-6" />
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-corporate-blue mb-2">30</div>
              <div className="text-slate-600 font-medium">
                {language === 'jp' && '周年記念'}
                {language === 'ko' && '주년 기념'}
                {language === 'en' && 'Years Anniversary'}
                {language === 'zh' && '周年纪念'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-corporate-blue mb-2">3</div>
              <div className="text-slate-600 font-medium">
                {language === 'jp' && '事業部'}
                {language === 'ko' && '사업부'}
                {language === 'en' && 'Business Divisions'}
                {language === 'zh' && '事业部'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-corporate-blue mb-2">9</div>
              <div className="text-slate-600 font-medium">
                {language === 'jp' && '貿易国'}
                {language === 'ko' && '무역국'}
                {language === 'en' && 'Trading Countries'}
                {language === 'zh' && '贸易国'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-corporate-blue mb-2">500+</div>
              <div className="text-slate-600 font-medium">
                {language === 'jp' && '製品'}
                {language === 'ko' && '제품'}
                {language === 'en' && 'Products'}
                {language === 'zh' && '产品'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '事業部紹介'}
              {language === 'ko' && '사업부 소개'}
              {language === 'en' && 'Business Divisions'}
              {language === 'zh' && '事业部介绍'}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '株式会社テクノピアの3つの主要事業部をご紹介いたします'}
              {language === 'ko' && '㈜테크노피아의 3개 주요 사업부를 소개합니다'}
              {language === 'en' && 'Introducing the three main business divisions of Technopia Corporation'}
              {language === 'zh' && '为您介绍Technopia株式会社的三个主要事业部'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Medical Division */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Stethoscope className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    {language === 'jp' && 'メディカル事業部'}
                    {language === 'ko' && '메디컬 사업부'}
                    {language === 'en' && 'Medical Division'}
                    {language === 'zh' && '医疗事业部'}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {language === 'jp' && '視力矯正、視力回復が期待できるオルソケラトロジーレンズや眼内レンズ、目の周りの血流改善を促すIPL機器等を取扱っております。'}
                  {language === 'ko' && '시력교정, 시력회복이 기대되는 오르소케라톨로지 렌즈와 안내렌즈, 눈 주변의 혈류 개선을 촉진하는 IPL 기기 등을 취급하고 있습니다.'}
                  {language === 'en' && 'We handle orthokeratology lenses and intraocular lenses that can be expected to correct and improve vision, as well as IPL devices that promote blood flow improvement around the eyes.'}
                  {language === 'zh' && '我们处理可以期待矫正和改善视力的角膜塑形镜和眼内镜，以及促进眼部周围血液循环改善的IPL设备等。'}
                </p>
                <Link href={getLanguageRoute('/medical')}>
                  <Button variant="outline" size="sm">
                    {language === 'jp' && '詳しく見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Auto Division */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Car className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    {language === 'jp' && 'AUTO事業部'}
                    {language === 'ko' && 'AUTO 사업부'}
                    {language === 'en' && 'AUTO Division'}
                    {language === 'zh' && 'AUTO事业部'}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {language === 'jp' && '自社内でアルミホイールのデザインや設計を行い、工場をもたずに中国の生産工場にて委託製造を行っております。'}
                  {language === 'ko' && '자사 내에서 알루미늄 휠의 디자인과 설계를 진행하며, 공장을 보유하지 않고 중국의 생산공장에서 위탁제조를 진행하고 있습니다.'}
                  {language === 'en' && 'We design and engineer aluminum wheels in-house, and conduct contract manufacturing at production facilities in China without owning factories.'}
                  {language === 'zh' && '我们在公司内部进行铝轮毂的设计和工程设计，不拥有工厂，而是在中国的生产工厂进行委托制造。'}
                </p>
                <Link href={getLanguageRoute('/auto')}>
                  <Button variant="outline" size="sm">
                    {language === 'jp' && '詳しく見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* New Business Division */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    {language === 'jp' && '新規事業部'}
                    {language === 'ko' && '신규 사업부'}
                    {language === 'en' && 'New Business Division'}
                    {language === 'zh' && '新业务事业部'}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {language === 'jp' && 'AI顔認証検温測定機「TOLLGATE」は、AI顔認証と発熱チェックの2つの機能を合わせ持ち、現在の情勢に合った最先端の出入りコントロールシステムです。非接触AI顔認証技術とサーモグラフィックカメラを利用して、発熱者識別、マスク着用識別と警告、通勤記録確認（AI顔認証）、部外者識別と警告などが可能な安全チェックシステムであります。'}
                  {language === 'ko' && 'AI 안면인식 검온기 "TOLLGATE"는 AI 안면인식과 발열 체크 2가지 기능을 함께 가지고 있으며, 현재 상황에 맞는 최첨단 출입 통제 시스템입니다. 비접촉 AI 안면인식 기술과 열화상 카메라를 이용하여 발열자 식별, 마스크 착용 식별과 경고, 출근 기록 확인(AI 안면인식), 외부인 식별과 경고 등이 가능한 안전 체크 시스템입니다.'}
                  {language === 'en' && 'The AI facial recognition thermometer "TOLLGATE" combines two functions: AI facial recognition and fever detection, making it a cutting-edge access control system suited to current circumstances. It is a safety check system that uses non-contact AI facial recognition technology and thermographic cameras to enable fever detection, mask wearing identification and warnings, attendance record verification (AI facial recognition), and outsider identification and warnings.'}
                  {language === 'zh' && 'AI人脸识别测温仪"TOLLGATE"结合了AI人脸识别和发热检测两种功能，是适合当前形势的最先进的出入控制系统。这是一个安全检查系统，利用非接触式AI人脸识别技术和热成像摄像头，能够进行发热者识别、口罩佩戴识别和警告、出勤记录确认（AI人脸识别）、外来人员识别和警告等功能。'}
                </p>
                <Link href={getLanguageRoute('/newbusiness')}>
                  <Button variant="outline" size="sm">
                    {language === 'jp' && '詳しく見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* お知らせ Section - Side by Side Layout */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* General Announcements */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {language === 'jp' && 'お知らせ'}
                  {language === 'ko' && '공지사항'}
                  {language === 'en' && 'Announcements'}
                  {language === 'zh' && '公告'}
                </h2>
                <Link href={getLanguageRoute('/news')}>
                  <Button variant="outline" size="sm">
                    {language === 'jp' && 'お知らせ一覧'}
                    {language === 'ko' && '공지사항 목록'}
                    {language === 'en' && 'All Announcements'}
                    {language === 'zh' && '所有公告'}
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {news?.filter(article => article.category === 'announcement').slice(0, 3).map((article) => (
                  <Link key={article.id} href={getLanguageRoute(`/news/${article.id}`)}>
                    <div className="p-4 bg-white border border-slate-200 rounded-lg hover:border-corporate-blue hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-slate-500">
                              {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                            </span>
                          </div>
                          <h3 className="font-medium text-slate-900 line-clamp-2 hover:text-corporate-blue transition-colors">
                            {getMultiLanguageContent(article.title, language)}
                          </h3>
                        </div>
                        <FileText className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Medical Professionals Announcements */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {language === 'jp' && '医療関係者の皆様へのお知らせ'}
                  {language === 'ko' && '의료진 여러분께 안내'}
                  {language === 'en' && 'For Medical Professionals'}
                  {language === 'zh' && '致医疗专业人员'}
                </h2>
                <Link href={getLanguageRoute('/news')}>
                  <Button variant="outline" size="sm">
                    {language === 'jp' && '一覧を見る'}
                    {language === 'ko' && '목록 보기'}
                    {language === 'en' && 'View All'}
                    {language === 'zh' && '查看全部'}
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {news?.filter(article => article.category === 'medical').slice(0, 3).map((article) => (
                  <Link key={article.id} href={getLanguageRoute(`/news/${article.id}`)}>
                    <div className="p-4 bg-white border border-slate-200 rounded-lg hover:border-green-500 hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-slate-500">
                              {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {language === 'jp' && '医療'}
                              {language === 'ko' && '의료'}
                              {language === 'en' && 'Medical'}
                              {language === 'zh' && '医疗'}
                            </Badge>
                          </div>
                          <h3 className="font-medium text-slate-900 line-clamp-2 hover:text-green-600 transition-colors">
                            {getMultiLanguageContent(article.title, language)}
                          </h3>
                        </div>
                        <FileText className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-corporate-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {getTranslation('cta.title', language)}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {getTranslation('cta.subtitle', language)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLanguageRoute('/careers')}>
              <Button 
                size="lg" 
                className="bg-white text-corporate-blue hover:bg-slate-100 border-2 border-white transition-all duration-200"
              >
                {getTranslation('cta.careers', language)}
              </Button>
            </Link>
            <Link href={getLanguageRoute('/contact')}>
              <Button 
                size="lg" 
                className="bg-white text-corporate-blue hover:bg-slate-100 border-2 border-white transition-all duration-200"
              >
                {getTranslation('cta.contact', language)}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}