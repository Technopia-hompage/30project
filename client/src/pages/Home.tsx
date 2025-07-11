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

      {/* お知らせ Section */}
      <section className="py-16 lg:py-24 bg-white">
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
                    <div className="p-4 border border-slate-200 rounded-lg hover:border-corporate-blue hover:shadow-md transition-all duration-200 cursor-pointer">
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
                    <div className="p-4 border border-slate-200 rounded-lg hover:border-green-500 hover:shadow-md transition-all duration-200 cursor-pointer">
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