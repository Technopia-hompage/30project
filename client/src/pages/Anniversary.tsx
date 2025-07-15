import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/i18n";
import { Timeline } from "@/components/Timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Trophy, Sparkles } from "lucide-react";
import bgImage from "@assets/bg.jpg";

export function Anniversary() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-16 lg:py-24 text-white relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <Badge className="bg-white text-corporate-blue px-6 py-2 text-lg font-bold mb-8">
              <Award className="mr-2 h-5 w-5" />
              {getTranslation('hero.badge', language)}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span>30 Years</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-white">
              Just the Beginning
            </h2>
            
            <p className="text-xl text-white font-semibold mb-12 max-w-3xl">
              2025年10月3日、テクノピアは創立30周年を迎えました。
            </p>


          </div>
        </div>
      </section>

      {/* Anniversary Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '30周年ハイライト'}
              {language === 'ko' && '30주년 하이라이트'}
              {language === 'en' && '30th Anniversary Highlights'}
              {language === 'zh' && '30周年亮点'}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {language === 'jp' && '私たちの歩みの中で特に印象深い出来事をご紹介します。'}
              {language === 'ko' && '우리의 발걸음 중에서 특히 인상 깊은 사건들을 소개합니다.'}
              {language === 'en' && 'Introducing particularly memorable events from our journey.'}
              {language === 'zh' && '介绍我们历程中特别令人印象深刻的事件。'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '革新的技術開発'}
                  {language === 'ko' && '혁신적 기술 개발'}
                  {language === 'en' && 'Innovative Technology'}
                  {language === 'zh' && '创新技术开发'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '業界をリードする革新的な技術の開発により、お客様に新たな価値を提供してきました。'}
                  {language === 'ko' && '업계를 선도하는 혁신적인 기술 개발로 고객에게 새로운 가치를 제공해왔습니다.'}
                  {language === 'en' && 'We have provided new value to customers through the development of innovative technologies that lead the industry.'}
                  {language === 'zh' && '通过开发引领行业的创新技术，为客户提供了新价值。'}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && 'グローバル展開'}
                  {language === 'ko' && '글로벌 전개'}
                  {language === 'en' && 'Global Expansion'}
                  {language === 'zh' && '全球拓展'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '世界15ヶ国に拠点を展開し、グローバルな視点でビジネスを推進してきました。'}
                  {language === 'ko' && '전 세계 15개국에 거점을 전개하며 글로벌한 관점에서 비즈니스를 추진해왔습니다.'}
                  {language === 'en' && 'We have established bases in 15 countries worldwide and promoted business from a global perspective.'}
                  {language === 'zh' && '在全球15个国家设立据点，从全球视角推进业务。'}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {language === 'jp' && '社会貢献活動'}
                  {language === 'ko' && '사회 공헌 활동'}
                  {language === 'en' && 'Social Contribution'}
                  {language === 'zh' && '社会贡献活动'}
                </h3>
                <p className="text-slate-600">
                  {language === 'jp' && '持続可能な社会の実現に向けて、様々な社会貢献活動に取り組んできました。'}
                  {language === 'ko' && '지속 가능한 사회 실현을 위해 다양한 사회 공헌 활동에 힘써왔습니다.'}
                  {language === 'en' && 'We have engaged in various social contribution activities towards realizing a sustainable society.'}
                  {language === 'zh' && '为了实现可持续社会，我们一直致力于各种社会贡献活动。'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header with Visual Elements */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-corporate-blue to-blue-600 rounded-full mb-8">
              <Trophy className="text-white h-10 w-10" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'jp' && '30年のあゆみ'}
              {language === 'ko' && '30년의 발걸음'}
              {language === 'en' && '30 Years Journey'}
              {language === 'zh' && '30年历程'}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-corporate-blue to-blue-600 mx-auto mb-6"></div>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'jp' && '1995年の創立から現在まで、私たちの成長の軌跡をご覧ください。'}
              {language === 'ko' && '1995년 창립부터 현재까지 우리의 성장 궤적을 보시기 바랍니다.'}
              {language === 'en' && 'Please see our growth trajectory from our founding in 1995 to the present.'}
              {language === 'zh' && '请查看我们从1995年创立至今的成长轨迹。'}
            </p>
          </div>

          {/* Timeline Period Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white rounded-lg shadow-lg px-8 py-6 border-2 border-corporate-blue">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">1995 - 2025</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-corporate-blue to-blue-600 mx-auto mb-2"></div>
              <h4 className="text-xl font-semibold text-corporate-blue">Technopia's History</h4>
            </div>
          </div>

          {/* Photo Gallery Placeholder */}
          <div className="mb-16">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-2 border-corporate-blue/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {language === 'jp' && '思い出のフォトギャラリー'}
                    {language === 'ko' && '추억의 포토 갤러리'}
                    {language === 'en' && 'Memory Photo Gallery'}
                    {language === 'zh' && '回忆照片画廊'}
                  </h3>
                  <p className="text-slate-600">
                    {language === 'jp' && '30年間の歩みを写真でご紹介します'}
                    {language === 'ko' && '30년간의 발걸음을 사진으로 소개합니다'}
                    {language === 'en' && 'Introducing our 30-year journey through photos'}
                    {language === 'zh' && '通过照片介绍我们30年的历程'}
                  </p>
                </div>
                
                {/* Photo Grid Placeholder */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm text-slate-500">Photo {i}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <span className="text-sm text-slate-500 italic">
                    {language === 'jp' && '※写真は順次追加予定です'}
                    {language === 'ko' && '※사진은 순차적으로 추가 예정입니다'}
                    {language === 'en' && '※Photos will be added sequentially'}
                    {language === 'zh' && '※照片将陆续添加'}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Timeline Container */}
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-corporate-blue to-blue-600 text-white p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {language === 'jp' && '詳細な歴史タイムライン'}
                  {language === 'ko' && '상세한 역사 타임라인'}
                  {language === 'en' && 'Detailed History Timeline'}
                  {language === 'zh' && '详细历史时间线'}
                </h3>
                <p className="text-blue-100">
                  {language === 'jp' && '主要な出来事と発展の軌跡'}
                  {language === 'ko' && '주요 사건과 발전 궤적'}
                  {language === 'en' && 'Major events and development trajectory'}
                  {language === 'zh' && '主要事件和发展轨迹'}
                </p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="space-y-12">
              {/* 2023~ */}
              <div className="timeline-section">
                <h4 className="text-xl font-bold text-slate-900 mb-6 border-b-2 border-corporate-blue pb-2">2023~</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2025.01</span>
                    <span>大阪支店 開設</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2023.06</span>
                    <span>福岡支店 開設</span>
                  </div>
                </div>
              </div>

              {/* 2021~2022 */}
              <div className="timeline-section">
                <h4 className="text-xl font-bold text-slate-900 mb-6 border-b-2 border-corporate-blue pb-2">2021~2022</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2022.04</span>
                    <span>韓国 C＆V Tech Co., Ltd. と総代理店契約締結</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2022.03</span>
                    <span>中国 MEDI WORKS と総代理店契約</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2021.10</span>
                    <span>DENBA HEALTH 販売開始</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2021.10</span>
                    <span>DENBA HEALTH 韓国向け輸出</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2021.05</span>
                    <span>キセノン光線治療器「AQUA CEL」厚労省製造販売認証取得<br />（認証番号303ADBZX00049000）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2021.03</span>
                    <span>Tollgate Nano Air Brusher 発売</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2021.01</span>
                    <span>Tollgate Nano Spray 発売</span>
                  </div>
                </div>
              </div>

              {/* 2016~2020 */}
              <div className="timeline-section">
                <h4 className="text-xl font-bold text-slate-900 mb-6 border-b-2 border-corporate-blue pb-2">2016~2020</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2020.12</span>
                    <span>Hanita Lenses「Intensity」独占契約</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2020.10</span>
                    <span>Tollgate Mini 販売開始</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2020.02</span>
                    <span>Tollgate 検温器／Handgel 販売開始</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2019.12</span>
                    <span>スイス BIOTECH 独占代理店契約</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2019.12</span>
                    <span>韓国 KBM と業務提携</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2018.12</span>
                    <span>フランス LCS 社独占代理店契約</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2018.06</span>
                    <span>韓国 Plasmapp Co., Ltd. と独占契約</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2018.05</span>
                    <span>韓国 EHL BIO社と幹細胞研究業務協約締結</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2017.04</span>
                    <span>イタリアSIFI 社と独占契約</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2016.12</span>
                    <span>英国 IOL AMD と MOU 提携</span>
                  </div>
                </div>
              </div>

              {/* 2011~2015 */}
              <div className="timeline-section">
                <h4 className="text-xl font-bold text-slate-900 mb-6 border-b-2 border-corporate-blue pb-2">2011~2015</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2015.06</span>
                    <span>本社移転（東京都千代田区西神田3-1-2）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2015.04</span>
                    <span>韓国チャ病院グループ TCC と業務提携契約締結</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2015.01</span>
                    <span>ベルギー PhysIOL 社と MOU 提携</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2014.03</span>
                    <span>ゴルフ用品 販売開始</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2013.04</span>
                    <span>新聞用紙 輸入販売開始</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2013.03</span>
                    <span>自社ビル（8階建て）購入（東京都千代田区西神田）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2012.10</span>
                    <span>自動車用バッテリー 販売</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2012.10</span>
                    <span>カーボンナノーチューブ（CNT）販売</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2012.05</span>
                    <span>エメラルドレンズ ケース 発売</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2012.02</span>
                    <span>ピュアエメラルド発売（オルソケラトロジーレンズ洗浄液）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2011.10</span>
                    <span>太陽光パネル 販売開始</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2011.04</span>
                    <span>逆浸透膜 IGUASSU 浄水器 販売開始</span>
                  </div>
                </div>
              </div>

              {/* 2006~2010 */}
              <div className="timeline-section">
                <h4 className="text-xl font-bold text-slate-900 mb-6 border-b-2 border-corporate-blue pb-2">2006~2010</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2010.09</span>
                    <span>オルソケラトロジーレンズ「マイエメラルドレンズ」製造販売承認取得<br />（承認番号2200BZX00790000）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2010.06</span>
                    <span>NEVIS MEDICAL、TPV と包括業務提携契約</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2009.08</span>
                    <span>本社移転（東京都千代田区九段南3-3-4）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2008.11</span>
                    <span>韓国貿易協会より「対日本輸出専門商社」に認定</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2007.04</span>
                    <span>特定福祉用具販売・特定介護予防福祉用具販売事業所指定<br />（認定番号1370100941）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2006.05</span>
                    <span>韓国 NEXEN TIRE 輸入総代理店契約</span>
                  </div>
                </div>
              </div>

              {/* 2000~2005 */}
              <div className="timeline-section">
                <h4 className="text-xl font-bold text-slate-900 mb-6 border-b-2 border-corporate-blue pb-2">2000~2005</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2005.03</span>
                    <span>高度管理医療機器等販売業賃貸業 許可取得<br />（許可番号4501010400046）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2004.05</span>
                    <span>オーストラリア子会社 TECHNOIA PTE. LTD. 設立</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">2000.11</span>
                    <span>米国 EUCLID SYSTEMS CORPORATION と日本輸入総代理店契約締結</span>
                  </div>
                </div>
              </div>

              {/* 1995~1999 */}
              <div className="timeline-section">
                <h4 className="text-xl font-bold text-slate-900 mb-6 border-b-2 border-corporate-blue pb-2">1995~1999</h4>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">1999.02</span>
                    <span>本社移転（東京都千代田区九段南4-6-13）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">1996.05</span>
                    <span>化粧品輸入販売業 許可取得（許可番号13CY9145）</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">1995.11</span>
                    <span>自動車用アルミホイール 販売開始</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">1995.10</span>
                    <span>医療用具販売業 開始</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="font-semibold text-corporate-blue min-w-[100px]">1995.10</span>
                    <span className="font-bold text-anniversary-red">株式会社テクノピア 設立（東京都豊島区池袋2-43-1）</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
