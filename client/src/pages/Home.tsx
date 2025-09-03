import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation, getMultiLanguageContent } from "@/lib/i18n";

import { Link } from "wouter";
import { NewsArticle, GalleryImage } from "@shared/schema";
import { ChevronDown, Eye, Award, Activity, Car, Calendar, FileText, Building } from "lucide-react";
import homeBgImage from "@assets/ChatGPT Image 2025年6月6日 11_50_37.png";

export function Home() {
  const { language, getLanguageRoute } = useLanguage();

  // Fetch latest news from API
  const { data: news = [] } = useQuery({
    queryKey: ['/api/news'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/api/news');
      if (!response.ok) throw new Error('Failed to fetch news');
      return response.json();
    }
  });

  const { data: featuredImages } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery', language, { featured: true, limit: 6 }],
  });

  const { data: stats } = useQuery({
    queryKey: ['/api/stats'],
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh]" style={{background: 'linear-gradient(135deg, #186c84 0%, #1f7a94 50%, #2a8da5 100%)'}}>
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
                <Button size="lg" className="bg-white hover:bg-slate-100" style={{color: '#186c84'}}>
                  <Eye className="mr-2 h-5 w-5" />
                  {getTranslation('hero.ceoMessage', language)}
                </Button>
              </Link>
              <Link href={getLanguageRoute('/about')}>
                <Button size="lg" className="bg-white hover:bg-slate-100" style={{color: '#186c84'}}>
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
      <section className="py-16 corporate-accent-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: '#186c84'}}>30</div>
              <div className="text-slate-600 font-medium">
                {language === 'jp' && '周年'}
                {language === 'ko' && '주년 기념'}
                {language === 'en' && 'Years Anniversary'}
                {language === 'zh' && '周年纪念'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: '#186c84'}}>3</div>
              <div className="text-slate-600 font-medium">
                {language === 'jp' && '事業部'}
                {language === 'ko' && '사업부'}
                {language === 'en' && 'Business Divisions'}
                {language === 'zh' && '事业部'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: '#186c84'}}>12</div>
              <div className="text-slate-600 font-medium">
                {language === 'jp' && '貿易国'}
                {language === 'ko' && '무역국'}
                {language === 'en' && 'Trading Countries'}
                {language === 'zh' && '贸易国'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: '#186c84'}}>25000+</div>
              <div className="text-slate-600 font-medium">
                {language === 'jp' && '取り扱い製品数'}
                {language === 'ko' && '취급 제품 수'}
                {language === 'en' && 'Products Handled'}
                {language === 'zh' && '取扱产品数'}
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
            <Card className="hover:shadow-xl transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{backgroundColor: '#186c84'}}>
                  <Eye className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && 'メディカル事業部'}
                  {language === 'ko' && '메디컬 사업부'}
                  {language === 'en' && 'Medical Division'}
                  {language === 'zh' && '医疗事业部'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && '各種眼科用の手術機械、検査機械、眼内レンズ、コンタクトレンズ等の製造販売。オルソケラトロジーレンズ「マイエメラルド」、IPL機器、コンタクトレンズ洗浄液など最先端の眼科医療機器を取り扱っています。'}
                  {language === 'ko' && '각종 안과용 수술기계, 검사기계, 안내렌즈, 콘택트렌즈 등의 제조판매. 오르토케라톨로지 렌즈 "마이에메랄드", IPL 기기, 토포그래피, 엑시머 레이저, 펨토세컨드 레이저 등 최첨단 안과 의료기기를 취급합니다.'}
                  {language === 'en' && 'Manufacturing and sales of various ophthalmic surgical and examination equipment, intraocular lenses, contact lenses, etc. We handle cutting-edge ophthalmic medical devices including orthokeratology lens "My Emerald", IPL devices, topography, excimer laser, and femtosecond laser.'}
                  {language === 'zh' && '各种眼科手术设备、检查设备、人工晶体、隐形眼镜等的制造销售。取扱角膜塑形镜"My Emerald"、IPL设备、地形图、准分子激光、飞秒激光等尖端眼科医疗设备。'}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {language === 'jp' && '主要取扱品目:'}
                    {language === 'ko' && '주요 취급 품목:'}
                    {language === 'en' && 'Main Products:'}
                    {language === 'zh' && '主要经营品目:'}
                  </h4>
                  <div className="text-sm text-slate-600 grid grid-cols-1 gap-1">
                    <span>• {language === 'jp' ? 'オルソケラトロジーレンズ' : language === 'ko' ? '오르토케라톨로지 렌즈' : language === 'en' ? 'Orthokeratology Lens' : '角膜塑形镜'}</span>
                    <span>• {language === 'jp' ? '白内障用眼内レンズ' : language === 'ko' ? '백내장용 안내렌즈' : language === 'en' ? 'Cataract Intraocular Lens' : '白内障人工晶体'}</span>
                    <span>• {language === 'jp' ? 'IPL（インテンス・パルス・ライト）' : language === 'ko' ? 'IPL (인텐스 펄스 라이트)' : language === 'en' ? 'IPL (Intense Pulsed Light)' : 'IPL (强脉冲光)'}</span>
                    <span>• {language === 'jp' ? 'コンタクトレンズ洗浄液' : language === 'ko' ? '콘택트렌즈 세정액' : language === 'en' ? 'Contact Lens Cleaning Solution' : '隐形眼镜清洗液'}</span>
                  </div>
                </div>
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
            <Card className="hover:shadow-xl transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{backgroundColor: '#186c84'}}>
                  <Car className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && 'AUTO事業部'}
                  {language === 'ko' && 'AUTO 사업부'}
                  {language === 'en' && 'AUTO Division'}
                  {language === 'zh' && 'AUTO事业部'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && 'KASHINA、ARTEMIS、APHRODITEなど多彩なブランドのアルミホイールを企画・開発・販売しています。デザイン・設計は自社で行い、生産は中国の提携工場にて委託製造しています。'}
                  {language === 'ko' && 'KASHINA, ARTEMIS, APHRODITE 등 다양한 브랜드의 알루미늄 휠을 기획·개발·판매하고 있습니다. 디자인·설계는 자사에서 진행하고, 생산은 중국의 제휴 공장에서 위탁 제조하고 있습니다.'}
                  {language === 'en' && 'We plan, develop, and sell aluminum wheels under various brands including KASHINA, ARTEMIS, and APHRODITE. Design and engineering are conducted in-house, while production is outsourced to partner factories in China.'}
                  {language === 'zh' && '企划·开发·销售KASHINA、ARTEMIS、APHRODITE等多样化品牌的铝轮毂。设计·设计由自社进行，生产委托给中国的合作工厂制造。'}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {language === 'jp' && '主要ブランド:'}
                    {language === 'ko' && '주요 브랜드:'}
                    {language === 'en' && 'Main Brands:'}
                    {language === 'zh' && '主要品牌:'}
                  </h4>
                  <div className="text-sm text-slate-600 grid grid-cols-1 gap-1">
                    <span>• <strong>KASHINA</strong> (カシーナ)</span>
                    <span>• <strong>ARTEMIS</strong> (アルテミス)</span>
                    <span>• <strong>APHRODITE</strong> (アフロディーテ)</span>
                    <span>• <strong>MUD CLIFF</strong> (マッドクリフ)</span>
                    <span>• <strong>CHARITES</strong> (カリテス)</span>
                  </div>
                </div>
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
            <Card className="hover:shadow-xl transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{backgroundColor: '#186c84'}}>
                  <Building className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '新規事業部'}
                  {language === 'ko' && '신규 사업부'}
                  {language === 'en' && 'New Business Division'}
                  {language === 'zh' && '新业务事业部'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && '新規事業部では様々な製品の監修、製造、販売を行っております。'}
                  {language === 'ko' && 'AI 안면인식 검온기 "TOLLGATE"의 제조·판매를 하고 있습니다. 첨단 AI 기술을 활용하여 비접촉 체온 측정과 안면 인식을 동시에 실현하는 혁신적인 솔루션입니다.'}
                  {language === 'en' && 'We manufacture and sell the AI facial recognition thermometer "TOLLGATE". This innovative solution utilizes advanced AI technology to simultaneously achieve non-contact temperature measurement and facial recognition.'}
                  {language === 'zh' && '进行AI人脸识别测温仪"TOLLGATE"的制造·销售。利用先进的AI技术，同时实现非接触体温测定和人脸识别的创新解决方案。'}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {language === 'jp' && '主な事業内容:'}
                    {language === 'ko' && '주요 사업 내용:'}
                    {language === 'en' && 'Main Business Content:'}
                    {language === 'zh' && '主要业务内容:'}
                  </h4>
                  <div className="text-sm text-slate-600 grid grid-cols-1 gap-1">
                    <span>• {language === 'jp' ? 'クレジットカード端末決済サービス' : language === 'ko' ? '신용카드 단말기 결제 서비스' : language === 'en' ? 'Credit Card Terminal Payment Service' : '信用卡终端支付服务'}</span>
                    <span>• {language === 'jp' ? '世界初の水分子共振技術「DENBA Health」' : language === 'ko' ? '세계 최초의 물분자 공진 기술 「DENBA Health」' : language === 'en' ? 'World\'s First Water Molecule Resonance Technology "DENBA Health"' : '世界首创水分子共振技术「DENBA Health」'}</span>
                    <span>• {language === 'jp' ? '不動産賃貸の取り扱い' : language === 'ko' ? '부동산 임대 취급' : language === 'en' ? 'Real Estate Rental Services' : '房地产租赁服务'}</span>
                  </div>
                </div>
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
                {news?.filter(article => article.category === 'announcement' || article.category === 'general').slice(0, 3).map((article) => (
                  <Link key={article.id} href={getLanguageRoute(`/news/${article.id}`)}>
                    <div className="p-4 bg-white border border-slate-200 rounded-lg hover:border-corporate-blue hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-slate-500">
                              {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                            </span>
                          </div>

                        
                        
                        00 line-clamp-2 hover:text-corporate-blue transition-colors">
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
                    <div className="p-4 bg-white border border-slate-200 rounded-lg hover:border-corporate-blue hover:shadow-md transition-all duration-200 cursor-pointer">
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
                          <h3 className="font-medium text-slate-900 line-clamp-2 hover:text-corporate-accent transition-colors">
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
      <section className="py-16 lg:py-24 corporate-gradient">
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