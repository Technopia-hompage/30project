import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation, getMultiLanguageContent } from "@/lib/i18n";
import { Link } from "wouter";
import { NewsArticle, GalleryImage } from "@shared/schema";
import { Play, ChevronDown, Target, Eye, Heart, Award } from "lucide-react";

export function Home() {
  const { language, getLanguageRoute } = useLanguage();

  const { data: news } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news', language, { limit: 3 }],
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
      <section className="relative bg-gradient-to-br from-corporate-blue to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Anniversary Badge */}
            <Badge className="bg-anniversary-red text-white px-6 py-2 text-sm font-semibold mb-6">
              <Award className="mr-2 h-4 w-4" />
              {getTranslation('hero.badge', language)}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              {getTranslation('hero.title1', language)}
              <br />
              <span className="text-yellow-300">{getTranslation('hero.title2', language)}</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto animate-slide-up">
              {getTranslation('hero.subtitle', language)}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-white text-corporate-blue hover:bg-slate-100">
                <Play className="mr-2 h-5 w-5" />
                {getTranslation('hero.ceoMessage', language)}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-corporate-blue">
                {getTranslation('hero.learnMore', language)}
              </Button>
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
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">50+</div>
              <div className="text-slate-600">{getTranslation('company.stats.employees', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">3</div>
              <div className="text-slate-600">{getTranslation('company.stats.locations', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">100+</div>
              <div className="text-slate-600">{getTranslation('company.stats.partners', language)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {getTranslation('company.title', language)}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {getTranslation('company.subtitle', language)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.mission.title', language)}
                </h3>
                <p className="text-slate-600">
                  {getTranslation('company.mission.content', language)}
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.vision.title', language)}
                </h3>
                <p className="text-slate-600">
                  {getTranslation('company.vision.content', language)}
                </p>
              </CardContent>
            </Card>

            {/* Values Card */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center mb-6">
                  <Heart className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {getTranslation('company.values.title', language)}
                </h3>
                <p className="text-slate-600">
                  {getTranslation('company.values.content', language)}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {getTranslation('nav.news', language)}
            </h2>
            <Link href={getLanguageRoute('/news')}>
              <Button variant="outline">
                {language === 'jp' && 'すべて見る'}
                {language === 'ko' && '모두 보기'}
                {language === 'en' && 'View All'}
                {language === 'zh' && '查看全部'}
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news?.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <Badge className="mb-4">{article.category}</Badge>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                    {getMultiLanguageContent(article.title, language)}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {getMultiLanguageContent(article.excerpt, language)}
                  </p>
                  <div className="text-sm text-slate-500">
                    {article.publishedAt && new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
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