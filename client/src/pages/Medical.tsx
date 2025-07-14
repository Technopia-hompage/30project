import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Shield, CheckCircle, ExternalLink } from "lucide-react";
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
              {language === 'jp' && '主要取扱品目'}
              {language === 'ko' && '주요 취급 품목'}
              {language === 'en' && 'Main Products'}
              {language === 'zh' && '主要经营品目'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Product List */}
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
                en: 'Intraocular Lenses for Cataract',
                zh: '白内障用眼内晶状体'
              },
              {
                jp: 'IPL（インテンス・パルス・ライト）',
                ko: 'IPL (인텐스 펄스 라이트)',
                en: 'IPL (Intense Pulsed Light)',
                zh: 'IPL (强脉冲光)'
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
                jp: '各種眼科用医療機器',
                ko: '각종 안과용 의료기기',
                en: 'Various Ophthalmic Medical Devices',
                zh: '各种眼科医疗设备'
              }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-corporate-blue mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900">
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

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
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