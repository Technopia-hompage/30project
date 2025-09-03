import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Plus, Edit, Trash2, Upload, Save, X, Eye } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { ImageUploader } from '@/components/ImageUploader';
import { FileUploader } from '@/components/FileUploader';

// HTML과 일반 텍스트 변환 함수
const convertHtmlToPlainText = (html: string): string => {
  if (!html) return '';
  // HTML 태그를 제거하고 일반 텍스트로 변환
  return html
    .replace(/<div[^>]*>/g, '\n')
    .replace(/<\/div>/g, '')
    .replace(/<p[^>]*>/g, '')
    .replace(/<\/p>/g, '\n\n')
    .replace(/<h[1-6][^>]*>/g, '')
    .replace(/<\/h[1-6]>/g, '\n\n')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
};

const convertPlainTextToHtml = (text: string): string => {
  if (!text) return '';
  // 일반 텍스트를 간단한 HTML로 변환
  return text
    .split('\n\n')
    .filter(paragraph => paragraph.trim())
    .map(paragraph => `<p>${paragraph.trim().replace(/\n/g, '<br>')}</p>`)
    .join('\n');
};

interface NewsArticle {
  id?: number;
  title: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  content: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  excerpt: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  category: string;
  published: boolean;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  imageUrl?: string;
  attachedFiles?: Array<{ url: string; name: string }>;
}

const categories = [
  { id: 'general', name: { jp: '一般', ko: '일반', en: 'General', zh: '通用' } },
  { id: 'announcement', name: { jp: 'お知らせ', ko: '공지사항', en: 'Announcement', zh: '公告' } },
  { id: 'event', name: { jp: 'イベント', ko: '이벤트', en: 'Event', zh: '活动' } },
  { id: 'product', name: { jp: '製品', ko: '제품', en: 'Product', zh: '产品' } },
  { id: 'company', name: { jp: '会社', ko: '회사', en: 'Company', zh: '公司' } }
];

const emptyArticle: NewsArticle = {
  title: { jp: '', ko: '', en: '', zh: '' },
  content: { jp: '', ko: '', en: '', zh: '' },
  excerpt: { jp: '', ko: '', en: '', zh: '' },
  category: 'general',
  published: false,
  imageUrl: '',
  attachedFiles: []
};

export function NewsAdmin() {
  const { language, getLanguageRoute } = useLanguage();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
  const [currentLang, setCurrentLang] = useState<'jp' | 'ko' | 'en' | 'zh'>('jp');

  // Fetch news articles
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['/api/news'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/api/news');
      if (!response.ok) throw new Error('Failed to fetch news');
      return response.json();
    }
  });

  // Create/Update article mutation
  const createArticleMutation = useMutation({
    mutationFn: async (articleData: NewsArticle) => {
      const url = articleData.id ? `http://localhost:5000/api/news/${articleData.id}` : 'http://localhost:5000/api/news';
      const method = articleData.id ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save article');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/news'] });
      setIsDialogOpen(false);
      setEditingArticle(null);
      toast({
        title: language === 'jp' ? '成功' : language === 'ko' ? '성공' : language === 'en' ? 'Success' : '成功',
        description: language === 'jp' ? '記事を保存しました。' : language === 'ko' ? '기사를 저장했습니다.' : language === 'en' ? 'Article saved successfully.' : '文章保存成功。'
      });
    },
    onError: (error) => {
      toast({
        title: language === 'jp' ? 'エラー' : language === 'ko' ? '오류' : language === 'en' ? 'Error' : '错误',
        description: language === 'jp' ? '記事の保存に失敗しました。' : language === 'ko' ? '기사 저장에 실패했습니다.' : language === 'en' ? 'Failed to save article.' : '文章保存失败。',
        variant: 'destructive'
      });
    }
  });

  // Delete article mutation
  const deleteArticleMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`http://localhost:5000/api/news/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete article');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/news'] });
      toast({
        title: language === 'jp' ? '成功' : language === 'ko' ? '성공' : language === 'en' ? 'Success' : '成功',
        description: language === 'jp' ? '記事を削除しました。' : language === 'ko' ? '기사를 삭제했습니다.' : language === 'en' ? 'Article deleted successfully.' : '文章删除成功。'
      });
    },
    onError: () => {
      toast({
        title: language === 'jp' ? 'エラー' : language === 'ko' ? '오류' : language === 'en' ? 'Error' : '错误',
        description: language === 'jp' ? '記事の削除に失敗しました。' : language === 'ko' ? '기사 삭제에 실패했습니다.' : language === 'en' ? 'Failed to delete article.' : '文章删除失败。',
        variant: 'destructive'
      });
    }
  });

  const handleSave = () => {
    if (!editingArticle) return;

    // Basic validation - check if at least one language has content
    const requiredFields: (keyof Pick<NewsArticle, 'title' | 'content' | 'excerpt'>)[] = ['title', 'content', 'excerpt'];
    
    for (const field of requiredFields) {
      const fieldValue = editingArticle[field];
      if (typeof fieldValue === 'object' && fieldValue) {
        // Check if at least one language has content for this field
        const hasContent = Object.values(fieldValue).some(value => value && value.trim() !== '');
        if (!hasContent) {
          toast({
            title: language === 'jp' ? '入力エラー' : language === 'ko' ? '입력 오류' : language === 'en' ? 'Input Error' : '输入错误',
            description: language === 'jp' ? `${field === 'title' ? 'タイトル' : field === 'content' ? '内容' : '概要'}を入力してください。` : 
                        language === 'ko' ? `${field === 'title' ? '제목' : field === 'content' ? '내용' : '요약'}을 입력해주세요.` : 
                        language === 'en' ? `Please enter ${field === 'title' ? 'title' : field === 'content' ? 'content' : 'excerpt'}.` : 
                        `请输入${field === 'title' ? '标题' : field === 'content' ? '内容' : '摘要'}。`,
            variant: 'destructive'
          });
          return;
        }
      }
    }

    createArticleMutation.mutate(editingArticle);
  };

  const handleEdit = (article: NewsArticle) => {
    // Ensure imageUrl is preserved when editing
    setEditingArticle({
      ...article,
      imageUrl: article.imageUrl || ''
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm(
      language === 'jp' ? 'この記事を削除しますか？' :
      language === 'ko' ? '이 기사를 삭제하시겠습니까?' :
      language === 'en' ? 'Are you sure you want to delete this article?' :
      '确定要删除这篇文章吗？'
    )) {
      deleteArticleMutation.mutate(id);
    }
  };

  const openCreateDialog = () => {
    setEditingArticle({ ...emptyArticle });
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-b-corporate-blue mx-auto"></div>
          <p className="mt-4 text-lg">
            {language === 'jp' ? '読み込み中...' : 
             language === 'ko' ? '로딩 중...' : 
             language === 'en' ? 'Loading...' : '加载中...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-slate-50 high-quality-text cjk-text-optimize jp-text-optimize ${language === 'jp' ? 'jp-mode' : ''}`} data-lang={language}>
      {/* Header */}
      <section className="corporate-gradient text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href={getLanguageRoute('/news')}>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {language === 'jp' && 'ニュースに戻る'}
                  {language === 'ko' && '뉴스로 돌아가기'}
                  {language === 'en' && 'Back to News'}
                  {language === 'zh' && '返回新闻'}
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold high-quality-text">
                  {language === 'jp' && 'ニュース管理'}
                  {language === 'ko' && '뉴스 관리'}
                  {language === 'en' && 'News Management'}
                  {language === 'zh' && '新闻管理'}
                </h1>
                <p className="text-white/80">
                  {language === 'jp' && 'ニュース記事の作成・編集・削除'}
                  {language === 'ko' && '뉴스 기사 생성, 편집, 삭제'}
                  {language === 'en' && 'Create, edit, and delete news articles'}
                  {language === 'zh' && '创建、编辑和删除新闻文章'}
                </p>
              </div>
            </div>
            <Button onClick={openCreateDialog} className="bg-white text-corporate-blue hover:bg-slate-100">
              <Plus className="h-4 w-4 mr-2" />
              {language === 'jp' && '新しい記事'}
              {language === 'ko' && '새 기사'}
              {language === 'en' && 'New Article'}
              {language === 'zh' && '新文章'}
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="high-quality-text">
              {language === 'jp' && '記事一覧'}
              {language === 'ko' && '기사 목록'}
              {language === 'en' && 'Articles List'}
              {language === 'zh' && '文章列表'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {language === 'jp' && 'タイトル'}
                    {language === 'ko' && '제목'}
                    {language === 'en' && 'Title'}
                    {language === 'zh' && '标题'}
                  </TableHead>
                  <TableHead>
                    {language === 'jp' && 'カテゴリ'}
                    {language === 'ko' && '카테고리'}
                    {language === 'en' && 'Category'}
                    {language === 'zh' && '类别'}
                  </TableHead>
                  <TableHead>
                    {language === 'jp' && 'ステータス'}
                    {language === 'ko' && '상태'}
                    {language === 'en' && 'Status'}
                    {language === 'zh' && '状态'}
                  </TableHead>
                  <TableHead>
                    {language === 'jp' && '作成日'}
                    {language === 'ko' && '생성일'}
                    {language === 'en' && 'Created'}
                    {language === 'zh' && '创建日期'}
                  </TableHead>
                  <TableHead>
                    {language === 'jp' && 'アクション'}
                    {language === 'ko' && '작업'}
                    {language === 'en' && 'Actions'}
                    {language === 'zh' && '操作'}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.map((article: NewsArticle) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">
                      {article.title[language] || article.title.jp}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {categories.find(cat => cat.id === article.category)?.name[language] || article.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={article.published ? "default" : "secondary"}>
                        {article.published ? 
                          (language === 'jp' ? '公開' : language === 'ko' ? '공개' : language === 'en' ? 'Published' : '已发布') :
                          (language === 'jp' ? '下書き' : language === 'ko' ? '초안' : language === 'en' ? 'Draft' : '草稿')
                        }
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(article)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => article.id && handleDelete(article.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 shadow-2xl font-sans antialiased high-quality-text cjk-text-optimize jp-text-optimize">
          <DialogHeader>
            <DialogTitle className="high-quality-text">
              {editingArticle?.id ? 
                (language === 'jp' ? '記事編集' : language === 'ko' ? '기사 편집' : language === 'en' ? 'Edit Article' : '编辑文章') :
                (language === 'jp' ? '新しい記事' : language === 'ko' ? '새 기사' : language === 'en' ? 'New Article' : '新文章')
              }
            </DialogTitle>
          </DialogHeader>
          
          {editingArticle && (
            <div className="space-y-6 p-2 high-quality-text jp-text-optimize">
              {/* Language Selector */}
              <div className="flex space-x-2">
                {(['jp', 'ko', 'en', 'zh'] as const).map((lang) => (
                  <Button
                    key={lang}
                    variant={currentLang === lang ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentLang(lang)}
                  >
                    {lang === 'jp' && '日本語'}
                    {lang === 'ko' && '한국어'}
                    {lang === 'en' && 'English'}
                    {lang === 'zh' && '中文'}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div className="space-y-2">
                  <Label>
                    {language === 'jp' && 'カテゴリ'}
                    {language === 'ko' && '카테고리'}
                    {language === 'en' && 'Category'}
                    {language === 'zh' && '类别'}
                  </Label>
                  <Select
                    value={editingArticle.category}
                    onValueChange={(value) => setEditingArticle({ ...editingArticle, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name[language]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Published Status */}
                <div className="space-y-2">
                  <Label>
                    {language === 'jp' && '公開状態'}
                    {language === 'ko' && '공개 상태'}
                    {language === 'en' && 'Published Status'}
                    {language === 'zh' && '发布状态'}
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={editingArticle.published}
                      onCheckedChange={(checked) => setEditingArticle({ ...editingArticle, published: checked })}
                    />
                    <span className="text-sm">
                      {editingArticle.published ? 
                        (language === 'jp' ? '公開' : language === 'ko' ? '공개' : language === 'en' ? 'Published' : '已发布') :
                        (language === 'jp' ? '下書き' : language === 'ko' ? '초안' : language === 'en' ? 'Draft' : '草稿')
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label>
                  {language === 'jp' && 'タイトル'}
                  {language === 'ko' && '제목'}
                  {language === 'en' && 'Title'}
                  {language === 'zh' && '标题'}
                  ({currentLang.toUpperCase()})
                </Label>
                <Input
                  value={editingArticle.title[currentLang]}
                  onChange={(e) => setEditingArticle({
                    ...editingArticle,
                    title: { ...editingArticle.title, [currentLang]: e.target.value }
                  })}
                  placeholder={
                    language === 'jp' ? 'タイトルを入力' :
                    language === 'ko' ? '제목을 입력하세요' :
                    language === 'en' ? 'Enter title' :
                    '输入标题'
                  }
                  className="border-2 border-slate-200 focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 rounded-lg p-3 font-sans antialiased text-base transition-all duration-200 bg-white shadow-sm"
                />
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label>
                  {language === 'jp' && '概要'}
                  {language === 'ko' && '요약'}
                  {language === 'en' && 'Excerpt'}
                  {language === 'zh' && '摘要'}
                  ({currentLang.toUpperCase()})
                </Label>
                <Textarea
                  value={editingArticle.excerpt[currentLang]}
                  onChange={(e) => setEditingArticle({
                    ...editingArticle,
                    excerpt: { ...editingArticle.excerpt, [currentLang]: e.target.value }
                  })}
                  placeholder={
                    language === 'jp' ? '概要を入力' :
                    language === 'ko' ? '요약을 입력하세요' :
                    language === 'en' ? 'Enter excerpt' :
                    '输入摘要'
                  }
                  rows={3}
                  className="border-2 border-slate-200 focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 rounded-lg p-3 font-sans antialiased text-base leading-relaxed resize-none transition-all duration-200 bg-white shadow-sm"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label>
                  {language === 'jp' && '内容'}
                  {language === 'ko' && '내용'}
                  {language === 'en' && 'Content'}
                  {language === 'zh' && '内容'}
                  ({currentLang.toUpperCase()})
                </Label>
                <div className="text-sm text-slate-600 mb-2 font-sans">
                  {language === 'jp' ? '一般的なテキストを入力してください。改行は自動的に段落として処理されます。' :
                   language === 'ko' ? '일반 텍스트를 입력하세요. 줄바꿈은 자동으로 단락으로 처리됩니다.' :
                   language === 'en' ? 'Enter plain text. Line breaks will be automatically converted to paragraphs.' :
                   '输入普通文本。换行将自动转换为段落。'}
                </div>
                <Textarea
                  value={convertHtmlToPlainText(editingArticle.content[currentLang] || '')}
                  onChange={(e) => setEditingArticle({
                    ...editingArticle,
                    content: { ...editingArticle.content, [currentLang]: convertPlainTextToHtml(e.target.value) }
                  })}
                  placeholder={
                    language === 'jp' ? '内容を入力してください...\n\n例：\n2024年年末年始の休業期間についてお知らせいたします。\n\n平素は格別のご高配を賜り、厚く御礼申し上げます。' :
                    language === 'ko' ? '내용을 입력하세요...\n\n예시：\n연말연시 휴무 기간에 대해 안내드립니다.\n\n항상 저희를 이용해주셔서 감사합니다.' :
                    language === 'en' ? 'Enter content...\n\nExample:\nWe would like to inform you about our year-end holiday period.\n\nThank you for your continued support.' :
                    '输入内容...\n\n示例：\n我们想通知您有关年终假期的安排。\n\n感谢您一直以来的支持。'
                  }
                  rows={12}
                  className="text-base leading-relaxed resize-none border-2 border-slate-200 focus:border-corporate-blue focus:ring-2 focus:ring-corporate-blue/20 rounded-lg p-4 font-sans antialiased transition-all duration-200 bg-white shadow-sm"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <ImageUploader
                  label={
                    language === 'jp' ? '記事画像' :
                    language === 'ko' ? '기사 이미지' :
                    language === 'en' ? 'Article Image' :
                    '文章图片'
                  }
                  currentImageUrl={editingArticle.imageUrl}
                  onImageUploaded={(imageUrl) => setEditingArticle({
                    ...editingArticle,
                    imageUrl
                  })}
                  onImageRemoved={() => setEditingArticle({
                    ...editingArticle,
                    imageUrl: ''
                  })}
                />
              </div>

              {/* File Attachments */}
              <div className="space-y-2">
                <FileUploader
                  label={
                    language === 'jp' ? 'ファイル添付' :
                    language === 'ko' ? '파일 첨부' :
                    language === 'en' ? 'File Attachments' :
                    '文件附件'
                  }
                  attachedFiles={editingArticle.attachedFiles || []}
                  onFileUploaded={(fileUrl, fileName) => setEditingArticle({
                    ...editingArticle,
                    attachedFiles: [...(editingArticle.attachedFiles || []), { url: fileUrl, name: fileName }]
                  })}
                  onFileRemoved={(index) => setEditingArticle({
                    ...editingArticle,
                    attachedFiles: editingArticle.attachedFiles?.filter((_, i) => i !== index) || []
                  })}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsDialogOpen(false);
                    setEditingArticle(null);
                  }}
                >
                  {language === 'jp' && 'キャンセル'}
                  {language === 'ko' && '취소'}
                  {language === 'en' && 'Cancel'}
                  {language === 'zh' && '取消'}
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={createArticleMutation.isPending}
                  style={{backgroundColor: '#186c84'}}
                  className="text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {createArticleMutation.isPending ?
                    (language === 'jp' ? '保存中...' : language === 'ko' ? '저장 중...' : language === 'en' ? 'Saving...' : '保存中...') :
                    (language === 'jp' ? '保存' : language === 'ko' ? '저장' : language === 'en' ? 'Save' : '保存')
                  }
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}