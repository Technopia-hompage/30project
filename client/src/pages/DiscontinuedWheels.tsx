import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, RefreshCw, Trash, Eye, Edit } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from '@/hooks/use-toast';

interface WheelModel {
  id?: number;
  brandId: number;
  name: string;
  nameJp: string;
  imageUrl: string;
  specs: string;
  status: 'active' | 'inactive';
  sortOrder?: number;
}

interface WheelBrand {
  id?: number;
  name: string;
  nameJp: string;
  description: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  sortOrder?: number;
  active?: boolean;
}

// API functions
const fetchWheelBrands = async (): Promise<WheelBrand[]> => {
  const response = await fetch('/api/wheels/brands');
  if (!response.ok) throw new Error('Failed to fetch wheel brands');
  return response.json();
};

const fetchDiscontinuedModels = async (brandId?: number): Promise<WheelModel[]> => {
  const params = brandId ? `?brandId=${brandId}&status=inactive` : '?status=inactive';
  const response = await fetch(`/api/wheels/models${params}`);
  if (!response.ok) throw new Error('Failed to fetch discontinued models');
  return response.json();
};

const reactivateModel = async (id: number): Promise<WheelModel> => {
  const response = await fetch(`/api/wheels/models/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'active' }),
  });
  if (!response.ok) throw new Error('Failed to reactivate model');
  return response.json();
};

const deleteModel = async (id: number): Promise<void> => {
  const response = await fetch(`/api/wheels/models/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete model');
};

export function DiscontinuedWheels() {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  
  const [selectedBrandId, setSelectedBrandId] = useState<number>(-1);
  const [selectedModel, setSelectedModel] = useState<WheelModel | null>(null);
  const [showModelDetail, setShowModelDetail] = useState(false);

  // Queries
  const { data: wheelBrands = [], isLoading: brandsLoading } = useQuery({
    queryKey: ['wheelBrands'],
    queryFn: fetchWheelBrands,
  });

  const { data: discontinuedModels = [], isLoading: modelsLoading } = useQuery({
    queryKey: ['discontinuedModels', selectedBrandId],
    queryFn: () => fetchDiscontinuedModels(selectedBrandId > 0 ? selectedBrandId : undefined),
  });

  // Mutations
  const reactivateMutation = useMutation({
    mutationFn: reactivateModel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discontinuedModels'] });
      toast({
        title: language === 'jp' ? 'モデルが再活性化されました' : 
              language === 'ko' ? '모델이 재활성화되었습니다' : 
              language === 'en' ? 'Model reactivated successfully' : '型号重新激活成功',
      });
    },
    onError: (error) => {
      toast({
        title: language === 'jp' ? 'エラーが発生しました' : 
              language === 'ko' ? '오류가 발생했습니다' : 
              language === 'en' ? 'An error occurred' : '发生错误',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteModel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discontinuedModels'] });
      toast({
        title: language === 'jp' ? 'モデルが削除されました' : 
              language === 'ko' ? '모델이 삭제되었습니다' : 
              language === 'en' ? 'Model deleted successfully' : '型号删除成功',
      });
    },
    onError: (error) => {
      toast({
        title: language === 'jp' ? 'エラーが発生しました' : 
              language === 'ko' ? '오류가 발생했습니다' : 
              language === 'en' ? 'An error occurred' : '发生错误',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Helper functions
  const getBrandName = (brandId: number) => {
    const brand = wheelBrands.find(b => b.id === brandId);
    return brand ? `${brand.name} (${brand.nameJp})` : 'Unknown Brand';
  };

  const handleReactivate = (id: number) => {
    if (confirm(language === 'jp' ? 'このモデルを再活性化しますか？' : 
               language === 'ko' ? '이 모델을 재활성화하시겠습니까?' : 
               language === 'en' ? 'Are you sure you want to reactivate this model?' : '确定要重新激活这个型号吗？')) {
      reactivateMutation.mutate(id);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm(language === 'jp' ? 'このモデルを完全に削除しますか？この操作は元に戻せません。' : 
               language === 'ko' ? '이 모델을 완전히 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.' : 
               language === 'en' ? 'Are you sure you want to permanently delete this model? This action cannot be undone.' : '确定要永久删除这个型号吗？此操作无法撤销。')) {
      deleteMutation.mutate(id);
    }
  };

  if (brandsLoading || modelsLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg">
            {language === 'jp' ? '読み込み中...' : 
             language === 'ko' ? '로딩 중...' : 
             language === 'en' ? 'Loading...' : '加载中...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/jp/auto-admin">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'jp' && '管理画面に戻る'}
                {language === 'ko' && '관리 화면으로 돌아가기'}
                {language === 'en' && 'Back to Admin Panel'}
                {language === 'zh' && '返回管理面板'}
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">
              {language === 'jp' && '生産終了ホイール管理'}
              {language === 'ko' && '생산종료 휠 관리'}
              {language === 'en' && 'Discontinued Wheels Management'}
              {language === 'zh' && '停产轮毂管理'}
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 브랜드 필터 */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <label className="text-lg font-semibold">
              {language === 'jp' ? 'ブランドフィルター:' : 
               language === 'ko' ? '브랜드 필터:' : 
               language === 'en' ? 'Brand Filter:' : '品牌筛选:'}
            </label>
            <Select value={selectedBrandId.toString()} onValueChange={(value) => setSelectedBrandId(parseInt(value))}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder={
                  language === 'jp' ? 'すべてのブランド' : 
                  language === 'ko' ? '모든 브랜드' : 
                  language === 'en' ? 'All Brands' : '所有品牌'
                } />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="-1">
                  {language === 'jp' ? 'すべてのブランド' : 
                   language === 'ko' ? '모든 브랜드' : 
                   language === 'en' ? 'All Brands' : '所有品牌'}
                </SelectItem>
                {wheelBrands.map((brand) => (
                  <SelectItem key={brand.id} value={brand.id!.toString()}>
                    {brand.name} ({brand.nameJp})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {language === 'jp' ? '総生産終了モデル数' : 
                 language === 'ko' ? '총 생산종료 모델 수' : 
                 language === 'en' ? 'Total Discontinued Models' : '总停产型号数'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{discontinuedModels.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {language === 'jp' ? '対象ブランド数' : 
                 language === 'ko' ? '대상 브랜드 수' : 
                 language === 'en' ? 'Affected Brands' : '受影响品牌数'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {new Set(discontinuedModels.map(m => m.brandId)).size}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {language === 'jp' ? '今月の再活性化' : 
                 language === 'ko' ? '이번 달 재활성화' : 
                 language === 'en' ? 'Reactivated This Month' : '本月重新激活'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">0</div>
            </CardContent>
          </Card>
        </div>

        {/* 생산종료된 모델 목록 */}
        <div className="space-y-6">
          {discontinuedModels.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <div className="text-gray-500 text-lg">
                  {language === 'jp' ? '生産終了されたモデルがありません' : 
                   language === 'ko' ? '생산종료된 모델이 없습니다' : 
                   language === 'en' ? 'No discontinued models found' : '没有找到停产的型号'}
                </div>
              </CardContent>
            </Card>
          ) : (
            discontinuedModels.map((model) => (
              <Card key={model.id} className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {model.imageUrl && (
                        <img 
                          src={model.imageUrl} 
                          alt={model.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      )}
                      <div>
                        <h3 className="text-xl font-semibold">{model.name}</h3>
                        <p className="text-gray-600">{getBrandName(model.brandId)}</p>
                                                 <p className="text-sm text-gray-500">{typeof model.specs === 'string' ? model.specs : (model.specs as any)?.jp || ''}</p>
                        <Badge variant="destructive" className="mt-2">
                          {language === 'jp' ? '生産終了' : 
                           language === 'ko' ? '생산종료' : 
                           language === 'en' ? 'Discontinued' : '停产'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedModel(model);
                          setShowModelDetail(true);
                        }}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        {language === 'jp' ? '詳細' : 
                         language === 'ko' ? '상세' : 
                         language === 'en' ? 'Details' : '详情'}
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReactivate(model.id!)}
                        disabled={reactivateMutation.isPending}
                      >
                        <RefreshCw className="h-4 w-4 mr-1" />
                        {language === 'jp' ? '再活性化' : 
                         language === 'ko' ? '재활성화' : 
                         language === 'en' ? 'Reactivate' : '重新激活'}
                      </Button>
                      
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(model.id!)}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash className="h-4 w-4 mr-1" />
                        {language === 'jp' ? '削除' : 
                         language === 'ko' ? '삭제' : 
                         language === 'en' ? 'Delete' : '删除'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* 모델 상세 정보 다이얼로그 */}
      <Dialog open={showModelDetail} onOpenChange={setShowModelDetail}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {language === 'jp' ? 'モデル詳細情報' : 
               language === 'ko' ? '모델 상세 정보' : 
               language === 'en' ? 'Model Details' : '型号详细信息'}
            </DialogTitle>
          </DialogHeader>
          {selectedModel && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    {language === 'jp' ? 'モデル名' : 
                     language === 'ko' ? '모델명' : 
                     language === 'en' ? 'Model Name' : '型号名称'}
                  </label>
                  <p className="text-lg font-semibold">{selectedModel.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    {language === 'jp' ? 'ブランド' : 
                     language === 'ko' ? '브랜드' : 
                     language === 'en' ? 'Brand' : '品牌'}
                  </label>
                  <p className="text-lg">{getBrandName(selectedModel.brandId)}</p>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">
                  {language === 'jp' ? 'スペック' : 
                   language === 'ko' ? '스펙' : 
                   language === 'en' ? 'Specifications' : '规格'}
                </label>
                                 <p className="text-sm">{typeof selectedModel.specs === 'string' ? selectedModel.specs : (selectedModel.specs as any)?.jp || ''}</p>
              </div>
              
              {selectedModel.imageUrl && (
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    {language === 'jp' ? '画像' : 
                     language === 'ko' ? '이미지' : 
                     language === 'en' ? 'Image' : '图片'}
                  </label>
                  <img 
                    src={selectedModel.imageUrl} 
                    alt={selectedModel.name}
                    className="w-full max-w-md h-auto rounded-lg"
                  />
                </div>
              )}
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowModelDetail(false)}
                >
                  {language === 'jp' ? '閉じる' : 
                   language === 'ko' ? '닫기' : 
                   language === 'en' ? 'Close' : '关闭'}
                </Button>
                <Button
                  onClick={() => {
                    handleReactivate(selectedModel.id!);
                    setShowModelDetail(false);
                  }}
                >
                                     <RefreshCw className="h-4 w-4 mr-2" />
                  {language === 'jp' ? '再活性化' : 
                   language === 'ko' ? '재활성화' : 
                   language === 'en' ? 'Reactivate' : '重新激活'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
} 