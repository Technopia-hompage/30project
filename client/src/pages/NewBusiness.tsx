import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Check, 
  CreditCard, 
  Building, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Link } from 'wouter';

export function NewBusiness() {
  const { language } = useLanguage();

  const businessAreas = [
    {
      icon: Check,
      title: {
        jp: '世界初の水分子共振技術「DENBA Health」',
        ko: '세계 최초의 물 분자 공명 기술 "DENBA Health"',
        en: 'World-first water molecule resonance technology "DENBA Health"',
        zh: '世界首创水分子共振技术"DENBA Health"'
      },
      description: {
        jp: '内側から体をチャージする',
        ko: '몸 안쪽에서 충전하는',
        en: 'Charge your body from the inside',
        zh: '从内部为身体充电'
      },
      color: 'bg-red-600'
    },
    {
      icon: Building,
      title: {
        jp: '不動産賃貸の取り扱い',
        ko: '부동산 임대 취급',
        en: 'Real Estate Rental Services',
        zh: '房地产租赁业务'
      },
      description: {
        jp: '商業・住宅用不動産の賃貸仲介サービス',
        ko: '상업·주거용 부동산 임대 중개 서비스',
        en: 'Commercial and residential real estate rental services',
        zh: '商业·住宅用房地产租赁中介服务'
      },
      color: 'bg-blue-600'
    },
    {
      icon: CreditCard,
      title: {
        jp: 'クレジットカード端末決済サービス',
        ko: '신용카드 단말기 결제 서비스',
        en: 'Credit Card Terminal Payment Services',
        zh: '信用卡终端支付服务'
      },
      description: {
        jp: '各種決済端末の提供と決済システムの導入支援',
        ko: '각종 결제 단말기 제공과 결제 시스템 도입 지원',
        en: 'Payment terminal provision and payment system implementation support',
        zh: '各种支付终端提供和支付系统导入支持'
      },
      color: 'bg-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/business">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'jp' && '事業部一覧に戻る'}
                {language === 'ko' && '사업부 목록으로 돌아가기'}
                {language === 'en' && 'Back to Business Divisions'}
                {language === 'zh' && '返回事业部列表'}
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center mb-8">
            <Building className="h-12 w-12 text-yellow-400 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {language === 'jp' && '新規事業部'}
                {language === 'ko' && '신규 사업부'}
                {language === 'en' && 'New Business Division'}
                {language === 'zh' && '新业务事业部'}
              </h1>
              <p className="text-xl text-purple-100">
                {language === 'jp' && '革新的な技術とサービスで未来を創造'}
                {language === 'ko' && '혁신적인 기술과 서비스로 미래를 창조'}
                {language === 'en' && 'Creating the future with innovative technology and services'}
                {language === 'zh' && '以创新技术和服务创造未来'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {language === 'jp' && '事業概要'}
              {language === 'ko' && '사업 개요'}
              {language === 'en' && 'Business Overview'}
              {language === 'zh' && '业务概述'}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              {language === 'jp' && '新規事業部では様々な製品の監修、製造、販売を行っております。失敗を恐れずチャレンジする精神をもって今後ともさらなる努力と新製品開発に全力を尽くし世界で一番良いものを一番早くお届けできるよう社員一同邁進していく所存でございます。'}
              {language === 'ko' && '신규 사업부에서는 다양한 제품의 감수, 제조, 판매를 하고 있습니다. 실패를 두려워하지 않는 도전 정신으로 앞으로도 더욱 노력하고 신제품 개발에 전력을 다해 세계에서 가장 좋은 것을 가장 빨리 전달할 수 있도록 직원 일동 매진해 나가겠습니다.'}
              {language === 'en' && 'The New Business Division supervises, manufactures, and sells various products. With a spirit that is not afraid of failure and challenges, all employees will continue to make further efforts and do their best in new product development to deliver the best products in the world as quickly as possible.'}
              {language === 'zh' && '新业务事业部负责各种产品的监督、制造和销售。怀着不惧失败、勇于挑战的精神，全体员工将继续努力，全力开发新产品，以最快的速度向世界提供最好的产品。'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-200 bg-white">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${area.color} rounded-xl flex items-center justify-center mb-6`}>
                    <area.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {area.title[language]}
                  </h3>
                  <p className="text-slate-600">
                    {area.description[language]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Business Detail Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '決済事業'}
              {language === 'ko' && '결제 사업'}
              {language === 'en' && 'Payment Business'}
              {language === 'zh' && '支付业务'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '多様な決済端末とシステムソリューションで、お客様のビジネスをサポートします'}
              {language === 'ko' && '다양한 결제 단말기와 시스템 솔루션으로 고객의 비즈니스를 지원합니다'}
              {language === 'en' && 'We support your business with diverse payment terminals and system solutions'}
              {language === 'zh' && '通过多样化的支付终端和系统解决方案支持您的业务'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://technopia.co.jp/wp-content/themes/technopia/common/img/newbiz/pay.jpg" 
                alt="Payment Terminal - ALL-IN-ONE端末"
                className="w-full rounded-xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = '/images/payment-terminal.png';
                }}
              />
              <p className="text-center text-sm text-slate-500 mt-4">
                {language === 'jp' && 'コンパクトな見た目に複数の機能を搭載したALL-IN-ONE端末'}
                {language === 'ko' && '컴팩트한 외관에 복수의 기능을 탑재한 ALL-IN-ONE 단말기'}
                {language === 'en' && 'ALL-IN-ONE terminal with multiple functions in a compact design'}
                {language === 'zh' && '在紧凑外观中搭载多种功能的ALL-IN-ONE终端'}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && 'クレジットカード決済端末'}
                    {language === 'ko' && '신용카드 결제 단말기'}
                    {language === 'en' && 'Credit Card Payment Terminals'}
                    {language === 'zh' && '信用卡支付终端'}
                  </h3>
                </div>
                <p className="text-slate-600">
                  {language === 'jp' && '最新の決済端末機器を提供し、スムーズな決済環境を実現します。'}
                  {language === 'ko' && '최신 결제 단말기 기기를 제공하여 원활한 결제 환경을 구현합니다.'}
                  {language === 'en' && 'We provide the latest payment terminal devices to create a smooth payment environment.'}
                  {language === 'zh' && '提供最新支付终端设备，实现顺畅的支付环境。'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Building className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && '決済システム導入支援'}
                    {language === 'ko' && '결제 시스템 도입 지원'}
                    {language === 'en' && 'Payment System Implementation Support'}
                    {language === 'zh' && '支付系统导入支持'}
                  </h3>
                </div>
                <p className="text-slate-600">
                  {language === 'jp' && '既存システムとの連携から新規導入まで、幅広いサポートを提供します。'}
                  {language === 'ko' && '기존 시스템과의 연동부터 신규 도입까지 폭넓은 지원을 제공합니다.'}
                  {language === 'en' && 'We provide comprehensive support from integration with existing systems to new implementations.'}
                  {language === 'zh' && '从与现有系统的集成到新的实施，我们提供全面的支持。'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="text-white h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {language === 'jp' && '対応決済ブランド'}
                    {language === 'ko' && '지원 결제 브랜드'}
                    {language === 'en' && 'Supported Payment Brands'}
                    {language === 'zh' && '支持的支付品牌'}
                  </h4>
                </div>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && 'VISA・Mastercard・JCB・American Express・Diners Club・UnionPay等'}
                  {language === 'ko' && 'VISA・Mastercard・JCB・American Express・Diners Club・UnionPay 등'}
                  {language === 'en' && 'VISA・Mastercard・JCB・American Express・Diners Club・UnionPay etc.'}
                  {language === 'zh' && 'VISA・Mastercard・JCB・American Express・Diners Club・UnionPay等'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DENBA Health Detail Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'DENBA Health'}
              {language === 'ko' && 'DENBA Health'}
              {language === 'en' && 'DENBA Health'}
              {language === 'zh' && 'DENBA Health'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              {language === 'jp' && '世界初の水分子共振技術'}
              {language === 'ko' && '세계 최초의 물 분자 공명 기술'}
              {language === 'en' && 'World-first water molecule resonance technology'}
              {language === 'zh' && '世界首创水分子共振技术'}
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {language === 'jp' && 'DENBAで身体の内側から健康に'}
              {language === 'ko' && 'DENBA로 몸의 내측부터 건강하게'}
              {language === 'en' && 'Healthy from inside with DENBA'}
              {language === 'zh' && '用DENBA从身体内部开始健康'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/denba-health.jpg.webp" 
                alt="DENBA Health Series - High-grade type, Standard type, Charge"
                className="w-full rounded-xl shadow-lg"
                onError={(e) => {
                  console.log('DENBA Health 이미지 로드 실패');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-center text-sm text-slate-500 mt-4">
                {language === 'jp' && 'DENBA Healthシリーズ（High-grade type・Standard type・Charge）'}
                {language === 'ko' && 'DENBA Health 시리즈 (High-grade type・Standard type・Charge)'}
                {language === 'en' && 'DENBA Health Series (High-grade type・Standard type・Charge)'}
                {language === 'zh' && 'DENBA Health系列（High-grade type・Standard type・Charge）'}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <Check className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && '体内から健康サポート'}
                    {language === 'ko' && '체내에서 건강 지원'}
                    {language === 'en' && 'Health Support from Within'}
                    {language === 'zh' && '从体内支持健康'}
                  </h3>
                </div>
                <p className="text-slate-600">
                  {language === 'jp' && '体内の水分子に直接働きかけ、細胞レベルから健康をサポートします。'}
                  {language === 'ko' && '체내 물 분자에 직접 작용하여 세포 레벨부터 건강을 지원합니다.'}
                  {language === 'en' && 'Directly acts on water molecules in the body to support health from the cellular level.'}
                  {language === 'zh' && '直接作用于体内水分子，从细胞水平支持健康。'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <Building className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && '特許取得技術'}
                    {language === 'ko' && '특허 취득 기술'}
                    {language === 'en' && 'Patented Technology'}
                    {language === 'zh' && '专利技术'}
                  </h3>
                </div>
                <p className="text-slate-600">
                  {language === 'jp' && '世界初の水分子共振技術として、国際特許を取得しています。'}
                  {language === 'ko' && '세계 최초의 물 분자 공명 기술로서 국제 특허를 취득하고 있습니다.'}
                  {language === 'en' && 'As the world\'s first water molecule resonance technology, it has obtained international patents.'}
                  {language === 'zh' && '作为世界首创的水分子共振技术，已获得国际专利。'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <Check className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && '安全性確認済み'}
                    {language === 'ko' && '안전성 확인 완료'}
                    {language === 'en' && 'Safety Confirmed'}
                    {language === 'zh' && '安全性确认'}
                  </h3>
                </div>
                <p className="text-slate-600">
                  {language === 'jp' && '厳格な安全基準をクリアし、安心してご利用いただけます。'}
                  {language === 'ko' && '엄격한 안전 기준을 통과하여 안심하고 이용하실 수 있습니다.'}
                  {language === 'en' && 'Has passed strict safety standards and can be used with confidence.'}
                  {language === 'zh' && '通过严格的安全标准，可以安心使用。'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-red-600 hover:bg-red-700">
              {language === 'jp' && 'DENBA Healthについて詳しく見る'}
              {language === 'ko' && 'DENBA Health에 대해 자세히 보기'}
              {language === 'en' && 'Learn More About DENBA Health'}
              {language === 'zh' && '了解更多关于DENBA Health'}
              <ExternalLink className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Business Areas Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'その他の事業領域'}
              {language === 'ko' && '기타 사업 영역'}
              {language === 'en' && 'Other Business Areas'}
              {language === 'zh' && '其他业务领域'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '多様な事業領域でお客様のビジネスをサポート'}
              {language === 'ko' && '다양한 사업 영역에서 고객의 비즈니스를 지원'}
              {language === 'en' && 'Supporting your business across diverse business areas'}
              {language === 'zh' && '在多样化的业务领域支持您的业务'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 日本進出支援事業 */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && '日本進出支援事業'}
                    {language === 'ko' && '일본 진출 지원 사업'}
                    {language === 'en' && 'Japan Market Entry Support'}
                    {language === 'zh' && '日本市场进入支持'}
                  </h3>
                </div>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && '主に韓国のクライアントの日本進出を成功させるべく、幅広く事業支援を行っております。'}
                  {language === 'ko' && '주로 한국 클라이언트의 일본 진출을 성공시키기 위해 광범위한 사업 지원을 제공하고 있습니다.'}
                  {language === 'en' && 'We provide comprehensive business support to help Korean clients successfully enter the Japanese market.'}
                  {language === 'zh' && '主要为韩国客户成功进入日本市场提供广泛的业务支持。'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && 'リサーチ'}
                        {language === 'ko' && '리서치'}
                        {language === 'en' && 'Research'}
                        {language === 'zh' && '调研'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {language === 'jp' && '市場調査、競合分析、定量・定性分析'}
                        {language === 'ko' && '시장 조사, 경쟁 분석, 정량·정성 분석'}
                        {language === 'en' && 'Market research, competitive analysis, quantitative and qualitative analysis'}
                        {language === 'zh' && '市场调查、竞争分析、定量·定性分析'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && '事業提携'}
                        {language === 'ko' && '사업 제휴'}
                        {language === 'en' && 'Business Partnership'}
                        {language === 'zh' && '业务合作'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {language === 'jp' && '流通チャネル開拓、パートナーシップ締結支援'}
                        {language === 'ko' && '유통 채널 개척, 파트너십 체결 지원'}
                        {language === 'en' && 'Distribution channel development, partnership establishment support'}
                        {language === 'zh' && '流通渠道开拓、合作伙伴关系建立支持'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && 'コンサルティング'}
                        {language === 'ko' && '컨설팅'}
                        {language === 'en' && 'Consulting'}
                        {language === 'zh' && '咨询'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {language === 'jp' && 'ストラテジー、EC、DX、オペレーション'}
                        {language === 'ko' && '전략, EC, DX, 운영'}
                        {language === 'en' && 'Strategy, EC, DX, Operations'}
                        {language === 'zh' && '战略、电商、数字化转型、运营'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ペイメント事業 */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && 'ペイメント事業'}
                    {language === 'ko' && '페이먼트 사업'}
                    {language === 'en' && 'Payment Business'}
                    {language === 'zh' && '支付业务'}
                  </h3>
                </div>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && '店舗を持つ事業者様やオンライン販売をされる事業者様に対し、クレジットカードを含むキャッシュレス決済サービスを提供しております。'}
                  {language === 'ko' && '매장을 보유한 사업자나 온라인 판매를 하는 사업자에게 신용카드를 포함한 캐시리스 결제 서비스를 제공하고 있습니다.'}
                  {language === 'en' && 'We provide cashless payment services including credit cards to businesses with stores and online sellers.'}
                  {language === 'zh' && '为拥有店铺的企业和在线销售企业提供包括信用卡在内的无现金支付服务。'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && '決済手数料の引き下げ'}
                        {language === 'ko' && '결제 수수료 인하'}
                        {language === 'en' && 'Reduced Payment Fees'}
                        {language === 'zh' && '降低支付手续费'}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && '多様な決済手段への対応'}
                        {language === 'ko' && '다양한 결제 수단 대응'}
                        {language === 'en' && 'Support for Various Payment Methods'}
                        {language === 'zh' && '支持多种支付方式'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {language === 'jp' && 'QRコード決済、電子マネー等'}
                        {language === 'ko' && 'QR코드 결제, 전자머니 등'}
                        {language === 'en' && 'QR code payments, electronic money, etc.'}
                        {language === 'zh' && '二维码支付、电子货币等'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && 'クロスボーダー決済'}
                        {language === 'ko' && '크로스보더 결제'}
                        {language === 'en' && 'Cross-border Payments'}
                        {language === 'zh' && '跨境支付'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {language === 'jp' && '海外の人による現地決済が可能'}
                        {language === 'ko' && '해외인의 현지 결제 가능'}
                        {language === 'en' && 'Enable local payments by overseas customers'}
                        {language === 'zh' && '使海外客户能够进行本地支付'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 代理店事業 */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {language === 'jp' && '代理店事業'}
                    {language === 'ko' && '대리점 사업'}
                    {language === 'en' && 'Agency Business'}
                    {language === 'zh' && '代理店业务'}
                  </h3>
                </div>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && '魅力的な商品を持つ会社様の販売代理店として、弊社のネットワークを活用し国内に留まらず海外向けにも販売しております。'}
                  {language === 'ko' && '매력적인 상품을 보유한 회사의 판매 대리점으로서 저희 네트워크를 활용하여 국내에만 국한되지 않고 해외에도 판매하고 있습니다.'}
                  {language === 'en' && 'As a sales agency for companies with attractive products, we utilize our network to sell not only domestically but also overseas.'}
                  {language === 'zh' && '作为拥有吸引人产品的公司的销售代理，我们利用我们的网络不仅在国内销售，还向海外销售。'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && '国内販売'}
                        {language === 'ko' && '국내 판매'}
                        {language === 'en' && 'Domestic Sales'}
                        {language === 'zh' && '国内销售'}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && '海外販売'}
                        {language === 'ko' && '해외 판매'}
                        {language === 'en' && 'Overseas Sales'}
                        {language === 'zh' && '海外销售'}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {language === 'jp' && 'ネットワーク活用'}
                        {language === 'ko' && '네트워크 활용'}
                        {language === 'en' && 'Network Utilization'}
                        {language === 'zh' && '网络利用'}
                      </h4>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'jp' && 'お問い合わせ'}
            {language === 'ko' && '문의하기'}
            {language === 'en' && 'Contact Us'}
            {language === 'zh' && '联系我们'}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {language === 'jp' && '新規事業部の製品・サービスに関するご質問やお見積りは、お気軽にお問い合わせください。'}
            {language === 'ko' && '신규 사업부의 제품·서비스에 관한 질문이나 견적은 언제든지 문의해 주세요.'}
            {language === 'en' && 'Please feel free to contact us for any questions or quotes regarding our new business division products and services.'}
            {language === 'zh' && '有关新业务事业部产品·服务的任何问题或报价，请随时与我们联系。'}
          </p>
          <Link href={`${language === 'jp' ? '/jp' : language === 'ko' ? '/ko' : language === 'zh' ? '/zh' : ''}/contact`}>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              {language === 'jp' && 'お問い合わせフォーム'}
              {language === 'ko' && '문의 양식'}
              {language === 'en' && 'Contact Form'}
              {language === 'zh' && '联系表格'}
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}