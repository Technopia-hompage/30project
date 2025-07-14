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
        className="py-16 lg:py-24 relative overflow-hidden min-h-[70vh]"
        style={{
          backgroundImage: `url(${careersBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[50vh]">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              {language === 'jp' && '新規・中途採用情報'}
              {language === 'ko' && '신규·경력채용 정보'}
              {language === 'en' && 'New & Experienced Hiring'}
              {language === 'zh' && '新毕业生·有经验者招聘'}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl leading-relaxed">
              {language === 'jp' && '失敗を恐れず常にチャレンジを続け、顧客に感動と喜びを与え、社会に貢献できる企業を目指しています。'}
              {language === 'ko' && '실패를 두려워하지 않고 항상 도전을 계속하며, 고객에게 감동과 기쁨을 주고 사회에 기여할 수 있는 기업을 목표로 합니다.'}
              {language === 'en' && 'We aim to be a company that continuously challenges without fear of failure, bringing joy and excitement to customers while contributing to society.'}
              {language === 'zh' && '我们致力于成为一家不惧失败、勇于挑战，为客户带来感动和喜悦，为社会做出贡献的企业。'}
            </p>
          </div>


        </div>
      </section>


      {/* Company Vision Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '応募者に求める志向性・人物像'}
            {language === 'ko' && '지원자에게 요구하는 지향성·인물상'}
            {language === 'en' && 'Desired Qualities & Characteristics'}
            {language === 'zh' && '对应聘者的要求和期望人物形象'}
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {language === 'jp' && '1995年創立以来、失敗を恐れず常にチャレンジを続けられたのは顧客に感動と喜びを与え、社会に貢献できる企業になるという明確な目標の中で、ポジティブな思考、新たな価値を創造したいという意欲、これを実現する様々な能力が集まった結果だと思います。'}
              {language === 'ko' && '1995년 창립 이래, 실패를 두려워하지 않고 항상 도전을 계속할 수 있었던 것은 고객에게 감동과 기쁨을 주고 사회에 기여할 수 있는 기업이 되겠다는 명확한 목표 하에서, 긍정적인 사고, 새로운 가치를 창조하고자 하는 의욕, 이를 실현하는 다양한 능력이 모인 결과라고 생각합니다.'}
              {language === 'en' && 'Since our founding in 1995, we have been able to continuously challenge ourselves without fear of failure thanks to the combination of positive thinking, desire to create new value, and various capabilities to achieve our clear goal of becoming a company that brings joy and excitement to customers while contributing to society.'}
              {language === 'zh' && '自1995年创立以来，我们能够不惧失败、持续挑战，是因为在为客户带来感动和喜悦、为社会做出贡献这一明确目标下，积极思维、创造新价值的意愿以及实现这一目标的各种能力汇聚在一起的结果。'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {language === 'jp' && '自発的な行動力'}
                  {language === 'ko' && '자발적인 행동력'}
                  {language === 'en' && 'Proactive Action'}
                  {language === 'zh' && '自发的行动力'}
                </h3>
                <p className="text-sm text-slate-600">
                  {language === 'jp' && '情報を収集分析してビジネスを構築するための能力'}
                  {language === 'ko' && '정보를 수집 분석하여 비즈니스를 구축하는 능력'}
                  {language === 'en' && 'Ability to collect and analyze information to build business'}
                  {language === 'zh' && '收集分析信息构建业务的能力'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale3d className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {language === 'jp' && '論理的思考能力'}
                  {language === 'ko' && '논리적 사고능력'}
                  {language === 'en' && 'Logical Thinking'}
                  {language === 'zh' && '逻辑思维能力'}
                </h3>
                <p className="text-sm text-slate-600">
                  {language === 'jp' && '物事のストーリーを整理して分析し説明するための能力'}
                  {language === 'ko' && '사물의 스토리를 정리하여 분석하고 설명하는 능력'}
                  {language === 'en' && 'Ability to organize, analyze and explain the story of things'}
                  {language === 'zh' && '整理分析和解释事物故事的能力'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {language === 'jp' && 'リーダーシップ'}
                  {language === 'ko' && '리더십'}
                  {language === 'en' && 'Leadership'}
                  {language === 'zh' && '领导力'}
                </h3>
                <p className="text-sm text-slate-600">
                  {language === 'jp' && '関係者のやる気を引き出し、チームをまとめあげる能力'}
                  {language === 'ko' && '관계자의 의욕을 끌어내고 팀을 정리하는 능력'}
                  {language === 'en' && 'Ability to motivate stakeholders and bring teams together'}
                  {language === 'zh' && '激发相关人员积极性并团结团队的能力'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {language === 'jp' && 'コミュニケーション能力'}
                  {language === 'ko' && '커뮤니케이션 능력'}
                  {language === 'en' && 'Communication Skills'}
                  {language === 'zh' && '沟通能力'}
                </h3>
                <p className="text-sm text-slate-600">
                  {language === 'jp' && '相手の伝えたいことを理解し、こちらの伝えたいことを確実に相手に理解させる能力'}
                  {language === 'ko' && '상대방이 전하고자 하는 것을 이해하고, 이쪽에서 전하고자 하는 것을 확실히 상대방에게 이해시키는 능력'}
                  {language === 'en' && 'Ability to understand what others want to convey and ensure others understand what you want to convey'}
                  {language === 'zh' && '理解对方想要传达的内容，并确保对方理解自己想要传达的内容的能力'}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              {language === 'jp' && 'このような能力を備えた方々と共に弊社は新たな価値を創造し、お客様を支える企業を目指し成長していきたいと考えております。そんな方とお会い出来ることを楽しみにしています。'}
              {language === 'ko' && '이러한 능력을 갖춘 분들과 함께 저희는 새로운 가치를 창조하고, 고객을 지원하는 기업을 목표로 성장해 나가고자 합니다. 그런 분과 만날 수 있기를 기대하고 있습니다.'}
              {language === 'en' && 'Together with those who possess such abilities, we aim to create new value and grow as a company that supports our customers. We look forward to meeting such individuals.'}
              {language === 'zh' && '我们希望与具备这些能力的人士一起，创造新价值，朝着支持客户的企业目标成长。我们期待与这样的人士见面。'}
            </p>
          </div>
        </div>
      </section>

      {/* Job Requirements Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '募集要項'}
            {language === 'ko' && '모집 요강'}
            {language === 'en' && 'Job Requirements'}
            {language === 'zh' && '招聘要求'}
          </h2>
          
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 px-4 bg-slate-50 font-semibold text-slate-900 min-w-[150px]">
                        {language === 'jp' && '職種・仕事内容'}
                        {language === 'ko' && '직종·업무내용'}
                        {language === 'en' && 'Position & Job Description'}
                        {language === 'zh' && '职位·工作内容'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">
                              {language === 'jp' && '営業部門'}
                              {language === 'ko' && '영업부문'}
                              {language === 'en' && 'Sales Department'}
                              {language === 'zh' && '销售部门'}
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <p className="font-medium text-slate-800">
                                  {language === 'jp' && 'メディカル事業部'}
                                  {language === 'ko' && '메디컬사업부'}
                                  {language === 'en' && 'Medical Division'}
                                  {language === 'zh' && '医疗事业部'}
                                </p>
                                <p className="text-sm">
                                  {language === 'jp' && '眼内レンズ、コンタクトレンズ及び医療機器の国内営業\n主に眼科関連営業活動\n※眼科医療機器営業経験1年以上の方。\n※英語可能者は優遇します。'}
                                  {language === 'ko' && '안내렌즈, 콘택트렌즈 및 의료기기 국내영업\n주로 안과관련 영업활동\n※안과의료기기 영업경험 1년 이상자.\n※영어 가능자 우대.'}
                                  {language === 'en' && 'Domestic sales of intraocular lenses, contact lenses and medical devices\nMainly ophthalmology-related sales activities\n※Those with 1+ years ophthalmology medical device sales experience.\n※English speakers preferred.'}
                                  {language === 'zh' && '眼内镜、隐形眼镜及医疗器械国内销售\n主要从事眼科相关销售活动\n※有1年以上眼科医疗器械销售经验者。\n※英语能力者优先。'}
                                </p>
                              </div>
                              <div>
                                <p className="font-medium text-slate-800">
                                  {language === 'jp' && 'AUTO事業部'}
                                  {language === 'ko' && 'AUTO사업부'}
                                  {language === 'en' && 'AUTO Division'}
                                  {language === 'zh' && 'AUTO事业部'}
                                </p>
                                <p className="text-sm">
                                  {language === 'jp' && '自動車ホイール・タイヤの国内営業\n※経験1年以上の方。'}
                                  {language === 'ko' && '자동차 휠·타이어 국내영업\n※경험 1년 이상자.'}
                                  {language === 'en' && 'Domestic sales of automotive wheels and tires\n※Those with 1+ years experience.'}
                                  {language === 'zh' && '汽车轮毂·轮胎国内销售\n※有1年以上经验者。'}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">
                              {language === 'jp' && '管理部門'}
                              {language === 'ko' && '관리부문'}
                              {language === 'en' && 'Management Department'}
                              {language === 'zh' && '管理部门'}
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <p className="font-medium text-slate-800">
                                  {language === 'jp' && 'メディカル事業部'}
                                  {language === 'ko' && '메디컬사업부'}
                                  {language === 'en' && 'Medical Division'}
                                  {language === 'zh' && '医疗事业部'}
                                </p>
                                <p className="text-sm">
                                  {language === 'jp' && '眼内レンズ、コンタクトレンズ及び医療機器の管理業務\n（輸入通関、受発注、出荷、在庫管理、顧客管理、その他管理業務）\n※英語可能者は優遇します。'}
                                  {language === 'ko' && '안내렌즈, 콘택트렌즈 및 의료기기 관리업무\n(수입통관, 수발주, 출하, 재고관리, 고객관리, 기타 관리업무)\n※영어 가능자 우대.'}
                                  {language === 'en' && 'Management of intraocular lenses, contact lenses and medical devices\n(Import customs, ordering, shipping, inventory management, customer management, other management duties)\n※English speakers preferred.'}
                                  {language === 'zh' && '眼内镜、隐形眼镜及医疗器械管理业务\n(进口报关、订单管理、出货、库存管理、客户管理、其他管理业务)\n※英语能力者优先。'}
                                </p>
                              </div>
                              <div>
                                <p className="font-medium text-slate-800">
                                  {language === 'jp' && 'AUTO事業部'}
                                  {language === 'ko' && 'AUTO사업부'}
                                  {language === 'en' && 'AUTO Division'}
                                  {language === 'zh' && 'AUTO事业部'}
                                </p>
                                <p className="text-sm">
                                  {language === 'jp' && '自動車ホイール・タイヤの管理業務\n（輸入通関、受発注、発送、在庫管理、顧客管理、その他管理業務）\n※CAD/CAM可能者は優遇します。'}
                                  {language === 'ko' && '자동차 휠·타이어 관리업무\n(수입통관, 수발주, 발송, 재고관리, 고객관리, 기타 관리업무)\n※CAD/CAM 가능자 우대.'}
                                  {language === 'en' && 'Management of automotive wheels and tires\n(Import customs, ordering, shipping, inventory management, customer management, other management duties)\n※CAD/CAM experience preferred.'}
                                  {language === 'zh' && '汽车轮毂·轮胎管理业务\n(进口报关、订单管理、发送、库存管理、客户管理、其他管理业务)\n※CAD/CAM能力者优先。'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 px-4 bg-slate-50 font-semibold text-slate-900">
                        {language === 'jp' && '勤務地'}
                        {language === 'ko' && '근무지'}
                        {language === 'en' && 'Work Location'}
                        {language === 'zh' && '工作地点'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        <div>
                          <p className="font-medium">株式会社テクノピア本社</p>
                          <p className="text-sm mt-1">〒101-0065　東京都千代田区西神田3-1-2ウインド西神田ビル</p>
                          <div className="text-sm mt-2 space-y-1">
                            <p>東京メトロ半蔵門線・都営新宿線「神保町」駅　徒歩5分</p>
                            <p>東京メトロ半蔵門線・東西線・都営新宿線「九段下」駅　徒歩5分</p>
                            <p>ＪＲ総武線「水道橋」駅　徒歩9分</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 px-4 bg-slate-50 font-semibold text-slate-900">
                        {language === 'jp' && '雇用形態'}
                        {language === 'ko' && '고용형태'}
                        {language === 'en' && 'Employment Type'}
                        {language === 'zh' && '雇佣形态'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {language === 'jp' && '正社員'}
                        {language === 'ko' && '정규직'}
                        {language === 'en' && 'Full-time Employee'}
                        {language === 'zh' && '正式员工'}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 px-4 bg-slate-50 font-semibold text-slate-900">
                        {language === 'jp' && '試用期間'}
                        {language === 'ko' && '수습기간'}
                        {language === 'en' && 'Probation Period'}
                        {language === 'zh' && '试用期'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {language === 'jp' && '６ヶ月間'}
                        {language === 'ko' && '6개월간'}
                        {language === 'en' && '6 months'}
                        {language === 'zh' && '6个月'}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 px-4 bg-slate-50 font-semibold text-slate-900">
                        {language === 'jp' && '勤務時間'}
                        {language === 'ko' && '근무시간'}
                        {language === 'en' && 'Working Hours'}
                        {language === 'zh' && '工作时间'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {language === 'jp' && '9:00～18:00（お昼休み12：00～13：00）'}
                        {language === 'ko' && '9:00～18:00 (점심시간 12:00～13:00)'}
                        {language === 'en' && '9:00-18:00 (Lunch break 12:00-13:00)'}
                        {language === 'zh' && '9:00-18:00 (午休时间 12:00-13:00)'}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 px-4 bg-slate-50 font-semibold text-slate-900">
                        {language === 'jp' && '休日・休暇'}
                        {language === 'ko' && '휴일·휴가'}
                        {language === 'en' && 'Holidays & Vacation'}
                        {language === 'zh' && '休假'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {language === 'jp' && '週5日勤務、土日祝、年末年始、ＧＷ、お盆休み、慶弔休暇、産休・育児休暇'}
                        {language === 'ko' && '주5일 근무, 토일공휴일, 연말연시, 골든위크, 오봉휴일, 경조휴가, 출산·육아휴가'}
                        {language === 'en' && '5-day work week, weekends & holidays, year-end/New Year, Golden Week, Obon, special leave, maternity/childcare leave'}
                        {language === 'zh' && '每周5天工作制，周末及节假日，年末年初，黄金周，盂兰盆节，庆吊假，产假·育儿假'}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 px-4 bg-slate-50 font-semibold text-slate-900">
                        {language === 'jp' && '福利厚生'}
                        {language === 'ko' && '복리후생'}
                        {language === 'en' && 'Benefits'}
                        {language === 'zh' && '福利待遇'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {language === 'jp' && '社会年金保険など各種法定福利厚生、会社リゾート、休憩運動室、出産・育児休暇、健康診断、各種慶弔金、交通費支給'}
                        {language === 'ko' && '사회연금보험 등 각종 법정 복리후생, 회사 리조트, 휴게운동실, 출산·육아휴가, 건강진단, 각종 경조금, 교통비 지급'}
                        {language === 'en' && 'Various statutory benefits including social pension insurance, company resort, recreation room, maternity/childcare leave, health checkups, special allowances, transportation allowance'}
                        {language === 'zh' && '包括社会养老保险在内的各种法定福利，公司度假村，休息运动室，产假·育儿假，健康检查，各种庆吊金，交通费补助'}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 px-4 bg-slate-50 font-semibold text-slate-900">
                        {language === 'jp' && '応募方法'}
                        {language === 'ko' && '지원방법'}
                        {language === 'en' && 'Application Method'}
                        {language === 'zh' && '申请方法'}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        <div>
                          <p className="mb-2">
                            {language === 'jp' && '履歴書（写真貼付）・職務経歴書をメール添付にてご送付してください。'}
                            {language === 'ko' && '이력서(사진 첨부)·경력기술서를 이메일 첨부로 보내주세요.'}
                            {language === 'en' && 'Please send your resume (with photo) and career history by email attachment.'}
                            {language === 'zh' && '请将简历（附照片）·职业经历书作为邮件附件发送。'}
                          </p>
                          <div className="text-sm">
                            <p className="font-medium">株式会社テクノピア　人事部　採用担当</p>
                            <p className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              E-mail：hk.lee@technopia.co.jp
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hiring Statistics */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '採用実績'}
            {language === 'ko' && '채용 실적'}
            {language === 'en' && 'Hiring Track Record'}
            {language === 'zh' && '录用实绩'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mid-career Hiring Ratio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">
                  {language === 'jp' && '中途採用比率'}
                  {language === 'ko' && '경력채용 비율'}
                  {language === 'en' && 'Mid-career Hiring Ratio'}
                  {language === 'zh' && '中途录用比率'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="py-2 px-4 text-left font-medium text-slate-900">
                          {language === 'jp' && '年度'}
                          {language === 'ko' && '연도'}
                          {language === 'en' && 'Year'}
                          {language === 'zh' && '年度'}
                        </th>
                        <th className="py-2 px-4 text-left font-medium text-slate-900">
                          {language === 'jp' && '正規雇用労働者の中途採用比率'}
                          {language === 'ko' && '정규고용근로자의 경력채용 비율'}
                          {language === 'en' && 'Mid-career Hiring Ratio'}
                          {language === 'zh' && '正规雇佣劳动者中途录用比率'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2022年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2021年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">80%</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2020年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  {language === 'jp' && '公表日：2023年3月18日'}
                  {language === 'ko' && '공표일: 2023년 3월 18일'}
                  {language === 'en' && 'Published: March 18, 2023'}
                  {language === 'zh' && '公布日期：2023年3月18日'}
                </p>
              </CardContent>
            </Card>

            {/* Retention Rate */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-900">
                  {language === 'jp' && '中途採用定着率'}
                  {language === 'ko' && '경력채용 정착률'}
                  {language === 'en' && 'Mid-career Retention Rate'}
                  {language === 'zh' && '中途录用定着率'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="py-2 px-4 text-left font-medium text-slate-900">
                          {language === 'jp' && '年度'}
                          {language === 'ko' && '연도'}
                          {language === 'en' && 'Year'}
                          {language === 'zh' && '年度'}
                        </th>
                        <th className="py-2 px-4 text-left font-medium text-slate-900">
                          {language === 'jp' && '正規雇用労働者のうち中途採用者の定着率'}
                          {language === 'ko' && '정규고용근로자 중 경력채용자 정착률'}
                          {language === 'en' && 'Retention Rate'}
                          {language === 'zh' && '正规雇佣劳动者中途录用者定着率'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2023年3月現在</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold text-corporate-blue">87.5%</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2022年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2021年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2020年</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 mt-4">
                  {language === 'jp' && '公表日：2023年3月18日'}
                  {language === 'ko' && '공표일: 2023년 3월 18일'}
                  {language === 'en' && 'Published: March 18, 2023'}
                  {language === 'zh' && '公布日期：2023年3月18日'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 lg:py-24 bg-slate-50">
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
