import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Car, Cog, Star, Award, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

export function Auto() {
  const { language } = useLanguage();

  const wheelBrands = [
    {
      name: 'KASHINA',
      nameJp: 'カシーナ',
      description: {
        jp: '洗練されたデザインと優れた性能を兼ね備えたプレミアムホイール',
        ko: '세련된 디자인과 뛰어난 성능을 겸비한 프리미엄 휠',
        en: 'Premium wheels combining sophisticated design and excellent performance',
        zh: '兼具精致设计和卓越性能的高级轮毂'
      },
      models: [
        {
          name: 'KASHINA V1',
          image: '/api/placeholder/300/200',
          specs: '16-20インチ',
          status: 'active'
        },
        {
          name: 'KASHINA FV7', 
          image: '/api/placeholder/300/200',
          specs: '17-20インチ',
          status: 'active'
        },
        {
          name: 'KASHINA XV5',
          image: '/api/placeholder/300/200', 
          specs: '16-19インチ',
          status: 'active'
        }
      ]
    },
    {
      name: 'ARTEMIS',
      nameJp: 'アルテミス',
      description: {
        jp: 'スポーティで力強いデザインが特徴のパフォーマンスホイール',
        ko: '스포티하고 역동적인 디자인이 특징인 퍼포먼스 휠',
        en: 'Performance wheels featuring sporty and dynamic design',
        zh: '以运动和强劲设计为特色的性能轮毂'
      },
      models: [
        {
          name: 'ARTEMIS NS9',
          image: '/api/placeholder/300/200',
          specs: '17-19インチ',
          status: 'active'
        }
      ]
    },
    {
      name: 'APHRODITE',
      nameJp: 'アフロディーテ',
      description: {
        jp: '美しさと機能性を追求したエレガントホイール',
        ko: '아름다움과 기능성을 추구한 우아한 휠',
        en: 'Elegant wheels pursuing beauty and functionality',
        zh: '追求美观与功能性的优雅轮毂'
      },
      models: [
        {
          name: 'APHRODITE MZ',
          image: '/api/placeholder/300/200',
          specs: '16-18インチ',
          status: 'active'
        }
      ]
    },
    {
      name: 'MUD CLIFF',
      nameJp: 'マッドクリフ',
      description: {
        jp: 'オフロード向けの堅牢で力強いデザインホイール',
        ko: '오프로드용 견고하고 강력한 디자인 휠',
        en: 'Rugged and powerful design wheels for off-road use',
        zh: '专为越野设计的坚固强劲轮毂'
      },
      models: [
        {
          name: 'MUD CLIFF',
          image: '/api/placeholder/300/200',
          specs: '16-20インチ',
          status: 'active'
        }
      ]
    },
    {
      name: 'CHARITES',
      nameJp: 'カリテス',
      description: {
        jp: '多様なスタイルに対応する汎用性の高いホイールシリーズ',
        ko: '다양한 스타일에 대응하는 범용성 높은 휠 시리즈',
        en: 'Versatile wheel series supporting various styles',
        zh: '适应多种风格的多功能轮毂系列'
      },
      models: [
        {
          name: 'CHARITES S10',
          image: '/api/placeholder/300/200',
          specs: '15-17インチ',
          status: 'active'
        },
        {
          name: 'CHARITES S315',
          image: '/api/placeholder/300/200',
          specs: '15-17インチ',
          status: 'active'
        },
        {
          name: 'CHARITES S416',
          image: '/api/placeholder/300/200',
          specs: '16-18インチ',
          status: 'active'
        },
        {
          name: 'CHARITES S316',
          image: '/api/placeholder/300/200',
          specs: '16-18インチ',
          status: 'active'
        }
      ]
    }
  ];

  const discontinuedModels = [
    'ADONIS HSR', 'ADONIS ISR', 'ADONIS JXS', 'ADONIS KRS',
    'APHRODITE HS', 'APHRODITE GX', 'APHRODITE IS', 'APHRODITE EF',
    'APHRODITE IS(MS)', 'APHRODITE EF(MS)', 'APHRODITE JX', 'APHRODITE KR',
    'APHRODITE WX', 'APHRODITE SW5', 'APHRODITE TWS', 'APHRODITE TWS custom',
    'LACHESIS LF', 'LACHESIS LD1', 'ARTEMIS LSW'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/business">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'jp' && '事業部一覧に戻る'}
                {language === 'ko' && '사업부 목록으로 돌아가기'}
                {language === 'en' && 'Back to Business Divisions'}
                {language === 'zh' && '返回事业部列表'}
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center mb-8">
            <Car className="h-12 w-12 text-blue-400 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {language === 'jp' && 'AUTO事業部'}
                {language === 'ko' && 'AUTO 사업부'}
                {language === 'en' && 'AUTO Division'}
                {language === 'zh' && 'AUTO事业部'}
              </h1>
              <p className="text-xl text-blue-200">
                {language === 'jp' && 'アルミホイール専門部門'}
                {language === 'ko' && '알루미늄 휠 전문 부문'}
                {language === 'en' && 'Aluminum Wheel Specialist Division'}
                {language === 'zh' && '铝轮毂专业部门'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'jp' && '高品質製品'}
                  {language === 'ko' && '고품질 제품'}
                  {language === 'en' && 'High Quality Products'}
                  {language === 'zh' && '高品质产品'}
                </h3>
                <p className="text-sm text-blue-100">
                  {language === 'jp' && '厳格な品質管理基準'}
                  {language === 'ko' && '엄격한 품질 관리 기준'}
                  {language === 'en' && 'Strict quality control standards'}
                  {language === 'zh' && '严格的质量控制标准'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Cog className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'jp' && '技術革新'}
                  {language === 'ko' && '기술 혁신'}
                  {language === 'en' && 'Technical Innovation'}
                  {language === 'zh' && '技术创新'}
                </h3>
                <p className="text-sm text-blue-100">
                  {language === 'jp' && '最先端の製造技術'}
                  {language === 'ko' && '최첨단 제조 기술'}
                  {language === 'en' && 'Cutting-edge manufacturing technology'}
                  {language === 'zh' && '尖端制造技术'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'jp' && '多彩なデザイン'}
                  {language === 'ko' && '다채로운 디자인'}
                  {language === 'en' && 'Diverse Designs'}
                  {language === 'zh' && '多样化设计'}
                </h3>
                <p className="text-sm text-blue-100">
                  {language === 'jp' && '様々なスタイルに対応'}
                  {language === 'ko' && '다양한 스타일에 대응'}
                  {language === 'en' && 'Supporting various styles'}
                  {language === 'zh' && '适应各种风格'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wheel Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'アルミホイールラインナップ'}
              {language === 'ko' && '알루미늄 휠 라인업'}
              {language === 'en' && 'Aluminum Wheel Lineup'}
              {language === 'zh' && '铝轮毂产品线'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '多様な車種とスタイルに対応する豊富なホイールコレクション'}
              {language === 'ko' && '다양한 차종과 스타일에 대응하는 풍부한 휠 컬렉션'}
              {language === 'en' && 'Rich wheel collection supporting various vehicle types and styles'}
              {language === 'zh' && '适应各种车型和风格的丰富轮毂收藏'}
            </p>
          </div>

          <div className="space-y-16">
            {wheelBrands.map((brand, brandIndex) => (
              <div key={brandIndex} className="border-b border-slate-200 pb-16 last:border-b-0">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mr-4">
                      {brand.name}
                    </h3>
                    <span className="text-lg text-slate-600">
                      {brand.nameJp}
                    </span>
                  </div>
                  <p className="text-lg text-slate-600 max-w-4xl">
                    {brand.description[language]}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brand.models.map((model, modelIndex) => (
                    <Card key={modelIndex} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <Car className="h-16 w-16 text-slate-400 mx-auto mb-2" />
                              <p className="text-sm text-slate-500">{model.name}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-slate-900">
                              {model.name}
                            </h4>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {language === 'jp' && '現行モデル'}
                              {language === 'ko' && '현행 모델'}
                              {language === 'en' && 'Current Model'}
                              {language === 'zh' && '现行型号'}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-4">
                            {language === 'jp' && `サイズ: ${model.specs}`}
                            {language === 'ko' && `사이즈: ${model.specs}`}
                            {language === 'en' && `Size: ${model.specs}`}
                            {language === 'zh' && `尺寸: ${model.specs}`}
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-300"
                          >
                            {language === 'jp' && '詳細を見る'}
                            {language === 'ko' && '상세 보기'}
                            {language === 'en' && 'View Details'}
                            {language === 'zh' && '查看详情'}
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discontinued Products */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '生産終了商品'}
              {language === 'ko' && '생산 종료 제품'}
              {language === 'en' && 'Discontinued Products'}
              {language === 'zh' && '停产产品'}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {language === 'jp' && '過去に製造されたモデルの一覧です。部品供給やサポートについてはお問い合わせください。'}
              {language === 'ko' && '과거에 제조된 모델 목록입니다. 부품 공급이나 지원에 대해서는 문의해 주세요.'}
              {language === 'en' && 'List of previously manufactured models. Please contact us for parts supply and support.'}
              {language === 'zh' && '过去制造的型号列表。有关零件供应和支持，请与我们联系。'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {discontinuedModels.map((model, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">{model}</span>
                    <Badge variant="outline" className="text-xs text-slate-500 border-slate-300">
                      {language === 'jp' && '終了'}
                      {language === 'ko' && '종료'}
                      {language === 'en' && 'EOL'}
                      {language === 'zh' && '停产'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'jp' && 'お問い合わせ'}
            {language === 'ko' && '문의하기'}
            {language === 'en' && 'Contact Us'}
            {language === 'zh' && '联系我们'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {language === 'jp' && 'アルミホイールに関するご質問やお見積りは、お気軽にお問い合わせください。'}
            {language === 'ko' && '알루미늄 휠에 관한 질문이나 견적은 언제든지 문의해 주세요.'}
            {language === 'en' && 'Please feel free to contact us for any questions or quotes regarding aluminum wheels.'}
            {language === 'zh' && '有关铝轮毂的任何问题或报价，请随时与我们联系。'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              {language === 'jp' && 'お問い合わせフォーム'}
              {language === 'ko' && '문의 양식'}
              {language === 'en' && 'Contact Form'}
              {language === 'zh' && '联系表格'}
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}