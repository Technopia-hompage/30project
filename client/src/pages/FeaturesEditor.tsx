import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from '@/hooks/use-toast';

interface WheelModel {
  id: number;
  brandId: number;
  name: string;
  nameJp: string;
  imageUrl: string;
  specs?: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  description: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  features?: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  status: 'active' | 'inactive';
}

interface WheelBrand {
  id: number;
  name: string;
  nameJp: string;
  description: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  active: boolean;
}

export default function FeaturesEditor() {
  const { language } = useLanguage();
  const [brands, setBrands] = useState<WheelBrand[]>([]);
  const [models, setModels] = useState<WheelModel[]>([]);
  const [editingModel, setEditingModel] = useState<WheelModel | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🎯 FeaturesEditor 컴포넌트가 마운트되었습니다!');
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [brandsResponse, modelsResponse] = await Promise.all([
        fetch('/api/wheels/brands'),
        fetch('/api/wheels/models')
      ]);

      if (brandsResponse.ok && modelsResponse.ok) {
        const [brandsData, modelsData] = await Promise.all([
          brandsResponse.json(),
          modelsResponse.json()
        ]);
        setBrands(brandsData);
        setModels(modelsData);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      toast({
        title: language === 'jp' ? 'データの取得に失敗しました' : 
               language === 'ko' ? '데이터 가져오기 실패' : 
               language === 'en' ? 'Failed to fetch data' : '获取数据失败',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditFeatures = (model: WheelModel) => {
    // features가 없으면 기본값으로 초기화
    const modelWithFeatures = {
      ...model,
      features: model.features || {
        jp: "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品",
        ko: "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품",
        en: "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified",
        zh: "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
      }
    };
    setEditingModel(modelWithFeatures);
    setIsEditing(true);
  };

  const handleSaveFeatures = async () => {
    if (!editingModel) return;

    try {
      const response = await fetch(`/api/wheels/models/${editingModel.id}/features`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: editingModel.description,
          features: editingModel.features
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update features');
      }

      const updatedModel = await response.json();

      const updatedModels = models.map(model => 
        model.id === editingModel.id ? updatedModel : model
      );
      setModels(updatedModels);

      toast({
        title: language === 'jp' ? '特徴が更新されました' : 
               language === 'ko' ? '특징이 업데이트되었습니다' : 
               language === 'en' ? 'Features updated successfully' : '特征更新成功',
      });

      setEditingModel(null);
      setIsEditing(false);
    } catch (error: any) {
      toast({
        title: language === 'jp' ? 'エラーが発生しました' : 
               language === 'ko' ? '오류가 발생했습니다' : 
               language === 'en' ? 'An error occurred' : '发生错误',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingModel(null);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">
            {language === 'jp' ? 'データを読み込み中...' : 
             language === 'ko' ? '데이터 로딩 중...' : 
             language === 'en' ? 'Loading data...' : '加载数据中...'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/auto-admin">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === 'jp' ? '戻る' : 
             language === 'ko' ? '뒤로' : 
             language === 'en' ? 'Back' : '返回'}
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-blue-600">
          {language === 'jp' ? '特徴編集' : 
           language === 'ko' ? '특징 편집' : 
           language === 'en' ? 'Features Editor' : '特征编辑'}
        </h1>
      </div>

      <div className="grid gap-6">
        {brands.map(brand => (
          <Card key={brand.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-xl">{brand.nameJp}</span>
                <Badge variant={brand.active ? 'default' : 'secondary'}>
                  {brand.active ? 
                    (language === 'jp' ? 'アクティブ' : 
                     language === 'ko' ? '활성' : 
                     language === 'en' ? 'Active' : '活跃') :
                    (language === 'jp' ? '非アクティブ' : 
                     language === 'ko' ? '비활성' : 
                     language === 'en' ? 'Inactive' : '非活跃')
                  }
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {models
                  .filter(model => model.brandId === brand.id)
                  .map(model => (
                    <div key={model.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{model.nameJp}</h3>
                          <p className="text-sm text-gray-600">{model.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={model.status === 'active' ? 'default' : 'secondary'}>
                            {model.status === 'active' ? 
                              (language === 'jp' ? 'アクティブ' : 
                               language === 'ko' ? '활성' : 
                               language === 'en' ? 'Active' : '活跃') :
                              (language === 'jp' ? '非アクティブ' : 
                               language === 'ko' ? '비활성' : 
                               language === 'en' ? 'Inactive' : '非活跃')
                            }
                          </Badge>
                          <Button
                            size="sm"
                            onClick={() => handleEditFeatures(model)}
                            disabled={isEditing}
                          >
                            ✏️ {language === 'jp' ? '編集' : 
                             language === 'ko' ? '편집' : 
                             language === 'en' ? 'Edit' : '编辑'}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700">
                            {language === 'jp' ? '基本情報 (日本語)' : 
                             language === 'ko' ? '기본 정보 (일본어)' : 
                             language === 'en' ? 'Basic Info (Japanese)' : '基本信息 (日语)'}
                          </label>
                          <div className="mt-1 p-3 bg-white rounded border text-sm min-h-[60px]">
                            {model.description.jp}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">
                            {language === 'jp' ? '基本情報 (韓国語)' : 
                             language === 'ko' ? '기본 정보 (한국어)' : 
                             language === 'en' ? 'Basic Info (Korean)' : '基本信息 (韩语)'}
                          </label>
                          <div className="mt-1 p-3 bg-white rounded border text-sm min-h-[60px]">
                            {model.description.ko}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">
                            {language === 'jp' ? '基本情報 (英語)' : 
                             language === 'ko' ? '기본 정보 (영어)' : 
                             language === 'en' ? 'Basic Info (English)' : '基本信息 (英语)'}
                          </label>
                          <div className="mt-1 p-3 bg-white rounded border text-sm min-h-[60px]">
                            {model.description.en}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700">
                            {language === 'jp' ? '基本情報 (中国語)' : 
                             language === 'ko' ? '기본 정보 (중국어)' : 
                             language === 'en' ? 'Basic Info (Chinese)' : '基本信息 (中文)'}
                          </label>
                          <div className="mt-1 p-3 bg-white rounded border text-sm min-h-[60px]">
                            {model.description.zh}
                          </div>
                        </div>
                      </div>

                      {/* 特徴 섹션 */}
                      <div className="mt-4 pt-4 border-t">
                        <h4 className="font-medium text-gray-900 mb-3">
                          {language === 'jp' ? '特徴 (技術仕様)' : 
                           language === 'ko' ? '특징 (기술 사양)' : 
                           language === 'en' ? 'Features (Technical Specs)' : '特征 (技术规格)'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700">
                              {language === 'jp' ? '特徴 (日本語)' : 
                               language === 'ko' ? '특징 (일본어)' : 
                               language === 'en' ? 'Features (Japanese)' : '特征 (日语)'}
                            </label>
                            <div className="mt-1 p-3 bg-white rounded border text-sm min-h-[60px]">
                              {model.features?.jp || "高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品"}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700">
                              {language === 'jp' ? '特徴 (韓国語)' : 
                               language === 'ko' ? '특징 (한국어)' : 
                               language === 'en' ? 'Features (Korean)' : '特征 (韩语)'}
                            </label>
                            <div className="mt-1 p-3 bg-white rounded border text-sm min-h-[60px]">
                              {model.features?.ko || "고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품"}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700">
                              {language === 'jp' ? '特徴 (英語)' : 
                               language === 'ko' ? '특징 (영어)' : 
                               language === 'en' ? 'Features (English)' : '特征 (英语)'}
                            </label>
                            <div className="mt-1 p-3 bg-white rounded border text-sm min-h-[60px]">
                              {model.features?.en || "High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified"}
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700">
                              {language === 'jp' ? '特徴 (中国語)' : 
                               language === 'ko' ? '특징 (중국어)' : 
                               language === 'en' ? 'Features (Chinese)' : '特征 (中文)'}
                            </label>
                            <div className="mt-1 p-3 bg-white rounded border text-sm min-h-[60px]">
                              {model.features?.zh || "高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Features Dialog */}
      {editingModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {language === 'jp' ? `${editingModel.nameJp} の特徴を編集` : 
                 language === 'ko' ? `${editingModel.nameJp} 특징 편집` : 
                 language === 'en' ? `Edit Features for ${editingModel.nameJp}` : `编辑 ${editingModel.nameJp} 的特征`}
              </h2>
              <Button variant="outline" size="sm" onClick={handleCancelEdit}>
                ❌
              </Button>
            </div>

            {/* 基本情報 편집 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                {language === 'jp' ? '基本情報編集' : 
                 language === 'ko' ? '기본 정보 편집' : 
                 language === 'en' ? 'Edit Basic Info' : '编辑基本信息'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'jp' ? '基本情報 (日本語)' : 
                     language === 'ko' ? '기본 정보 (일본어)' : 
                     language === 'en' ? 'Basic Info (Japanese)' : '基本信息 (日语)'}
                  </label>
                  <Textarea
                    value={editingModel.description.jp}
                    onChange={(e) => setEditingModel({
                      ...editingModel,
                      description: { ...editingModel.description, jp: e.target.value }
                    })}
                    className="mt-2"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'jp' ? '基本情報 (韓国語)' : 
                     language === 'ko' ? '기본 정보 (한국어)' : 
                     language === 'en' ? 'Basic Info (Korean)' : '基本信息 (韩语)'}
                  </label>
                  <Textarea
                    value={editingModel.description.ko}
                    onChange={(e) => setEditingModel({
                      ...editingModel,
                      description: { ...editingModel.description, ko: e.target.value }
                    })}
                    className="mt-2"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'jp' ? '基本情報 (英語)' : 
                     language === 'ko' ? '기본 정보 (영어)' : 
                     language === 'en' ? 'Basic Info (English)' : '基本信息 (英语)'}
                  </label>
                  <Textarea
                    value={editingModel.description.en}
                    onChange={(e) => setEditingModel({
                      ...editingModel,
                      description: { ...editingModel.description, en: e.target.value }
                    })}
                    className="mt-2"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'jp' ? '基本情報 (中国語)' : 
                     language === 'ko' ? '기본 정보 (중국어)' : 
                     language === 'en' ? 'Basic Info (Chinese)' : '基本信息 (中文)'}
                  </label>
                  <Textarea
                    value={editingModel.description.zh}
                    onChange={(e) => setEditingModel({
                      ...editingModel,
                      description: { ...editingModel.description, zh: e.target.value }
                    })}
                    className="mt-2"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* 特徴 편집 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                {language === 'jp' ? '特徴編集 (技術仕様)' : 
                 language === 'ko' ? '특징 편집 (기술 사양)' : 
                 language === 'en' ? 'Edit Features (Technical Specs)' : '编辑特征 (技术规格)'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'jp' ? '特徴 (日本語)' : 
                     language === 'ko' ? '특징 (일본어)' : 
                     language === 'en' ? 'Features (Japanese)' : '特征 (日语)'}
                  </label>
                  <Textarea
                    value={editingModel.features?.jp || ""}
                    onChange={(e) => setEditingModel({
                      ...editingModel,
                      features: { 
                        jp: e.target.value,
                        ko: editingModel.features?.ko || "",
                        en: editingModel.features?.en || "",
                        zh: editingModel.features?.zh || ""
                      }
                    })}
                    className="mt-2"
                    rows={4}
                    placeholder="高品質アルミニウム合金製、軽量化と強度の両立、JWL・VIA規格適合品"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'jp' ? '特徴 (韓国語)' : 
                     language === 'ko' ? '특징 (한국어)' : 
                     language === 'en' ? 'Features (Korean)' : '特征 (韩语)'}
                  </label>
                  <Textarea
                    value={editingModel.features?.ko || ""}
                    onChange={(e) => setEditingModel({
                      ...editingModel,
                      features: { 
                        jp: editingModel.features?.jp || "",
                        ko: e.target.value,
                        en: editingModel.features?.en || "",
                        zh: editingModel.features?.zh || ""
                      }
                    })}
                    className="mt-2"
                    rows={4}
                    placeholder="고품질 알루미늄 합금제, 경량화와 강도의 양립, JWL・VIA 규격 적합품"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'jp' ? '特徴 (英語)' : 
                     language === 'ko' ? '특징 (영어)' : 
                     language === 'en' ? 'Features (English)' : '特征 (英语)'}
                  </label>
                  <Textarea
                    value={editingModel.features?.en || ""}
                    onChange={(e) => setEditingModel({
                      ...editingModel,
                      features: { 
                        jp: editingModel.features?.jp || "",
                        ko: editingModel.features?.ko || "",
                        en: e.target.value,
                        zh: editingModel.features?.zh || ""
                      }
                    })}
                    className="mt-2"
                    rows={4}
                    placeholder="High-quality aluminum alloy, achieving both weight reduction and strength, JWL・VIA certified"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'jp' ? '特徴 (中国語)' : 
                     language === 'ko' ? '특징 (중국어)' : 
                     language === 'en' ? 'Features (Chinese)' : '特征 (中文)'}
                  </label>
                  <Textarea
                    value={editingModel.features?.zh || ""}
                    onChange={(e) => setEditingModel({
                      ...editingModel,
                      features: { 
                        jp: editingModel.features?.jp || "",
                        ko: editingModel.features?.ko || "",
                        en: editingModel.features?.en || "",
                        zh: e.target.value
                      }
                    })}
                    className="mt-2"
                    rows={4}
                    placeholder="高品质铝合金制，轻量化与强度的兼顾，JWL・VIA规格适合品"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={handleCancelEdit}>
                {language === 'jp' ? 'キャンセル' : 
                 language === 'ko' ? '취소' : 
                 language === 'en' ? 'Cancel' : '取消'}
              </Button>
              <Button onClick={handleSaveFeatures}>
                💾 {language === 'jp' ? '保存' : 
                 language === 'ko' ? '저장' : 
                 language === 'en' ? 'Save' : '保存'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
