import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink, Globe, Award, Calendar, FileCheck, Check } from "lucide-react";
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
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
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
                {language === 'jp' && '当社メディカル事業部は、AIや5Gなど最先端技術を搭載した眼科用医療機器をいち早く導入し、より高度な医療の提供に努めています。PMDA登録対応、KOLネットワークの構築、海外メーカーとの協業などにより、迅速な市場対応力と製品展開力を備えています。  また、医療展示会や学会にも積極的に参加し、常に最新の医療トレンドを反映しています。'}
                {language === 'ko' && '당사 메디컬 사업부는 최첨단 기술을 탑재한 안과 의료기기를 최대한 빨리 도입하여 더 높은 수준의 의료를 제공하기 위해 노력하고 있습니다. PMDA 등록 대응, KOL 네트워크 구축, 해외 메이커와의 협업 등을 통해 빠른 시장 대응력과 제품 확산력을 갖추고 있습니다. 또한, 의료 전시회와 학회에 적극적으로 참여하여 항상 최신 의료 트렌드를 반영하고 있습니다.'}
                {language === 'en' && 'Our Medical Division strives to introduce the world\'s most advanced ophthalmic medical equipment faster than anyone else, ensuring that the highest level of medical care is provided to those with visual impairments. We have achieved rapid market response and product expansion through PMDA registration, KOL network building, and collaboration with overseas manufacturers. We also actively participate in medical exhibitions and conferences to reflect the latest medical trends.'}
                {language === 'zh' && '我们的医疗事业部致力于比任何地方都更早地引进世界最先进的眼科医疗设备，为视觉障碍者提供最高水平的医疗服务。我们通过PMDA注册、KOL网络构建、与海外制造商的合作等，迅速响应市场并扩大产品范围。此外，我们还积极参加医疗展览会和学术会议，反映最新的医疗趋势。'}
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
              }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-corporate-blue mr-3 flex-shrink-0" />
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
                      <Eye className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm text-slate-600">
                        {language === 'jp' ? '夜間装用' : language === 'ko' ? '야간 착용' : language === 'en' ? 'Overnight Wear' : '夜间佩戴'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="text-sm text-slate-600">
                        {language === 'jp' ? '日中裸眼' : language === 'ko' ? '낮 시간 맨눈' : language === 'en' ? 'Daytime Naked Eye' : '白天裸眼'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {language === 'jp' && '適用対象'}
                    {language === 'ko' && '적용 대상'}
                    {language === 'en' && 'Suitable Candidates'}
                    {language === 'zh' && '适用对象'}
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• {language === 'jp' ? '近視度数：-6.00D以下' : language === 'ko' ? '근시 도수: -6.00D 이하' : language === 'en' ? 'Myopia: -6.00D or less' : '近视度数：-6.00D以下'}</li>
                    <li>• {language === 'jp' ? '乱視度数：-1.75D以下' : language === 'ko' ? '난시 도수: -1.75D 이하' : language === 'en' ? 'Astigmatism: -1.75D or less' : '散光度数：-1.75D以下'}</li>
                  </ul>
                </div>

                <Button className="w-full" asChild >
                  <a href="https://www.emeraldlens.com/" target="_blank" rel="noopener noreferrer" >
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
            <Card className="border-2 border-corporate-blue/20  hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-corporate-blue mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900 ">
                    {language === 'jp' && 'AQUA CEL'}
                    {language === 'ko' && 'AQUA CEL'}
                    {language === 'en' && 'AQUA CEL'}
                    {language === 'zh' && 'AQUA CEL'}
                  </h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {language === 'jp' && '「高性能光線治療機」AQUA CELは頬骨とこめかみ周辺の皮膚領域にパルス光線を照射します。光線の照射により発生する温熱効果で機能が低下したマイボーム腺の機能の回復を助け、炎症を緩和します。'}
                  {language === 'ko' && '"고성능 광선 치료기" AQUA CEL은 광대뼈와 관자놀이 주변 피부 영역에 펄스 광선을 조사합니다. 광선 조사로 발생하는 온열 효과로 기능이 저하된 마이봄샘의 기능 회복을 돕고 염증을 완화합니다.'}
                  {language === 'en' && 'The "High-Performance Light Therapy Device" AQUA CEL irradiates pulsed light to the skin areas around the cheekbones and temples. The thermal effect generated by light irradiation helps restore the function of dysfunctional meibomian glands and reduces inflammation.'}
                  {language === 'zh' && '"高性能光线治疗机"AQUA CEL向颧骨和太阳穴周围的皮肤区域照射脉冲光线。光线照射产生的温热效应有助于恢复功能减退的睑板腺功能，缓解炎症。'}
                </p>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {language === 'jp' && 'キセノンフラッシュランプが発する光をカットオフフィルターに通し、420nm〜1200nmの範囲で9種類の波長を選択します。選択された可視光線または赤外線の連続スペクトル光による温熱効果によって、血流を改善し、疼痛や炎症の緩和を図ります。'}
                  {language === 'ko' && '제논 플래시 램프가 발하는 빛을 컷오프 필터에 통과시켜 420nm~1200nm 범위에서 9종류의 파장을 선택합니다. 선택된 가시광선 또는 적외선의 연속 스펙트럼 광에 의한 온열 효과로 혈류를 개선하고 통증과 염증의 완화를 도모합니다.'}
                  {language === 'en' && 'The light emitted by the xenon flash lamp is passed through a cut-off filter to select 9 types of wavelengths in the range of 420nm to 1200nm. The thermal effect of the selected visible light or infrared continuous spectrum light improves blood flow and alleviates pain and inflammation.'}
                  {language === 'zh' && '氙闪光灯发出的光通过截止滤光片，在420nm~1200nm范围内选择9种波长。所选择的可见光或红外线连续光谱光的温热效果改善血流，缓解疼痛和炎症。'}
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm  text-slate-600">
                    {language === 'jp' && '医療機器認証番号：303ADBZX00049000'}
                    {language === 'ko' && '의료기기 인증번호：303ADBZX00049000'}
                    {language === 'en' && 'Medical Device Certification Number: 303ADBZX00049000'}
                    {language === 'zh' && '医疗器械认证号：303ADBZX00049000'}
                  </p>
                </div>

                <Button className="w-full" asChild>
                  <a href="https://aquacel.jp/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2 text-white" />
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
                company: 'Euclid Systems',
                country: { jp: 'アメリカ', ko: '미국', en: 'USA', zh: '美国' },
                product: { jp: 'オルソケラトロジー', ko: '오르토케라톨로지', en: 'Orthokeratology', zh: '角膜塑形术' },
                image: 'Euclid-logo-top.jpg',
                url: 'https://euclidsys.com/'
              },
              {
                company: 'HumanOptics AG',
                country: { jp: 'ドイツ', ko: '독일', en: 'Germany', zh: '德国' },
                product: { jp: '人工虹彩、IOL', ko: '인공 홍채, IOL', en: 'Artificial Iris, IOL', zh: '人工虹膜, IOL' },
                image: 'HumanOptics-AG.jpg',
                url: 'https://www.humanoptics.com/'
              },
              {
                company: 'Technolas Perfect Vision',
                country: { jp: 'ドイツ', ko: '독일', en: 'Germany', zh: '德国' },
                product: { jp: 'エキシマレーザー、フェムトセカンドレーザー', ko: '엑시머 레이저, 펨토초 레이저', en: 'Excimer Laser, Femtosecond Laser', zh: '准分子激光, 飞秒激光' },
                image: 'Technolas-Perfect-vision.jpg',
                url: 'https://www.technolaspv.com/'
              },
              {
                company: 'INNOVATIVE EXCIMER SOLUTIONS',
                country: { jp: 'カナダ', ko: '캐나다', en: 'Canada', zh: '加拿大' },
                product: { jp: '医療機器', ko: '의료기기', en: 'Medical Devices', zh: '医疗器械' },
                image: 'innova.png',
                url: 'https://innovamed.com/'
              },
              
              {
                company: 'SIFI',
                country: { jp: 'イタリア', ko: '이탈리아', en: 'Italy', zh: '意大利' },
                product: { jp: 'IOL', ko: 'IOL', en: 'IOL', zh: 'IOL' },
                image: 'SIFI_logo.jpg',
                url: 'https://www.sifigroup.com/'
              },
              {
                company: 'LCS',
                country: { jp: 'フランス', ko: '프랑스', en: 'France', zh: '法国' },
                product: { jp: 'Eyebrid', ko: 'Eyebrid', en: 'Eyebrid', zh: 'Eyebrid' },
                image: 'LCS.jpg',
                url: 'https://www.laboratoire-lcs.com/'
              },
              {
                company: 'Hanita Lenses',
                country: { jp: 'イスラエル', ko: '이스라엘', en: 'Israel', zh: '以色列' },
                product: { jp: 'Intensity', ko: 'Intensity', en: 'Intensity', zh: 'Intensity' },
                image: 'Hanita_Lenses.jpg',
                url: 'https://www.hanitalenses.com/'
              },
              {
                company: 'SOLEKO',
                country: { jp: 'イタリア', ko: '이탈리아', en: 'Italy', zh: '意大利' },
                product: { jp: 'コンタクトレンズ', ko: '콘택트렌즈', en: 'Contact Lenses', zh: '隐形眼镜' },
                image: 'SOLEKO.png',
                url: 'https://www.soleko-iol.it/'
              },
              {
                company: 'Medicontur',
                country: { jp: 'ハンガリー', ko: '헝가리', en: 'Hungary', zh: '匈牙利' },
                product: { jp: 'IOL', ko: 'IOL', en: 'IOL', zh: 'IOL' },
                image: 'Medicontur-Medical-Engineering-Ltd-Inc.jpg',
                url: 'https://www.medicontur.com/'
              },
              {
                company: 'Roland Consult',
                country: { jp: 'ドイツ', ko: '독일', en: 'Germany', zh: '德国' },
                product: { jp: 'ERG検査機器', ko: 'ERG 검사기기', en: 'ERG Equipment', zh: 'ERG검사설비' },
                image: 'Roland_Consult_Stasche&Finger_GmbH.jpg',
                url: 'https://www.roland-consult.com/'
              },
              {
                company: 'BIOTECH VISION CARE PVT. LTD',
                country: { jp: 'インド', ko: '인도', en: 'India', zh: '印度' },
                product: { jp: 'アイケア製品', ko: '아이케어 제품', en: 'Eye Care Products', zh: '眼部护理产品' },
                image: 'biotech.png',
                url: 'https://biotechhealthcare.com/'
              },
              {
                company: 'OMNI LENS PRIVATE LIMITED',
                country: { jp: 'インド', ko: '인도', en: 'India', zh: '印度' },
                product: { jp: 'レンズ製品', ko: '렌즈 제품', en: 'Lens Products', zh: '镜片产品' },
                image: 'omni.png',
                url: 'https://www.omnilens.in/'
              },
              {
                company: 'Morcher® GmbH',
                country: { jp: 'ドイツ', ko: '독일', en: 'Germany', zh: '德国' },
                product: { jp: 'IOL', ko: 'IOL', en: 'IOL', zh: 'IOL' },
                image: 'morcher.png',
                url: 'https://www.morcher.com/'
              },
              {
                company: 'Medicel AG',
                country: { jp: 'スイス', ko: '스위스', en: 'Switzerland', zh: '瑞士' },
                product: { jp: '医療機器', ko: '의료기기', en: 'Medical Devices', zh: '医疗器械' },
                image: 'Medicel-Logo-low-res.png',
                url: 'https://www.medicel.com/'
              },
              {
                company: 'SAV-IOL SA',
                country: { jp: 'フランス', ko: '프랑스', en: 'France', zh: '法国' },
                product: { jp: 'IOL', ko: 'IOL', en: 'IOL', zh: 'IOL' },
                image: 'Saviol.jpg',
                url: 'https://sav-iol.com/'
              },
              {
                company: 'EyeYon Medical',
                country: { jp: 'イスラエル', ko: '이스라엘', en: 'Israel', zh: '以色列' },
                product: { jp: '眼科医療機器', ko: '안과 의료기기', en: 'Ophthalmic Medical Devices', zh: '眼科医疗设备' },
                image: 'Eyeyon medical.png',
                url: 'https://www.eye-yon.com/'
              },
             
            ].map((manufacturer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200 group">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <a 
                        href={manufacturer.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block transition-transform duration-200 group-hover:scale-105"
                      >
                        <img 
                          src={`/images/md/${manufacturer.image}`} 
                          alt={manufacturer.company}
                          className="w-full h-24 object-contain bg-white p-2 rounded"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </a>
                    </div>
                    <div className="text-sm text-corporate-blue font-semibold mb-1">
                      {manufacturer.country[language]}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {manufacturer.company}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {manufacturer.product[language]}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={manufacturer.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {language === 'jp' && '詳細を見る'}
                        {language === 'ko' && '자세히 보기'}
                        {language === 'en' && 'Visit Website'}
                        {language === 'zh' && '访问网站'}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '詳細情報'}
              {language === 'ko' && '상세 정보'}
              {language === 'en' && 'Additional Information'}
              {language === 'zh' && '详细信息'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '学会情報や認証取得状況など、より詳しい情報をご覧いただけます。'}
              {language === 'ko' && '학회 정보나 인증 취득 현황 등 더 자세한 정보를 확인하실 수 있습니다.'}
              {language === 'en' && 'View more detailed information including conference schedules and certification status'}
              {language === 'zh' && '可查看学会信息和认证取得状况等更详细的信息'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 学会情報 */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <Calendar className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '学会情報'}
                  {language === 'ko' && '학회 정보'}
                  {language === 'en' && 'Conference Information'}
                  {language === 'zh' && '学会信息'}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {language === 'jp' && '日本眼科学会の主要学術集会の情報を掲載しております。最新の学会スケジュールや開催場所をご確認いただけます。'}
                  {language === 'ko' && '일본안과학회의 주요 학술집회 정보를 게재하고 있습니다. 최신 학회 일정이나 개최 장소를 확인하실 수 있습니다.'}
                  {language === 'en' && 'Information on major academic conferences of the Japanese Ophthalmological Society. Check the latest conference schedules and venues.'}
                  {language === 'zh' && '刊登日本眼科学会主要学术集会的信息。可以确认最新的学会日程和举办地点。'}
                </p>
                <Button className="w-full" asChild>
                  <Link href={`${language === 'jp' ? '/jp' : language === 'ko' ? '/ko' : language === 'zh' ? '/zh' : ''}/medical/conference-info`}>
                    <div className="flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {language === 'jp' && '学会情報を見る'}
                      {language === 'ko' && '학회 정보 보기'}
                      {language === 'en' && 'View Conference Info'}
                      {language === 'zh' && '查看学会信息'}
                    </div>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* 取得認証一覧 */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <Award className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '取得認証一覧'}
                  {language === 'ko' && '취득 인증 일람'}
                  {language === 'en' && 'Certifications & Licenses'}
                  {language === 'zh' && '取得认证一览'}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {language === 'jp' && '医療機器の製造・販売に必要な各種認証を取得しています。安全性と品質保証への取り組みをご確認いただけます。'}
                  {language === 'ko' && '의료기기 제조·판매에 필요한 각종 인증을 취득하고 있습니다. 안전성과 품질 보증에 대한 노력을 확인하실 수 있습니다.'}
                  {language === 'en' && 'We have obtained various certifications required for medical device manufacturing and sales. Check our commitment to safety and quality assurance.'}
                  {language === 'zh' && '已取得医疗器械制造销售所需的各种认证。可确认我们对安全性和质量保证的承诺。'}
                </p>
                <Button className="w-full" asChild>
                  <Link href={`${language === 'jp' ? '/jp' : language === 'ko' ? '/ko' : language === 'zh' ? '/zh' : ''}/medical/certifications`}>
                    <div className="flex items-center justify-center">
                      <Award className="h-4 w-4 mr-2" />
                      {language === 'jp' && '認証一覧を見る'}
                      {language === 'ko' && '인증 일람 보기'}
                      {language === 'en' && 'View Certifications'}
                      {language === 'zh' && '查看认证一览'}
                    </div>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-corporate-blue to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'jp' && 'お問い合わせ'}
            {language === 'ko' && '문의하기'}
            {language === 'en' && 'Contact Us'}
            {language === 'zh' && '联系我们'}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {language === 'jp' && 'メディカル事業部の製品に関するご質問やお見積りは、お気軽にお問い合わせください。'}
            {language === 'ko' && '메디컬 사업부의 제품에 관한 질문이나 견적은 언제든지 문의해 주세요.'}
            {language === 'en' && 'Please feel free to contact us for any questions or quotes regarding our medical division products.'}
            {language === 'zh' && '有关医疗事业部产品的任何问题或报价，请随时与我们联系。'}
          </p>
          <Link href={`${language === 'jp' ? '/jp' : language === 'ko' ? '/ko' : language === 'zh' ? '/zh' : ''}/contact`}>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              {language === 'jp' && 'お問い合わせフォーム'}
              {language === 'ko' && '문의 양식'}
              {language === 'en' && 'Contact Form'}
              {language === 'zh' && '联系표格'}
              <ExternalLink className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}