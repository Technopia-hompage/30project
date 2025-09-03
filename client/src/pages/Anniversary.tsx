
import { useLanguage } from "@/hooks/useLanguage";
import { Award, Circle, CheckCircle, Calendar, Building, Globe, Users } from "lucide-react";
import bgImage from "@assets/bg.jpg";
import technopiaBg from "@assets/DENBA_Health.jpg";
import jsParkImage from "@assets/jspark20180208.jpg";
import payImage from "@assets/pay.jpg";
import certificationImage from "@assets/ninsyou10_1752453924698.jpg";
import logoImage from "@assets/technopia-logo_1752479241220.png";

export function Anniversary() {
  const { language } = useLanguage();

  const timelineData: { 
    title: string; 
    events: string[]; 
    image: string | null; 
    theme: string; 
    icon: JSX.Element;
    description: string;
  }[] = [
    { 
      title: "2023~2025", 
      events: ["2025.01 大阪支店 開設", "2023.06 福岡支店 開設"],
      image: logoImage,
      theme: "from-blue-600 to-purple-600",
      icon: <Building className="h-6 w-6" />,
      description: "新たな展開期 - 日本全国での事業拡大"
    },
    { 
      title: "2021~2022", 
      events: ["2022.04 韓国 C＆V Tech Co., Ltd. と総代理店契約締結", "2022.03 中国 MEDI WORKS と総代理店契約", "2021.10 DENBA HEALTH 販売開始 / 韓国向け輸出", "2021.05 キセノン光線治療器『AQUA CEL』厚労省製造販売認証取得", "2021.03 Tollgate Nano Air Brusher 発売", "2021.01 Tollgate Nano Spray 発売"],
      image: technopiaBg,
      theme: "from-green-600 to-blue-600",
      icon: <Globe className="h-6 w-6" />,
      description: "医療機器革新期 - 次世代医療技術の導入"
    },
    { 
      title: "2016~2020", 
      events: ["2020.12 Hanita Lenses『Intensity』独占契約", "2020.10 Tollgate Mini 販売開始", "2020.02 Tollgate 検温器／Handgel 販売開始", "2019.12 スイス BIOTECH 独占代理店契約", "2019.12 韓国 KBM と業務提携", "2018.12 フランス LCS 社独占代理店契約", "2018.06 韓国 Plasmapp Co., Ltd. と独占契約", "2018.05 韓国 EHL BIO社と幹細胞研究業務協約締結", "2017.04 イタリア SIFI 社と独占契約", "2016.12 英国 IOL AMD と MOU 提携"],
      image: jsParkImage,
      theme: "from-yellow-600 to-orange-600",
      icon: <Users className="h-6 w-6" />,
      description: "国際協力拡大期 - 世界的パートナーシップの構築"
    },
    { 
      title: "2011~2015", 
      events: ["2015.06 本社移転（東京都千代田区西神田3-1-2）", "2015.04 韓国チャ病院グループ TCC と業務提携契約締結", "2015.01 ベルギー PhysIOL 社と MOU 提携", "2014.03 ゴルフ用品 販売開始", "2013.04 新聞用紙 輸入販売開始", "2013.03 自社ビル（8階建て）購入（東京都千代田区西神田）", "2012.10 自動車用バッテリー 販売", "2012.10 カーボンナノーチューブ（CNT）販売", "2012.05 エメラルドレンズ ケース 発売", "2012.02 ピュアエメラルド発売（オルソケラトロジーレンズ洗浄液）", "2011.10 太陽光パネル 販売開始", "2011.04 逆浸透膜 IGUASSU 浄水器 販売開始"],
      image: payImage,
      theme: "from-purple-600 to-pink-600",
      icon: <Building className="h-6 w-6" />,
      description: "多角化成長期 - 事業領域の大幅拡張"
    },
    { 
      title: "2006~2010", 
      events: ["2010.09 オルソケラトロジーレンズ『マイエメラルドレンズ』製造販売承認取得", "2010.06 NEVIS MEDICAL、TPV と包括業務提携契約", "2009.08 本社移転（東京都千代田区九段南3-3-4）", "2008.11 韓国貿易協会より『対日本輸出専門商社』に認定", "2007.04 特定福祉用具販売・特定介護予防福祉用具販売事業所指定", "2006.05 韓国 NEXEN TIRE 輸入総代理店契約"],
      image: certificationImage,
      theme: "from-teal-600 to-green-600",
      icon: <Award className="h-6 w-6" />,
      description: "認証・専門化期 - 医療機器分野での地位確立"
    },
    { 
      title: "2000~2005", 
      events: ["2005.03 高度管理医療機器等販売業賃貸業 許可取得", "2004.05 オーストラリア子会社 TECHNOIA PTE. LTD. 設立", "2000.11 米国 EUCLID SYSTEMS CORPORATION と日本輸入総代理店契約締結"],
      image: logoImage,
      theme: "from-indigo-600 to-blue-600",
      icon: <Globe className="h-6 w-6" />,
      description: "国際展開期 - 海外進出の本格化"
    },
    { 
      title: "1995~1999", 
      events: ["1999.02 本社移転（東京都千代田区九段南4-6-13）", "1996.05 化粧品輸入販売業 許可取得", "1995.11 自動車用アルミホイール 販売開始", "1995.10 医療用具販売業 開始", "1995.10 株式会社テクノピア 設立（東京都豊島区池袋2-43-1）"],
      image: logoImage,
      theme: "from-yellow-600 to-orange-600",
      icon: <Calendar className="h-6 w-6" />,
      description: "創業期 - 会社設立と基盤事業の確立"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 text-white relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">30 Years</h1>
          <p className="text-xl font-semibold mb-12 max-w-3xl">2025年10月3日、テクノピアは創立30周年を迎えました。</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 shadow-md rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-corporate-blue text-white flex items-center justify-center rounded-full mb-6"><Circle /></div>
            <h3 className="text-xl font-bold mb-4">革新的技術開発</h3>
            <p>業界をリードする革新的な技術の開発により、お客様に新たな価値を提供してきました。</p>
          </div>
          <div className="p-8 shadow-md rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-corporate-blue text-white flex items-center justify-center rounded-full mb-6"><Circle /></div>
            <h3 className="text-xl font-bold mb-4">グローバル展開</h3>
            <p>世界15ヶ国に拠点を展開し、グローバルな視点でビジネスを推進してきました。</p>
          </div>
          <div className="p-8 shadow-md rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto bg-corporate-blue text-white flex items-center justify-center rounded-full mb-6"><Award /></div>
            <h3 className="text-xl font-bold mb-4">社会貢献活動</h3>
            <p>持続可能な社会の実現に向けて、様々な社会貢献活動に取り組んできました。</p>
          </div>
        </div>
      </section>

      {/* Enhanced Photo Gallery */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">思い出のフォトギャラリー</h2>
          <p className="text-slate-600 mb-12 text-lg max-w-2xl mx-auto">30年間の歩みを写真でご紹介します。創業から現在まで、数々の瞬間を記録した貴重な写真をご覧ください。</p>
          
          {/* Main Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              { src: jsParkImage, title: "代表取締役社長 朴鍾碩", year: "2018" },
              { src: technopiaBg, title: "DENBA HEALTH", year: "2021" },
              { src: payImage, title: "決済システム", year: "2020" },
              { src: certificationImage, title: "認証取得", year: "2010" },
              { src: logoImage, title: "テクノピアロゴ", year: "1995" },
              { src: bgImage, title: "会社外観", year: "2023" }
            ].map((photo, i) => (
              <div key={i} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm mb-1">{photo.title}</h3>
                  <p className="text-xs opacity-90">{photo.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Photo Carousel */}
          <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
            {[
              "/images/30/민주당재외동포사업추진단DSC02744.JPG",
              "/images/30/20100331民団会長団懇親会.JPG", 
              "/images/30/DSC00286.JPG",
              "/images/30/200091211韓昌祐会長경제講演.JPG",
              "/images/30/DSC00673.JPG",
              "/images/30/20090520 026.jpg",
              "/images/30/CIMG3014.JPG"
            ].map((imagePath, i) => (
              <div key={i} className="flex-shrink-0 w-80 h-56 bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <img 
                  src={imagePath} 
                  alt={`30周년 기념 사진 ${i+1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline with Images */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue to-blue-600" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-corporate-blue to-blue-600 rounded-full mb-8 shadow-2xl">
              <Award className="text-white h-12 w-12" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
              沿革（30周年の歩み）
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              1995年の創業から現在まで、テクノピアの30年間にわたる歩みをご紹介します。
              革新と成長を続けてきた軌跡をお楽しみください。
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-corporate-blue to-blue-600 opacity-30 h-full hidden lg:block" />
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} group`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-corporate-blue rounded-full z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300" />
                  
                  {/* Content Card */}
                  <div className={`lg:w-5/12 ${idx % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-100">
                      {/* Card Header with Theme */}
                      <div className={`h-2 bg-gradient-to-r ${item.theme}`} />
                      
                      {/* Card Content */}
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${item.theme} text-white mr-4 shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
                            <p className="text-slate-600 text-sm font-medium">{item.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {item.events.map((event, i) => (
                            <div key={i} className="flex items-start space-x-3 group/event">
                              <div className="flex-shrink-0 w-2 h-2 bg-corporate-blue rounded-full mt-2 group-hover/event:scale-150 transition-transform duration-200" />
                              <p className="text-slate-700 text-sm leading-relaxed group-hover/event:text-corporate-blue transition-colors duration-200">
                                {event}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={`lg:w-5/12 ${idx % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'} mt-8 lg:mt-0`}>
                    <div className="relative group/image">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                        {item.image && (
                          <img 
                            src={item.image}
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                          />
                        )}
                      </div>
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover/image:translate-y-0 transition-transform duration-300">
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-block p-8 bg-gradient-to-r from-corporate-blue to-blue-600 rounded-2xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">次の30年に向けて</h3>
              <p className="text-lg opacity-90 max-w-md">
                これからも革新と成長を続け、社会に貢献する企業として歩み続けます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
