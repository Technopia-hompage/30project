import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Award, Check } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export function Certifications() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, cert: any} | null>(null);

  const certifications = [
    {
      category: { jp: ' 第一種医療機器製造販売業許可証', ko: '의료기기 제조판매업 허가', en: 'Medical Device Manufacturing & Distribution License', zh: '医疗器械制造销售业许可' },
      number: { jp: '10B1X10003', ko: '10B1X10003', en: '10B1X10003', zh: '10B1X10003' },
      authority: { jp: '東京都', ko: '도쿄도', en: 'Tokyo Metropolitan Government', zh: '东京都' },
      date: { jp: '2019年4月1日', ko: '2019년 4월 1일', en: 'April 1, 2019', zh: '2019年4月1日' },
      validUntil: { jp: '2024年3月31日', ko: '2024년 3월 31일', en: 'March 31, 2024', zh: '2024年3月31日' },
      image: '/images/md/ninsyou3.jpg'
    },
    {
      category: { jp: '医療機器販売承認書', ko: '의료기기 제조업 허가', en: 'Medical Device Manufacturing License', zh: '医疗器械制造业许可' },
      number: { jp: '10BZ200003', ko: '10BZ200003', en: '10BZ200003', zh: '10BZ200003' },
      authority: { jp: '東京都', ko: '도쿄도', en: 'Tokyo Metropolitan Government', zh: '东京都' },
      date: { jp: '2019年4月1日', ko: '2019년 4월 1일', en: 'April 1, 2019', zh: '2019年4月1日' },
      validUntil: { jp: '2024年3月31日', ko: '2024년 3월 31일', en: 'March 31, 2024', zh: '2024年3月31日' },
      image: '/images/md/ninsyou4.jpg'
    },
    {
      category: { jp: '日本コンタクトレンズ協会会員証   ', ko: '의료기기 인증', en: 'Medical Device Certification', zh: '医疗器械认证' },
      number: { jp: '303ADBZX00049000', ko: '303ADBZX00049000', en: '303ADBZX00049000', zh: '303ADBZX00049000' },
      authority: { jp: '一般財団法人 日本品質保証機構', ko: '일반재단법인 일본품질보증기구', en: 'Japan Quality Assurance Organization', zh: '一般财团法人 日本质量保证机构' },
      date: { jp: '2020年7月30日', ko: '2020년 7월 30일', en: 'July 30, 2020', zh: '2020年7月30日' },
      validUntil: { jp: '2025年7月29日', ko: '2025년 7월 29일', en: 'July 29, 2025', zh: '2025年7月29日' },
      image: '/images/md/ninsyou5.jpg'
    },
    {
      category: { jp: 'AQUACEL承認書', ko: 'QMS 인증 (제2종 의료기기 제조판매업)', en: 'QMS Certification (Class II Medical Device)', zh: 'QMS认证（第二种医疗器械制造销售业）' },
      number: { jp: 'QMD005', ko: 'QMD005', en: 'QMD005', zh: 'QMD005' },
      authority: { jp: '一般財団法人 日本品質保証機構', ko: '일반재단법인 일본품질보증기구', en: 'Japan Quality Assurance Organization', zh: '一般财团法人 日本质量保证机构' },
      date: { jp: '2019年11月20日', ko: '2019년 11월 20일', en: 'November 20, 2019', zh: '2019年11月20日' },
      validUntil: { jp: '2024年 11月 19日', ko: '2024년 11월 19일', en: 'November 19, 2024', zh: '2024年11월19日' },
      image: '/images/md/ninsyou8.jpg'
    },
    {
      category: { jp: 'マイエメラルド承認書', ko: 'CE 마킹 적합성 평가', en: 'CE Marking Conformity Assessment', zh: 'CE标志符合性评估' },
      number: { jp: 'CE-MD-2021-001', ko: 'CE-MD-2021-001', en: 'CE-MD-2021-001', zh: 'CE-MD-2021-001' },
      authority: { jp: 'TÜV SÜD Product Service GmbH', ko: 'TÜV SÜD Product Service GmbH', en: 'TÜV SÜD Product Service GmbH', zh: 'TÜV SÜD Product Service GmbH' },
      date: { jp: '2021年6月15日', ko: '2021년 6월 15일', en: 'June 15, 2021', zh: '2021年6月15日' },
      validUntil: { jp: '2026年 6月 14日', ko: '2026년 6월 14일', en: 'June 14, 2026', zh: '2026年6月14日' },
      image: '/images/md/ninsyou9.jpg'
    },
    {
      category: { jp: '高度管理医療機器等販売業許可書', ko: 'ISO13485 품질관리시스템 인증서', en: 'ISO13485 Quality Management System Certificate', zh: 'ISO13485质量管理体系认证书' },
      number: { jp: 'JQA-MD0001', ko: 'JQA-MD0001', en: 'JQA-MD0001', zh: 'JQA-MD0001' },
      authority: { jp: '一般財団法人 日本品質保証機構', ko: '일반재단법인 일본품질보증기구', en: 'Japan Quality Assurance Organization', zh: '一般财团法人 日本质量保证机构' },
      date: { jp: '2020年4月1日', ko: '2020년 4월 1일', en: 'April 1, 2020', zh: '2020年4月1日' },
      validUntil: { jp: '2023年3月31日', ko: '2023년 3월 31일', en: 'March 31, 2023', zh: '2023年3月31日' },
      image: '/images/md/ninsyou1.jpg'
    },
    {
      category: { jp: '医療機器製造業登録証', ko: '의료기기 제조업 등록증', en: 'Medical Device Manufacturing Registration Certificate', zh: '医疗器械制造业登记证' },
      number: { jp: '13B1X10001', ko: '13B1X10001', en: '13B1X10001', zh: '13B1X10001' },
      authority: { jp: '厚生労働省', ko: '후생노동성', en: 'Ministry of Health, Labour and Welfare', zh: '厚生劳动省' },
      date: { jp: '2018年12月15日', ko: '2018년 12월 15일', en: 'December 15, 2018', zh: '2018年12月15日' },
      validUntil: { jp: '2023年12月14日', ko: '2023년 12월 14일', en: 'December 14, 2023', zh: '2023年12月14日' },
      image: '/images/md/ninsyou2.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-slate-50">
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
            <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="text-white h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '取得認証一覧'}
              {language === 'ko' && '취득 인증 일람'}
              {language === 'en' && 'Certifications & Licenses'}
              {language === 'zh' && '取得认证一览'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '当社が取得している医療機器に関する各種認証・許可の一覧です'}
              {language === 'ko' && '당사가 취득하고 있는 의료기기에 관한 각종 인증·허가 일람입니다'}
              {language === 'en' && 'List of various certifications and licenses related to medical devices acquired by our company'}
              {language === 'zh' && '本公司取得的医疗器械相关各种认证·许可一览'}
            </p>
          </div>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 grid-cols-1">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-6 items-center">
                    {/* Certificate Image */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-24 h-24 bg-slate-100 rounded-lg border-2 border-slate-200 flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200"
                        onClick={() => setSelectedImage({
                          src: cert.image,
                          alt: cert.category[language],
                          cert: cert
                        })}
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.category[language]}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            console.log('Image failed to load:', cert.image);
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully:', cert.image);
                          }}
                        />
                        <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                          <Award className="h-8 w-8 text-slate-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">
                            {cert.category[language]}
                          </h3>
                        </div>
                      </div>
                    </div>
                    

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Check className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="font-bold text-slate-900">
                    {language === 'jp' && '品質管理システム'}
                    {language === 'ko' && '품질관리시스템'}
                    {language === 'en' && 'Quality Management System'}
                    {language === 'zh' && '质量管理体系'}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && 'ISO13485に基づく品質管理システムを構築し、医療機器の設計・開発から製造・販売まで一貫した品質保証体制を確立しています。'}
                  {language === 'ko' && 'ISO13485에 기반한 품질관리시스템을 구축하여 의료기기의 설계·개발부터 제조·판매까지 일관된 품질보증체제를 확립하고 있습니다.'}
                  {language === 'en' && 'We have established a quality management system based on ISO13485, creating a consistent quality assurance system from medical device design and development to manufacturing and sales.'}
                  {language === 'zh' && '基于ISO13485构建了质量管理体系，建立了从医疗器械设计·开发到制造·销售的一致性质量保证体制。'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-bold text-slate-900">
                    {language === 'jp' && '国際認証'}
                    {language === 'ko' && '국제 인증'}
                    {language === 'en' && 'International Certifications'}
                    {language === 'zh' && '国际认证'}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm">
                  {language === 'jp' && 'CE マーキング、FDA 510(k)クリアランスなど、国際市場での販売に必要な認証を取得し、グローバルな品質基準を満たした製品を提供しています。'}
                  {language === 'ko' && 'CE 마킹, FDA 510(k) 클리어런스 등 국제시장에서의 판매에 필요한 인증을 취득하여 글로벌 품질기준을 만족하는 제품을 제공하고 있습니다.'}
                  {language === 'en' && 'We have obtained certifications necessary for sales in international markets, such as CE marking and FDA 510(k) clearance, providing products that meet global quality standards.'}
                  {language === 'zh' && '取得了CE标志、FDA 510(k)许可等国际市场销售所需的认证，提供满足全球质量标准的产品。'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600">
            {language === 'jp' && '※ 記載されている認証・許可情報は2025年7月現在のものです。最新の情報については当社までお問い合わせください。'}
            {language === 'ko' && '※ 기재된 인증·허가 정보는 2025년 7월 현재 기준입니다. 최신 정보는 당사에 문의해 주세요.'}
            {language === 'en' && '※ The certification and license information listed is current as of July 2025. Please contact us for the latest information.'}
            {language === 'zh' && '※ 所记载的认证·许可信息为2025年7月现在的信息。最新信息请联系本公司。'}
          </p>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-white">
            <div className="relative">
              {/* Header */}
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-900">
                  {selectedImage.cert.category[language]}
                </h2>

              </div>
              
              {/* Image */}
              <div className="p-6 flex justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjFmNWY5Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwSDIwMFYyMDBIMjAwVjEwMFoiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iMjAiIGZpbGw9IiM5NGEzYjgiLz4KPHR1eHQgeD0iMjAwIiB5PSIyNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Mzc0OGIiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkNlcnRpZmljYXRlIEltYWdlPC90ZXh0Pgo8L3N2Zz4=";
                  }}
                />
              </div>
              

            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
} 