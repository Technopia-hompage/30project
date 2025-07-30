import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Target, Lightbulb, MessageCircle, MapPin, Clock, DollarSign, Calendar, Shield, Heart, Award, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Careers() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white py-16 lg:py-24" style={{ backgroundImage: `url('/images/shin3.png')`,
         backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {language === 'jp' && '新規・中途採用情報'}
              {language === 'ko' && '신규·중도 채용 정보'}
              {language === 'en' && 'New & Mid-Career Recruitment'}
              {language === 'zh' && '新人·中途录用信息'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === 'jp' && 'テクノピアでは、革新的な技術と創造性で未来を切り拓く仲間を募集しています。'}
              {language === 'ko' && '1995년 창립 이래, 실패를 두려워하지 않고 항상 도전을 계속해왔습니다. 고객에게 감동과 기쁨을 주고, 사회에 공헌할 수 있는 기업을 목표로 하고 있습니다.'}
              {language === 'en' && 'Since our founding in 1995, we have continued to challenge ourselves without fear of failure. We aim to be a company that brings excitement and joy to customers and contributes to society.'}
              {language === 'zh' && '自1995年创立以来，我们不惧怕失败，持续挑战。我们致力于成为一家能给客户带来感动和喜悦，为社会做出贡献的企业。'}
            </p>
          </div>
        </div>
      </section>

      {/* Required Qualities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '応募者に求める志向性・人物像'}
            {language === 'ko' && '지원자에게 요구하는 성향과 인물상'}
            {language === 'en' && 'Required Qualities & Character'}
            {language === 'zh' && '对申请者的要求和人物形象'}
          </h2>

          <div className="mb-12 text-center">
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              {language === 'jp' && 'ポジティブな思考、新たな価値を創造したいという意欲、これを実現する様々な能力が集まった結果だと思います。このような能力を備えた方々と共に弊社は新たな価値を創造し、お客様を支える企業を目指し成長していきたいと考えております。'}
              {language === 'ko' && '긍정적인 사고, 새로운 가치를 창조하고자 하는 의욕, 이를 실현하는 다양한 능력이 모인 결과라고 생각합니다. 이러한 능력을 갖춘 분들과 함께 저희 회사는 새로운 가치를 창조하고, 고객을 지원하는 기업을 목표로 성장해 나가고 싶습니다.'}
              {language === 'en' && 'We believe this is the result of gathering positive thinking, the desire to create new value, and various abilities to realize this. We want to grow with people who have these abilities, aiming to be a company that creates new value and supports customers.'}
              {language === 'zh' && '我们认为这是积极思维、创造新价值的意愿以及实现这一目标的各种能力汇聚的结果。我们希望与具备这些能力的人才共同成长，致力于成为创造新价值、支持客户的企业。'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-corporate-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {language === 'jp' && '1. 自発的な行動力'}
                      {language === 'ko' && '1. 자발적인 행동력'}
                      {language === 'en' && '1. Self-Motivated Action'}
                      {language === 'zh' && '1. 自发的行动力'}
                    </h3>
                    <p className="text-slate-600">
                      {language === 'jp' && '情報を収集分析してビジネスを構築するための能力'}
                      {language === 'ko' && '정보를 수집 분석하여 비즈니스를 구축하기 위한 능력'}
                      {language === 'en' && 'Ability to gather and analyze information to build business'}
                      {language === 'zh' && '收集分析信息并构建业务的能力'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-8 w-8 text-corporate-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {language === 'jp' && '2. 論理的思考能力'}
                      {language === 'ko' && '2. 논리적 사고능력'}
                      {language === 'en' && '2. Logical Thinking'}
                      {language === 'zh' && '2. 逻辑思维能力'}
                    </h3>
                    <p className="text-slate-600">
                      {language === 'jp' && '物事のストーリーを整理して分析し説明するための能力'}
                      {language === 'ko' && '사물의 스토리를 정리하여 분석하고 설명하기 위한 능력'}
                      {language === 'en' && 'Ability to organize, analyze and explain the story of things'}
                      {language === 'zh' && '整理、分析和解释事物故事的能力'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-corporate-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {language === 'jp' && '3. リーダーシップ'}
                      {language === 'ko' && '3. 리더십'}
                      {language === 'en' && '3. Leadership'}
                      {language === 'zh' && '3. 领导力'}
                    </h3>
                    <p className="text-slate-600">
                      {language === 'jp' && '関係者のやる気を引き出し、チームをまとめあげる能力'}
                      {language === 'ko' && '관계자의 의욕을 끌어내고, 팀을 결속시키는 능력'}
                      {language === 'en' && 'Ability to motivate stakeholders and bring teams together'}
                      {language === 'zh' && '激发相关人员积极性并团结团队的能力'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-8 w-8 text-corporate-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {language === 'jp' && '4. コミュニケーション能力'}
                      {language === 'ko' && '4. 커뮤니케이션 능력'}
                      {language === 'en' && '4. Communication Skills'}
                      {language === 'zh' && '4. 沟通能力'}
                    </h3>
                    <p className="text-slate-600">
                      {language === 'jp' && '相手の伝えたいことを理解し、こちらの伝えたいことを確実に相手に理解させる能力'}
                      {language === 'ko' && '상대방이 전하고자 하는 바를 이해하고, 이쪽에서 전하고자 하는 바를 확실히 상대방에게 이해시키는 능력'}
                      {language === 'en' && 'Ability to understand what others want to convey and ensure others understand what you want to convey'}
                      {language === 'zh' && '理解对方想要传达的内容，并确保对方理解自己想要传达的内容的能力'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Requirements */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '募集要項'}
            {language === 'ko' && '모집 요강'}
            {language === 'en' && 'Job Requirements'}
            {language === 'zh' && '招聘要求'}
          </h2>

          <div className="space-y-8">
            {/* Job Positions */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 text-corporate-blue mr-3" />
                  {language === 'jp' && '職種・仕事内容'}
                  {language === 'ko' && '직종·업무 내용'}
                  {language === 'en' && 'Job Positions & Responsibilities'}
                  {language === 'zh' && '职位·工作内容'}
                </h3>
                
                <div className="space-y-6">
                  {/* Sales Department */}
                  <div className="border-l-4 border-corporate-blue pl-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      {language === 'jp' && '営業部門'}
                      {language === 'ko' && '영업 부문'}
                      {language === 'en' && 'Sales Department'}
                      {language === 'zh' && '营业部门'}
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-slate-900 mb-2">
                          {language === 'jp' && 'メディカル事業部'}
                          {language === 'ko' && '메디컬 사업부'}
                          {language === 'en' && 'Medical Division'}
                          {language === 'zh' && '医疗事业部'}
                        </h5>
                        <p className="text-slate-600 mb-2">
                          {language === 'jp' && '眼内レンズ、コンタクトレンズ及び医療機器の国内営業'}
                          {language === 'ko' && '안내렌즈, 콘택트렌즈 및 의료기기의 국내 영업'}
                          {language === 'en' && 'Domestic sales of intraocular lenses, contact lenses and medical devices'}
                          {language === 'zh' && '眼内镜、隐形眼镜及医疗设备的国内销售'}
                        </p>
                        <p className="text-sm text-slate-500">
                          {language === 'jp' && '主に眼科関連営業活動'}
                          {language === 'ko' && '주로 안과 관련 영업 활동'}
                          {language === 'en' && 'Mainly ophthalmology-related sales activities'}
                          {language === 'zh' && '主要从事眼科相关的销售活动'}
                        </p>
                        <div className="mt-2 text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded">
                          {language === 'jp' && '※眼科医療機器営業経験1年以上の方。英語可能者は優遇します。'}
                          {language === 'ko' && '※안과 의료기기 영업 경험 1년 이상인 분. 영어 가능자 우대.'}
                          {language === 'en' && '※1+ years experience in ophthalmology medical device sales. English speakers preferred.'}
                          {language === 'zh' && '※眼科医疗设备销售经验1年以上。英语能力者优先。'}
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-slate-900 mb-2">
                          {language === 'jp' && 'AUTO事業部'}
                          {language === 'ko' && 'AUTO 사업부'}
                          {language === 'en' && 'AUTO Division'}
                          {language === 'zh' && 'AUTO事业部'}
                        </h5>
                        <p className="text-slate-600 mb-2">
                          {language === 'jp' && '自動車ホイール・タイヤの国内営業'}
                          {language === 'ko' && '자동차 휠·타이어의 국내 영업'}
                          {language === 'en' && 'Domestic sales of automotive wheels and tires'}
                          {language === 'zh' && '汽车轮毂、轮胎的国内销售'}
                        </p>
                        <div className="mt-2 text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded">
                          {language === 'jp' && '※経験1年以上の方。'}
                          {language === 'ko' && '※경험 1년 이상인 분.'}
                          {language === 'en' && '※1+ years of experience required.'}
                          {language === 'zh' && '※需要1年以上经验。'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Management Department */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      {language === 'jp' && '管理部門'}
                      {language === 'ko' && '관리 부문'}
                      {language === 'en' && 'Management Department'}
                      {language === 'zh' && '管理部门'}
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-slate-900 mb-2">
                          {language === 'jp' && 'メディカル事業部'}
                          {language === 'ko' && '메디컬 사업부'}
                          {language === 'en' && 'Medical Division'}
                          {language === 'zh' && '医疗事业部'}
                        </h5>
                        <p className="text-slate-600 mb-2">
                          {language === 'jp' && '眼内レンズ、コンタクトレンズ及び医療機器の管理業務'}
                          {language === 'ko' && '안내렌즈, 콘택트렌즈 및 의료기기의 관리 업무'}
                          {language === 'en' && 'Management of intraocular lenses, contact lenses and medical devices'}
                          {language === 'zh' && '眼内镜、隐形眼镜及医疗设备的管理业务'}
                        </p>
                        <p className="text-sm text-slate-500 mb-2">
                          {language === 'jp' && '（輸入通関、受発注、出荷、在庫管理、顧客管理、その他管理業務）'}
                          {language === 'ko' && '(수입통관, 수발주, 출하, 재고관리, 고객관리, 기타 관리업무)'}
                          {language === 'en' && '(Import customs, order management, shipping, inventory, customer management, other admin)'}
                          {language === 'zh' && '(进口通关、订单管理、出货、库存管理、客户管理、其他管理业务)'}
                        </p>
                        <div className="mt-2 text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded">
                          {language === 'jp' && '※英語可能者は優遇します。'}
                          {language === 'ko' && '※영어 가능자 우대.'}
                          {language === 'en' && '※English speakers preferred.'}
                          {language === 'zh' && '※英语能力者优先。'}
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-slate-900 mb-2">
                          {language === 'jp' && 'AUTO事業部'}
                          {language === 'ko' && 'AUTO 사업부'}
                          {language === 'en' && 'AUTO Division'}
                          {language === 'zh' && 'AUTO事业部'}
                        </h5>
                        <p className="text-slate-600 mb-2">
                          {language === 'jp' && '自動車ホイール・タイヤの管理業務'}
                          {language === 'ko' && '자동차 휠·타이어의 관리 업무'}
                          {language === 'en' && 'Management of automotive wheels and tires'}
                          {language === 'zh' && '汽车轮毂、轮胎的管理业务'}
                        </p>
                        <p className="text-sm text-slate-500 mb-2">
                          {language === 'jp' && '（輸入通関、受発注、発送、在庫管理、顧客管理、その他管理業務）'}
                          {language === 'ko' && '(수입통관, 수발주, 발송, 재고관리, 고객관리, 기타 관리업무)'}
                          {language === 'en' && '(Import customs, order management, shipping, inventory, customer management, other admin)'}
                          {language === 'zh' && '(进口通关、订单管理、发货、库存管理、客户管理、其他管理业务)'}
                        </p>
                        <div className="mt-2 text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded">
                          {language === 'jp' && '※CAD/CAM可能者は優遇します。'}
                          {language === 'ko' && '※CAD/CAM 가능자 우대.'}
                          {language === 'en' && '※CAD/CAM capable candidates preferred.'}
                          {language === 'zh' && '※CAD/CAM能力者优先。'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Details */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-corporate-blue mr-2" />
                    {language === 'jp' && '勤務地'}
                    {language === 'ko' && '근무지'}
                    {language === 'en' && 'Work Location'}
                    {language === 'zh' && '工作地点'}
                  </h4>
                  <div className="space-y-2 text-slate-600">
                    <p className="font-medium">株式会社テクノピア本社</p>
                    <p>〒101-0065　東京都千代田区西神田3-1-2ウインド西神田ビル</p>
                    <div className="text-sm space-y-1 mt-3">
                      <p>東京メトロ半蔵門線・都営新宿線「神保町」駅　徒歩5分</p>
                      <p>東京メトロ半蔵門線・東西線・都営新宿線「九段下」駅　徒歩5分</p>
                      <p>ＪＲ総武線「水道橋」駅　徒歩9分</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-corporate-blue mr-2" />
                    {language === 'jp' && '勤務時間'}
                    {language === 'ko' && '근무 시간'}
                    {language === 'en' && 'Working Hours'}
                    {language === 'zh' && '工作时间'}
                  </h4>
                  <div className="space-y-3 text-slate-600">
                    <p><span className="font-medium">勤務時間:</span> 9:00～18:00（お昼休み12：00～13：00）</p>
                    <p><span className="font-medium">雇用形態:</span> 正社員</p>
                    <p><span className="font-medium">試用期間:</span> ６ヶ月間</p>
                    <p><span className="font-medium">昇給・昇進:</span> 年１回（勤務成績の良い人に対して基本毎年4月に行う）</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-corporate-blue mr-3" />
                  {language === 'jp' && '福利厚生・待遇'}
                  {language === 'ko' && '복리후생·대우'}
                  {language === 'en' && 'Benefits & Welfare'}
                  {language === 'zh' && '福利待遇'}
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-corporate-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">年金・保険</h4>
                        <p className="text-slate-600 text-sm">厚生年金、雇用保険、労災保険、健康保険</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-corporate-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">休日・休暇</h4>
                        <p className="text-slate-600 text-sm">週5日勤務、土日祝、年末年始、ＧＷ、お盆休み、慶弔休暇、産休・育児休暇</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <DollarSign className="h-5 w-5 text-corporate-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">諸制度</h4>
                        <p className="text-slate-600 text-sm">退職金（勤続３年以上）</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-corporate-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">福利厚生</h4>
                        <p className="text-slate-600 text-sm">社会年金保険など各種法定福利厚生、会社リゾート</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-corporate-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">生活利便性のサポート</h4>
                        <p className="text-slate-600 text-sm">休憩運動室</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-corporate-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">その他</h4>
                        <p className="text-slate-600 text-sm">出産・育児休暇、健康診断、各種慶弔金、交通費支給</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Mail className="h-6 w-6 text-corporate-blue mr-3" />
                  {language === 'jp' && '応募方法'}
                  {language === 'ko' && '지원 방법'}
                  {language === 'en' && 'Application Method'}
                  {language === 'zh' && '申请方式'}
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      {language === 'jp' && '選考方法'}
                      {language === 'ko' && '선발 방법'}
                      {language === 'en' && 'Selection Process'}
                      {language === 'zh' && '选拔方式'}
                    </h4>
                    <p className="text-slate-600">
                      {language === 'jp' && '応募 → 書類審査 → 面接選考 → 内定'}
                      {language === 'ko' && '지원 → 서류 심사 → 면접 선발 → 내정'}
                      {language === 'en' && 'Application → Document Screening → Interview Selection → Job Offer'}
                      {language === 'zh' && '申请 → 文件审查 → 面试选拔 → 内定'}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      {language === 'jp' && '応募書類'}
                      {language === 'ko' && '지원 서류'}
                      {language === 'en' && 'Application Documents'}
                      {language === 'zh' && '申请文件'}
                    </h4>
                    <p className="text-slate-600 mb-3">
                      {language === 'jp' && '履歴書（写真貼付）・職務経歴書をメール添付にてご送付してください。'}
                      {language === 'ko' && '이력서(사진 첨부)·경력기술서를 이메일 첨부로 보내주시기 바랍니다.'}
                      {language === 'en' && 'Please send your resume (with photo) and work history as email attachments.'}
                      {language === 'zh' && '请通过邮件附件发送简历（附照片）和工作履历。'}
                    </p>
                    <div className="bg-white p-4 rounded border-l-4 border-corporate-blue">
                      <p className="font-medium text-slate-900">株式会社テクノピア　人事部　採用担当</p>
                      <p className="text-corporate-blue font-medium">E-mail: hk.lee@technopia.co.jp</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hiring Statistics */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {language === 'jp' && '採用実績'}
            {language === 'ko' && '채용 실적'}
            {language === 'en' && 'Hiring Statistics'}
            {language === 'zh' && '招聘实绩'}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  {language === 'jp' && '中途採用比率'}
                  {language === 'ko' && '중도채용 비율'}
                  {language === 'en' && 'Mid-Career Hiring Ratio'}
                  {language === 'zh' && '中途录用比例'}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold">
                          {language === 'jp' && '年度'}
                          {language === 'ko' && '연도'}
                          {language === 'en' && 'Year'}
                          {language === 'zh' && '年度'}
                        </th>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold">
                          {language === 'jp' && '正規雇用労働者の中途採用比率'}
                          {language === 'ko' && '정규직 근로자의 중도채용 비율'}
                          {language === 'en' && 'Mid-Career Hiring Ratio of Regular Employees'}
                          {language === 'zh' && '正式员工的中途录用比例'}
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

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  {language === 'jp' && '中途採用定着率'}
                  {language === 'ko' && '중도채용 정착률'}
                  {language === 'en' && 'Mid-Career Retention Rate'}
                  {language === 'zh' && '中途录用定着率'}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold">
                          {language === 'jp' && '年度'}
                          {language === 'ko' && '연도'}
                          {language === 'en' && 'Year'}
                          {language === 'zh' && '年度'}
                        </th>
                        <th className="py-3 px-4 text-left text-slate-700 font-semibold">
                          {language === 'jp' && '正規雇用労働者のうち中途採用者の定着率'}
                          {language === 'ko' && '정규직 근로자 중 중도채용자의 정착률'}
                          {language === 'en' && 'Retention Rate of Mid-Career Hires'}
                          {language === 'zh' && '正式员工中中途录用者的定着率'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-2 px-4 text-slate-600">2023年3月現在</td>
                        <td className="py-2 px-4 text-slate-600 font-semibold">87.5%</td>
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
                  {language === 'jp' && '公표日：2023年3月18日'}
                  {language === 'ko' && '공표일: 2023년 3월 18일'}
                  {language === 'en' && 'Published: March 18, 2023'}
                  {language === 'zh' && '公布日期：2023年3月18日'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}