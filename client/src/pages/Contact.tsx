import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  FileText,
  Users
} from "lucide-react";

export function Contact() {
  const { language } = useLanguage();
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: language === 'jp' ? 'お問い合わせを受け付けました' : 
               language === 'ko' ? '문의를 접수했습니다' :
               language === 'en' ? 'Your inquiry has been received' :
               '您的咨询已收到',
        description: language === 'jp' ? '担当者より連絡いたします。' :
                    language === 'ko' ? '담당자가 연락드리겠습니다.' :
                    language === 'en' ? 'We will contact you soon.' :
                    '我们会尽快与您联系。'
      });
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

  const handleSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    contactMutation.mutate({
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || '',
      category: formData.get('category'),
      message: formData.get('message'),
    });

    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'jp' && 'お問い合わせ'}
              {language === 'ko' && '문의'}
              {language === 'en' && 'Contact Us'}
              {language === 'zh' && '联系我们'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && 'ご質問やご相談がございましたら、お気軽にお問い合わせください。'}
              {language === 'ko' && '질문이나 상담이 있으시면 언제든지 문의해 주세요.'}
              {language === 'en' && 'If you have any questions or consultations, please feel free to contact us.'}
              {language === 'zh' && '如果您有任何问题或咨询，请随时联系我们。'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-corporate-blue" />
                  {language === 'jp' && 'お問い合わせフォーム'}
                  {language === 'ko' && '문의 양식'}
                  {language === 'en' && 'Contact Form'}
                  {language === 'zh' && '联系表格'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitContact} className="space-y-6">
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
                      <Label htmlFor="company">
                        {language === 'jp' && '会社名'}
                        {language === 'ko' && '회사명'}
                        {language === 'en' && 'Company'}
                        {language === 'zh' && '公司名'}
                      </Label>
                      <Input 
                        id="company" 
                        name="company" 
                        className="mt-1"
                        placeholder={
                          language === 'jp' ? '株式会社サンプル' :
                          language === 'ko' ? '(주)샘플' :
                          language === 'en' ? 'Sample Corp' :
                          '示例公司'
                        }
                      />
                    </div>
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

                  <div>
                    <Label htmlFor="category">
                      {language === 'jp' && 'お問い合わせ種別'}
                      {language === 'ko' && '문의 종류'}
                      {language === 'en' && 'Inquiry Type'}
                      {language === 'zh' && '咨询类型'}
                    </Label>
                    <Select name="category" defaultValue="general">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">
                          {language === 'jp' && '一般的なお問い合わせ'}
                          {language === 'ko' && '일반 문의'}
                          {language === 'en' && 'General Inquiry'}
                          {language === 'zh' && '一般咨询'}
                        </SelectItem>
                        <SelectItem value="business">
                          {language === 'jp' && '製品・サービスについて'}
                          {language === 'ko' && '제품·서비스 관련'}
                          {language === 'en' && 'Products & Services'}
                          {language === 'zh' && '产品·服务相关'}
                        </SelectItem>
                        <SelectItem value="partnership">
                          {language === 'jp' && 'パートナーシップ'}
                          {language === 'ko' && '파트너십'}
                          {language === 'en' && 'Partnership'}
                          {language === 'zh' && '合作伙伴关系'}
                        </SelectItem>
                        <SelectItem value="career">
                          {language === 'jp' && '採用について'}
                          {language === 'ko' && '채용 관련'}
                          {language === 'en' && 'Career Opportunities'}
                          {language === 'zh' && '招聘相关'}
                        </SelectItem>
                        <SelectItem value="media">
                          {language === 'jp' && '報道・メディア'}
                          {language === 'ko' && '보도·미디어'}
                          {language === 'en' && 'Media & Press'}
                          {language === 'zh' && '媒体·新闻'}
                        </SelectItem>
                        <SelectItem value="other">
                          {language === 'jp' && 'その他'}
                          {language === 'ko' && '기타'}
                          {language === 'en' && 'Other'}
                          {language === 'zh' && '其他'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">
                      {language === 'jp' && 'メッセージ *'}
                      {language === 'ko' && '메시지 *'}
                      {language === 'en' && 'Message *'}
                      {language === 'zh' && '消息 *'}
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      className="mt-1"
                      placeholder={
                        language === 'jp' ? 'お問い合わせ内容をご記入ください...' :
                        language === 'ko' ? '문의 내용을 기재해 주세요...' :
                        language === 'en' ? 'Please enter your inquiry...' :
                        '请输入您的咨询内容...'
                      }
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-corporate-blue hover:bg-blue-700"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? (
                      language === 'jp' ? '送信中...' :
                      language === 'ko' ? '전송 중...' :
                      language === 'en' ? 'Sending...' :
                      '发送中...'
                    ) : (
                      language === 'jp' ? '送信する' :
                      language === 'ko' ? '전송' :
                      language === 'en' ? 'Send Message' :
                      '发送消息'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-corporate-blue" />
                    {language === 'jp' && 'お問い合わせ先'}
                    {language === 'ko' && '연락처'}
                    {language === 'en' && 'Contact Information'}
                    {language === 'zh' && '联系信息'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && '本社および支社'}
                        {language === 'ko' && '본사 및 지사'}
                        {language === 'en' && 'Headquarters & Branches'}
                        {language === 'zh' && '总部及分公司'}
                      </h4>
                      <p className="text-slate-600">
                        {language === 'jp' && '〒100-0001\n東京都千代田区千代田1-1-1\nグローバルタワー 30F'}
                        {language === 'ko' && '〒100-0001\n도쿄도 치요다구 치요다1-1-1\n글로벌 타워 30F'}
                        {language === 'en' && '〒100-0001\n1-1-1 Chiyoda, Chiyoda-ku, Tokyo\nGlobal Tower 30F'}
                        {language === 'zh' && '〒100-0001\n东京都千代田区千代田1-1-1\n全球大厦 30F'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && '電話番号'}
                        {language === 'ko' && '전화번호'}
                        {language === 'en' && 'Phone Number'}
                        {language === 'zh' && '电话号码'}
                      </h4>
                      <p className="text-slate-600">03-1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && 'メールアドレス'}
                        {language === 'ko' && '이메일 주소'}
                        {language === 'en' && 'Email Address'}
                        {language === 'zh' && '邮箱地址'}
                      </h4>
                      <p className="text-slate-600">info@globalcorp.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && '受付時間'}
                        {language === 'ko' && '접수 시간'}
                        {language === 'en' && 'Business Hours'}
                        {language === 'zh' && '接待时间'}
                      </h4>
                      <p className="text-slate-600">
                        {language === 'jp' && '平日 9:00 - 18:00'}
                        {language === 'ko' && '평일 9:00 - 18:00'}
                        {language === 'en' && 'Weekdays 9:00 - 18:00'}
                        {language === 'zh' && '工作日 9:00 - 18:00'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Section */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>
                    {language === 'jp' && 'アクセス'}
                    {language === 'ko' && '교통편'}
                    {language === 'en' && 'Access'}
                    {language === 'zh' && '交通'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-medium">Google Maps</p>
                      <p className="text-sm">
                        {language === 'jp' && '地図を表示'}
                        {language === 'ko' && '지도 표시'}
                        {language === 'en' && 'Map Display'}
                        {language === 'zh' && '地图显示'}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-slate-600">
                    <p>
                      {language === 'jp' && '最寄り駅：東京駅徒歩5分、大手町駅直結'}
                      {language === 'ko' && '가까운 역: 도쿄역 도보 5분, 오테마치역 직결'}
                      {language === 'en' && 'Nearest Station: 5 min walk from Tokyo Station, Direct access from Otemachi Station'}
                      {language === 'zh' && '最近车站：东京站步行5分钟，大手町站直达'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'よくある質問'}
              {language === 'ko' && '자주 묻는 질문'}
              {language === 'en' && 'Frequently Asked Questions'}
              {language === 'zh' && '常见问题'}
            </h2>
            <p className="text-lg text-slate-600">
              {language === 'jp' && 'お客様からよくお寄せいただく質問をまとめました。'}
              {language === 'ko' && '고객으로부터 자주 받는 질문을 정리했습니다.'}
              {language === 'en' && 'We have compiled frequently asked questions from our customers.'}
              {language === 'zh' && '我们整理了客户经常提出的问题。'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  {language === 'jp' && 'お問い合わせの回答にはどのくらい時間がかかりますか？'}
                  {language === 'ko' && '문의 답변에는 얼마나 시간이 걸리나요?'}
                  {language === 'en' && 'How long does it take to respond to inquiries?'}
                  {language === 'zh' && '回复咨询需要多长时间？'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '通常、営業日3日以内にご回答いたします。緊急の場合は、お電話でお問い合わせください。'}
                  {language === 'ko' && '일반적으로 영업일 3일 이내에 답변드립니다. 긴급한 경우는 전화로 문의해 주세요.'}
                  {language === 'en' && 'We usually respond within 3 business days. For urgent matters, please contact us by phone.'}
                  {language === 'zh' && '通常在3个工作日内回复。紧急情况请电话联系。'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  {language === 'jp' && '営業時間外のお問い合わせはどうなりますか？'}
                  {language === 'ko' && '영업시간 외 문의는 어떻게 되나요?'}
                  {language === 'en' && 'What happens to inquiries outside business hours?'}
                  {language === 'zh' && '营业时间外的咨询如何处理？'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '営業時間外にいただいたお問い合わせは、翌営業日に確認・対応いたします。'}
                  {language === 'ko' && '영업시간 외에 받은 문의는 다음 영업일에 확인·대응합니다.'}
                  {language === 'en' && 'Inquiries received outside business hours will be reviewed and responded to on the next business day.'}
                  {language === 'zh' && '营业时间外收到的咨询将在下一个工作日确认并回复。'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  {language === 'jp' && 'カタログや資料の請求はできますか？'}
                  {language === 'ko' && '카탈로그나 자료 요청이 가능한가요?'}
                  {language === 'en' && 'Can I request catalogs or materials?'}
                  {language === 'zh' && '可以申请目录或资料吗？'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && 'はい、お問い合わせフォームまたはお電話でご請求ください。デジタル版も提供しております。'}
                  {language === 'ko' && '네, 문의 양식이나 전화로 요청해 주세요. 디지털 버전도 제공합니다.'}
                  {language === 'en' && 'Yes, please request through the inquiry form or by phone. Digital versions are also available.'}
                  {language === 'zh' && '是的，请通过咨询表格或电话申请。我们也提供数字版本。'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">
                  {language === 'jp' && '海外からのお問い合わせも受け付けていますか？'}
                  {language === 'ko' && '해외에서의 문의도 받고 있나요?'}
                  {language === 'en' && 'Do you accept inquiries from overseas?'}
                  {language === 'zh' && '接受海外咨询吗？'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && 'はい、グローバルに事業を展開しておりますので、海外からのお問い合わせも歓迎いたします。'}
                  {language === 'ko' && '네, 글로벌하게 사업을 전개하고 있어 해외 문의도 환영합니다.'}
                  {language === 'en' && 'Yes, we operate globally and welcome inquiries from overseas.'}
                  {language === 'zh' && '是的，我们在全球开展业务，欢迎海外咨询。'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
