import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { getMultiLanguageContent } from "@/lib/i18n";
import { BusinessDivision } from "@shared/schema";
import { Link } from "wouter";
import { 
  Cog, 
  Leaf, 
  Cpu, 
  Globe, 
  UserRoundCheck, 
  Handshake, 
  ArrowRight,
  Building,
  TrendingUp,
  Shield,
  Stethoscope,
  Car,
  Lightbulb,
  Eye
} from "lucide-react";

const iconMap = {
  cog: Cog,
  leaf: Leaf,
  cpu: Cpu,
  globe: Globe,
  user: UserRoundCheck,
  handshake: Handshake,
  building: Building,
  trending: TrendingUp,
  shield: Shield,
};

export function Business() {
  const { language } = useLanguage();

  const { data: divisions, isLoading } = useQuery<BusinessDivision[]>({
    queryKey: ['/api/divisions', language],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="h-8 bg-slate-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-slate-200 rounded w-96 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-slate-200 rounded-xl mb-6"></div>
                    <div className="h-6 bg-slate-200 rounded mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded mb-6"></div>
                    <div className="h-8 bg-slate-200 rounded w-24"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'jp' && '事業部門・ブランド紹介'}
              {language === 'ko' && '사업 부문·브랜드 소개'}
              {language === 'en' && 'Business Divisions & Brands'}
              {language === 'zh' && '业务部门·品牌介绍'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '多様な事業領域で革新的なソリューションを提供し、お客様の成功をサポートしています。'}
              {language === 'ko' && '다양한 사업 영역에서 혁신적인 솔루션을 제공하며 고객의 성공을 지원하고 있습니다.'}
              {language === 'en' && 'We provide innovative solutions across diverse business areas to support our customers\' success.'}
              {language === 'zh' && '在多样化的业务领域提供创新解决方案，支持客户的成功。'}
            </p>
          </div>

          {/* Business Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">3</div>
              <div className="text-slate-600">
                {language === 'jp' && '事業部門'}
                {language === 'ko' && '사업 부문'}
                {language === 'en' && 'Business Divisions'}
                {language === 'zh' && '业务部门'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">13+</div>
              <div className="text-slate-600">
                {language === 'jp' && '主要製品カテゴリー'}
                {language === 'ko' && '주요 제품 카테고리'}
                {language === 'en' && 'Product Categories'}
                {language === 'zh' && '主要产品类别'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">30年</div>
              <div className="text-slate-600">
                {language === 'jp' && '創業からの歴史'}
                {language === 'ko' && '창업부터의 역사'}
                {language === 'en' && 'Years of Experience'}
                {language === 'zh' && '创业以来的历史'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">98%</div>
              <div className="text-slate-600">
                {language === 'jp' && '顧客満足度'}
                {language === 'ko' && '고객 만족도'}
                {language === 'en' && 'Customer Satisfaction'}
                {language === 'zh' && '客户满意度'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {divisions && divisions.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division) => {
                const IconComponent = iconMap[division.icon as keyof typeof iconMap] || Building;
                
                return (
                  <Card key={division.id} className="hover:shadow-xl transition-all duration-200 group">
                    <CardContent className="p-8">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: division.color }}
                      >
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {getMultiLanguageContent(division.name, language)}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-4">
                        {getMultiLanguageContent(division.description, language)}
                      </p>
                      <Button variant="ghost" className="text-corporate-blue hover:text-blue-700 p-0">
                        {language === 'jp' && '詳細を見る'}
                        {language === 'ko' && '자세히 보기'}
                        {language === 'en' && 'Learn More'}
                        {language === 'zh' && '了解更多'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      {division.featured && (
                        <Badge className="mt-4 bg-corporate-blue">
                          {language === 'jp' && '注目事業'}
                          {language === 'ko' && '주목 사업'}
                          {language === 'en' && 'Featured Business'}
                          {language === 'zh' && '重点业务'}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            // Actual Technopia Business Divisions
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Medical Division */}
              <Card className="hover:shadow-xl transition-shadow duration-200 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-corporate-blue rounded-xl flex items-center justify-center mb-6">
                    <Stethoscope className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' && 'メディカル事業部'}
                    {language === 'ko' && '메디컬 사업부'}
                    {language === 'en' && 'Medical Division'}
                    {language === 'zh' && '医疗事业部'}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {language === 'jp' && '各種眼科用の手術機械、検査機械、眼内レンズ、コンタクトレンズ等の製造販売。オルソケラトロジーレンズ「マイエメラルド」、IPL機器、トポグラフィー、エキシマレーザー、フェムトセカンドレーザーなど最先端の眼科医療機器を取り扱っています。'}
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
                      <span>• {language === 'jp' ? 'エキシマレーザー' : language === 'ko' ? '엑시머 레이저' : language === 'en' ? 'Excimer Laser' : '准分子激光'}</span>
                      <span>• {language === 'jp' ? 'フェムトセカンドレーザー' : language === 'ko' ? '펨토세컨드 레이저' : language === 'en' ? 'Femtosecond Laser' : '飞秒激光'}</span>
                    </div>
                  </div>
                  <Link href={`/${language}/medical`}>
                    <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0">
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
                    {language === 'jp' && 'アルミホイールの企画・開発・販売を行っています。KASHINA、ARTEMIS、APHRODITE、MUD CLIFF、CHARITESなど多彩なブランドを展開し、様々な車種に対応した高品質なアルミホイールを提供しています。'}
                    {language === 'ko' && '알루미늄 휠 기획·개발·판매를 하고 있습니다. KASHINA, ARTEMIS, APHRODITE, MUD CLIFF, CHARITES 등 다양한 브랜드를 전개하여 여러 차종에 대응한 고품질 알루미늄 휠을 제공하고 있습니다.'}
                    {language === 'en' && 'Planning, development and sales of aluminum wheels. We develop various brands including KASHINA, ARTEMIS, APHRODITE, MUD CLIFF, CHARITES, providing high-quality aluminum wheels for various vehicle types.'}
                    {language === 'zh' && '进行铝轮毂策划·开发·销售。展开KASHINA、ARTEMIS、APHRODITE、MUD CLIFF、CHARITES等多样化品牌，提供适应各种车型的高质量铝轮毂。'}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {language === 'jp' && '主要ブランド:'}
                      {language === 'ko' && '주요 브랜드:'}
                      {language === 'en' && 'Main Brands:'}
                      {language === 'zh' && '主要品牌:'}
                    </h4>
                    <div className="text-sm text-slate-600 grid grid-cols-1 gap-1">
                      <span>• <strong>KASHINA</strong> (カシーナ) - {language === 'jp' ? 'プレミアムシリーズ' : language === 'ko' ? '프리미엄 시리즈' : language === 'en' ? 'Premium Series' : '高级系列'}</span>
                      <span>• <strong>ARTEMIS</strong> (アルテミス) - {language === 'jp' ? 'スポーツシリーズ' : language === 'ko' ? '스포츠 시리즈' : language === 'en' ? 'Sports Series' : '运动系列'}</span>
                      <span>• <strong>APHRODITE</strong> (アフロディーテ) - {language === 'jp' ? 'エレガントシリーズ' : language === 'ko' ? '엘레간트 시리즈' : language === 'en' ? 'Elegant Series' : '优雅系列'}</span>
                      <span>• <strong>MUD CLIFF</strong> (マッドクリフ) - {language === 'jp' ? 'オフロードシリーズ' : language === 'ko' ? '오프로드 시리즈' : language === 'en' ? 'Off-road Series' : '越野系列'}</span>
                      <span>• <strong>CHARITES</strong> (カリテス) - {language === 'jp' ? 'スタンダードシリーズ' : language === 'ko' ? '스탠더드 시리즈' : language === 'en' ? 'Standard Series' : '标准系列'}</span>
                    </div>
                  </div>
                  <Link href={`/${language}/auto`}>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
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
                    <Lightbulb className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {language === 'jp' && '新規事業部'}
                    {language === 'ko' && '신규 사업부'}
                    {language === 'en' && 'New Business Division'}
                    {language === 'zh' && '新业务事业部'}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {language === 'jp' && 'AI顔認証検温測定器「TOLLGATE」の製造・販売を行っています。先進的なAI技術を活用して、非接触での体温測定と顔認証を同時に実現する革新的なソリューションです。'}
                    {language === 'ko' && 'AI 안면인식 검온기 "TOLLGATE"의 제조·판매를 하고 있습니다. 첨단 AI 기술을 활용하여 비접촉 체온 측정과 안면 인식을 동시에 실현하는 혁신적인 솔루션입니다.'}
                    {language === 'en' && 'We manufacture and sell the AI facial recognition thermometer "TOLLGATE". This innovative solution utilizes advanced AI technology to simultaneously achieve non-contact temperature measurement and facial recognition.'}
                    {language === 'zh' && '进行AI人脸识别测温仪"TOLLGATE"的制造·销售。利用先进的AI技术，同时实现非接触体温测定和人脸识别的创新解决方案。'}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {language === 'jp' && 'TOLLGATE の特徴:'}
                      {language === 'ko' && 'TOLLGATE의 특징:'}
                      {language === 'en' && 'TOLLGATE Features:'}
                      {language === 'zh' && 'TOLLGATE的特点:'}
                    </h4>
                    <div className="text-sm text-slate-600 grid grid-cols-1 gap-1">
                      <span>• {language === 'jp' ? 'AI顔認証技術' : language === 'ko' ? 'AI 안면인식 기술' : language === 'en' ? 'AI facial recognition technology' : 'AI人脸识别技术'}</span>
                      <span>• {language === 'jp' ? '非接触体温測定' : language === 'ko' ? '비접촉 체온 측정' : language === 'en' ? 'Non-contact temperature measurement' : '非接触体温测定'}</span>
                      <span>• {language === 'jp' ? '高精度検温システム' : language === 'ko' ? '고정밀 검온 시스템' : language === 'en' ? 'High-precision temperature system' : '高精度测温系统'}</span>
                      <span>• {language === 'jp' ? 'リアルタイム監視機能' : language === 'ko' ? '실시간 모니터링 기능' : language === 'en' ? 'Real-time monitoring function' : '实时监控功能'}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                    {language === 'jp' && '詳細を見る'}
                    {language === 'ko' && '자세히 보기'}
                    {language === 'en' && 'Learn More'}
                    {language === 'zh' && '了解更多'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>


            </div>
          )}
        </div>
      </section>
    </div>
  );
}
