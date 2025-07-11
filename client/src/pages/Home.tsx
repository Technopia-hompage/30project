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
  const news = newsData.slice(0, 3);

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
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">30</div>
              <div className="text-slate-600">{getTranslation('company.stats.years', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">25</div>
              <div className="text-slate-600">{getTranslation('company.stats.employees', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">9</div>
              <div className="text-slate-600">{getTranslation('company.stats.locations', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">1000+</div>
              <div className="text-slate-600">{getTranslation('company.stats.partners', language)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '事業部紹介'}
              {language === 'ko' && '사업부 소개'}
              {language === 'en' && 'Business Divisions'}
              {language === 'zh' && '事业部介绍'}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {language === 'jp' && 'テクノピアの3つの事業部が提供する革新的なソリューション'}
              {language === 'ko' && '테크노피아의 3개 사업부가 제공하는 혁신적인 솔루션'}
              {language === 'en' && 'Innovative solutions provided by Technopia\'s three business divisions'}
              {language === 'zh' && '技术乌托邦三个事业部提供的创新解决方案'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Medical Division */}
            <Card className="hover:shadow-lg transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-lg flex items-center justify-center mb-6">
                  <Stethoscope className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {language === 'jp' && 'メディカル事業部'}
                  {language === 'ko' && '메디컬 사업부'}
                  {language === 'en' && 'Medical Division'}
                  {language === 'zh' && '医疗事业部'}
                </h3>
                <p className="text-slate-600 mb-4">
                  {language === 'jp' && '各種眼科用の手術機械、検査機械、眼内レンズ、コンタクトレンズ等の製造販売'}
                  {language === 'ko' && '각종 안과용 수술기계, 검사기계, 안내렌즈, 콘택트렌즈 등의 제조판매'}
                  {language === 'en' && 'Manufacturing and sales of various ophthalmic surgical and examination equipment, intraocular lenses, contact lenses, etc.'}
                  {language === 'zh' && '各种眼科手术设备、检查设备、人工晶体、隐形眼镜等的制造销售'}
                </p>
                <Button variant="outline" size="sm">
                  {language === 'jp' && '詳しく見る'}
                  {language === 'ko' && '자세히 보기'}
                  {language === 'en' && 'Learn More'}
                  {language === 'zh' && '了解更多'}
                </Button>
              </CardContent>
            </Card>

            {/* Auto Division */}
            <Card className="hover:shadow-lg transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-lg flex items-center justify-center mb-6">
                  <Car className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {language === 'jp' && 'AUTO事業部'}
                  {language === 'ko' && 'AUTO 사업부'}
                  {language === 'en' && 'AUTO Division'}
                  {language === 'zh' && 'AUTO事业部'}
                </h3>
                <p className="text-slate-600 mb-4">
                  {language === 'jp' && 'アルミホイールの製造、販売'}
                  {language === 'ko' && '알루미늄 휠의 제조, 판매'}
                  {language === 'en' && 'Manufacturing and sales of aluminum wheels'}
                  {language === 'zh' && '铝合金轮毂的制造、销售'}
                </p>
                <Button variant="outline" size="sm">
                  {language === 'jp' && '詳しく見る'}
                  {language === 'ko' && '자세히 보기'}
                  {language === 'en' && 'Learn More'}
                  {language === 'zh' && '了解更多'}
                </Button>
              </CardContent>
            </Card>

            {/* New Business Division */}
            <Card className="hover:shadow-lg transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {language === 'jp' && '新規事業部'}
                  {language === 'ko' && '신규 사업부'}
                  {language === 'en' && 'New Business Division'}
                  {language === 'zh' && '新业务事业部'}
                </h3>
                <p className="text-slate-600 mb-4">
                  {language === 'jp' && 'AI顔認証検温測定器「TOLLGATE」の製造・販売'}
                  {language === 'ko' && 'AI 안면인식 검온기 "TOLLGATE"의 제조·판매'}
                  {language === 'en' && 'Manufacturing and sales of AI facial recognition thermometer "TOLLGATE"'}
                  {language === 'zh' && 'AI人脸识别测温仪"TOLLGATE"的制造·销售'}
                </p>
                <Button variant="outline" size="sm">
                  {language === 'jp' && '詳しく見る'}
                  {language === 'ko' && '자세히 보기'}
                  {language === 'en' && 'Learn More'}
                  {language === 'zh' && '了解更多'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Company Overview */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                  {language === 'jp' && '会社概要'}
                  {language === 'ko' && '회사 개요'}
                  {language === 'en' && 'Company Overview'}
                  {language === 'zh' && '公司概要'}
                </h2>
                <div className="prose max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {language === 'jp' && '株式会社テクノピアは1995年創業以来、全世界を舞台に絶えなく無から有を創造してきました。これからも顧客から得た信頼をもとに最高、最新の製品を開発して顧客に感動を与える企業となりますよう最善をつくしていきます。'}
                    {language === 'ko' && '㈜테크노피아는 1995년 창업 이래, 전 세계를 무대로 끊임없이 무에서 유를 창조해왔습니다. 앞으로도 고객으로부터 얻은 신뢰를 바탕으로 최고, 최신의 제품을 개발하여 고객에게 감동을 주는 기업이 되도록 최선을 다하겠습니다.'}
                    {language === 'en' && 'Since its founding in 1995, Technopia Corporation has been continuously creating value from nothing on the global stage. We will continue to do our best to become a company that develops the best and latest products based on the trust gained from customers and impresses customers.'}
                    {language === 'zh' && '株式会社Technopia自1995年创业以来，一直在全世界舞台上不断地从无到有进行创造。今后我们也将基于从客户那里获得的信赖，全力以赴开发最好、最新的产品，成为给客户带来感动的企业。'}
                  </p>
                </div>
              </div>

              {/* Business Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-3xl font-bold text-corporate-blue mb-2">30</div>
                  <div className="text-slate-600">
                    {language === 'jp' && '周年記念'}
                    {language === 'ko' && '주년 기념'}
                    {language === 'en' && 'Years Anniversary'}
                    {language === 'zh' && '周年纪念'}
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                  <div className="text-slate-600">
                    {language === 'jp' && '事業部'}
                    {language === 'ko' && '사업부'}
                    {language === 'en' && 'Business Divisions'}
                    {language === 'zh' && '事业部'}
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">9</div>
                  <div className="text-slate-600">
                    {language === 'jp' && '貿易国'}
                    {language === 'ko' && '무역국'}
                    {language === 'en' && 'Trading Countries'}
                    {language === 'zh' && '贸易国'}
                  </div>
                </div>
              </div>

              {/* Business Divisions - Restored */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                  {language === 'jp' && '事業部紹介'}
                  {language === 'ko' && '사업부 소개'}
                  {language === 'en' && 'Business Divisions'}
                  {language === 'zh' && '事业部介绍'}
                </h2>
                
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
                        {language === 'jp' && '各種眼科用の手術機械、検査機械、眼内レンズ、コンタクトレンズ等の製造販売'}
                        {language === 'ko' && '각종 안과용 수술기계, 검사기계, 안내렌즈, 콘택트렌즈 등의 제조·판매'}
                        {language === 'en' && 'Manufacturing and sales of various ophthalmic surgical equipment, examination equipment, intraocular lenses, contact lenses, etc.'}
                        {language === 'zh' && '各种眼科手术设备、检查设备、眼内镜、隐形眼镜等的制造销售'}
                      </p>
                      <Button variant="outline" size="sm">
                        {language === 'jp' && '詳しく見る'}
                        {language === 'ko' && '자세히 보기'}
                        {language === 'en' && 'Learn More'}
                        {language === 'zh' && '了解更多'}
                      </Button>
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
                        {language === 'jp' && 'アルミホイールの製造、販売'}
                        {language === 'ko' && '알루미늄 휠의 제조·판매'}
                        {language === 'en' && 'Manufacturing and sales of aluminum wheels'}
                        {language === 'zh' && '铝轮毂的制造·销售'}
                      </p>
                      <Button variant="outline" size="sm">
                        {language === 'jp' && '詳しく見る'}
                        {language === 'ko' && '자세히 보기'}
                        {language === 'en' && 'Learn More'}
                        {language === 'zh' && '了解更多'}
                      </Button>
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
                        {language === 'jp' && 'AI顔認証検温測定器「TOLLGATE」の製造・販売'}
                        {language === 'ko' && 'AI 안면인식 검온기 "TOLLGATE"의 제조·판매'}
                        {language === 'en' && 'Manufacturing and sales of AI facial recognition thermometer "TOLLGATE"'}
                        {language === 'zh' && 'AI人脸识别测温仪"TOLLGATE"的制造·销售'}
                      </p>
                      <Button variant="outline" size="sm">
                        {language === 'jp' && '詳しく見る'}
                        {language === 'ko' && '자세히 보기'}
                        {language === 'en' && 'Learn More'}
                        {language === 'zh' && '了解更多'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* General Announcements */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && 'お知らせ'}
                    {language === 'ko' && '공지사항'}
                    {language === 'en' && 'Announcements'}
                    {language === 'zh' && '公告'}
                  </h3>
                  <Link href={getLanguageRoute('/news')}>
                    <Button variant="ghost" size="sm" className="text-sm text-slate-600 hover:text-corporate-blue">
                      {language === 'jp' && 'お知らせ一覧'}
                      {language === 'ko' && '공지사항 목록'}
                      {language === 'en' && 'View All'}
                      {language === 'zh' && '查看全部'}
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-3 bg-slate-50 rounded-lg p-4">
                  {news?.filter(article => article.category === 'announcement').slice(0, 3).map((article) => (
                    <Link key={article.id} href={getLanguageRoute(`/news/${article.id}`)}>
                      <div className="bg-white p-3 rounded border hover:border-corporate-blue hover:shadow-sm transition-all duration-200 cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-slate-500">
                            {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                          </span>
                          <FileText className="h-3 w-3 text-slate-400" />
                        </div>
                        <h4 className="text-sm font-medium text-slate-900 line-clamp-2 hover:text-corporate-blue transition-colors">
                          {getMultiLanguageContent(article.title, language)}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Medical Professionals Announcements */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {language === 'jp' && '医療関係者の皆様へのお知らせ'}
                    {language === 'ko' && '의료진 여러분께 안내'}
                    {language === 'en' && 'For Medical Professionals'}
                    {language === 'zh' && '致医疗专业人员'}
                  </h3>
                  <Link href={getLanguageRoute('/news')}>
                    <Button variant="ghost" size="sm" className="text-sm text-slate-600 hover:text-green-600">
                      {language === 'jp' && '一覧を見る'}
                      {language === 'ko' && '목록 보기'}
                      {language === 'en' && 'View All'}
                      {language === 'zh' && '查看全部'}
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-3 bg-green-50 rounded-lg p-4">
                  {news?.filter(article => article.category === 'medical').slice(0, 3).map((article) => (
                    <Link key={article.id} href={getLanguageRoute(`/news/${article.id}`)}>
                      <div className="bg-white p-3 rounded border hover:border-green-500 hover:shadow-sm transition-all duration-200 cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-slate-500">
                            {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                          </span>
                          <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                            {language === 'jp' && '医療'}
                            {language === 'ko' && '의료'}
                            {language === 'en' && 'Medical'}
                            {language === 'zh' && '医疗'}
                          </Badge>
                        </div>
                        <h4 className="text-sm font-medium text-slate-900 line-clamp-2 hover:text-green-600 transition-colors">
                          {getMultiLanguageContent(article.title, language)}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      {featuredImages && featuredImages.length > 0 && (
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {getTranslation('nav.gallery', language)}
              </h2>
              <Link href={getLanguageRoute('/gallery')}>
                <Button variant="outline">
                  {language === 'jp' && 'すべて見る'}
                  {language === 'ko' && '모두 보기'}
                  {language === 'en' && 'View All'}
                  {language === 'zh' && '查看全部'}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {featuredImages.map((image) => (
                <div key={image.id} className="group cursor-pointer">
                  <img 
                    src={image.imageUrl} 
                    alt={getMultiLanguageContent(image.title, language)}
                    className="w-full h-48 object-cover rounded-lg group-hover:shadow-lg transition-shadow duration-200"
                  />
                  <div className="mt-3">
                    <h4 className="font-semibold text-slate-900">
                      {getMultiLanguageContent(image.title, language)}
                    </h4>
                    <p className="text-sm text-slate-600">{image.year}年</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}