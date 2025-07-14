import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Shield, CheckCircle, ExternalLink, Moon, Sun, Users, Globe, Award, Calendar, FileCheck, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Medical() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-corporate-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="text-white h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'jp' && 'メディカル事業部'}
              {language === 'ko' && '메디컬 사업부'}
              {language === 'en' && 'Medical Division'}
              {language === 'zh' && '医疗事业部'}
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'jp' && '視力矯正、視力回復が期待できるオルソケラトロジーレンズや眼内レンズ、目の周りの血流改善を促すIPL機器等を取扱っております。'}
              {language === 'ko' && '시력 교정, 시력 회복이 기대되는 오르토케라톨로지 렌즈와 안내 렌즈, 눈 주변의 혈류 개선을 촉진하는 IPL 기기 등을 취급하고 있습니다.'}
              {language === 'en' && 'We handle orthokeratology lenses for vision correction and recovery, intraocular lenses, and IPL devices that promote blood flow improvement around the eyes.'}
              {language === 'zh' && '我们经营用于视力矫正和恢复的角膜塑形镜、眼内晶状体以及促进眼部周围血流改善的IPL设备等。'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-l-4 border-corporate-blue bg-gradient-to-r from-blue-50 to-white">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-700">
                {language === 'jp' && '眼科業界は現在、目まぐるしい技術革新が行われています。第4次産業の核心となるAI知能や、5G等の最先端技術が眼科の医療器械に導入されて診断から手術までの幅広い分野で生かされています。当社のメディカル事業部では、世界で最先端の眼科用医療機器等をどこよりも早く導入して目が不自由な方々に最高レベルの医療が施されるよう最善を尽くしております。'}
                {language === 'ko' && '안과 업계는 현재 눈부신 기술 혁신이 이루어지고 있습니다. 제4차 산업의 핵심이 되는 AI 지능이나 5G 등의 최첨단 기술이 안과 의료기기에 도입되어 진단부터 수술까지 폭넓은 분야에서 활용되고 있습니다. 당사의 메디컬 사업부에서는 세계 최첨단 안과용 의료기기 등을 어디보다 빨리 도입하여 시각장애인들에게 최고 수준의 의료가 제공되도록 최선을 다하고 있습니다.'}
                {language === 'en' && 'The ophthalmology industry is currently undergoing rapid technological innovation. Core technologies of the 4th industrial revolution such as AI intelligence and 5G are being introduced into ophthalmic medical devices, being utilized in a wide range of fields from diagnosis to surgery. Our Medical Division strives to introduce the world\'s most advanced ophthalmic medical equipment faster than anyone else, ensuring that the highest level of medical care is provided to those with visual impairments.'}
                {language === 'zh' && '眼科行业目前正在进行令人瞩目的技术革新。作为第四次工业革命核心的AI智能和5G等尖端技术被引入眼科医疗器械，在从诊断到手术的广泛领域中得到应用。我公司的医疗事业部致力于比任何地方都更早地引进世界最先进的眼科医疗设备，为视觉障碍者提供最高水平的医疗服务。'}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'メディカル事業部　取扱品目'}
              {language === 'ko' && '메디컬 사업부 취급 품목'}
              {language === 'en' && 'Medical Division Products'}
              {language === 'zh' && '医疗事业部经营品目'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Extended Product List */}
            {[
              {
                jp: 'オルソケラトロジーレンズ',
                ko: '오르토케라톨로지 렌즈',
                en: 'Orthokeratology Lenses',
                zh: '角膜塑形镜'
              },
              {
                jp: '白内障用眼内レンズ',
                ko: '백내장용 안내 렌즈',
                en: 'Cataract Intraocular Lenses',
                zh: '白内障用眼内晶状体'
              },
              {
                jp: '眼内挿入レンズ',
                ko: '안내 삽입 렌즈',
                en: 'Intraocular Insert Lenses',
                zh: '眼内插入晶状体'
              },
              {
                jp: 'テンションリング',
                ko: '텐션 링',
                en: 'Tension Ring',
                zh: '张力环'
              },
              {
                jp: '各種眼科用医療機器',
                ko: '각종 안과용 의료기기',
                en: 'Various Ophthalmic Medical Devices',
                zh: '各种眼科医疗设备'
              },
              {
                jp: 'IPL（インテンス・パルス・ライト）',
                ko: 'IPL (인텐스 펄스 라이트)',
                en: 'IPL (Intense Pulsed Light)',
                zh: 'IPL (强脉冲光)'
              },
              {
                jp: 'コンタクトレンズ洗浄液',
                ko: '콘택트렌즈 세정액',
                en: 'Contact Lens Cleaning Solution',
                zh: '隐形眼镜清洗液'
              },
              {
                jp: 'トポグラフィー',
                ko: '토포그래피',
                en: 'Topography',
                zh: '地形图检查'
              },
              {
                jp: 'エキシマレーザー',
                ko: '엑시머 레이저',
                en: 'Excimer Laser',
                zh: '准分子激光器'
              },
              {
                jp: 'フェムトセカンドレーザー',
                ko: '펨토초 레이저',
                en: 'Femtosecond Laser',
                zh: '飞秒激光器'
              },
              {
                jp: '体温計',
                ko: '체온계',
                en: 'Thermometer',
                zh: '体温计'
              },
              {
                jp: '消毒ディスペンサー',
                ko: '소독 디스펜서',
                en: 'Disinfection Dispenser',
                zh: '消毒分配器'
              },
              {
                jp: '消毒スプレー',
                ko: '소독 스프레이',
                en: 'Disinfection Spray',
                zh: '消毒喷雾'
              }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-corporate-blue mr-3 flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-slate-900">
                      {product[language]}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* My Emerald */}
            <Card className="border-2 border-corporate-blue/20 hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-corporate-blue mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    {language === 'jp' && 'マイエメラルド'}
                    {language === 'ko' && '마이에메랄드'}
                    {language === 'en' && 'My Emerald'}
                    {language === 'zh' && 'My Emerald'}
                  </h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {language === 'jp' && '夜寝る前に、オルソケラトロジー用レンズ「マイエメラルド」を装用し、朝起きた時にレンズをはずすだけで、日中は「裸眼」で過ごすことが出来る新しい近視矯正法です。'}
                  {language === 'ko' && '밤에 잠들기 전에 오르토케라톨로지용 렌즈 "마이에메랄드"를 착용하고, 아침에 일어났을 때 렌즈를 빼기만 하면 낮에는 "맨눈"으로 지낼 수 있는 새로운 근시 교정법입니다.'}
                  {language === 'en' && 'A new myopia correction method where you wear the orthokeratology lens "My Emerald" before going to bed at night, and simply remove the lens when you wake up in the morning to spend the day with "naked eyes".'}
                  {language === 'zh' && '这是一种新的近视矫正方法，晚上睡前佩戴角膜塑形镜"My Emerald"，早上起床时取下镜片，白天就可以用"裸眼"生活。'}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    {language === 'jp' && 'オルソケラトロジーの仕組み'}
                    {language === 'ko' && '오르토케라톨로지의 원리'}
                    {language === 'en' && 'How Orthokeratology Works'}
                    {language === 'zh' && '角膜塑形术的原理'}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <Moon className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm text-slate-600">
                        {language === 'jp' ? '夜間装用' : language === 'ko' ? '야간 착용' : language === 'en' ? 'Overnight Wear' : '夜间佩戴'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Sun className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="text-sm text-slate-600">
                        {language === 'jp' ? '日中裸眼' : language === 'ko' ? '낮에는 맨눈' : language === 'en' ? 'Daytime Naked Eye' : '白天裸眼'}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    {language === 'jp' && 'ギリシャ語で「オルソ」とは矯正、「ケラト」は角膜、「ロジー」は療法、つまりオルソケラトロジーとはその語源のとおり視力を改善させる近視矯正法を意味します。'}
                    {language === 'ko' && '그리스어로 "오르토"는 교정, "케라토"는 각막, "로지"는 요법을 의미하며, 오르토케라톨로지는 그 어원 그대로 시력을 개선시키는 근시 교정법을 의미합니다.'}
                    {language === 'en' && 'In Greek, "Ortho" means correction, "Kerato" means cornea, and "logy" means therapy. Thus, orthokeratology means a myopia correction method that improves vision as its etymology suggests.'}
                    {language === 'zh' && '希腊语中"Ortho"意为矫正，"Kerato"意为角膜，"logy"意为疗法，因此角膜塑形术正如其词源所示，是一种改善视力的近视矫正方法。'}
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-600 mb-2">
                    {language === 'jp' && '2010年9月1日製造販売承認取得'}
                    {language === 'ko' && '2010년 9월 1일 제조판매 승인 취득'}
                    {language === 'en' && 'Manufacturing and Sales Approval Obtained September 1, 2010'}
                    {language === 'zh' && '2010年9月1日获得制造销售许可'}
                  </p>
                  <p className="text-sm text-slate-600">
                    {language === 'jp' && '医療機器承認番号：22200BZX00790000'}
                    {language === 'ko' && '의료기기 승인번호：22200BZX00790000'}
                    {language === 'en' && 'Medical Device Approval Number: 22200BZX00790000'}
                    {language === 'zh' && '医疗器械批准号：22200BZX00790000'}
                  </p>
                </div>

                <Button className="w-full" asChild>
                  <a href="http://www.emeraldlens.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language === 'jp' && '詳しく見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* AQUA CEL */}
            <Card className="border-2 border-corporate-blue/20 hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-corporate-blue mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">AQUA CEL</h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {language === 'jp' && '「高性能光線治療機」AQUA CELは頬骨とこめかみ周辺の皮膚領域にパルス光線を照射します。光線の照射により発生する温熱効果で機能が低下したマイボーム腺の機能の回復を助け、炎症を緩和します。'}
                  {language === 'ko' && '"고성능 광선 치료기" AQUA CEL은 광대뼈와 관자놀이 주변 피부 영역에 펄스 광선을 조사합니다. 광선 조사로 발생하는 온열 효과로 기능이 저하된 마이봄샘의 기능 회복을 돕고 염증을 완화합니다.'}
                  {language === 'en' && 'The "High-Performance Light Therapy Device" AQUA CEL irradiates pulsed light to the skin areas around the cheekbones and temples. The thermal effect generated by light irradiation helps restore the function of dysfunctional meibomian glands and reduces inflammation.'}
                  {language === 'zh' && '"高性能光线治疗机"AQUA CEL向颧骨和太阳穴周围的皮肤区域照射脉冲光线。光线照射产生的温热效应有助于恢复功能减退的睑板腺功能，缓解炎症。'}
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-600">
                    {language === 'jp' && '医療機器認証番号：303ADBZX00049000'}
                    {language === 'ko' && '의료기기 인증번호：303ADBZX00049000'}
                    {language === 'en' && 'Medical Device Certification Number: 303ADBZX00049000'}
                    {language === 'zh' && '医疗器械认证号：303ADBZX00049000'}
                  </p>
                </div>

                <Button className="w-full" asChild>
                  <a href="https://aquacel.jp/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language === 'jp' && '詳しく見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety and Trust */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '安全性と信頼'}
              {language === 'ko' && '안전성과 신뢰'}
              {language === 'en' && 'Safety and Trust'}
              {language === 'zh' && '安全性与信赖'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '世界各国で安全性と効果が認められた製品を提供しています'}
              {language === 'ko' && '세계 각국에서 안전성과 효과가 인정받은 제품을 제공합니다'}
              {language === 'en' && 'We provide products whose safety and effectiveness are recognized worldwide'}
              {language === 'zh' && '我们提供在世界各国得到安全性和有效性认可的产品'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '世界各国で承認'}
                  {language === 'ko' && '세계 각국에서 승인'}
                  {language === 'en' && 'Approved Worldwide'}
                  {language === 'zh' && '世界各国批准'}
                </h3>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && 'アメリカ・ヨーロッパを中心に世界各国で承認'}
                  {language === 'ko' && '미국·유럽을 중심으로 세계 각국에서 승인'}
                  {language === 'en' && 'Approved in countries worldwide, centered in the US and Europe'}
                  {language === 'zh' && '以美国·欧洲为中心在世界各国获得批准'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '安全な使用'}
                  {language === 'ko' && '안전한 사용'}
                  {language === 'en' && 'Safe Usage'}
                  {language === 'zh' && '安全使用'}
                </h3>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && 'レンズの装用を中止すれば角膜の形状は元に戻ります'}
                  {language === 'ko' && '렌즈 착용을 중단하면 각막 형상이 원래대로 돌아갑니다'}
                  {language === 'en' && 'Corneal shape returns to normal when lens use is discontinued'}
                  {language === 'zh' && '停止佩戴镜片后角膜形状会恢复原状'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '快適な使用感'}
                  {language === 'ko' && '편안한 사용감'}
                  {language === 'en' && 'Comfortable Use'}
                  {language === 'zh' && '舒适的使用感'}
                </h3>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && '夜間装用でほこり等の心配がなく快適'}
                  {language === 'ko' && '야간 착용으로 먼지 등의 걱정이 없어 편안'}
                  {language === 'en' && 'Comfortable overnight wear without worry about dust'}
                  {language === 'zh' && '夜间佩戴无需担心灰尘等问题，舒适便利'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Medical Device Manufacturers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '世界の医療機器メーカー'}
              {language === 'ko' && '세계의 의료기기 제조사'}
              {language === 'en' && 'Global Medical Device Manufacturers'}
              {language === 'zh' && '世界医疗器械制造商'}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              {language === 'jp' && '弊社は、眼科領域に関して常にお客様のニーズと要望に注目し、世界中の最先端の製品をサポートをさせていただいております。'}
              {language === 'ko' && '저희는 안과 영역에 관해 항상 고객의 니즈와 요망에 주목하여 세계 최첨단 제품을 지원해 드리고 있습니다.'}
              {language === 'en' && 'We always focus on customer needs and requirements in the ophthalmic field, supporting cutting-edge products from around the world.'}
              {language === 'zh' && '我们始终关注眼科领域客户的需求和要求，为世界各地的尖端产品提供支持。'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                country: { jp: 'アメリカ', ko: '미국', en: 'USA', zh: '美国' },
                company: 'Euclid System',
                product: { jp: 'オルソケラトロジー', ko: '오르토케라톨로지', en: 'Orthokeratology', zh: '角膜塑形术' },
                url: 'https://euclidsys.com/'
              },
              {
                country: { jp: 'アメリカ', ko: '미국', en: 'USA', zh: '美国' },
                company: 'Lacrimedics',
                product: { jp: '涙点プラグ', ko: '누점 플러그', en: 'Punctal Plugs', zh: '泪点栓' },
                url: 'http://www.lacrimedics.com/'
              },
              {
                country: { jp: 'ドイツ', ko: '독일', en: 'Germany', zh: '德国' },
                company: 'HumanOptics AG',
                product: { jp: '人工虹彩、IOL', ko: '인공 홍채, IOL', en: 'Artificial Iris, IOL', zh: '人工虹膜, IOL' },
                url: 'https://www.humanoptics.com/en/'
              },
              {
                country: { jp: 'ドイツ', ko: '독일', en: 'Germany', zh: '德国' },
                company: 'Bausch+Lomb Surgical',
                product: { jp: 'エキシマレーザー、フェムトセカンドレーザー', ko: '엑시머 레이저, 펨토초 레이저', en: 'Excimer Laser, Femtosecond Laser', zh: '准分子激光, 飞秒激光' },
                url: 'https://www.bauschsurgical.eu/products/laser/'
              },
              {
                country: { jp: 'カナダ', ko: '캐나다', en: 'Canada', zh: '加拿大' },
                company: 'INNOVATIVE EXCIMER SOLUTIONS',
                product: { jp: 'アモイルブラシ', ko: '아모일 브러시', en: 'Amoils Brush', zh: '阿莫伊尔刷' },
                url: 'http://www.innovativexcimer.com/node/2'
              },
              {
                country: { jp: '韓国', ko: '한국', en: 'South Korea', zh: '韩国' },
                company: 'Jeisys',
                product: { jp: 'IPL', ko: 'IPL', en: 'IPL', zh: 'IPL' },
                url: 'https://www.jeisys.com/'
              },
              {
                country: { jp: 'イタリア', ko: '이탈리아', en: 'Italy', zh: '意大利' },
                company: 'SIFI',
                product: { jp: 'IOL', ko: 'IOL', en: 'IOL', zh: 'IOL' },
                url: 'https://www.sifigroup.com/'
              },
              {
                country: { jp: 'フランス', ko: '프랑스', en: 'France', zh: '法国' },
                company: 'LCS',
                product: { jp: 'Eyebrid', ko: 'Eyebrid', en: 'Eyebrid', zh: 'Eyebrid' },
                url: 'https://www.laboratoire-lcs.com/en/'
              },
              {
                country: { jp: 'イスラエル', ko: '이스라엘', en: 'Israel', zh: '以色列' },
                company: 'Hanita Lenses',
                product: { jp: 'Intensity', ko: 'Intensity', en: 'Intensity', zh: 'Intensity' },
                url: 'https://www.hanitalenses.com/'
              }
            ].map((manufacturer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-corporate-blue font-semibold mb-1">
                        {manufacturer.country[language]}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {manufacturer.company}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {manufacturer.product[language]}
                      </p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-slate-400" />
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={manufacturer.url} target="_blank" rel="noopener noreferrer">
                      {language === 'jp' && '詳細を見る'}
                      {language === 'ko' && '자세히 보기'}
                      {language === 'en' && 'Visit Website'}
                      {language === 'zh' && '访问网站'}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Conference Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '学会情報'}
              {language === 'ko' && '학회 정보'}
              {language === 'en' && 'Academic Conference Information'}
              {language === 'zh' && '学会信息'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '日本眼科学会の主要学術集会の情報を掲載しております'}
              {language === 'ko' && '일본안과학회의 주요 학술 집회 정보를 게재하고 있습니다'}
              {language === 'en' && 'Information on major academic conferences of the Japanese Ophthalmological Society'}
              {language === 'zh' && '刊登日本眼科学会主要学术集会的信息'}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* 2025 Conferences */}
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 text-corporate-blue mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    {language === 'jp' && '2025年 学会一覧'}
                    {language === 'ko' && '2025년 학회 일람'}
                    {language === 'en' && '2025 Conference Schedule'}
                    {language === 'zh' && '2025年学会一览'}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    {
                      date: { jp: '1月25日～26日', ko: '1월 25일~26일', en: 'January 25-26', zh: '1月25日~26日' },
                      name: { jp: '日本糖尿病眼学会総会', ko: '일본당뇨병안학회 총회', en: 'Japanese Diabetic Eye Society', zh: '日本糖尿病眼学会总会' },
                      location: { jp: '那覇市 パシフィックホテル沖縄', ko: '나하시 퍼시픽호텔 오키나와', en: 'Naha, Pacific Hotel Okinawa', zh: '那霸市 太平洋酒店冲绳' }
                    },
                    {
                      date: { jp: '1月31日～2月2日', ko: '1월 31일~2월 2일', en: 'Jan 31 - Feb 2', zh: '1月31日~2月2日' },
                      name: { jp: '日本眼科手術学会学術総会', ko: '일본안과수술학회 학술총회', en: 'Japanese Society of Ophthalmic Surgery', zh: '日本眼科手术学会学术总会' },
                      location: { jp: '横浜市 パシフィコ横浜', ko: '요코하마시 퍼시피코 요코하마', en: 'Yokohama, Pacifico Yokohama', zh: '横滨市 横滨太平洋会展中心' }
                    },
                    {
                      date: { jp: '2月5日～3月5日', ko: '2월 5일~3월 5일', en: 'Feb 5 - Mar 5', zh: '2月5日~3月5日' },
                      name: { jp: '日本老視学会学術総会', ko: '일본노안학회 학술총회', en: 'Japanese Presbyopia Society', zh: '日本老视学会学术总会' },
                      location: { jp: 'Web（オンデマンド配信）', ko: 'Web (온디맨드 배신)', en: 'Web (On-demand)', zh: 'Web（点播配信）' }
                    },
                    {
                      date: { jp: '2月20日～22日', ko: '2월 20일~22일', en: 'February 20-22', zh: '2月20日~22日' },
                      name: { jp: '角膜カンファランス2025', ko: '각막 컨퍼런스 2025', en: 'Corneal Conference 2025', zh: '角膜会议2025' },
                      location: { jp: '和歌山県高野町 高野山大学', ko: '와카야마현 고야초 고야산대학', en: 'Koyasan, Wakayama', zh: '和歌山县高野町 高野山大学' }
                    },
                    {
                      date: { jp: '4月17日～20日', ko: '4월 17일~20일', en: 'April 17-20', zh: '4月17日~20日' },
                      name: { jp: '日本眼科学会総会', ko: '일본안과학회 총회', en: 'Japanese Ophthalmological Society Annual Meeting', zh: '日本眼科学会总会' },
                      location: { jp: '東京都 東京国際フォーラム', ko: '도쿄도 도쿄국제포럼', en: 'Tokyo International Forum', zh: '东京都 东京国际论坛' }
                    },
                    {
                      date: { jp: '5月17日', ko: '5월 17일', en: 'May 17', zh: '5月17日' },
                      name: { jp: '日本眼形成再建外科学会学術集会', ko: '일본안성형재건외과학회 학술집회', en: 'Japanese Society of Oculoplastic Surgery', zh: '日本眼整形重建外科学会学术集会' },
                      location: { jp: '京都市 京都府立医科大学', ko: '교토시 교토부립의과대학', en: 'Kyoto Prefecture University of Medicine', zh: '京都市 京都府立医科大学' }
                    },
                    {
                      date: { jp: '5月31日～6月1日', ko: '5월 31일~6월 1일', en: 'May 31 - Jun 1', zh: '5月31日~6月1日' },
                      name: { jp: '日本ロービジョン学会学術総会', ko: '일본로우비전학회 학술총회', en: 'Japanese Society of Low Vision', zh: '日本低视力学会学术总会' },
                      location: { jp: 'さいたま市 ソニックシティ', ko: '사이타마시 소닉시티', en: 'Saitama, Sonic City', zh: '埼玉市 声波城' }
                    },
                    {
                      date: { jp: '6月6日～7日', ko: '6월 6일~7일', en: 'June 6-7', zh: '6月6日~7日' },
                      name: { jp: '日本弱視斜視学会・日本小児眼科学会総会', ko: '일본약시사시학회·일본소아안과학회 총회', en: 'Japanese Association of Strabismus & Amblyopia', zh: '日本弱视斜视学会·日本小儿眼科学会总会' },
                      location: { jp: '京都市 ロームシアター京都', ko: '교토시 로움시어터 교토', en: 'Kyoto, Rohm Theatre', zh: '京都市 罗姆剧院京都' }
                    },
                    {
                      date: { jp: '6月20日～22日', ko: '6월 20일~22일', en: 'June 20-22', zh: '6月20日~22日' },
                      name: { jp: 'JSCRS学術総会', ko: 'JSCRS 학술총회', en: 'JSCRS Annual Meeting', zh: 'JSCRS学术总会' },
                      location: { jp: '福岡市 福岡国際会議場', ko: '후쿠오카시 후쿠오카국제회의장', en: 'Fukuoka International Conference Hall', zh: '福冈市 福冈国际会议场' }
                    },
                    {
                      date: { jp: '6月27日～28日', ko: '6월 27일~28일', en: 'June 27-28', zh: '6月27日~28日' },
                      name: { jp: '日本眼科AI学会総会', ko: '일본안과AI학회 총회', en: 'Japanese Society of AI in Ophthalmology', zh: '日本眼科AI学会总会' },
                      location: { jp: '大阪市 グラングリーン大阪', ko: '오사카시 그랜그린 오사카', en: 'Osaka, Gran Green Osaka', zh: '大阪市 格兰绿色大阪' }
                    },
                    {
                      date: { jp: '6月28日～29日', ko: '6월 28일~29일', en: 'June 28-29', zh: '6月28日~29日' },
                      name: { jp: '日本近視学会総会', ko: '일본근시학회 총회', en: 'Japanese Society of Myopia', zh: '日本近视学会总会' },
                      location: { jp: '大阪市 グラングリーン大阪', ko: '오사카시 그랜그린 오사카', en: 'Osaka, Gran Green Osaka', zh: '大阪市 格兰绿色大阪' }
                    },
                    {
                      date: { jp: '7月11日～13日', ko: '7월 11일~13일', en: 'July 11-13', zh: '7月11日~13日' },
                      name: { jp: '日本眼感染症学会・日本眼炎症学会・日本コンタクトレンズ学会総会・日本涙道涙液学会総会', ko: '일본안감염증학회·일본안염증학회·일본콘택트렌즈학회·일본누도누액학회 총회', en: 'Japanese Society of Ocular Infections & Inflammation', zh: '日本眼感染症学会·日本眼炎症学会等总会' },
                      location: { jp: '横浜市 パシフィコ横浜会議センター', ko: '요코하마시 퍼시피코 요코하마 회의센터', en: 'Yokohama, Pacifico Yokohama', zh: '横滨市 横滨太平洋会议中心' }
                    },
                    {
                      date: { jp: '7月18日～20日', ko: '7월 18일~20일', en: 'July 18-20', zh: '7月18日~20日' },
                      name: { jp: '日本白内障学会総会・水晶体研究会', ko: '일본백내장학회 총회·수정체연구회', en: 'Japanese Society of Cataract & Crystalline Lens', zh: '日本白内障学会总会·水晶体研究会' },
                      location: { jp: '金沢市 石川県立音楽堂', ko: '가나자와시 이시카와현립 음악당', en: 'Kanazawa, Ishikawa Music Hall', zh: '金泽市 石川县立音乐厅' }
                    },
                    {
                      date: { jp: '7月19日～20日', ko: '7월 19일~20일', en: 'July 19-20', zh: '7月19日~20日' },
                      name: { jp: '日本眼循環学会', ko: '일본안순환학회', en: 'Japanese Society of Ocular Circulation', zh: '日本眼循环学会' },
                      location: { jp: '神戸市 神戸ファッションマート', ko: '고베시 고베 패션마트', en: 'Kobe Fashion Mart', zh: '神户市 神户时装市场' }
                    },
                    {
                      date: { jp: '8月30日～31日', ko: '8월 30일~31일', en: 'August 30-31', zh: '8月30日~31日' },
                      name: { jp: '日本眼光学学会総会', ko: '일본안광학학회 총회', en: 'Japanese Society of Ophthalmic Optics', zh: '日本眼光学学会总会' },
                      location: { jp: '名古屋市 ウインクあいち', ko: '나고야시 윙크 아이치', en: 'Nagoya, Winc Aichi', zh: '名古屋市 眨眼爱知' }
                    },
                    {
                      date: { jp: '9月12日～14日', ko: '9월 12일~14일', en: 'September 12-14', zh: '9月12日~14日' },
                      name: { jp: '日本緑内障学会', ko: '일본녹내장학회', en: 'Japanese Glaucoma Society', zh: '日本青光眼学会' },
                      location: { jp: '神戸市 神戸ポートピアホテル', ko: '고베시 고베 포트피아호텔', en: 'Kobe Portopia Hotel', zh: '神户市 神户港岛酒店' }
                    },
                    {
                      date: { jp: '9月19日～20日', ko: '9월 19일~20일', en: 'September 19-20', zh: '9月19日~20日' },
                      name: { jp: '日本シェーグレン症候群学会', ko: '일본쇼그렌증후군학회', en: 'Japanese Society of Sjögren Syndrome', zh: '日本干燥综合征学会' },
                      location: { jp: '東京都 コングレスクエア羽田', ko: '도쿄도 콩그레스스퀘어 하네다', en: 'Tokyo, Congress Square Haneda', zh: '东京都 国会广场羽田' }
                    },
                    {
                      date: { jp: '9月20日～21日', ko: '9월 20일~21일', en: 'September 20-21', zh: '9月20日~21日' },
                      name: { jp: '日本眼腫瘍学会', ko: '일본안종양학회', en: 'Japanese Society of Ocular Oncology', zh: '日本眼肿瘤学会' },
                      location: { jp: '札幌市 北海道大学学友会館', ko: '삿포로시 홋카이도대학 학우회관', en: 'Sapporo, Hokkaido University', zh: '札幌市 北海道大学校友会馆' }
                    },
                    {
                      date: { jp: '9月27日～28日', ko: '9월 27일~28일', en: 'September 27-28', zh: '9月27日~28日' },
                      name: { jp: '日本眼科アレルギー学会学術集会', ko: '일본안과알레르기학회 학술집회', en: 'Japanese Society of Allergology in Ophthalmology', zh: '日本眼科过敏学会学术集会' },
                      location: { jp: '東京都 御茶ノ水ソラシティ', ko: '도쿄도 오차노미즈 소라시티', en: 'Tokyo, Ochanomizu Sola City', zh: '东京都 御茶之水天空城' }
                    },
                    {
                      date: { jp: '10月9日～12日', ko: '10월 9일~12일', en: 'October 9-12', zh: '10月9日~12日' },
                      name: { jp: '日本臨床眼科学会', ko: '일본임상안과학회', en: 'Japanese Clinical Ophthalmology Society', zh: '日本临床眼科学会' },
                      location: { jp: '大阪市 大阪府立国際会議場', ko: '오사카시 오사카부립국제회의장', en: 'Osaka International Convention Center', zh: '大阪市 大阪府立国际会议场' }
                    },
                    {
                      date: { jp: '11月21日～22日', ko: '11월 21일~22일', en: 'November 21-22', zh: '11月21日~22日' },
                      name: { jp: '日本神経眼科学会総会', ko: '일본신경안과학회 총회', en: 'Japanese Neuro-Ophthalmology Society', zh: '日本神经眼科学会总会' },
                      location: { jp: '豊中市 千里ライフサイエンスセンター', ko: '도요나카시 센리 라이프사이언스센터', en: 'Toyonaka, Senri Life Science Center', zh: '丰中市 千里生命科学中心' }
                    },
                    {
                      date: { jp: '11月29日', ko: '11월 29일', en: 'November 29', zh: '11月29日' },
                      name: { jp: '日本産業・労働・交通眼科学会', ko: '일본산업·노동·교통안과학회', en: 'Japanese Society of Industrial & Traffic Ophthalmology', zh: '日本产业·劳动·交通眼科学会' },
                      location: { jp: '横浜市 昭和大学横浜市北部病院', ko: '요코하마시 쇼와대학 요코하마시 북부병원', en: 'Yokohama, Showa University Hospital', zh: '横滨市 昭和大学横滨市北部医院' }
                    },
                    {
                      date: { jp: '11月29日～30日', ko: '11월 29일~30일', en: 'November 29-30', zh: '11月29日~30日' },
                      name: { jp: '日本眼薬理学会', ko: '일본안약리학회', en: 'Japanese Society of Ocular Pharmacology', zh: '日本眼药理学会' },
                      location: { jp: '甲府市 山梨県立図書館', ko: '고후시 야마나시현립도서관', en: 'Kofu, Yamanashi Prefectural Library', zh: '甲府市 山梨县立图书馆' }
                    },
                    {
                      date: { jp: '12月5日～7日', ko: '12월 5일~7일', en: 'December 5-7', zh: '12月5日~7日' },
                      name: { jp: '日本網膜硝子体学会', ko: '일본망막유리체학회', en: 'Japanese Society of Retina and Vitreous', zh: '日本网膜玻璃体学会' },
                      location: { jp: '東京都 東京国際フォーラム', ko: '도쿄도 도쿄국제포럼', en: 'Tokyo International Forum', zh: '东京都 东京国际论坛' }
                    }
                  ].map((conference, index) => (
                    <div key={index} className="border-l-4 border-corporate-blue bg-blue-50 p-4 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-corporate-blue mb-1">
                            {conference.date[language]}
                          </div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                            {conference.name[language]}
                          </h4>
                          <div className="flex items-center text-xs text-slate-600">
                            <MapPin className="h-3 w-3 mr-1" />
                            {conference.location[language]}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>



          </div>
        </div>
      </section>

      {/* Certifications and Licenses */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileCheck className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '取得認証一覧'}
              {language === 'ko' && '취득 인증 일람'}
              {language === 'en' && 'Certifications & Licenses'}
              {language === 'zh' && '取得认证一览'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '医療機器の製造・販売に必要な各種認証を取得しています'}
              {language === 'ko' && '의료기기 제조·판매에 필요한 각종 인증을 취득하고 있습니다'}
              {language === 'en' && 'We have obtained various certifications required for medical device manufacturing and sales'}
              {language === 'zh' && '已取得医疗器械制造销售所需的各种认证'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: {
                  jp: '高度管理医療機器等販売業許可書',
                  ko: '고도관리의료기기등 판매업 허가서',
                  en: 'Advanced Medical Device Sales License',
                  zh: '高度管理医疗器械等销售业许可证'
                },
                icon: Shield,
                color: 'text-blue-600'
              },
              {
                title: {
                  jp: '医療機器製造業登録証',
                  ko: '의료기기 제조업 등록증',
                  en: 'Medical Device Manufacturing Registration',
                  zh: '医疗器械制造业登记证'
                },
                icon: CheckCircle,
                color: 'text-green-600'
              },
              {
                title: {
                  jp: '第一種医療機器製造販売業許可証',
                  ko: '제1종 의료기기 제조판매업 허가증',
                  en: 'Class I Medical Device Manufacturing & Sales License',
                  zh: '第一类医疗器械制造销售业许可证'
                },
                icon: Award,
                color: 'text-purple-600'
              },
              {
                title: {
                  jp: 'マイエメラルド承認書',
                  ko: '마이에메랄드 승인서',
                  en: 'My Emerald Approval Certificate',
                  zh: 'My Emerald批准证书'
                },
                icon: Eye,
                color: 'text-emerald-600'
              },
              {
                title: {
                  jp: 'AQUACEL承認書',
                  ko: 'AQUACEL 승인서',
                  en: 'AQUACEL Approval Certificate',
                  zh: 'AQUACEL批准证书'
                },
                icon: Heart,
                color: 'text-red-600'
              },
              {
                title: {
                  jp: '日本コンタクトレンズ協会会員証',
                  ko: '일본콘택트렌즈협회 회원증',
                  en: 'Japan Contact Lens Association Membership',
                  zh: '日本隐形眼镜协会会员证'
                },
                icon: Users,
                color: 'text-orange-600'
              }
            ].map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <cert.icon className={`h-12 w-12 ${cert.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {cert.title[language]}
                  </h3>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-green-600 font-medium">
                      {language === 'jp' && '取得済み'}
                      {language === 'ko' && '취득 완료'}
                      {language === 'en' && 'Certified'}
                      {language === 'zh' && '已取得'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '品質と安全性への取り組み'}
                  {language === 'ko' && '품질과 안전성에 대한 노력'}
                  {language === 'en' && 'Commitment to Quality and Safety'}
                  {language === 'zh' && '对品质和安全性的承诺'}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {language === 'jp' && '当社は医療機器の製造・販売において、厚生労働省が定める厳格な品質基準をクリアし、必要な許可・認証をすべて取得しています。患者様の安全と治療効果を最優先に考え、継続的な品質改善に取り組んでおります。'}
                  {language === 'ko' && '저희는 의료기기 제조·판매에 있어서 후생노동성이 정한 엄격한 품질 기준을 통과하고 필요한 허가·인증을 모두 취득하고 있습니다. 환자의 안전과 치료 효과를 최우선으로 생각하며 지속적인 품질 개선에 노력하고 있습니다.'}
                  {language === 'en' && 'In the manufacturing and sales of medical devices, we have cleared the strict quality standards set by the Ministry of Health, Labour and Welfare and obtained all necessary permits and certifications. We prioritize patient safety and treatment effectiveness, working on continuous quality improvement.'}
                  {language === 'zh' && '在医疗器械的制造和销售方面，我们通过了厚生劳动省制定的严格质量标准，获得了所有必要的许可和认证。我们以患者安全和治疗效果为最优先考虑，致力于持续的质量改进。'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic and Research Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '学会・研究活動'}
              {language === 'ko' && '학회·연구 활동'}
              {language === 'en' && 'Academic & Research Activities'}
              {language === 'zh' && '学会·研究活动'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '最新の眼科医療技術の普及と発展に貢献しています'}
              {language === 'ko' && '최신 안과 의료 기술의 보급과 발전에 기여하고 있습니다'}
              {language === 'en' && 'Contributing to the advancement and dissemination of cutting-edge ophthalmic medical technology'}
              {language === 'zh' && '为最新眼科医疗技术的普及和发展做出贡献'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '日本眼科学会'}
                  {language === 'ko' && '일본안과학회'}
                  {language === 'en' && 'Japanese Ophthalmological Society'}
                  {language === 'zh' && '日本眼科学会'}
                </h3>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && '最新の眼科医療技術に関する研究発表'}
                  {language === 'ko' && '최신 안과 의료 기술에 관한 연구 발표'}
                  {language === 'en' && 'Research presentations on cutting-edge ophthalmic technology'}
                  {language === 'zh' && '关于最新眼科医疗技术的研究发表'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '国際眼科学会'}
                  {language === 'ko' && '국제안과학회'}
                  {language === 'en' && 'International Ophthalmology Congress'}
                  {language === 'zh' && '国际眼科学会'}
                </h3>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && 'オルソケラトロジーの国際的な普及活動'}
                  {language === 'ko' && '오르토케라톨로지의 국제적 보급 활동'}
                  {language === 'en' && 'International dissemination of orthokeratology'}
                  {language === 'zh' && '角膜塑形术的国际推广活动'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {language === 'jp' && '医療機器学会'}
                  {language === 'ko' && '의료기기학회'}
                  {language === 'en' && 'Medical Device Society'}
                  {language === 'zh' && '医疗器械学会'}
                </h3>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && '最新医療機器の安全性と有効性の研究'}
                  {language === 'ko' && '최신 의료기기의 안전성과 유효성 연구'}
                  {language === 'en' && 'Research on safety and efficacy of latest medical devices'}
                  {language === 'zh' && '最新医疗器械安全性和有效性研究'}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '30年以上の研究実績'}
                  {language === 'ko' && '30년 이상의 연구 실적'}
                  {language === 'en' && 'Over 30 Years of Research Excellence'}
                  {language === 'zh' && '30年以上的研究实绩'}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {language === 'jp' && 'オルソケラトロジーはアメリカで30年以上前から研究・施術され、現在、アメリカ・ヨーロッパを中心に、世界各国でその安全性と効果が認められ、実地されております。当社では最新の臨床データと学術研究に基づいて、より安全で効果的な治療法の提供に努めています。'}
                  {language === 'ko' && '오르토케라톨로지는 미국에서 30년 이상 전부터 연구·시술되어 현재 미국·유럽을 중심으로 세계 각국에서 그 안전성과 효과가 인정받아 실시되고 있습니다. 저희는 최신 임상 데이터와 학술 연구를 바탕으로 더욱 안전하고 효과적인 치료법 제공에 힘쓰고 있습니다.'}
                  {language === 'en' && 'Orthokeratology has been researched and practiced in the United States for over 30 years, and its safety and effectiveness are now recognized and implemented worldwide, particularly in the US and Europe. We strive to provide safer and more effective treatments based on the latest clinical data and academic research.'}
                  {language === 'zh' && '角膜塑形术在美国已有30多年的研究和实践历史，目前在以美国和欧洲为中心的世界各国，其安全性和有效性得到认可并得以实施。我们致力于基于最新临床数据和学术研究提供更安全、更有效的治疗方法。'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-corporate-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'jp' && 'お問い合わせ'}
            {language === 'ko' && '문의하기'}
            {language === 'en' && 'Contact Us'}
            {language === 'zh' && '联系我们'}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {language === 'jp' && 'メディカル事業部の製品についてお気軽にお問い合わせください'}
            {language === 'ko' && '메디컬 사업부 제품에 대해 언제든지 문의해 주세요'}
            {language === 'en' && 'Please feel free to contact us about our Medical Division products'}
            {language === 'zh' && '关于医疗事业部的产品，请随时联系我们'}
          </p>
          <Link href={`/${language}/contact`}>
            <Button size="lg" variant="outline" className="bg-white text-corporate-blue hover:bg-slate-100">
              {language === 'jp' && 'お問い合わせ'}
              {language === 'ko' && '문의하기'}
              {language === 'en' && 'Contact Us'}
              {language === 'zh' && '联系我们'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}