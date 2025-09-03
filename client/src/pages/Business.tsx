import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "wouter";
import { 
  ArrowRight,
  Building,
  Car,
  Eye
} from "lucide-react";

export function Business() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 corporate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-slate-800/40"></div>
        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-cyan-300 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-1200"></div>
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.3)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="15%" x2="90%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="15%" y1="85%" x2="85%" y2="15%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
            <line x1="25%" y1="50%" x2="75%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
            <line x1="40%" y1="80%" x2="60%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'jp' && '事業部門・ブランド紹介'}
              {language === 'ko' && '사업 부문·브랜드 소개'}
              {language === 'en' && 'Business Divisions & Brands'}
              {language === 'zh' && '业务部门·品牌介绍'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {language === 'jp' && (
                <>
                  多様な分野で積み重ねた実績と信頼をもとに、革新的なソリューションを通じて<br />
                  お客様の未来を支え続けます。
                </>
              )}
              {language === 'ko' && (
                <>
                  다양한 사업 영역에서 혁신적인 솔루션을 제공하며<br />
                  고객의 성공을 지원하고 있습니다.
                </>
              )}
              {language === 'en' && (
                <>
                  We provide innovative solutions across diverse business areas<br />
                  to support our customers' success.
                </>
              )}
              {language === 'zh' && (
                <>
                  在多样化的业务领域提供创新解决方案，<br />
                  支持客户的成功。
                </>
              )}
            </p>

          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Medical Division */}
            <Card className="hover:shadow-xl transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && 'メディカル事業部'}
                  {language === 'ko' && '메디컬 사업부'}
                  {language === 'en' && 'Medical Division'}
                  {language === 'zh' && '医疗事业部'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && '各種眼科用の手術機械、検査機械、眼内レンズ、コンタクトレンズ等の製造販売。オルソケラトロジーレンズ「マイエメラルド」、IPL機器、コンタクトレンズ洗浄液など最先端の眼科医療機器を取り扱っています。'}
                  {language === 'ko' && '각종 안과용 수술기계, 검사기계, 안내렌즈, 콘택트렌즈 등의 제조판매. 오르토케라톨로지 렌즈 "마이에메랄드", IPL 기기, 토포그래피, 엑시머 레이저, 펨토세컨드 레이저 등 최첨단 안과 의료기기를 취급합니다.'}
                  {language === 'en' && 'Manufacturing and sales of various ophthalmic surgical and examination equipment, intraocular lenses, contact lenses, etc. We handle cutting-edge ophthalmic medical devices including orthokeratology lens "My Emerald", IPL devices, topography, excimer laser, and femtosecond laser.'}
                  {language === 'zh' && '各种眼科手术设备、检查设备、人工晶体、隐形眼镜等的制造销售。取扱角膜塑形镜"My Emerald"、IPL设备、地形图、准分子激光、飞秒激光等尖端眼科医疗设备。'}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {language === 'jp' && '主要取扱品目:'}
                    {language === 'ko' && '주요 취급 품목:'}
                    {language === 'en' && 'Main Products:'}
                    {language === 'zh' && '主要经营品目:'}
                  </h4>
                  <div className="text-sm text-slate-600 grid grid-cols-1 gap-1">
                    <span>• {language === 'jp' ? 'オルソケラトロジーレンズ' : language === 'ko' ? '오르토케라톨로지 렌즈' : language === 'en' ? 'Orthokeratology Lens' : '角膜塑形镜'}</span>
                    <span>• {language === 'jp' ? '白内障用眼内レンズ' : language === 'ko' ? '백내장용 안내렌즈' : language === 'en' ? 'Cataract Intraocular Lens' : '白内障人工晶体'}</span>
                    <span>• {language === 'jp' ? 'IPL（インテンス・パルス・ライト）' : language === 'ko' ? 'IPL (인텐스 펄스 라이트)' : language === 'en' ? 'IPL (Intense Pulsed Light)' : 'IPL (强脉冲光)'}</span>
                    <span>• {language === 'jp' ? 'コンタクトレンズ洗浄液' : language === 'ko' ? '콘택트렌즈 세정액' : language === 'en' ? 'Contact Lens Cleaning Solution' : '隐形眼镜清洗液'}</span>
                  </div>
                </div>
                <Link href={`/${language}/medical`}>
                  <Button variant="ghost" className="text-corporate-accent hover:text-corporate-accent p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AUTO Division */}
            <Card className="hover:shadow-xl transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                  <Car className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && 'AUTO事業部'}
                  {language === 'ko' && 'AUTO 사업부'}
                  {language === 'en' && 'AUTO Division'}
                  {language === 'zh' && 'AUTO事业部'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && 'KASHINA、ARTEMIS、APHRODITEなど多彩なブランドのアルミホイールを企画・開発・販売しています。デザイン・設計は自社で行い、生産は中国の提携工場にて委託製造しています。'}
                  {language === 'ko' && 'KASHINA, ARTEMIS, APHRODITE 등 다양한 브랜드의 알루미늄 휠을 기획·개발·판매하고 있습니다. 디자인·설계는 자사에서 진행하고, 생산은 중국의 제휴 공장에서 위탁 제조하고 있습니다.'}
                  {language === 'en' && 'We plan, develop, and sell aluminum wheels under various brands including KASHINA, ARTEMIS, and APHRODITE. Design and engineering are conducted in-house, while production is outsourced to partner factories in China.'}
                  {language === 'zh' && '企划·开发·销售KASHINA、ARTEMIS、APHRODITE等多样化品牌的铝轮毂。设计·设计由自社进行，生产委托给中国的合作工厂制造。'}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {language === 'jp' && '主要ブランド:'}
                    {language === 'ko' && '주요 브랜드:'}
                    {language === 'en' && 'Main Brands:'}
                    {language === 'zh' && '主要品牌:'}
                  </h4>
                  <div className="text-sm text-slate-600 grid grid-cols-1 gap-1">
                    <span>• <strong>KASHINA</strong> (カシーナ)</span>
                    <span>• <strong>ARTEMIS</strong> (アルテミス)</span>
                    <span>• <strong>APHRODITE</strong> (アフロディーテ)</span>
                    <span>• <strong>MUD CLIFF</strong> (マッドクリフ)</span>
                    <span>• <strong>CHARITES</strong> (カリテス)</span>
                  </div>
                </div>
                <Link href={`/${language}/auto`}>
                  <Button variant="ghost" className="text-corporate-accent hover:text-corporate-accent p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* New Business Division */}
            <Card className="hover:shadow-xl transition-shadow duration-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                  <Building className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '新規事業部'}
                  {language === 'ko' && '신규 사업부'}
                  {language === 'en' && 'New Business Division'}
                  {language === 'zh' && '新业务事业部'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {language === 'jp' && '新規事業部では様々な製品の監修、製造、販売を行っております。'}
                  {language === 'ko' && 'AI 안면인식 검온기 "TOLLGATE"의 제조·판매를 하고 있습니다. 첨단 AI 기술을 활용하여 비접촉 체온 측정과 안면 인식을 동시에 실현하는 혁신적인 솔루션입니다.'}
                  {language === 'en' && 'We manufacture and sell the AI facial recognition thermometer "TOLLGATE". This innovative solution utilizes advanced AI technology to simultaneously achieve non-contact temperature measurement and facial recognition.'}
                  {language === 'zh' && '进行AI人脸识别测温仪"TOLLGATE"的制造·销售。利用先进的AI技术，同时实现非接触体温测定和人脸识别的创新解决方案。'}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {language === 'jp' && '主な事業内容:'}
                    {language === 'ko' && '주요 사업 내용:'}
                    {language === 'en' && 'Main Business Content:'}
                    {language === 'zh' && '主要业务内容:'}
                  </h4>
                  <div className="text-sm text-slate-600 grid grid-cols-1 gap-1">
                    <span>• {language === 'jp' ? 'クレジットカード端末決済サービス' : language === 'ko' ? '신용카드 단말기 결제 서비스' : language === 'en' ? 'Credit Card Terminal Payment Service' : '信用卡终端支付服务'}</span>
                    <span>• {language === 'jp' ? '世界初の水分子共振技術「DENBA Health」' : language === 'ko' ? '세계 최초의 물분자 공진 기술 「DENBA Health」' : language === 'en' ? 'World\'s First Water Molecule Resonance Technology "DENBA Health"' : '世界首创水分子共振技术「DENBA Health」'}</span>
                    <span>• {language === 'jp' ? '不動産賃貸の取り扱い' : language === 'ko' ? '부동산 임대 취급' : language === 'en' ? 'Real Estate Rental Services' : '房地产租赁服务'}</span>
                  </div>
                </div>
                <Link href={`/${language}/newbusiness`}>
                  <Button variant="ghost" className="text-corporate-accent hover:text-corporate-accent p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
