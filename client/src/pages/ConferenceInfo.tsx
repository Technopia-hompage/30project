import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

export function ConferenceInfo() {
  const { language } = useLanguage();

  const conferences2025 = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Header */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link href={`${language === 'jp' ? '/jp' : language === 'ko' ? '/ko' : language === 'zh' ? '/zh' : ''}/medical`}>
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'jp' && 'メディカル事業部に戻る'}
                {language === 'ko' && '메디컬 사업부로 돌아가기'}
                {language === 'en' && 'Back to Medical Division'}
                {language === 'zh' && '返回医疗事业部'}
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-corporate-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-white h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '学会情報'}
              {language === 'ko' && '학회 정보'}
              {language === 'en' && 'Conference Information'}
              {language === 'zh' && '学会信息'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '日本眼科学会の主要学術集会の情報を掲載しております'}
              {language === 'ko' && '일본안과학회의 주요 학술집회 정보를 게재하고 있습니다'}
              {language === 'en' && 'Information on major academic conferences of the Japanese Ophthalmological Society'}
              {language === 'zh' && '刊登日本眼科学会主要学术集会的信息'}
            </p>
          </div>
        </div>
      </section>

      {/* Conference Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <Calendar className="h-8 w-8 text-corporate-blue mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  {language === 'jp' && '2025年 学会一覧'}
                  {language === 'ko' && '2025년 학회 일람'}
                  {language === 'en' && '2025 Conference Schedule'}
                  {language === 'zh' && '2025年学会一览'}
                </h2>
              </div>

              <div className="grid gap-4">
                {conferences2025.map((conference, index) => (
                  <div key={index} className="border-l-4 border-corporate-blue bg-blue-50 p-6 rounded-r-lg hover:bg-blue-100 transition-colors duration-200">
                    <div className="grid md:grid-cols-3 gap-4 items-start">
                      <div>
                        <div className="text-sm font-semibold text-corporate-blue mb-1">
                          {conference.date[language]}
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">
                          {conference.name[language]}
                        </h3>
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-start text-slate-600">
                          <Clock className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm">
                            {conference.location[language]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Notice */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600">
            {language === 'jp' && '※ 学会情報は変更される場合があります。詳細は各学会の公式サイトをご確認ください。'}
            {language === 'ko' && '※ 학회 정보는 변경될 수 있습니다. 자세한 내용은 각 학회의 공식 사이트를 확인해 주세요.'}
            {language === 'en' && '※ Conference information may be subject to change. Please check the official websites of each conference for details.'}
            {language === 'zh' && '※ 学会信息可能会有变更。详情请确认各学会的官方网站。'}
          </p>
        </div>
      </section>
    </div>
  );
} 