import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Lightbulb, 
  Shield, 
  CreditCard, 
  Building, 
  Zap, 
  CheckCircle, 
  Clock, 
  Users,
  ExternalLink,
  ChevronRight,
  Thermometer,
  Camera,
  Hand,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'wouter';

export function NewBusiness() {
  const { language } = useLanguage();

  const businessAreas = [
    {
      icon: Shield,
      title: {
        jp: 'AI顔認証検温測定機「TOLLGATE」',
        ko: 'AI 안면인식 검온기 "TOLLGATE"',
        en: 'AI Facial Recognition Thermometer "TOLLGATE"',
        zh: 'AI人脸识别测温仪"TOLLGATE"'
      },
      description: {
        jp: '非接触で体温測定と顔認証を同時に実現する革新的なソリューション',
        ko: '비접촉으로 체온 측정과 안면 인식을 동시에 실현하는 혁신적인 솔루션',
        en: 'Innovative solution for contactless temperature measurement and facial recognition',
        zh: '实现非接触体温测定和人脸识别的创新解决方案'
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

  const tollgateFeatures = [
    {
      icon: Thermometer,
      title: {
        jp: '非接触で素早く検温',
        ko: '비접촉으로 빠른 검온',
        en: 'Quick Contactless Temperature Check',
        zh: '非接触快速测温'
      },
      description: {
        jp: '1秒以内で温度を測定。非接触なのでスタッフの感染リスクを下げられます。',
        ko: '1초 이내에 온도를 측정. 비접촉이므로 직원의 감염 위험을 줄일 수 있습니다.',
        en: 'Measures temperature within 1 second. Contactless operation reduces staff infection risk.',
        zh: '1秒内测量温度。非接触操作降低员工感染风险。'
      }
    },
    {
      icon: CheckCircle,
      title: {
        jp: '正確で高い測定精度',
        ko: '정확하고 높은 측정 정밀도',
        en: 'Accurate High Precision Measurement',
        zh: '准确的高精度测量'
      },
      description: {
        jp: '瞬時に誤差±0.3℃で測定できます。',
        ko: '순간적으로 오차 ±0.3℃로 측정할 수 있습니다.',
        en: 'Instant measurement with ±0.3℃ accuracy.',
        zh: '瞬间以±0.3℃误差进行测量。'
      }
    },
    {
      icon: Camera,
      title: {
        jp: 'マスクをしたままでOK',
        ko: '마스크를 착용한 채로 OK',
        en: 'Works with Masks On',
        zh: '戴口罩也可以'
      },
      description: {
        jp: '従来のように検温のためわざわざマスクを外す必要はありません。',
        ko: '기존처럼 검온을 위해 일부러 마스크를 벗을 필요가 없습니다.',
        en: 'No need to remove masks for temperature measurement unlike conventional methods.',
        zh: '无需像传统方法那样为了测温而特意摘下口罩。'
      }
    },
    {
      icon: Hand,
      title: {
        jp: 'センサー式アルコールスプレー付き',
        ko: '센서식 알코올 스프레이 부착',
        en: 'Sensor-based Alcohol Spray Included',
        zh: '配备传感器式酒精喷雾'
      },
      description: {
        jp: '検温と手指の消毒を非接触で同時に行うことができます。',
        ko: '검온과 손가락 소독을 비접촉으로 동시에 실행할 수 있습니다.',
        en: 'Simultaneously performs temperature check and hand sanitization contactlessly.',
        zh: '可同时进行非接触测温和手部消毒。'
      }
    },
    {
      icon: AlertTriangle,
      title: {
        jp: 'マスク非着用を自動検知',
        ko: '마스크 미착용 자동 감지',
        en: 'Automatic Mask Detection',
        zh: '自动检测未佩戴口罩'
      },
      description: {
        jp: 'マスクを着用していない人を即座に検知。音声アナウンスで注意を促すことができます。',
        ko: '마스크를 착용하지 않은 사람을 즉시 감지. 음성 안내로 주의를 촉구할 수 있습니다.',
        en: 'Instantly detects people not wearing masks. Provides voice announcements for alerts.',
        zh: '立即检测未佩戴口罩的人员。通过语音播报进行提醒。'
      }
    },
    {
      icon: Zap,
      title: {
        jp: 'アラームで発熱をお知らせ',
        ko: '알람으로 발열 알림',
        en: 'Fever Alert Alarm',
        zh: '发热警报提醒'
      },
      description: {
        jp: '37.5℃以上の発熱者が検知された場合は、アラームで注意喚起を行います。',
        ko: '37.5℃ 이상의 발열자가 감지된 경우 알람으로 주의를 촉구합니다.',
        en: 'Triggers alarm alerts when fever of 37.5℃ or higher is detected.',
        zh: '检测到37.5℃以上发热者时，通过警报进行提醒。'
      }
    }
  ];

  const usageScenarios = [
    { jp: '学校', ko: '학교', en: 'Schools', zh: '学校' },
    { jp: '公共施設', ko: '공공시설', en: 'Public Facilities', zh: '公共设施' },
    { jp: '飲食店', ko: '음식점', en: 'Restaurants', zh: '餐厅' },
    { jp: '医療機関', ko: '의료기관', en: 'Medical Facilities', zh: '医疗机构' },
    { jp: '講演会場', ko: '강연회장', en: 'Conference Venues', zh: '会议场所' },
    { jp: 'スポーツジム', ko: '스포츠 짐', en: 'Sports Gyms', zh: '健身房' }
  ];

  const newProducts = [
    {
      name: 'ブラックレーザーパター',
      nameKo: '블랙 레이저 퍼터',
      nameEn: 'Black Laser Putter',
      nameZh: '黑色激光推杆',
      description: {
        jp: 'Makuakeにて530万円超の応援購入総額を集めた全く新しいゴルフギア！',
        ko: 'Makuake에서 530만 엔을 초과하는 응원 구매 총액을 모은 완전히 새로운 골프 기어!',
        en: 'A completely new golf gear that raised over 5.3 million yen on Makuake!',
        zh: '在Makuake上募集了超过530万日元应援购买总额的全新高尔夫装备！'
      },
      link: 'https://www.makuake.com/project/black_laser_putter/',
      website: 'https://laserputter.jp/'
    },
    {
      name: 'ペットスタイラー',
      nameKo: '펫 스타일러',
      nameEn: 'Pet Styler',
      nameZh: '宠物造型器',
      description: {
        jp: '手軽にシャンプー効果、毎日のブラッシングで清潔に',
        ko: '간편한 샴푸 효과, 매일 브러싱으로 깨끗하게',
        en: 'Easy shampoo effect, keeping clean with daily brushing',
        zh: '轻松洗发效果，每日刷毛保持清洁'
      },
      link: 'https://www.makuake.com/project/pet_styler',
      website: 'https://pet-styler.com/'
    },
    {
      name: 'DENBA Health',
      nameKo: 'DENBA Health',
      nameEn: 'DENBA Health',
      nameZh: 'DENBA Health',
      description: {
        jp: '世界初の水分子共振技術。DENBAで身体の内側から健康に',
        ko: '세계 최초의 물 분자 공명 기술. DENBA로 몸의 내측부터 건강하게',
        en: 'World-first water molecule resonance technology. Healthy from inside with DENBA',
        zh: '世界首创水分子共振技术。用DENBA从身体内部开始健康'
      },
      link: '#',
      website: '#'
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
            <Lightbulb className="h-12 w-12 text-yellow-400 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {language === 'jp' && '新規事業部'}
                {language === 'ko' && '신규 사업부'}
                {language === 'en' && 'New Business Division'}
                {language === 'zh' && '新业务事业部'}
              </h1>
              <p className="text-xl text-blue-200">
                {language === 'jp' && '革新的な製品・サービスの開発部門'}
                {language === 'ko' && '혁신적인 제품·서비스 개발 부문'}
                {language === 'en' && 'Innovative Product & Service Development Division'}
                {language === 'zh' && '创新产品·服务开发部门'}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-lg text-blue-100 max-w-4xl">
              {language === 'jp' && '新規事業部では様々な製品の監修、製造、販売を行っております。失敗を恐れずチャレンジする精神をもって今後ともさらなる努力と新製品開発に全力を尽くし世界で一番良いものを一番早くお届けできるよう社員一同邁進していく所存でございます。'}
              {language === 'ko' && '신규 사업부에서는 다양한 제품의 감수, 제조, 판매를 하고 있습니다. 실패를 두려워하지 않고 도전하는 정신을 가지고 앞으로도 더욱 노력하며 신제품 개발에 전력을 다해 세계에서 가장 좋은 것을 가장 빠르게 전달할 수 있도록 직원 일동 매진해 나갈 소정입니다.'}
              {language === 'en' && 'The New Business Division oversees, manufactures, and sells various products. With a spirit of challenge without fear of failure, all employees are committed to continuing efforts and dedicating ourselves to new product development to deliver the world\'s best products fastest.'}
              {language === 'zh' && '新业务事业部进行各种产品的监制、制造、销售。怀着不惧失败、勇于挑战的精神，今后也将继续努力，全力以赴进行新产品开发，为能将世界上最好的产品最快地提供给大家，全体员工将共同努力。'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Business Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '主な事業内容'}
              {language === 'ko' && '주요 사업 내용'}
              {language === 'en' && 'Main Business Areas'}
              {language === 'zh' && '主要业务内容'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {businessAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${area.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
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

      {/* TOLLGATE Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '非接触体温測定機「TOLLGATE」'}
              {language === 'ko' && '비접촉 체온 측정기 "TOLLGATE"'}
              {language === 'en' && 'Contactless Thermometer "TOLLGATE"'}
              {language === 'zh' && '非接触体温测定机"TOLLGATE"'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {language === 'jp' && 'マスクを付けたまま顔認証可能なAIシステム。検知誤差±0.3℃という高精度を実現'}
              {language === 'ko' && '마스크를 착용한 채로 안면 인식이 가능한 AI 시스템. 감지 오차 ±0.3℃의 고정밀도 실현'}
              {language === 'en' && 'AI system capable of facial recognition while wearing masks. Achieves high precision with detection error ±0.3℃'}
              {language === 'zh' && '可在佩戴口罩状态下进行人脸识别的AI系统。实现检测误差±0.3℃的高精度'}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              {language === 'jp' && 'コロナ禍による影響でこのような声が...'}
              {language === 'ko' && '코로나19 영향으로 이런 목소리가...'}
              {language === 'en' && 'Due to COVID-19 impact, we hear these concerns...'}
              {language === 'zh' && '由于新冠疫情影响，出现了这样的声音...'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-slate-700">
                    {language === 'jp' && '従業員の検温と手の消毒に毎日時間がかかる...'}
                    {language === 'ko' && '직원의 검온과 손 소독에 매일 시간이 걸린다...'}
                    {language === 'en' && 'Daily employee temperature checks and hand sanitization take too much time...'}
                    {language === 'zh' && '员工检温和手部消毒每天都要花费时间...'}
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-slate-700">
                    {language === 'jp' && '検温係のスタッフの感染リスクを低減したい...'}
                    {language === 'ko' && '검온 담당 직원의 감염 위험을 줄이고 싶다...'}
                    {language === 'en' && 'Want to reduce infection risk for temperature screening staff...'}
                    {language === 'zh' && '想要降低检温员工的感染风险...'}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-slate-700">
                    {language === 'jp' && 'お客様の検温を非接触で行いたい...'}
                    {language === 'ko' && '고객의 검온을 비접촉으로 하고 싶다...'}
                    {language === 'en' && 'Want to perform customer temperature checks contactlessly...'}
                    {language === 'zh' && '想要非接触地进行客户检温...'}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-slate-700">
                    {language === 'jp' && 'マスクをしていないお客様に注意しづらいな...'}
                    {language === 'ko' && '마스크를 착용하지 않은 고객에게 주의하기 어렵다...'}
                    {language === 'en' && 'Difficult to remind customers not wearing masks...'}
                    {language === 'zh' && '很难提醒未佩戴口罩的客户...'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'すべてTOLLGATEが解決します！'}
              {language === 'ko' && '모든 것을 TOLLGATE가 해결합니다!'}
              {language === 'en' && 'TOLLGATE solves everything!'}
              {language === 'zh' && 'TOLLGATE全部解决！'}
            </h3>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tollgateFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="text-white h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {feature.title[language]}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm">
                    {feature.description[language]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Usage Scenarios */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              {language === 'jp' && 'ご利用シーン'}
              {language === 'ko' && '이용 장면'}
              {language === 'en' && 'Usage Scenarios'}
              {language === 'zh' && '使用场景'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {usageScenarios.map((scenario, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="h-8 w-8 text-red-600" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">
                    {scenario[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TOLLGATE Link */}
          <div className="text-center">
            <a 
              href="https://tollgate.jp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                {language === 'jp' && 'TOLLGATEの特設ページへ'}
                {language === 'ko' && 'TOLLGATE 특설 페이지로'}
                {language === 'en' && 'Visit TOLLGATE Special Page'}
                {language === 'zh' && '前往TOLLGATE特设页面'}
                <ExternalLink className="h-5 w-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'その他の新製品'}
              {language === 'ko' && '기타 신제품'}
              {language === 'en' && 'Other New Products'}
              {language === 'zh' && '其他新产品'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <Lightbulb className="h-16 w-16 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-500">
                        {language === 'jp' ? product.name : 
                         language === 'ko' ? product.nameKo :
                         language === 'en' ? product.nameEn : product.nameZh}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' ? product.name : 
                     language === 'ko' ? product.nameKo :
                     language === 'en' ? product.nameEn : product.nameZh}
                  </h3>
                  <p className="text-slate-600 mb-6 text-sm">
                    {product.description[language]}
                  </p>
                  <div className="space-y-2">
                    {product.link !== '#' && (
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="w-full">
                          {language === 'jp' && 'Makuakeで詳細を見る'}
                          {language === 'ko' && 'Makuake에서 자세히 보기'}
                          {language === 'en' && 'View Details on Makuake'}
                          {language === 'zh' && '在Makuake查看详情'}
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </a>
                    )}
                    {product.website !== '#' && (
                      <a href={product.website} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="w-full">
                          {language === 'jp' && '公式サイト'}
                          {language === 'ko' && '공식 사이트'}
                          {language === 'en' && 'Official Website'}
                          {language === 'zh' && '官方网站'}
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
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
          <Link href="/contact">
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