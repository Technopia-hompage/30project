import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { getMultiLanguageContent } from "@/lib/i18n";
import { GalleryImage } from "@shared/schema";
import { AnimatedCard } from "@/components/AnimatedCard";
import { useState } from "react";
import { 
  Camera, 
  Calendar, 
  Filter, 
  LayoutGrid,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export function Gallery() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const { data: images, isLoading } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery', language, { 
      category: selectedCategory !== 'all' ? selectedCategory : undefined,
      year: selectedYear 
    }],
  });

  const categories = [
    { key: 'all', label: { jp: 'すべて', ko: '전체', en: 'All', zh: '全部' }},
    { key: 'events', label: { jp: 'イベント', ko: '이벤트', en: 'Events', zh: '活动' }},
    { key: 'office', label: { jp: 'オフィス', ko: '사무실', en: 'Office', zh: '办公室' }},
    { key: 'products', label: { jp: '製品', ko: '제품', en: 'Products', zh: '产品' }},
    { key: 'team', label: { jp: 'チーム', ko: '팀', en: 'Team', zh: '团队' }},
  ];

  const years = [2024, 2023, 2022, 2021, 2020];

  const filteredImages = images || [];

  const openLightbox = (image: GalleryImage, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      : (lightboxIndex + 1) % filteredImages.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              {language === 'jp' && 'ギャラリー'}
              {language === 'ko' && '갤러리'}
              {language === 'en' && 'Gallery'}
              {language === 'zh' && '画廊'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '社内外のイベント、成果、そして日々の活動をご覧ください。'}
              {language === 'ko' && '사내외 이벤트, 성과, 그리고 일상 활동을 보시기 바랍니다.'}
              {language === 'en' && 'View our internal and external events, achievements, and daily activities.'}
              {language === 'zh' && '查看我们的内外部活动、成果和日常活动。'}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center text-sm font-medium text-slate-700 mr-4">
                <Filter className="h-4 w-4 mr-2" />
                {language === 'jp' && 'カテゴリ:'}
                {language === 'ko' && '카테고리:'}
                {language === 'en' && 'Category:'}
                {language === 'zh' && '类别:'}
              </span>
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className={selectedCategory === category.key ? "bg-corporate-blue hover:bg-blue-700" : ""}
                >
                  {category.label[language]}
                </Button>
              ))}
            </div>

            {/* Year Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center text-sm font-medium text-slate-700 mr-4">
                <Calendar className="h-4 w-4 mr-2" />
                {language === 'jp' && '年:'}
                {language === 'ko' && '년도:'}
                {language === 'en' && 'Year:'}
                {language === 'zh' && '年份:'}
              </span>
              <Button
                variant={selectedYear === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(null)}
                className={selectedYear === null ? "bg-corporate-blue hover:bg-blue-700" : ""}
              >
                {language === 'jp' && 'すべて'}
                {language === 'ko' && '전체'}
                {language === 'en' && 'All'}
                {language === 'zh' && '全部'}
              </Button>
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                  className={selectedYear === year ? "bg-corporate-blue hover:bg-blue-700" : ""}
                >
                  {year}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-0">
                    <div className="w-full h-64 bg-slate-200 rounded-t-lg"></div>
                    <div className="p-4">
                      <div className="h-4 bg-slate-200 rounded mb-2"></div>
                      <div className="h-3 bg-slate-200 rounded w-24"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <Card 
                  key={image.id} 
                  className="group cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => openLightbox(image, index)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.imageUrl} 
                        alt={getMultiLanguageContent(image.title, language)}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      {image.featured && (
                        <Badge className="absolute top-2 left-2 bg-anniversary-red">
                          {language === 'jp' && '注目'}
                          {language === 'ko' && '주목'}
                          {language === 'en' && 'Featured'}
                          {language === 'zh' && '精选'}
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                        {getMultiLanguageContent(image.title, language)}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>{new Date(image.createdAt).getFullYear()}年</span>
                        <span className="capitalize">{image.category}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <LayoutGrid className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '画像が見つかりません'}
                  {language === 'ko' && '이미지를 찾을 수 없습니다'}
                  {language === 'en' && 'No images found'}
                  {language === 'zh' && '未找到图片'}
                </h3>
                <p className="text-slate-600 mb-4">
                  {language === 'jp' && '選択された条件に一致する画像がありません。'}
                  {language === 'ko' && '선택된 조건에 일치하는 이미지가 없습니다.'}
                  {language === 'en' && 'No images match the selected criteria.'}
                  {language === 'zh' && '没有符合所选条件的图片。'}
                </p>
                <Button variant="outline" onClick={() => {
                  setSelectedCategory('all');
                  setSelectedYear(null);
                }}>
                  {language === 'jp' && 'フィルターをリセット'}
                  {language === 'ko' && '필터 재설정'}
                  {language === 'en' && 'Reset Filters'}
                  {language === 'zh' && '重置筛选'}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white hover:bg-opacity-20"
            >
              <X className="h-6 w-6" />
            </Button>

            {filteredImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white hover:bg-opacity-20"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white hover:bg-opacity-20"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            <img 
              src={lightboxImage.imageUrl} 
              alt={getMultiLanguageContent(lightboxImage.title, language)}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {getMultiLanguageContent(lightboxImage.title, language)}
              </h3>
              <div className="flex items-center gap-4 text-white text-sm opacity-80">
                <span>{new Date(lightboxImage.createdAt).getFullYear()}年</span>
                <span className="capitalize">{lightboxImage.category}</span>
                {filteredImages.length > 1 && (
                  <span>{lightboxIndex + 1} / {filteredImages.length}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
