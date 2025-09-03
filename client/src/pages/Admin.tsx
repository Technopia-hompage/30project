import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/hooks/useLanguage";
import { getMultiLanguageContent } from "@/lib/i18n";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  NewsArticle, 
  GalleryImage, 
  JobOpening, 
  ContactMessage, 
  CompanyTimelineEvent, 
  BusinessDivision 
} from "@shared/schema";
import { 
  FileText, 
  Image, 
  Briefcase, 
  MessageSquare, 
  FlagTriangleRight, 
  Building2,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Eye,
  Calendar,
  User,
  BarChart3
} from "lucide-react";

export function Admin() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [editingItem, setEditingItem] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch data for different sections
  const { data: stats } = useQuery({
    queryKey: ['/api/stats'],
  });

  const { data: news } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news', language, { published: undefined }],
  });

  const { data: gallery } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery', language],
  });

  const { data: jobs } = useQuery<JobOpening[]>({
    queryKey: ['/api/jobs', language, { active: undefined }],
  });

  const { data: messages } = useQuery<ContactMessage[]>({
    queryKey: ['/api/contact'],
  });

  const { data: timeline } = useQuery<CompanyTimelineEvent[]>({
    queryKey: ['/api/timeline', language],
  });

  const { data: divisions } = useQuery<BusinessDivision[]>({
    queryKey: ['/api/divisions', language],
  });

  // Generic mutation for creating/updating content
  const contentMutation = useMutation({
    mutationFn: async ({ endpoint, method, data }: { endpoint: string; method: string; data: any }) => {
      return apiRequest(method, endpoint, data);
    },
    onSuccess: (_, variables) => {
      toast({
        title: language === 'jp' ? '保存しました' : 
               language === 'ko' ? '저장했습니다' :
               language === 'en' ? 'Saved successfully' :
               '保存成功',
      });
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: [variables.endpoint.split('/')[2]] });
      setShowForm(false);
      setEditingItem(null);
    },
    onError: () => {
      toast({
        title: language === 'jp' ? 'エラーが発生しました' :
               language === 'ko' ? '오류가 발생했습니다' :
               language === 'en' ? 'An error occurred' :
               '发生错误',
        variant: "destructive"
      });
    },
  });

  const handleSubmit = (endpoint: string, data: any, isEdit: boolean = false) => {
    contentMutation.mutate({
      endpoint,
      method: isEdit ? 'PUT' : 'POST',
      data
    });
  };

  const formatDate = (date: string | Date | null) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">
              {language === 'jp' && '管理画面'}
              {language === 'ko' && '관리 화면'}
              {language === 'en' && 'Admin Dashboard'}
              {language === 'zh' && '管理面板'}
            </h1>
            <Badge variant="secondary">
              {language === 'jp' && '管理者'}
              {language === 'ko' && '관리자'}
              {language === 'en' && 'Administrator'}
              {language === 'zh' && '管理员'}
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              {language === 'jp' && 'ダッシュボード'}
              {language === 'ko' && '대시보드'}
              {language === 'en' && 'Dashboard'}
              {language === 'zh' && '仪表板'}
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              {language === 'jp' && 'ニュース'}
              {language === 'ko' && '뉴스'}
              {language === 'en' && 'News'}
              {language === 'zh' && '新闻'}
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              {language === 'jp' && 'ギャラリー'}
              {language === 'ko' && '갤러리'}
              {language === 'en' && 'Gallery'}
              {language === 'zh' && '画廊'}
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              {language === 'jp' && '採用'}
              {language === 'ko' && '채용'}
              {language === 'en' && 'Jobs'}
              {language === 'zh' && '招聘'}
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              {language === 'jp' && 'メッセージ'}
              {language === 'ko' && '메시지'}
              {language === 'en' && 'Messages'}
              {language === 'zh' && '消息'}
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <FlagTriangleRight className="h-4 w-4" />
              {language === 'jp' && '年表'}
              {language === 'ko' && '연표'}
              {language === 'en' && 'FlagTriangleRight'}
              {language === 'zh' && '时间线'}
            </TabsTrigger>
            <TabsTrigger value="divisions" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              {language === 'jp' && '事業部門'}
              {language === 'ko' && '사업 부문'}
              {language === 'en' && 'Divisions'}
              {language === 'zh' && '业务部门'}
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {language === 'jp' && '総ニュース数'}
                        {language === 'ko' && '총 뉴스 수'}
                        {language === 'en' && 'Total News'}
                        {language === 'zh' && '新闻总数'}
                      </p>
                      <p className="text-2xl font-bold text-slate-900">{(stats as any)?.news || 0}</p>
                    </div>
                    <FileText className="h-8 w-8 text-corporate-blue" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {language === 'jp' && '総画像数'}
                        {language === 'ko' && '총 이미지 수'}
                        {language === 'en' && 'Total Images'}
                        {language === 'zh' && '图片总数'}
                      </p>
                      <p className="text-2xl font-bold text-slate-900">{(gallery || []).length}</p>
                    </div>
                    <Image className="h-8 w-8 text-success-green" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {language === 'jp' && '総求人数'}
                        {language === 'ko' && '총 채용 수'}
                        {language === 'en' && 'Total Jobs'}
                        {language === 'zh' && '招聘总数'}
                      </p>
                      <p className="text-2xl font-bold text-slate-900">{(jobs || []).length}</p>
                    </div>
                    <Briefcase className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {language === 'jp' && '総メッセージ数'}
                        {language === 'ko' && '총 메시지 수'}
                        {language === 'en' && 'Total Messages'}
                        {language === 'zh' && '消息总数'}
                      </p>
                      <p className="text-2xl font-bold text-slate-900">{(messages || []).length}</p>
                    </div>
                    <MessageSquare className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'jp' && '最近のアクティビティ'}
                  {language === 'ko' && '최근 활동'}
                  {language === 'en' && 'Recent Activity'}
                  {language === 'zh' && '最近活动'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages?.slice(0, 5).map((message) => (
                    <div key={message.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="h-5 w-5 text-slate-400" />
                        <div>
                          <p className="font-medium text-slate-900">{message.name}</p>
                          <p className="text-sm text-slate-600">{message.category}</p>
                        </div>
                      </div>
                      <div className="text-sm text-slate-500">
                        {formatDate(message.createdAt)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-900">
                {language === 'jp' && 'ニュース管理'}
                {language === 'ko' && '뉴스 관리'}
                {language === 'en' && 'News Management'}
                {language === 'zh' && '新闻管理'}
              </h2>
              <Button onClick={() => setShowForm(true)} className="bg-corporate-blue hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                {language === 'jp' && '新規作成'}
                {language === 'ko' && '새로 만들기'}
                {language === 'en' && 'Create New'}
                {language === 'zh' && '新建'}
              </Button>
            </div>

            <div className="grid gap-4">
              {news?.map((article) => (
                <Card key={article.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={article.published ? "default" : "secondary"}>
                            {article.category}
                          </Badge>
                          <Badge variant={article.published ? "default" : "destructive"}>
                            {article.published ? (
                              language === 'jp' ? '公開' : language === 'ko' ? '공개' : language === 'en' ? 'Published' : '已发布'
                            ) : (
                              language === 'jp' ? '下書き' : language === 'ko' ? '초안' : language === 'en' ? 'Draft' : '草稿'
                            )}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {getMultiLanguageContent(article.title, language)}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {getMultiLanguageContent(article.excerpt, language)}
                        </p>
                        <p className="text-xs text-slate-500 mt-2">
                          {article.publishedAt && formatDate(article.publishedAt)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setEditingItem(article)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-900">
                {language === 'jp' && 'ギャラリー管理'}
                {language === 'ko' && '갤러리 관리'}
                {language === 'en' && 'Gallery Management'}
                {language === 'zh' && '画廊管理'}
              </h2>
              <Button onClick={() => setShowForm(true)} className="bg-corporate-blue hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                {language === 'jp' && '画像追加'}
                {language === 'ko' && '이미지 추가'}
                {language === 'en' && 'Add Image'}
                {language === 'zh' && '添加图片'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery?.map((image) => (
                <Card key={image.id}>
                  <CardContent className="p-0">
                    <img 
                      src={image.imageUrl} 
                      alt={getMultiLanguageContent(image.title, language)}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{image.category}</Badge>
                        <Badge variant="outline">{new Date(image.createdAt).getFullYear()}年</Badge>
                        {image.featured && (
                          <Badge className="bg-anniversary-red">
                            {language === 'jp' && '注目'}
                            {language === 'ko' && '주목'}
                            {language === 'en' && 'Featured'}
                            {language === 'zh' && '精选'}
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-medium text-slate-900 mb-2">
                        {getMultiLanguageContent(image.title, language)}
                      </h3>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => setEditingItem(image)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-900">
                {language === 'jp' && '求人管理'}
                {language === 'ko' && '채용 관리'}
                {language === 'en' && 'Job Management'}
                {language === 'zh' && '招聘管理'}
              </h2>
              <Button onClick={() => setShowForm(true)} className="bg-corporate-blue hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                {language === 'jp' && '求人追加'}
                {language === 'ko' && '채용 추가'}
                {language === 'en' && 'Add Job'}
                {language === 'zh' && '添加职位'}
              </Button>
            </div>

            <div className="grid gap-4">
              {jobs?.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={job.active ? "default" : "secondary"}>
                            {job.department}
                          </Badge>
                          <Badge variant="outline">{job.location}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                          <Badge variant={job.active ? "default" : "destructive"}>
                            {job.active ? (
                              language === 'jp' ? '募集中' : language === 'ko' ? '모집 중' : language === 'en' ? 'Active' : '招聘中'
                            ) : (
                              language === 'jp' ? '停止' : language === 'ko' ? '중단' : language === 'en' ? 'Inactive' : '已停止'
                            )}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {getMultiLanguageContent(job.title, language)}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {getMultiLanguageContent(job.description, language)}
                        </p>
                        <p className="text-xs text-slate-500 mt-2">
                          {job.experience}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setEditingItem(job)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-xl font-semibold text-slate-900">
              {language === 'jp' && 'お問い合わせ管理'}
              {language === 'ko' && '문의 관리'}
              {language === 'en' && 'Contact Messages'}
              {language === 'zh' && '联系消息'}
            </h2>

            <div className="grid gap-4">
              {messages?.map((message) => (
                <Card key={message.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{message.category}</Badge>
                          <Badge variant={
                            message.status === 'new' ? 'destructive' :
                            message.status === 'read' ? 'default' : 'secondary'
                          }>
                            {message.status === 'new' ? (
                              language === 'jp' ? '新着' : language === 'ko' ? '신규' : language === 'en' ? 'New' : '新'
                            ) : message.status === 'read' ? (
                              language === 'jp' ? '確認済' : language === 'ko' ? '확인됨' : language === 'en' ? 'Read' : '已读'
                            ) : (
                              language === 'jp' ? '返信済' : language === 'ko' ? '답변됨' : language === 'en' ? 'Replied' : '已回复'
                            )}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-semibold text-slate-900">{message.name}</h3>
                          <span className="text-sm text-slate-600">{message.email}</span>
                          {message.company && (
                            <span className="text-sm text-slate-500">({message.company})</span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 line-clamp-3 mb-2">
                          {message.message}
                        </p>
                        <p className="text-xs text-slate-500">
                          {formatDate(message.createdAt)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FlagTriangleRight Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-900">
                {language === 'jp' && '年表管理'}
                {language === 'ko' && '연표 관리'}
                {language === 'en' && 'FlagTriangleRight Management'}
                {language === 'zh' && '时间线管理'}
              </h2>
              <Button onClick={() => setShowForm(true)} className="bg-corporate-blue hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                {language === 'jp' && 'イベント追加'}
                {language === 'ko' && '이벤트 추가'}
                {language === 'en' && 'Add Event'}
                {language === 'zh' && '添加事件'}
              </Button>
            </div>

            <div className="grid gap-4">
              {timeline?.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-corporate-blue">{event.year}年</Badge>
                          {event.featured && (
                            <Badge className="bg-anniversary-red">
                              {language === 'jp' && '重要'}
                              {language === 'ko' && '중요'}
                              {language === 'en' && 'Important'}
                              {language === 'zh' && '重要'}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {getMultiLanguageContent(event.title, language)}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {getMultiLanguageContent(event.description, language)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setEditingItem(event)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Divisions Tab */}
          <TabsContent value="divisions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-900">
                {language === 'jp' && '事業部門管理'}
                {language === 'ko' && '사업 부문 관리'}
                {language === 'en' && 'Division Management'}
                {language === 'zh' && '业务部门管理'}
              </h2>
              <Button onClick={() => setShowForm(true)} className="bg-corporate-blue hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                {language === 'jp' && '部門追加'}
                {language === 'ko' && '부문 추가'}
                {language === 'en' && 'Add Division'}
                {language === 'zh' && '添加部门'}
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {divisions?.map((division) => (
                <Card key={division.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="w-12 h-12 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: division.color }}
                          >
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">
                              {getMultiLanguageContent(division.name, language)}
                            </h3>
                            {division.featured && (
                              <Badge className="bg-corporate-blue mt-1">
                                {language === 'jp' && '注目事業'}
                                {language === 'ko' && '주목 사업'}
                                {language === 'en' && 'Featured'}
                                {language === 'zh' && '重点业务'}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 line-clamp-3">
                          {getMultiLanguageContent(division.description, language)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Button variant="outline" size="sm" onClick={() => setEditingItem(division)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
