import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Car, ChevronRight, Eye, Cog, FileText, Download } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Link, useParams } from 'wouter';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function Auto() {
  const { language } = useLanguage();
  const params = useParams();
  const brandId = params.brandId ? parseInt(params.brandId) : null;
  const wheelId = params.wheelId ? parseInt(params.wheelId) : null;

  // API 데이터 가져오기
  const { data: wheelBrands = [] } = useQuery({
    queryKey: ['wheelBrands'],
    queryFn: async () => {
      const response = await fetch('/api/wheels/brands');
      if (!response.ok) throw new Error('Failed to fetch wheel brands');
      return response.json();
    }
  });

  const { data: wheelModels = [] } = useQuery({
    queryKey: ['wheelModels'],
    queryFn: async () => {
      const response = await fetch('/api/wheels/models');
      if (!response.ok) throw new Error('Failed to fetch wheel models');
      return response.json();
    }
  });

  // 헬퍼 함수들
  const getWheelById = (id: number) => wheelModels.find((wheel: any) => wheel.id === id);
  const getBrandById = (id: number) => wheelBrands.find((brand: any) => brand.id === id);
  const getWheelsByBrand = (brandId: number) => wheelModels.filter((wheel: any) => wheel.brandId === brandId && wheel.status === 'active');
  const getDiscontinuedWheels = () => wheelModels.filter((wheel: any) => wheel.status === 'inactive');
  const { data: wheelSpecs = [], isLoading: specsLoading, refetch: refetchSpecs } = useQuery({
    queryKey: ['wheelSpecs', 'all'],
    queryFn: async () => {
      console.log('Auto.tsx: Fetching wheel specs...');
      const response = await fetch('/api/wheels/specs');
      if (!response.ok) throw new Error('Failed to fetch wheel specs');
      const data = await response.json();
      console.log('Auto.tsx: Wheel specs data loaded:', data.length, 'items');
      return data;
    },
    staleTime: 0, // 항상 최신 데이터를 가져오도록 설정
    refetchOnWindowFocus: true, // 윈도우 포커스 시 리페치
  });

  const getWheelSpecsByWheelId = (wheelId: number) => {
    const specs = wheelSpecs.filter((spec: any) => spec.modelId === wheelId);
    console.log('Auto.tsx: Filtering specs for wheelId', wheelId, 'Found:', specs.length, 'specs');
    console.log('Auto.tsx: Filtered specs details:', specs);
    return specs;
  };
  const getWheelSpecsByBrandId = (brandId: number) => {
    return wheelSpecs.filter((spec: any) => spec.brandId === brandId);
  };

  // ===== WHEEL DETAIL PAGE =====
  if (wheelId) {
    const wheel = getWheelById(wheelId);
    const brand = wheel ? getBrandById(wheel.brandId) : null;
    
    // 해당 휠의 스펙 데이터 필터링 - 컴포넌트 레벨에서 처리
    const currentWheelSpecs = getWheelSpecsByWheelId(wheelId);
    
    console.log('Auto.tsx: Wheel detail page for wheelId:', wheelId);
    console.log('Auto.tsx: Found wheel:', wheel);
    console.log('Auto.tsx: Found brand:', brand);
    console.log('Auto.tsx: Current wheel specs count:', currentWheelSpecs.length);
    console.log('Auto.tsx: Specs loading state:', specsLoading);
    console.log('Auto.tsx: All wheel specs count:', wheelSpecs.length);
    console.log('Auto.tsx: First few current specs:', currentWheelSpecs.slice(0, 3));

    const formatPrice = (price: number) => {
      return `¥${price.toLocaleString()}`;
    };

    if (!wheel || !brand) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="pt-6 text-center">
              <Car className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {language === 'jp' && 'ホイールが見つかりません'}
                {language === 'ko' && '휠을 찾을 수 없습니다'}
                {language === 'en' && 'Wheel not found'}
                {language === 'zh' && '轮毂未找到'}
              </h2>
              <Button onClick={() => window.location.href = `/${language}/auto`}>
                {language === 'jp' && 'ホイール一覧に戻る'}
                {language === 'ko' && '휠 목록으로 돌아가기'}
                {language === 'en' && 'Back to Wheels'}
                {language === 'zh' && '返回轮毂列表'}
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="ghost" 
              className="mb-8 text-white hover:bg-white/10"
              onClick={() => window.location.href = `/${language}/auto`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'jp' && '一覧に戻る'}
              {language === 'ko' && '목록으로 돌아가기'}
              {language === 'en' && 'Back to List'}
              {language === 'zh' && '返回列表'}
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {wheel.nameJp}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {wheel.description[language] || wheel.description.jp}
              </p>
            </div>
          </div>
        </section>

        {/* Wheel Details */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="space-y-6">
                <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                  <img 
                    src={wheel.imageUrl} 
                    alt={wheel.nameJp}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Basic Specs */}
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <Cog className="mr-2 h-5 w-5" />
                    {language === 'jp' && 'スペック'}
                    {language === 'ko' && '사양'}
                    {language === 'en' && 'Specifications'}
                    {language === 'zh' && '规格'}
                  </h3>
                  <div className="text-slate-700 font-mono text-lg">
                    {wheel.specs[language] || wheel.specs.jp}
                  </div>
                </div>
              </div>

              {/* Detailed Specifications Table - Full Width */}
              {specsLoading ? (
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <Cog className="mr-2 h-5 w-5" />
                    {language === 'jp' && '詳細スペック'}
                    {language === 'ko' && '상세 스펙'}
                    {language === 'en' && 'Detailed Specs'}
                    {language === 'zh' && '详细规格'}
                  </h3>
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-slate-600">
                      {language === 'jp' ? 'スペックデータを読み込み中...' :
                       language === 'ko' ? '스펙 데이터를 로딩 중...' :
                       language === 'en' ? 'Loading specs data...' : '加载规格数据...'}
                    </p>
                  </div>
                </div>
              ) : currentWheelSpecs.length > 0 ? (
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
                    <Cog className="mr-2 h-5 w-5" />
                    {language === 'jp' && '詳細スペック'}
                    {language === 'ko' && '상세 스펙'}
                    {language === 'en' && 'Detailed Specs'}
                    {language === 'zh' && '详细规格'}
                  </h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>SIZE</TableHead>
                          {brand?.name === "MUD CLIFF" ? (
                            <>
                              <TableHead>INSET</TableHead>
                              <TableHead>H-P.C.D</TableHead>
                              <TableHead>ハブ径(Φ)</TableHead>
                              <TableHead>ハブ高(mm)</TableHead>
                              <TableHead>ディスク凸(mm)</TableHead>
                            </>
                          ) : brand?.name === "ARTEMIS" || brand?.name === "APHRODITE" ? (
                            <>
                              <TableHead>INSET</TableHead>
                              <TableHead>H-P.C.D</TableHead>
                              <TableHead>ハブ径(Φ)</TableHead>
                              <TableHead>ハブ高(mm)</TableHead>
                              <TableHead>ディスク凸(mm)</TableHead>
                              <TableHead>重量</TableHead>
                            </>
                          ) : (
                            <>
                              <TableHead>INSET</TableHead>
                              <TableHead>H-P.C.D</TableHead>
                              <TableHead>ハブ径(Φ)</TableHead>
                              <TableHead>ハブ高 (mm)</TableHead>
                              <TableHead>ディスク凸 (mm)</TableHead>
                              <TableHead>重量</TableHead>
                            </>
                          )}
                          <TableHead>本体価格</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentWheelSpecs.map((spec: any) => (
                          <TableRow key={spec.id}>
                            <TableCell className="font-medium">{spec.size}</TableCell>
                            {brand?.name === "MUD CLIFF" ? (
                              <>
                                <TableCell>{spec.inset}</TableCell>
                                <TableCell>{spec.pcd}</TableCell>
                                <TableCell>{spec.holes}</TableCell>
                                <TableCell>{spec.hubHeight}</TableCell>
                                <TableCell>{spec.discProtrusion}</TableCell>
                              </>
                            ) : brand?.name === "ARTEMIS" || brand?.name === "APHRODITE" ? (
                              <>
                                <TableCell>{spec.inset}</TableCell>
                                <TableCell>{spec.pcd}</TableCell>
                                <TableCell>{spec.holes}</TableCell>
                                <TableCell>{spec.hubHeight}</TableCell>
                                <TableCell>{spec.discProtrusion}</TableCell>
                                <TableCell>{spec.weight || "-"}</TableCell>
                              </>
                            ) : (
                              <>
                                <TableCell>{spec.inset}</TableCell>
                                <TableCell>{spec.pcd}</TableCell>
                                <TableCell>{spec.hubDiameter || "67.1"}</TableCell>
                                <TableCell>{spec.hubHeight}</TableCell>
                                <TableCell>{spec.discProtrusion}</TableCell>
                                <TableCell>{spec.weight || "-"}</TableCell>
                              </>
                            )}
                            <TableCell className="font-bold text-green-600">
                              {formatPrice(spec.price)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <Cog className="mr-2 h-5 w-5" />
                    {language === 'jp' && '詳細スペック'}
                    {language === 'ko' && '상세 스펙'}
                    {language === 'en' && 'Detailed Specs'}
                    {language === 'zh' && '详细规格'}
                  </h3>
                  <div className="text-center py-8">
                    <p className="text-slate-600 mb-2">
                      {language === 'jp' ? 'このホイールのスペックデータが見つかりません' :
                       language === 'ko' ? '이 휠의 스펙 데이터를 찾을 수 없습니다' :
                       language === 'en' ? 'No specs data found for this wheel' : '未找到此轮毂的规格数据'}
                    </p>
                    <p className="text-sm text-slate-500">
                      {language === 'jp' ? 'Wheel ID: ' + wheelId :
                       language === 'ko' ? '휠 ID: ' + wheelId :
                       language === 'en' ? 'Wheel ID: ' + wheelId : '轮毂ID: ' + wheelId}
                    </p>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {language === 'jp' && '特徴'}
                  {language === 'ko' && '특징'}
                  {language === 'en' && 'Features'}
                  {language === 'zh' && '特点'}
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {language === 'jp' && '高品質アルミニウム合金製'}
                    {language === 'ko' && '고품질 알루미늄 합금 제작'}
                    {language === 'en' && 'High-quality aluminum alloy construction'}
                    {language === 'zh' && '高品质铝合金制造'}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {language === 'jp' && '軽量化と強度の両立'}
                    {language === 'ko' && '경량화와 강도의 양립'}
                    {language === 'en' && 'Balance of weight reduction and strength'}
                    {language === 'zh' && '轻量化与强度并重'}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {language === 'jp' && 'JWL・VIA規格適合品'}
                    {language === 'ko' && 'JWL・VIA 규격 적합품'}
                    {language === 'en' && 'JWL・VIA standard compliant'}
                    {language === 'zh' && '符合JWL・VIA标准'}
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="text-center pt-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = `/${language}/contact`}
                >
                  {language === 'jp' && 'お問い合わせ'}
                  {language === 'ko' && '문의하기'}
                  {language === 'en' && 'Contact Us'}
                  {language === 'zh' && '联系我们'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ===== BRAND DETAIL PAGE (Wheels by Brand) =====
  if (brandId) {
    const brand = getBrandById(brandId);
    const wheels = getWheelsByBrand(brandId);

    const formatPrice = (price: number) => {
      return `¥${price.toLocaleString()}`;
    };

    if (!brand) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="pt-6 text-center">
              <Car className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {language === 'jp' && 'ブランドが見つかりません'}
                {language === 'ko' && '브랜드를 찾을 수 없습니다'}
                {language === 'en' && 'Brand not found'}
                {language === 'zh' && '品牌未找到'}
              </h2>
              <Button onClick={() => window.location.href = `/${language}/auto`}>
                {language === 'jp' && 'ブランド一覧に戻る'}
                {language === 'ko' && '브랜드 목록으로 돌아가기'}
                {language === 'en' && 'Back to Brands'}
                {language === 'zh' && '返回品牌列表'}
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="ghost" 
              className="mb-8 text-white hover:bg-white/10"
              onClick={() => window.location.href = `/${language}/auto`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'jp' && 'ブランド一覧に戻る'}
              {language === 'ko' && '브랜드 목록으로 돌아가기'}
              {language === 'en' && 'Back to Brands'}
              {language === 'zh' && '返回品牌列表'}
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {brand.nameJp}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {brand.description[language] || brand.description.jp}
              </p>
            </div>
          </div>
        </section>

        {/* Wheels Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {language === 'jp' && 'ラインナップ'}
                {language === 'ko' && '라인업'}
                {language === 'en' && 'Lineup'}
                {language === 'zh' && '产品线'}
              </h2>
              <p className="text-xl text-slate-600">
                {language === 'jp' && `${brand.nameJp}シリーズの全ラインナップをご覧ください`}
                {language === 'ko' && `${brand.nameJp} 시리즈의 전체 라인업을 확인하세요`}
                {language === 'en' && `Explore the complete ${brand.name} series lineup`}
                {language === 'zh' && `浏览${brand.name}系列的完整产品线`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wheels.map((wheel: any) => (
                <AnimatedCard key={wheel.id}>
                  <Card 
                    className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => window.location.href = `/${language}/auto/wheel/${wheel.id}`}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square bg-slate-100 overflow-hidden">
                        <img 
                          src={wheel.imageUrl} 
                          alt={`${brand.nameJp} ${wheel.nameJp}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {wheel.nameJp}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3 font-mono">
                          {wheel.specs[language] || wheel.specs.jp}
                        </p>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                          {wheel.description[language] || wheel.description.jp}
                        </p>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                          <Eye className="mr-2 h-4 w-4" />
                          {language === 'jp' && '詳細を見る'}
                          {language === 'ko' && '자세히 보기'}
                          {language === 'en' && 'View Details'}
                          {language === 'zh' && '查看详情'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Specifications Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {language === 'jp' && 'スペック一覧'}
                {language === 'ko' && '스펙 목록'}
                {language === 'en' && 'Specifications'}
                {language === 'zh' && '规格列表'}
              </h2>
              <p className="text-xl text-slate-600">
                {language === 'jp' && `${brand.nameJp}シリーズの全スペックをご覧ください`}
                {language === 'ko' && `${brand.nameJp} 시리즈의 전체 스펙을 확인하세요`}
                {language === 'en' && `View all specifications for ${brand.name} series`}
                {language === 'zh' && `查看${brand.name}系列的所有规格`}
              </p>
            </div>

            {/* Brand Specs Table */}
            {(() => {
              const brandSpecs = getWheelSpecsByBrandId(brand.id);
              if (brandSpecs.length > 0) {
                return (
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>
                              {language === 'jp' && 'モデル'}
                              {language === 'ko' && '모델'}
                              {language === 'en' && 'Model'}
                              {language === 'zh' && '型号'}
                            </TableHead>
                            <TableHead>SIZE</TableHead>
                            <TableHead>P.C.D</TableHead>
                            <TableHead>HOLE</TableHead>
                            <TableHead>INSET</TableHead>
                            <TableHead>ディスク凸 (mm)</TableHead>
                            <TableHead>ハブ高 (mm)</TableHead>
                            <TableHead>本体価格</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {brandSpecs.map((spec: any) => (
                            <TableRow key={spec.id}>
                              <TableCell className="font-medium">
                                <Badge variant="outline">{spec.modelName}</Badge>
                              </TableCell>
                              <TableCell className="font-medium">{spec.size}</TableCell>
                              <TableCell>{spec.pcd}</TableCell>
                              <TableCell>{spec.holes}</TableCell>
                              <TableCell>{spec.inset}</TableCell>
                              <TableCell>{spec.discProtrusion}</TableCell>
                              <TableCell>{spec.hubHeight}</TableCell>
                              <TableCell className="font-bold text-green-600">
                                {formatPrice(spec.price)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                );
              }
              return (
                <div className="text-center py-12">
                  <p className="text-slate-500">
                    {language === 'jp' && 'スペック情報がありません'}
                    {language === 'ko' && '스펙 정보가 없습니다'}
                    {language === 'en' && 'No specification information available'}
                    {language === 'zh' && '暂无规格信息'}
                  </p>
                </div>
              );
            })()}
          </div>
        </section>
      </div>
    );
  }

  // ===== MAIN AUTO PAGE (Brand List) =====
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {language === 'jp' && 'AUTO事業部'}
              {language === 'ko' && '자동차 사업부'}
              {language === 'en' && 'AUTO Business Unit'}
              {language === 'zh' && '汽车事业部'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === 'jp' && '高品質なアルミニウムホイールのラインナップをご覧ください'}
              {language === 'ko' && '고품질 알루미늄 휠 라인업을 확인하세요'}
              {language === 'en' && 'Explore our lineup of high-quality aluminum wheels'}
              {language === 'zh' && '浏览我们高品质铝合金轮毂产品线'}
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Section - 맨 위에 위치 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'カタログ'}
              {language === 'ko' && '카탈로그'}
              {language === 'en' && 'Catalog'}
              {language === 'zh' && '目录'}
            </h2>
            <p className="text-xl text-slate-600">
              {language === 'jp' && '最新のホイールカタログをダウンロードできます'}
              {language === 'ko' && '최신 휠 카탈로그를 다운로드할 수 있습니다'}
              {language === 'en' && 'Download the latest wheel catalogs'}
              {language === 'zh' && '下载最新轮毂目录'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 2024-25 Catalog */}
            <AnimatedCard>
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <FileText className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {language === 'jp' && '2024-25 TECHNOPIA SELECTION'}
                      {language === 'ko' && '2024-25 TECHNOPIA SELECTION'}
                      {language === 'en' && '2024-25 TECHNOPIA SELECTION'}
                      {language === 'zh' && '2024-25 TECHNOPIA SELECTION'}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {language === 'jp' && '最新のホイールカタログ'}
                      {language === 'ko' && '최신 휠 카탈로그'}
                      {language === 'en' && 'Latest wheel catalog'}
                      {language === 'zh' && '最新轮毂目录'}
                    </p>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open('/images/auto/2024-25TECHNOPIA_SELECTION.pdf', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {language === 'jp' && 'ダウンロード'}
                      {language === 'ko' && '다운로드'}
                      {language === 'en' && 'Download'}
                      {language === 'zh' && '下载'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
            {/* 2022-23 Catalog */}
            <AnimatedCard>
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                      <FileText className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {language === 'jp' && '2022-23 TECHNOPIA SELECTION'}
                      {language === 'ko' && '2022-23 TECHNOPIA SELECTION'}
                      {language === 'en' && '2022-23 TECHNOPIA SELECTION'}
                      {language === 'zh' && '2022-23 TECHNOPIA SELECTION'}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {language === 'jp' && '2022-23年度ホイールカタログ'}
                      {language === 'ko' && '2022-23년도 휠 카탈로그'}
                      {language === 'en' && '2022-23 wheel catalog'}
                      {language === 'zh' && '2022-23年度轮毂目录'}
                    </p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.open('/images/auto/2022-23TECHNOPIA_SELECTION.pdf', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {language === 'jp' && 'ダウンロード'}
                      {language === 'ko' && '다운로드'}
                      {language === 'en' && 'Download'}
                      {language === 'zh' && '下载'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
            {/* 2020-21 Catalog */}
            <AnimatedCard>
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-purple-100 p-4 rounded-full">
                      <FileText className="h-12 w-12 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {language === 'jp' && '2020-21 TECHNOPIA SELECTION'}
                      {language === 'ko' && '2020-21 TECHNOPIA SELECTION'}
                      {language === 'en' && '2020-21 TECHNOPIA SELECTION'}
                      {language === 'zh' && '2020-21 TECHNOPIA SELECTION'}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {language === 'jp' && '2020-21年度ホイールカタログ'}
                      {language === 'ko' && '2020-21년도 휠 카탈로그'}
                      {language === 'en' && '2020-21 wheel catalog'}
                      {language === 'zh' && '2020-21年度轮毂目录'}
                    </p>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => window.open('/images/auto/2020-21TECHNOPIA_SELECTION.pdf', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {language === 'jp' && 'ダウンロード'}
                      {language === 'ko' && '다운로드'}
                      {language === 'en' && 'Download'}
                      {language === 'zh' && '下载'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Brands Grid - 카탈로그 아래에 위치 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && 'ブランド一覧'}
              {language === 'ko' && '브랜드 목록'}
              {language === 'en' && 'Brand List'}
              {language === 'zh' && '品牌列表'}
            </h2>
            <p className="text-xl text-slate-600">
              {language === 'jp' && '各ブランドの特徴とラインナップをご覧ください'}
              {language === 'ko' && '각 브랜드의 특징과 라인업을 확인하세요'}
              {language === 'en' && 'Explore the features and lineups of each brand'}
              {language === 'zh' && '探索每个品牌的特点和产品线'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wheelBrands.filter((brand: any) => brand.active).map((brand: any) => {
              // 브랜드별 로고 이미지 매핑
              const getBrandLogo = (brandName: string) => {
                const logoMap: { [key: string]: string } = {
                  'ADONIS': '/images/auto/adonis_logo.png',
                  'APHRODITE': '/images/auto/aphrodite_logo.png',
                  'ARTEMIS': '/images/auto/artemis_logo.png',
                  'KASHINA': '/images/auto/kashina_logo.png',
                  'LACHESIS': '/images/auto/lachesis_logo.png',
                  'MUD CLIFF': '/images/auto/mudcliff_logo.png',
                  'CHARITES': '/images/auto/charites_logo.png' // charites 로고가 있다면 추가
                };
                return logoMap[brandName] || null;
              };
              const logoUrl = getBrandLogo(brand.name);
              return (
                <AnimatedCard key={brand.id}>
                  <Card 
                    className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => window.location.href = `/${language}/auto/brand/${brand.id}`}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video bg-white flex items-center justify-center p-6">
                        {logoUrl ? (
                          <img 
                            src={logoUrl} 
                            alt={`${brand.nameJp} logo`}
                            className="max-w-full max-h-full object-contain scale-150"
                            onError={(e) => {
                              // 로고 로드 실패 시 기본 아이콘 표시
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const fallbackIcon = document.createElement('div');
                                fallbackIcon.innerHTML = '<svg class="text-slate-600 h-16 w-16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>';
                                parent.appendChild(fallbackIcon);
                              }
                            }}
                          />
                        ) : (
                          <Car className="text-slate-600 h-16 w-16" />
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {brand.nameJp}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {brand.description[language] || brand.description.jp}
                        </p>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                          {language === 'jp' && 'ラインナップを見る'}
                          {language === 'ko' && '라인업 보기'}
                          {language === 'en' && 'View Lineup'}
                          {language === 'zh' && '查看产品线'}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discontinued Wheels Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'jp' && '生産終了ホイール'}
              {language === 'ko' && '생산종료 호일'}
              {language === 'en' && 'Discontinued Wheels'}
              {language === 'zh' && '停产轮毂'}
            </h2>
            <p className="text-xl text-slate-600">
              {language === 'jp' && '過去に製造されたホイールのアーカイブをご覧ください'}
              {language === 'ko' && '과거에 제조된 휠의 아카이브를 확인하세요'}
              {language === 'en' && 'Browse the archive of previously manufactured wheels'}
              {language === 'zh' && '浏览之前制造的轮毂档案'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {getDiscontinuedWheels().map((wheel: any) => {
              const brand = getBrandById(wheel.brandId);
              return (
                <AnimatedCard key={wheel.id}>
                  <Card 
                    className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => window.location.href = `/${language}/auto/wheel/${wheel.id}`}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square bg-slate-100 overflow-hidden">
                        <img 
                          src={wheel.imageUrl} 
                          alt={`${brand?.nameJp || ''} ${wheel.nameJp}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            {wheel.nameJp}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {language === 'jp' && '生産終了'}
                            {language === 'ko' && '생산종료'}
                            {language === 'en' && 'Discontinued'}
                            {language === 'zh' && '停产'}
                          </Badge>
                        </div>
                        {brand && (
                          <p className="text-sm text-slate-500 mb-2">
                            {brand.nameJp}
                          </p>
                        )}
                        <p className="text-sm text-slate-600 mb-3 font-mono">
                          {wheel.specs[language] || wheel.specs.jp}
                        </p>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                          {wheel.description[language] || wheel.description.jp}
                        </p>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                          <Eye className="mr-2 h-4 w-4" />
                          {language === 'jp' && '詳細を見る'}
                          {language === 'ko' && '자세히 보기'}
                          {language === 'en' && 'View Details'}
                          {language === 'zh' && '查看详情'}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}