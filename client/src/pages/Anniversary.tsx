
import { useLanguage } from "@/hooks/useLanguage";
import { Award, Circle, CheckCircle } from "lucide-react";
import bgImage from "@assets/bg.jpg";

export function Anniversary() {
  const { language } = useLanguage();

  const timelineData: { title: string; events: string[] }[] = [
    { title: "2023~2025", events: ["2025.01 大阪支店 開設", "2023.06 福岡支店 開設"] },
    { title: "2021~2022", events: ["2022.04 韓国 C＆V Tech Co., Ltd. と総代理店契約締結", "2022.03 中国 MEDI WORKS と総代理店契約", "2021.10 DENBA HEALTH 販売開始 / 韓国向け輸出", "2021.05 キセノン光線治療器『AQUA CEL』厚労省製造販売認証取得", "2021.03 Tollgate Nano Air Brusher 発売", "2021.01 Tollgate Nano Spray 発売"] },
    { title: "2016~2020", events: ["2020.12 Hanita Lenses『Intensity』独占契約", "2020.10 Tollgate Mini 販売開始", "2020.02 Tollgate 検温器／Handgel 販売開始", "2019.12 スイス BIOTECH 独占代理店契約", "2019.12 韓国 KBM と業務提携", "2018.12 フランス LCS 社独占代理店契約", "2018.06 韓国 Plasmapp Co., Ltd. と独占契約", "2018.05 韓国 EHL BIO社と幹細胞研究業務協約締結", "2017.04 イタリア SIFI 社と独占契約", "2016.12 英国 IOL AMD と MOU 提携"] },
    { title: "2011~2015", events: ["2015.06 本社移転（東京都千代田区西神田3-1-2）", "2015.04 韓国チャ病院グループ TCC と業務提携契約締結", "2015.01 ベルギー PhysIOL 社と MOU 提携", "2014.03 ゴルフ用品 販売開始", "2013.04 新聞用紙 輸入販売開始", "2013.03 自社ビル（8階建て）購入（東京都千代田区西神田）", "2012.10 自動車用バッテリー 販売", "2012.10 カーボンナノーチューブ（CNT）販売", "2012.05 エメラルドレンズ ケース 発売", "2012.02 ピュアエメラルド発売（オルソケラトロジーレンズ洗浄液）", "2011.10 太陽光パネル 販売開始", "2011.04 逆浸透膜 IGUASSU 浄水器 販売開始"] },
    { title: "2006~2010", events: ["2010.09 オルソケラトロジーレンズ『マイエメラルドレンズ』製造販売承認取得", "2010.06 NEVIS MEDICAL、TPV と包括業務提携契約", "2009.08 本社移転（東京都千代田区九段南3-3-4）", "2008.11 韓国貿易協会より『対日本輸出専門商社』に認定", "2007.04 特定福祉用具販売・特定介護予防福祉用具販売事業所指定", "2006.05 韓国 NEXEN TIRE 輸入総代理店契約"] },
    { title: "2000~2005", events: ["2005.03 高度管理医療機器等販売業賃貸業 許可取得", "2004.05 オーストラリア子会社 TECHNOIA PTE. LTD. 設立", "2000.11 米国 EUCLID SYSTEMS CORPORATION と日本輸入総代理店契約締結"] },
    { title: "1995~1999", events: ["1999.02 本社移転（東京都千代田区九段南4-6-13）", "1996.05 化粧品輸入販売業 許可取得", "1995.11 自動車用アルミホイール 販売開始", "1995.10 医療用具販売業 開始", "1995.10 株式会社テクノピア 設立（東京都豊島区池袋2-43-1）"] }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 text-white relative" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">30 Years</h1>
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

      {/* Photo Gallery Placeholder */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">思い出のフォトギャラリー</h2>
          <p className="text-slate-600 mb-8">30年間の歩みを写真でご紹介します</p>
          <div className="flex overflow-x-auto space-x-4 p-4">
            {[
              "/images/30/민주당재외동포사업추진단DSC02744.JPG",
              "/images/30/20100331民団会長団懇親会.JPG",
              "/images/30/DSC00286.JPG",
              "/images/30/200091211韓昌祐会長経済講演.JPG",
              "/images/30/DSC00673.JPG",
              "/images/30/20090520 026.jpg",
              "/images/30/CIMG3014.JPG"
            ].map((imagePath, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-48 bg-white shadow rounded-lg overflow-hidden">
                <img 
                  src={imagePath} 
                  alt={`30주년 기념 사진 ${i+1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Timeline with Images */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-corporate-blue to-blue-600 rounded-full mb-8">
              <Award className="text-white h-10 w-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">沿革（30周年の歩み）</h2>
          </div>
          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} bg-white rounded-xl shadow-md overflow-hidden`}>
                <div className="md:w-1/2 min-h-48 overflow-hidden">
                  {item.title === "2011~2015" ? (
                    <img 
                      src="/images/30/nishikanda.jpg"
                      alt={item.title} 
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  ) : item.title === "2016~2020" ? (
                    <img 
                      src="/images/30/20180715_134237.jpg"
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-lg">이미지 준비 중</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-slate-700">
                    {item.events.map((ev, i) => (<li key={i}>{ev}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
