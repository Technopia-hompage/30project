import { useQuery, useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";
import { getMultiLanguageContent } from "@/lib/i18n";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { JobOpening } from "@shared/schema";
import { useState } from "react";
import { 
  GraduationCap, 
  Scale3d, 
  Users, 
  MapPin, 
  Clock, 
  Building,
  Send,
  FileText,
  Mail,
  Phone
} from "lucide-react";
import careersBgImage from "@assets/ChatGPT Image 2025年6月6日 11_13_45.png";

export function Careers() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplication, setShowApplication] = useState(false);

  const { data: jobs, isLoading } = useQuery<JobOpening[]>({
    queryKey: ['/api/jobs', language],
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest('POST', '/api/contact', {
        ...data,
        category: 'career_application'
      });
    },
    onSuccess: () => {
      toast({
        title: language === 'jp' ? 'ご応募ありがとうございます' : 
               language === 'ko' ? '지원해 주셔서 감사합니다' :
               language === 'en' ? 'Thank you for your application' :
               '感谢您的申请',
        description: language === 'jp' ? '担当者より連絡いたします。' :
                    language === 'ko' ? '담당자가 연락드리겠습니다.' :
                    language === 'en' ? 'We will contact you soon.' :
                    '我们会尽快与您联系。'
      });
      setShowApplication(false);
      setSelectedJob(null);
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

  const handleApplyJob = (jobId: number) => {
    setSelectedJob(jobId);
    setShowApplication(true);
  };

  const handleSubmitApplication = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedJobData = jobs?.find(job => job.id === selectedJob);
    
    applicationMutation.mutate({
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || '',
      message: `${language === 'jp' ? '応募職種: ' : language === 'ko' ? '지원 직종: ' : language === 'en' ? 'Applied Position: ' : '申请职位: '}${getMultiLanguageContent(selectedJobData?.title, language)}\n\n${language === 'jp' ? '志望動機:\n' : language === 'ko' ? '지원 동기:\n' : language === 'en' ? 'Motivation:\n' : '申请动机:\n'}${formData.get('motivation')}\n\n${language === 'jp' ? '経験・スキル:\n' : language === 'ko' ? '경험·스킬:\n' : language === 'en' ? 'Experience & Skills:\n' : '经验·技能:\n'}${formData.get('experience')}`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${careersBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'jp' && '採用情報'}
              {language === 'ko' && '채용 정보'}
              {language === 'en' && 'Careers'}
              {language === 'zh' && '招聘信息'}
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              {language === 'jp' && '共に成長し、未来を創造するメンバーを募集しています。'}
              {language === 'ko' && '함께 성장하고 미래를 창조할 멤버를 모집하고 있습니다.'}
              {language === 'en' && 'We are looking for members who will grow together and create the future.'}
              {language === 'zh' && '我们正在寻找共同成长、创造未来的成员。'}
            </p>
          </div>


        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '働く環境・福利厚生'}
            {language === 'ko' && '근무 환경 및 복리후생'}
            {language === 'en' && 'Work Environment & Benefits'}
            {language === 'zh' && '工作环境和福利待遇'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {language === 'jp' && '成長機会'}
                  {language === 'ko' && '성장 기회'}
                  {language === 'en' && 'Growth Opportunities'}
                  {language === 'zh' && '成长机会'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '継続的な学習とスキル向上をサポート'}
                  {language === 'ko' && '지속적인 학습과 스킬 향상을 지원'}
                  {language === 'en' && 'Supporting continuous learning and skill development'}
                  {language === 'zh' && '支持持续学习和技能提升'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scale3d className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {language === 'jp' && 'ワークライフバランス'}
                  {language === 'ko' && '워크라이프 밸런스'}
                  {language === 'en' && 'Work-Life Balance'}
                  {language === 'zh' && '工作生活平衡'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '柔軟な働き方と充実した福利厚生'}
                  {language === 'ko' && '유연한 근무 방식과 충실한 복리후생'}
                  {language === 'en' && 'Flexible working styles and comprehensive benefits'}
                  {language === 'zh' && '灵活的工作方式和完善的福利待遇'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {language === 'jp' && '多様性'}
                  {language === 'ko' && '다양성'}
                  {language === 'en' && 'Diversity'}
                  {language === 'zh' && '多样性'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && 'グローバルで多様なチーム環境'}
                  {language === 'ko' && '글로벌하고 다양한 팀 환경'}
                  {language === 'en' && 'Global and diverse team environment'}
                  {language === 'zh' && '全球化多元团队环境'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '現在の募集職種'}
            {language === 'ko' && '현재 모집 중인 직종'}
            {language === 'en' && 'Current Job Openings'}
            {language === 'zh' && '当前招聘职位'}
          </h2>

          {isLoading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-6 bg-slate-200 rounded w-48 mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded w-32 mb-4"></div>
                    <div className="h-8 bg-slate-200 rounded w-24"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="mb-4 lg:mb-0 flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">
                          {getMultiLanguageContent(job.title, language)}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {job.type === 'full-time' ? (
                              language === 'jp' ? '正社員' :
                              language === 'ko' ? '정규직' :
                              language === 'en' ? 'Full-time' :
                              '全职'
                            ) : (
                              language === 'jp' ? '契約社員' :
                              language === 'ko' ? '계약직' :
                              language === 'en' ? 'Contract' :
                              '合同'
                            )}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="secondary">
                            {job.department}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {job.experience}
                          </Badge>
                        </div>
                        <p className="text-slate-600 line-clamp-2">
                          {getMultiLanguageContent(job.description, language)}
                        </p>
                      </div>
                      <Button 
                        onClick={() => handleApplyJob(job.id)}
                        className="bg-corporate-blue hover:bg-blue-700"
                      >
                        {language === 'jp' && '応募する'}
                        {language === 'ko' && '지원하기'}
                        {language === 'en' && 'Apply'}
                        {language === 'zh' && '申请'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Building className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '現在募集中の職種はありません'}
                  {language === 'ko' && '현재 모집 중인 직종이 없습니다'}
                  {language === 'en' && 'No job openings available'}
                  {language === 'zh' && '目前没有招聘职位'}
                </h3>
                <p className="text-slate-600 mb-4">
                  {language === 'jp' && '新しい求人情報は随時更新いたします。'}
                  {language === 'ko' && '새로운 채용 정보는 수시로 업데이트됩니다.'}
                  {language === 'en' && 'New job openings will be updated regularly.'}
                  {language === 'zh' && '新的招聘信息将定期更新。'}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>
                  {language === 'jp' && '応募フォーム'}
                  {language === 'ko' && '지원 양식'}
                  {language === 'en' && 'Application Form'}
                  {language === 'zh' && '申请表格'}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setShowApplication(false);
                    setSelectedJob(null);
                  }}
                >
                  ✕
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">
                      {language === 'jp' && 'お名前 *'}
                      {language === 'ko' && '이름 *'}
                      {language === 'en' && 'Name *'}
                      {language === 'zh' && '姓名 *'}
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      className="mt-1"
                      placeholder={
                        language === 'jp' ? '山田太郎' :
                        language === 'ko' ? '홍길동' :
                        language === 'en' ? 'John Doe' :
                        '张三'
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">
                      {language === 'jp' && 'メールアドレス *'}
                      {language === 'ko' && '이메일 주소 *'}
                      {language === 'en' && 'Email Address *'}
                      {language === 'zh' && '邮箱地址 *'}
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="mt-1"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="motivation">
                    {language === 'jp' && '志望動機 *'}
                    {language === 'ko' && '지원 동기 *'}
                    {language === 'en' && 'Motivation *'}
                    {language === 'zh' && '申请动机 *'}
                  </Label>
                  <Textarea 
                    id="motivation" 
                    name="motivation" 
                    rows={4} 
                    required 
                    className="mt-1"
                    placeholder={
                      language === 'jp' ? 'なぜこのポジションに応募したいのかお聞かせください...' :
                      language === 'ko' ? '이 포지션에 지원하고 싶은 이유를 알려주세요...' :
                      language === 'en' ? 'Tell us why you want to apply for this position...' :
                      '请告诉我们您为什么想要申请这个职位...'
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="experience">
                    {language === 'jp' && '関連経験・スキル'}
                    {language === 'ko' && '관련 경험·스킬'}
                    {language === 'en' && 'Relevant Experience & Skills'}
                    {language === 'zh' && '相关经验·技能'}
                  </Label>
                  <Textarea 
                    id="experience" 
                    name="experience" 
                    rows={4} 
                    className="mt-1"
                    placeholder={
                      language === 'jp' ? '関連する経験やスキルをご記入ください...' :
                      language === 'ko' ? '관련 경험이나 스킬을 기재해 주세요...' :
                      language === 'en' ? 'Please describe your relevant experience and skills...' :
                      '请描述您的相关经验和技能...'
                    }
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setShowApplication(false);
                      setSelectedJob(null);
                    }}
                    className="flex-1"
                  >
                    {language === 'jp' && 'キャンセル'}
                    {language === 'ko' && '취소'}
                    {language === 'en' && 'Cancel'}
                    {language === 'zh' && '取消'}
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={applicationMutation.isPending}
                    className="flex-1 bg-corporate-blue hover:bg-blue-700"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {applicationMutation.isPending ? (
                      language === 'jp' ? '送信中...' :
                      language === 'ko' ? '전송 중...' :
                      language === 'en' ? 'Sending...' :
                      '发送中...'
                    ) : (
                      language === 'jp' ? '応募する' :
                      language === 'ko' ? '지원하기' :
                      language === 'en' ? 'Submit Application' :
                      '提交申请'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Contact Information for Careers */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '採用に関するお問い合わせ'}
              {language === 'ko' && '채용 관련 문의'}
              {language === 'en' && 'Career Inquiries'}
              {language === 'zh' && '招聘相关咨询'}
            </h2>
            <p className="text-lg text-slate-600">
              {language === 'jp' && 'ご質問がございましたら、お気軽にお問い合わせください。'}
              {language === 'ko' && '궁금한 점이 있으시면 언제든 문의해 주세요.'}
              {language === 'en' && 'If you have any questions, please feel free to contact us.'}
              {language === 'zh' && '如有疑问，请随时联系我们。'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && 'メール'}
                  {language === 'ko' && '이메일'}
                  {language === 'en' && 'Email'}
                  {language === 'zh' && '邮箱'}
                </h3>
                <p className="text-slate-600">info@technopia.co.jp</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '電話'}
                  {language === 'ko' && '전화'}
                  {language === 'en' && 'Phone'}
                  {language === 'zh' && '电话'}
                </h3>
                <p className="text-slate-600">03-3221-4761</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <FileText className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '採用資料'}
                  {language === 'ko' && '채용 자료'}
                  {language === 'en' && 'Career Resources'}
                  {language === 'zh' && '招聘资料'}
                </h3>
                <Button variant="outline" size="sm">
                  {language === 'jp' && 'ダウンロード'}
                  {language === 'ko' && '다운로드'}
                  {language === 'en' && 'Download'}
                  {language === 'zh' && '下载'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
