import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import { getMultiLanguageContent } from "@/lib/i18n";
import { NewsArticle } from "@shared/schema";
import { useState } from "react";
import { useParams, Link } from "wouter";
import { 
  Calendar, 
  Search, 
  FileText, 
  ArrowLeft,
  Clock,
  User,
  Share2
} from "lucide-react";

export function News() {
  const { language, getLanguageRoute } = useLanguage();
  const params = useParams();
  const articleId = params.id;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Fetch single article if ID is provided
  const { data: article, isLoading: articleLoading } = useQuery<NewsArticle>({
    queryKey: ['/api/news', articleId, language],
    enabled: !!articleId,
  });

  // Fetch all articles for listing
  const { data: articles, isLoading: articlesLoading } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news', language, { 
      category: selectedCategory !== 'all' ? selectedCategory : undefined 
    }],
    enabled: !articleId,
  });

  const categories = [
    { key: 'all', label: { jp: 'すべて', ko: '전체', en: 'All', zh: '全部' }},
    { key: 'announcement', label: { jp: 'お知らせ', ko: '공지사항', en: 'Announcements', zh: '公告' }},
    { key: 'press', label: { jp: 'プレスリリース', ko: '보도자료', en: 'Press Releases', zh: '新闻稿' }},
    { key: 'events', label: { jp: 'イベント', ko: '이벤트', en: 'Events', zh: '活动' }},
    { key: 'awards', label: { jp: '受賞', ko: '수상', en: 'Awards', zh: '获奖' }},
  ];

  // Filter articles based on search query
  const filteredArticles = articles?.filter(article => {
    const title = getMultiLanguageContent(article.title, language).toLowerCase();
    const excerpt = getMultiLanguageContent(article.excerpt, language).toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || excerpt.includes(query);
  }) || [];

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString(
      language === 'jp' ? 'ja-JP' :
      language === 'ko' ? 'ko-KR' :
      language === 'en' ? 'en-US' :
      'zh-CN'
    );
  };

  // Single article view
  if (articleId) {
    if (articleLoading) {
      return (
        <div className="min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-200 rounded w-48 mb-8"></div>
              <div className="h-12 bg-slate-200 rounded mb-4"></div>
              <div className="h-6 bg-slate-200 rounded w-32 mb-8"></div>
              <div className="space-y-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="h-4 bg-slate-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (!article) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="pt-6 text-center">
              <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {language === 'jp' && '記事が見つかりません'}
                {language === 'ko' && '기사를 찾을 수 없습니다'}
                {language === 'en' && 'Article not found'}
                {language === 'zh' && '文章未找到'}
              </h2>
              <p className="text-slate-600 mb-4">
                {language === 'jp' && '指定された記事は存在しないか、削除された可能性があります。'}
                {language === 'ko' && '지정된 기사가 존재하지 않거나 삭제되었을 수 있습니다.'}
                {language === 'en' && 'The specified article does not exist or may have been deleted.'}
                {language === 'zh' && '指定的文章不存在或可能已被删除。'}
              </p>
              <Link href={getLanguageRoute('/news')}>
                <Button>
                  {language === 'jp' && 'ニュース一覧に戻る'}
                  {language === 'ko' && '뉴스 목록으로 돌아가기'}
                  {language === 'en' && 'Back to News'}
                  {language === 'zh' && '返回新闻列表'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back button */}
          <Link href={getLanguageRoute('/news')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'jp' && 'ニュース一覧に戻る'}
              {language === 'ko' && '뉴스 목록으로 돌아가기'}
              {language === 'en' && 'Back to News'}
              {language === 'zh' && '返回新闻列表'}
            </Button>
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge>{article.category}</Badge>
              {article.publishedAt && (
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  {formatDate(article.publishedAt)}
                </div>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {getMultiLanguageContent(article.title, language)}
            </h1>
          </header>

          {/* Article content */}
          <div className="prose max-w-none">
            <div className="text-lg text-slate-600 mb-8">
              {getMultiLanguageContent(article.excerpt, language)}
            </div>
            <div className="text-slate-800 leading-relaxed">
              {getMultiLanguageContent(article.content, language)}
            </div>
          </div>

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-700">
                {language === 'jp' && 'この記事をシェア:'}
                {language === 'ko' && '이 기사 공유:'}
                {language === 'en' && 'Share this article:'}
                {language === 'zh' && '分享这篇文章:'}
              </span>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                {language === 'jp' && 'シェア'}
                {language === 'ko' && '공유'}
                {language === 'en' && 'Share'}
                {language === 'zh' && '分享'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // News listing view
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'jp' && 'ニュース'}
              {language === 'ko' && '뉴스'}
              {language === 'en' && 'News'}
              {language === 'zh' && '新闻'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '最新のニュースやお知らせをご覧ください。'}
              {language === 'ko' && '최신 뉴스와 공지사항을 확인하세요.'}
              {language === 'en' && 'Stay updated with our latest news and announcements.'}
              {language === 'zh' && '查看最新新闻和公告。'}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input 
                placeholder={
                  language === 'jp' ? 'ニュースを検索...' :
                  language === 'ko' ? '뉴스 검색...' :
                  language === 'en' ? 'Search news...' :
                  '搜索新闻...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articlesLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-4 bg-slate-200 rounded w-20 mb-3"></div>
                    <div className="h-6 bg-slate-200 rounded mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-32"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={getLanguageRoute(`/news/${article.id}`)}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        {article.publishedAt && (
                          <div className="flex items-center text-xs text-slate-500">
                            <Clock className="mr-1 h-3 w-3" />
                            {formatDate(article.publishedAt)}
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2 flex-grow">
                        {getMultiLanguageContent(article.title, language)}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                        {getMultiLanguageContent(article.excerpt, language)}
                      </p>
                      <div className="text-sm text-corporate-blue font-medium">
                        {language === 'jp' && '続きを読む →'}
                        {language === 'ko' && '더 읽기 →'}
                        {language === 'en' && 'Read more →'}
                        {language === 'zh' && '阅读更多 →'}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && 'ニュースが見つかりません'}
                  {language === 'ko' && '뉴스를 찾을 수 없습니다'}
                  {language === 'en' && 'No news articles found'}
                  {language === 'zh' && '未找到新闻文章'}
                </h3>
                <p className="text-slate-600 mb-4">
                  {searchQuery ? (
                    language === 'jp' ? '検索条件に一致するニュースがありません。' :
                    language === 'ko' ? '검색 조건에 일치하는 뉴스가 없습니다.' :
                    language === 'en' ? 'No news articles match your search criteria.' :
                    '没有符合搜索条件的新闻文章。'
                  ) : (
                    language === 'jp' ? '現在表示できるニュースがありません。' :
                    language === 'ko' ? '현재 표시할 수 있는 뉴스가 없습니다.' :
                    language === 'en' ? 'No news articles are currently available.' :
                    '目前没有可显示的新闻文章。'
                  )}
                </p>
                {searchQuery && (
                  <Button variant="outline" onClick={() => setSearchQuery('')}>
                    {language === 'jp' && '検索をクリア'}
                    {language === 'ko' && '검색 지우기'}
                    {language === 'en' && 'Clear Search'}
                    {language === 'zh' && '清除搜索'}
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
