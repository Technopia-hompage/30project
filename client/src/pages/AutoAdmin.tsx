import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Plus, Edit, Trash2, Upload, Save, X, Settings } from 'lucide-react';
import { Link } from 'wouter';
import { toast } from '@/hooks/use-toast';

interface WheelModel {
  id?: number;
  brandId: number;
  name: string;
  nameJp?: string;
  imageUrl: string;
  specs: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  } | string;
  description?: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
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
  models?: WheelModel[];
}

interface WheelSpec {
  id: number;
  brandId: number;
  modelId: number;
  brandName: string;
  modelName: string;
  size: string;
  pcd: string;
  holes: string;
  inset: string;
  hubDiameter?: string;
  discProtrusion: string;
  hubHeight: string;
  price: number;
  color: string;
  accessories: string;
  weight?: string;
}

// API functions
const fetchWheelBrands = async (): Promise<WheelBrand[]> => {
  const response = await fetch('/api/wheels/brands');
  if (!response.ok) throw new Error('Failed to fetch wheel brands');
  return response.json();
};

const fetchWheelModels = async (brandId?: number): Promise<WheelModel[]> => {
  const params = brandId ? `?brandId=${brandId}` : '';
  const response = await fetch(`/api/wheels/models${params}`);
  if (!response.ok) throw new Error('Failed to fetch wheel models');
  return response.json();
};

const createWheelBrand = async (brand: Omit<WheelBrand, 'id'>): Promise<WheelBrand> => {
  const response = await fetch('/api/wheels/brands', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(brand),
  });
  if (!response.ok) throw new Error('Failed to create wheel brand');
  return response.json();
};

const updateWheelBrand = async (id: number, brand: Partial<WheelBrand>): Promise<WheelBrand> => {
  const response = await fetch(`/api/wheels/brands/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(brand),
  });
  if (!response.ok) throw new Error('Failed to update wheel brand');
  return response.json();
};

const deleteWheelBrand = async (id: number): Promise<void> => {
  const response = await fetch(`/api/wheels/brands/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete wheel brand');
};

const createWheelModel = async (model: Omit<WheelModel, 'id'>): Promise<WheelModel> => {
  const response = await fetch('/api/wheels/models', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(model),
  });
  if (!response.ok) throw new Error('Failed to create wheel model');
  return response.json();
};

const updateWheelModel = async (id: number, model: Partial<WheelModel>): Promise<WheelModel> => {
  const response = await fetch(`/api/wheels/models/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(model),
  });
  if (!response.ok) throw new Error('Failed to update wheel model');
  return response.json();
};

const deleteWheelModel = async (id: number): Promise<void> => {
  const response = await fetch(`/api/wheels/models/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete wheel model');
};

export function AutoAdmin() {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  
  const [editingBrand, setEditingBrand] = useState<WheelBrand | null>(null);
  const [editingModel, setEditingModel] = useState<WheelModel | null>(null);
  const [editingSpec, setEditingSpec] = useState<WheelSpec | null>(null);
  const [isAddingBrand, setIsAddingBrand] = useState(false);
  const [isAddingModel, setIsAddingModel] = useState(false);
  const [isAddingSpec, setIsAddingSpec] = useState(false);
  const [selectedBrandId, setSelectedBrandId] = useState<number>(-1);
  const [selectedModelId, setSelectedModelId] = useState<number>(-1);
  const [activeTab, setActiveTab] = useState<'brands' | 'specs'>('brands');

  // Queries
  const { data: wheelBrands = [], isLoading: brandsLoading } = useQuery({
    queryKey: ['wheelBrands'],
    queryFn: fetchWheelBrands,
  });

  const { data: wheelModels = [], isLoading: modelsLoading } = useQuery({
    queryKey: ['wheelModels', selectedBrandId],
    queryFn: () => fetchWheelModels(selectedBrandId > 0 ? selectedBrandId : undefined),
    enabled: selectedBrandId > 0,
  });

  const { data: wheelSpecs = [], isLoading: specsLoading } = useQuery({
    queryKey: ['wheelSpecs'],
    queryFn: async () => {
      console.log('Fetching wheel specs...');
      const response = await fetch('/api/wheels/specs');
      if (!response.ok) throw new Error('Failed to fetch wheel specs');
      const data = await response.json();
      console.log('Wheel specs data:', data);
      return data;
    },
  });

  // Filter specs based on selected brand and model
  const filteredSpecs = wheelSpecs.filter((spec: WheelSpec) => {
    if (selectedBrandId > 0 && spec.brandId !== selectedBrandId) return false;
    if (selectedModelId > 0 && spec.modelId !== selectedModelId) return false;
    return true;
  });

  console.log('Selected brand ID:', selectedBrandId);
  console.log('Selected model ID:', selectedModelId);
  console.log('Total specs:', wheelSpecs.length);
  console.log('Filtered specs:', filteredSpecs.length);

  // Mutations
  const createBrandMutation = useMutation({
    mutationFn: createWheelBrand,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelBrands'] });
      setEditingBrand(null);
      setIsAddingBrand(false);
      toast({
        title: language === 'jp' ? 'ブランドが作成されました' : 
              language === 'ko' ? '브랜드가 생성되었습니다' : 
              language === 'en' ? 'Brand created successfully' : '品牌创建成功',
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

  const updateBrandMutation = useMutation({
    mutationFn: ({ id, brand }: { id: number; brand: Partial<WheelBrand> }) => updateWheelBrand(id, brand),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelBrands'] });
      setEditingBrand(null);
      setIsAddingBrand(false);
      toast({
        title: language === 'jp' ? 'ブランドが更新されました' : 
              language === 'ko' ? '브랜드가 업데이트되었습니다' : 
              language === 'en' ? 'Brand updated successfully' : '品牌更新成功',
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

  const deleteBrandMutation = useMutation({
    mutationFn: deleteWheelBrand,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelBrands'] });
      toast({
        title: language === 'jp' ? 'ブランドが削除されました' : 
              language === 'ko' ? '브랜드가 삭제되었습니다' : 
              language === 'en' ? 'Brand deleted successfully' : '品牌删除成功',
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

  const createModelMutation = useMutation({
    mutationFn: createWheelModel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelModels'] });
      setEditingModel(null);
      setIsAddingModel(false);
      toast({
        title: language === 'jp' ? 'モデルが作成されました' : 
              language === 'ko' ? '모델이 생성되었습니다' : 
              language === 'en' ? 'Model created successfully' : '型号创建成功',
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

  const updateModelMutation = useMutation({
    mutationFn: ({ id, model }: { id: number; model: Partial<WheelModel> }) => updateWheelModel(id, model),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelModels'] });
      setEditingModel(null);
      setIsAddingModel(false);
      toast({
        title: language === 'jp' ? 'モデルが更新されました' : 
              language === 'ko' ? '모델이 업데이트되었습니다' : 
              language === 'en' ? 'Model updated successfully' : '型号更新成功',
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

  const deleteModelMutation = useMutation({
    mutationFn: deleteWheelModel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelModels'] });
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

  // Spec mutations
  const createSpecMutation = useMutation({
    mutationFn: async (spec: Omit<WheelSpec, 'id'>) => {
      const response = await fetch('/api/wheels/specs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec),
      });
      if (!response.ok) throw new Error('Failed to create wheel spec');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelSpecs'] });
      setEditingSpec(null);
      setIsAddingSpec(false);
      toast({
        title: language === 'jp' ? 'スペックが作成されました' : 
              language === 'ko' ? '스펙이 생성되었습니다' : 
              language === 'en' ? 'Spec created successfully' : '规格创建成功',
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

  const updateSpecMutation = useMutation({
    mutationFn: async ({ id, spec }: { id: number; spec: Partial<WheelSpec> }) => {
      const response = await fetch(`/api/wheels/specs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spec),
      });
      if (!response.ok) throw new Error('Failed to update wheel spec');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelSpecs'] });
      setEditingSpec(null);
      setIsAddingSpec(false);
      toast({
        title: language === 'jp' ? 'スペックが更新されました' : 
              language === 'ko' ? '스펙이 업데이트되었습니다' : 
              language === 'en' ? 'Spec updated successfully' : '规格更新成功',
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

  const deleteSpecMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/wheels/specs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete wheel spec');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wheelSpecs'] });
      toast({
        title: language === 'jp' ? 'スペックが削除されました' : 
              language === 'ko' ? '스펙이 삭제되었습니다' : 
              language === 'en' ? 'Spec deleted successfully' : '规格删除成功',
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

  // Event handlers
  const handleAddBrand = () => {
    const newBrand: WheelBrand = {
      name: '',
      nameJp: '',
      description: { jp: '', ko: '', en: '', zh: '' },
      active: true,
      sortOrder: 0,
    };
    setEditingBrand(newBrand);
    setIsAddingBrand(true);
  };

  const handleEditBrand = (brand: WheelBrand) => {
    setEditingBrand({ ...brand });
    setIsAddingBrand(false);
  };

  const handleSaveBrand = () => {
    if (!editingBrand) return;

    if (isAddingBrand) {
      createBrandMutation.mutate(editingBrand);
    } else if (editingBrand.id) {
      updateBrandMutation.mutate({ id: editingBrand.id, brand: editingBrand });
    }
  };

  const handleDeleteBrand = (id: number) => {
    if (confirm(language === 'jp' ? 'このブランドを削除しますか？' : 
               language === 'ko' ? '이 브랜드를 삭제하시겠습니까?' : 
               language === 'en' ? 'Are you sure you want to delete this brand?' : '确定要删除这个品牌吗？')) {
      deleteBrandMutation.mutate(id);
    }
  };

  const handleAddModel = (brandId: number) => {
    const newModel: WheelModel = {
      brandId,
      name: '',
      nameJp: '',
      imageUrl: '',
      specs: {
        jp: '',
        ko: '',
        en: '',
        zh: ''
      },
      description: {
        jp: '',
        ko: '',
        en: '',
        zh: ''
      },
      status: 'active',
      sortOrder: 0,
    };
    setEditingModel(newModel);
    setSelectedBrandId(brandId);
    setIsAddingModel(true);
  };

  const handleEditModel = (model: WheelModel) => {
    setEditingModel({ ...model });
    setSelectedBrandId(model.brandId);
    setIsAddingModel(false);
  };

  const handleSaveModel = () => {
    if (!editingModel) return;

    if (isAddingModel) {
      createModelMutation.mutate(editingModel);
    } else if (editingModel.id) {
      updateModelMutation.mutate({ id: editingModel.id, model: editingModel });
    }
  };

  const handleDeleteModel = (id: number) => {
    if (confirm(language === 'jp' ? 'このモデルを削除しますか？' : 
               language === 'ko' ? '이 모델을 삭제하시겠습니까?' : 
               language === 'en' ? 'Are you sure you want to delete this model?' : '确定要删除这个型号吗？')) {
      deleteModelMutation.mutate(id);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isModel: boolean = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 실제 구현에서는 서버에 업로드하고 URL을 받아와야 합니다
    const imageUrl = URL.createObjectURL(file);
    
    if (isModel && editingModel) {
      setEditingModel({ ...editingModel, imageUrl });
    }
  };

  // Spec event handlers
  const handleAddSpec = () => {
    const newSpec: Omit<WheelSpec, 'id'> = {
      brandId: selectedBrandId > 0 ? selectedBrandId : 1,
      modelId: selectedModelId > 0 ? selectedModelId : 1,
      brandName: '',
      modelName: '',
      size: '',
      pcd: '',
      holes: '',
      inset: '',
      discProtrusion: '',
      hubHeight: '',
      price: 0,
      color: '',
      accessories: '',
      weight: '',
    };
    setEditingSpec(newSpec as WheelSpec);
    setIsAddingSpec(true);
  };

  const handleEditSpec = (spec: WheelSpec) => {
    setEditingSpec({ ...spec });
    setIsAddingSpec(false);
  };

  const handleSaveSpec = () => {
    if (!editingSpec) return;

    if (isAddingSpec) {
      const { id, ...specData } = editingSpec;
      createSpecMutation.mutate(specData);
    } else if (editingSpec.id) {
      const { id, ...specData } = editingSpec;
      updateSpecMutation.mutate({ id: editingSpec.id, spec: specData });
    }
  };

  const handleDeleteSpec = (id: number) => {
    if (confirm(language === 'jp' ? 'このスペックを削除しますか？' : 
               language === 'ko' ? '이 스펙을 삭제하시겠습니까?' : 
               language === 'en' ? 'Are you sure you want to delete this spec?' : '确定要删除这个规格吗？')) {
      deleteSpecMutation.mutate(id);
    }
  };

  if (brandsLoading || specsLoading) {
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
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/auto">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'jp' && 'Autoページに戻る'}
                {language === 'ko' && 'Auto 페이지로 돌아가기'}
                {language === 'en' && 'Back to Auto Page'}
                {language === 'zh' && '返回Auto页面'}
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold">
                {language === 'jp' && 'Auto管理画面'}
                {language === 'ko' && 'Auto 관리 화면'}
                {language === 'en' && 'Auto Admin Panel'}
                {language === 'zh' && 'Auto管理面板'}
              </h1>
              <Link href="/jp/discontinued-wheels">
                <Button variant="outline" className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100">
                  {language === 'jp' && '生産終了ホイール管理'}
                  {language === 'ko' && '생산종료 휠 관리'}
                  {language === 'en' && 'Discontinued Wheels'}
                  {language === 'zh' && '停产轮毂管理'}
                </Button>
              </Link>
              <Link href="/jp/wheel-specs">
                <Button variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                  {language === 'jp' && 'ホイールスペック管理'}
                  {language === 'ko' && '휠 스펙 관리'}
                  {language === 'en' && 'Wheel Specs Management'}
                  {language === 'zh' && '轮毂规格管理'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <Button
            variant={activeTab === 'brands' ? 'default' : 'outline'}
            onClick={() => setActiveTab('brands')}
          >
            {language === 'jp' && 'ブランド・モデル管理'}
            {language === 'ko' && '브랜드・모델 관리'}
            {language === 'en' && 'Brands & Models'}
            {language === 'zh' && '品牌・型号管理'}
          </Button>
          <Button
            variant={activeTab === 'specs' ? 'default' : 'outline'}
            onClick={() => setActiveTab('specs')}
          >
            <Settings className="h-4 w-4 mr-2" />
            {language === 'jp' && 'スペック管理'}
            {language === 'ko' && '스펙 관리'}
            {language === 'en' && 'Specs Management'}
            {language === 'zh' && '规格管理'}
          </Button>
        </div>

        {/* Brands & Models Tab */}
        {activeTab === 'brands' && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">
                {language === 'jp' && 'ホイールブランド管理'}
                {language === 'ko' && '휠 브랜드 관리'}
                {language === 'en' && 'Wheel Brand Management'}
                {language === 'zh' && '轮毂品牌管理'}
              </h2>
              <Button onClick={handleAddBrand} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                {language === 'jp' && 'ブランド追加'}
                {language === 'ko' && '브랜드 추가'}
                {language === 'en' && 'Add Brand'}
                {language === 'zh' && '添加品牌'}
              </Button>
            </div>

            <div className="grid gap-4">
              {wheelBrands.map((brand) => (
                <Card key={brand.id} className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{brand.name} ({brand.nameJp})</h3>
                      <p className="text-gray-600">{brand.description?.jp || ''}</p>
                      <Badge variant={brand.active ? 'default' : 'secondary'} className="mt-2">
                        {brand.active ? 
                          (language === 'jp' ? 'アクティブ' : 
                           language === 'ko' ? '활성' : 
                           language === 'en' ? 'Active' : '活跃') :
                          (language === 'jp' ? '非アクティブ' : 
                           language === 'ko' ? '비활성' : 
                           language === 'en' ? 'Inactive' : '非活跃')
                        }
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditBrand(brand)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        {language === 'jp' && '編集'}
                        {language === 'ko' && '편집'}
                        {language === 'en' && 'Edit'}
                        {language === 'zh' && '编辑'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAddModel(brand.id!)}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        {language === 'jp' && 'モデル追加'}
                        {language === 'ko' && '모델 추가'}
                        {language === 'en' && 'Add Model'}
                        {language === 'zh' && '添加型号'}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteBrand(brand.id!)}
                        disabled={deleteBrandMutation.isPending}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        {language === 'jp' && '削除'}
                        {language === 'ko' && '삭제'}
                        {language === 'en' && 'Delete'}
                        {language === 'zh' && '删除'}
                      </Button>
                    </div>
                  </div>

                  {/* 모델 목록 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wheelModels
                      .filter(model => model.brandId === brand.id)
                      .map((model) => (
                      <Card key={model.id} className="p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">{model.name}</h4>
                            <p className="text-sm text-gray-600">{typeof model.specs === 'string' ? model.specs : (model.specs as any)?.jp || ''}</p>
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
                          </div>
                          <div className="flex gap-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditModel(model)}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteModel(model.id!)}
                              disabled={deleteModelMutation.isPending}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        {model.imageUrl && (
                          <img 
                            src={model.imageUrl} 
                            alt={model.name}
                            className="w-full h-24 object-cover rounded"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        )}
                      </Card>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Specs Management Tab */}
        {activeTab === 'specs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {language === 'jp' && 'ホイールスペック管理'}
                {language === 'ko' && '휠 스펙 관리'}
                {language === 'en' && 'Wheel Specs Management'}
                {language === 'zh' && '轮毂规格管理'}
              </h2>
              <Button onClick={handleAddSpec} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                {language === 'jp' && 'スペック追加'}
                {language === 'ko' && '스펙 추가'}
                {language === 'en' && 'Add Spec'}
                {language === 'zh' && '添加规格'}
              </Button>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <Select value={selectedBrandId.toString()} onValueChange={(value) => setSelectedBrandId(parseInt(value))}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={
                    language === 'jp' ? 'ブランド選択' :
                    language === 'ko' ? '브랜드 선택' :
                    language === 'en' ? 'Select Brand' : '选择品牌'
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

              <Select value={selectedModelId.toString()} onValueChange={(value) => setSelectedModelId(parseInt(value))}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={
                    language === 'jp' ? 'モデル選択' :
                    language === 'ko' ? '모델 선택' :
                    language === 'en' ? 'Select Model' : '选择型号'
                  } />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="-1">
                    {language === 'jp' ? 'すべてのモデル' :
                     language === 'ko' ? '모든 모델' :
                     language === 'en' ? 'All Models' : '所有型号'}
                  </SelectItem>
                  {wheelModels.map((model) => (
                    <SelectItem key={model.id} value={model.id!.toString()}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Specs Table */}
            <Card>
              <CardContent className="p-0">
                {specsLoading ? (
                  <div className="p-8 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">
                      {language === 'jp' ? 'スペックデータを読み込み中...' :
                       language === 'ko' ? '스펙 데이터를 로딩 중...' :
                       language === 'en' ? 'Loading specs data...' : '加载规格数据...'}
                    </p>
                  </div>
                ) : filteredSpecs.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-600">
                      {language === 'jp' ? '表示するスペックデータがありません' :
                       language === 'ko' ? '표시할 스펙 데이터가 없습니다' :
                       language === 'en' ? 'No specs data to display' : '没有规格数据可显示'}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {language === 'jp' ? 'フィルターを変更するか、新しいスペックを追加してください' :
                       language === 'ko' ? '필터를 변경하거나 새로운 스펙을 추가하세요' :
                       language === 'en' ? 'Change filters or add new specs' : '更改筛选条件或添加新规格'}
                    </p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{language === 'jp' ? 'ブランド' : language === 'ko' ? '브랜드' : language === 'en' ? 'Brand' : '品牌'}</TableHead>
                        <TableHead>{language === 'jp' ? 'モデル' : language === 'ko' ? '모델' : language === 'en' ? 'Model' : '型号'}</TableHead>
                        <TableHead>{language === 'jp' ? 'サイズ' : language === 'ko' ? '사이즈' : language === 'en' ? 'Size' : '尺寸'}</TableHead>
                        <TableHead>{language === 'jp' ? 'インセット' : language === 'ko' ? '인셋' : language === 'en' ? 'Inset' : '偏距'}</TableHead>
                        <TableHead>{language === 'jp' ? 'H-PCD' : language === 'ko' ? 'H-PCD' : language === 'en' ? 'H-PCD' : 'H-PCD'}</TableHead>
                        <TableHead>{language === 'jp' ? 'ハブ径(Φ)' : language === 'ko' ? '허브직경(Φ)' : language === 'en' ? 'Hub Diameter(Φ)' : '轮毂直径(Φ)'}</TableHead>
                        <TableHead>{language === 'jp' ? 'ハブ高(mm)' : language === 'ko' ? '허브높이(mm)' : language === 'en' ? 'Hub Height(mm)' : '轮毂高度(mm)'}</TableHead>
                        <TableHead>{language === 'jp' ? 'ディスク凸(mm)' : language === 'ko' ? '디스크볼록(mm)' : language === 'en' ? 'Disc Protrusion(mm)' : '盘凸起(mm)'}</TableHead>
                        <TableHead>{language === 'jp' ? '重量' : language === 'ko' ? '무게' : language === 'en' ? 'Weight' : '重量'}</TableHead>
                        <TableHead>{language === 'jp' ? '価格' : language === 'ko' ? '가격' : language === 'en' ? 'Price' : '价格'}</TableHead>
                        <TableHead>{language === 'jp' ? '操作' : language === 'ko' ? '작업' : language === 'en' ? 'Actions' : '操作'}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSpecs.map((spec: WheelSpec) => (
                        <TableRow key={spec.id}>
                          <TableCell>{spec.brandName}</TableCell>
                          <TableCell>{spec.modelName}</TableCell>
                          <TableCell>{spec.size}</TableCell>
                          <TableCell>{spec.inset}</TableCell>
                          <TableCell>{spec.pcd}</TableCell>
                          <TableCell>{spec.hubDiameter || "67.1"}</TableCell>
                          <TableCell>{spec.hubHeight}</TableCell>
                          <TableCell>{spec.discProtrusion}</TableCell>
                          <TableCell>{spec.weight || "-"}</TableCell>
                          <TableCell>¥{spec.price.toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEditSpec(spec)}
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDeleteSpec(spec.id)}
                                disabled={deleteSpecMutation.isPending}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* 브랜드 편집 다이얼로그 */}
        <Dialog open={!!editingBrand} onOpenChange={() => setEditingBrand(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {isAddingBrand ? 
                  (language === 'jp' ? 'ブランド追加' : 
                   language === 'ko' ? '브랜드 추가' : 
                   language === 'en' ? 'Add Brand' : '添加品牌') :
                  (language === 'jp' ? 'ブランド編集' : 
                   language === 'ko' ? '브랜드 편집' : 
                   language === 'en' ? 'Edit Brand' : '编辑品牌')
                }
              </DialogTitle>
            </DialogHeader>
            {editingBrand && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'ブランド名 (英語)' : 
                       language === 'ko' ? '브랜드명 (영어)' : 
                       language === 'en' ? 'Brand Name (English)' : '品牌名称 (英文)'}
                    </label>
                    <Input
                      value={editingBrand.name}
                      onChange={(e) => setEditingBrand({...editingBrand, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'ブランド名 (日本語)' : 
                       language === 'ko' ? '브랜드명 (일본어)' : 
                       language === 'en' ? 'Brand Name (Japanese)' : '品牌名称 (日文)'}
                    </label>
                    <Input
                      value={editingBrand.nameJp}
                      onChange={(e) => setEditingBrand({...editingBrand, nameJp: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? '説明 (日本語)' : 
                     language === 'ko' ? '설명 (일본어)' : 
                     language === 'en' ? 'Description (Japanese)' : '描述 (日文)'}
                  </label>
                                      <Textarea
                      value={editingBrand.description?.jp || ''}
                      onChange={(e) => setEditingBrand({
                        ...editingBrand, 
                        description: {...(editingBrand.description || { jp: '', ko: '', en: '', zh: '' }), jp: e.target.value}
                      })}
                    />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? '説明 (韓国語)' : 
                     language === 'ko' ? '설명 (한국어)' : 
                     language === 'en' ? 'Description (Korean)' : '描述 (韩文)'}
                  </label>
                                      <Textarea
                      value={editingBrand.description?.ko || ''}
                      onChange={(e) => setEditingBrand({
                        ...editingBrand, 
                        description: {...(editingBrand.description || { jp: '', ko: '', en: '', zh: '' }), ko: e.target.value}
                      })}
                    />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? '説明 (英語)' : 
                     language === 'ko' ? '설명 (영어)' : 
                     language === 'en' ? 'Description (English)' : '描述 (英文)'}
                  </label>
                                      <Textarea
                      value={editingBrand.description?.en || ''}
                      onChange={(e) => setEditingBrand({
                        ...editingBrand, 
                        description: {...(editingBrand.description || { jp: '', ko: '', en: '', zh: '' }), en: e.target.value}
                      })}
                    />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? '説明 (中国語)' : 
                     language === 'ko' ? '설명 (중국어)' : 
                     language === 'en' ? 'Description (Chinese)' : '描述 (中文)'}
                  </label>
                                      <Textarea
                      value={editingBrand.description?.zh || ''}
                      onChange={(e) => setEditingBrand({
                        ...editingBrand, 
                        description: {...(editingBrand.description || { jp: '', ko: '', en: '', zh: '' }), zh: e.target.value}
                      })}
                    />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setEditingBrand(null)}>
                    <X className="h-4 w-4 mr-2" />
                    {language === 'jp' ? 'キャンセル' : 
                     language === 'ko' ? '취소' : 
                     language === 'en' ? 'Cancel' : '取消'}
                  </Button>
                  <Button 
                    onClick={handleSaveBrand}
                    disabled={createBrandMutation.isPending || updateBrandMutation.isPending}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {language === 'jp' ? '保存' : 
                     language === 'ko' ? '저장' : 
                     language === 'en' ? 'Save' : '保存'}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* 모델 편집 다이얼로그 */}
        <Dialog open={!!editingModel} onOpenChange={() => setEditingModel(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {isAddingModel ? 
                  (language === 'jp' ? 'モデル追加' : 
                   language === 'ko' ? '모델 추가' : 
                   language === 'en' ? 'Add Model' : '添加型号') :
                  (language === 'jp' ? 'モデル編集' : 
                   language === 'ko' ? '모델 편집' : 
                   language === 'en' ? 'Edit Model' : '编辑型号')
                }
              </DialogTitle>
            </DialogHeader>
            {editingModel && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? 'モデル名' : 
                     language === 'ko' ? '모델명' : 
                     language === 'en' ? 'Model Name' : '型号名称'}
                  </label>
                  <Input
                    value={editingModel.name}
                    onChange={(e) => setEditingModel({...editingModel, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? 'スペック (日本語)' : 
                     language === 'ko' ? '스펙 (일본어)' : 
                     language === 'en' ? 'Specifications (Japanese)' : '规格 (日文)'}
                  </label>
                  <Input
                    value={typeof editingModel.specs === 'string' ? editingModel.specs : editingModel.specs.jp}
                    onChange={(e) => setEditingModel({
                      ...editingModel, 
                      specs: typeof editingModel.specs === 'string' 
                        ? e.target.value 
                        : { ...editingModel.specs, jp: e.target.value }
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? 'ステータス' : 
                     language === 'ko' ? '상태' : 
                     language === 'en' ? 'Status' : '状态'}
                  </label>
                  <Select
                    value={editingModel.status}
                    onValueChange={(value: 'active' | 'inactive') => 
                      setEditingModel({...editingModel, status: value})
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">
                        {language === 'jp' ? 'アクティブ' : 
                         language === 'ko' ? '활성' : 
                         language === 'en' ? 'Active' : '活跃'}
                      </SelectItem>
                      <SelectItem value="inactive">
                        {language === 'jp' ? '非アクティブ' : 
                         language === 'ko' ? '비활성' : 
                         language === 'en' ? 'Inactive' : '非活跃'}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? '画像URL' : 
                     language === 'ko' ? '이미지 URL' : 
                     language === 'en' ? 'Image URL' : '图片URL'}
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      value={editingModel.imageUrl}
                      onChange={(e) => setEditingModel({...editingModel, imageUrl: e.target.value})}
                      placeholder="/images/wheel/model-name.jpg"
                    />
                    <Button variant="outline" size="sm" asChild>
                      <label>
                        <Upload className="h-4 w-4" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, true)}
                        />
                      </label>
                    </Button>
                  </div>
                  {editingModel.imageUrl && (
                    <img 
                      src={editingModel.imageUrl} 
                      alt="Preview"
                      className="w-full h-32 object-cover rounded mt-2"
                    />
                  )}
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setEditingModel(null)}>
                    <X className="h-4 w-4 mr-2" />
                    {language === 'jp' ? 'キャンセル' : 
                     language === 'ko' ? '취소' : 
                     language === 'en' ? 'Cancel' : '取消'}
                  </Button>
                  <Button 
                    onClick={handleSaveModel}
                    disabled={createModelMutation.isPending || updateModelMutation.isPending}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {language === 'jp' ? '保存' : 
                     language === 'ko' ? '저장' : 
                     language === 'en' ? 'Save' : '保存'}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Spec Edit Dialog */}
        <Dialog open={!!editingSpec} onOpenChange={() => setEditingSpec(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {isAddingSpec ? 
                  (language === 'jp' ? 'スペック追加' : 
                   language === 'ko' ? '스펙 추가' : 
                   language === 'en' ? 'Add Spec' : '添加规格') :
                  (language === 'jp' ? 'スペック編集' : 
                   language === 'ko' ? '스펙 편집' : 
                   language === 'en' ? 'Edit Spec' : '编辑规格')
                }
              </DialogTitle>
            </DialogHeader>
            {editingSpec && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'ブランド名' : 
                       language === 'ko' ? '브랜드명' : 
                       language === 'en' ? 'Brand Name' : '品牌名称'}
                    </label>
                    <Input
                      value={editingSpec.brandName}
                      onChange={(e) => setEditingSpec({...editingSpec, brandName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'モデル名' : 
                       language === 'ko' ? '모델명' : 
                       language === 'en' ? 'Model Name' : '型号名称'}
                    </label>
                    <Input
                      value={editingSpec.modelName}
                      onChange={(e) => setEditingSpec({...editingSpec, modelName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'サイズ' : 
                       language === 'ko' ? '사이즈' : 
                       language === 'en' ? 'Size' : '尺寸'}
                    </label>
                    <Input
                      value={editingSpec.size}
                      onChange={(e) => setEditingSpec({...editingSpec, size: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'H-PCD' : 
                       language === 'ko' ? 'H-PCD' : 
                       language === 'en' ? 'H-PCD' : 'H-PCD'}
                    </label>
                    <Input
                      value={editingSpec.pcd}
                      onChange={(e) => setEditingSpec({...editingSpec, pcd: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? '穴数' : 
                       language === 'ko' ? '구멍 수' : 
                       language === 'en' ? 'Holes' : '孔数'}
                    </label>
                    <Input
                      value={editingSpec.holes}
                      onChange={(e) => setEditingSpec({...editingSpec, holes: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'インセット' : 
                       language === 'ko' ? '인셋' : 
                       language === 'en' ? 'Inset' : '偏距'}
                    </label>
                    <Input
                      value={editingSpec.inset}
                      onChange={(e) => setEditingSpec({...editingSpec, inset: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'ディスク突出' : 
                       language === 'ko' ? '디스크 돌출' : 
                       language === 'en' ? 'Disc Protrusion' : '盘面突出'}
                    </label>
                    <Input
                      value={editingSpec.discProtrusion}
                      onChange={(e) => setEditingSpec({...editingSpec, discProtrusion: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? 'ハブ高さ' : 
                       language === 'ko' ? '허브 높이' : 
                       language === 'en' ? 'Hub Height' : '轮毂高度'}
                    </label>
                    <Input
                      value={editingSpec.hubHeight}
                      onChange={(e) => setEditingSpec({...editingSpec, hubHeight: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? '価格' : 
                       language === 'ko' ? '가격' : 
                       language === 'en' ? 'Price' : '价格'}
                    </label>
                    <Input
                      type="number"
                      value={editingSpec.price}
                      onChange={(e) => setEditingSpec({...editingSpec, price: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'jp' ? '重量' : 
                       language === 'ko' ? '무게' : 
                       language === 'en' ? 'Weight' : '重量'}
                    </label>
                    <Input
                      value={editingSpec.weight || ''}
                      onChange={(e) => setEditingSpec({...editingSpec, weight: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? 'カラー' : 
                     language === 'ko' ? '컬러' : 
                     language === 'en' ? 'Color' : '颜色'}
                  </label>
                  <Input
                    value={editingSpec.color}
                    onChange={(e) => setEditingSpec({...editingSpec, color: e.target.value})}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    {language === 'jp' ? 'アクセサリー' : 
                     language === 'ko' ? '액세서리' : 
                     language === 'en' ? 'Accessories' : '配件'}
                  </label>
                  <Textarea
                    value={editingSpec.accessories}
                    onChange={(e) => setEditingSpec({...editingSpec, accessories: e.target.value})}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setEditingSpec(null)}>
                    <X className="h-4 w-4 mr-2" />
                    {language === 'jp' ? 'キャンセル' : 
                     language === 'ko' ? '취소' : 
                     language === 'en' ? 'Cancel' : '取消'}
                  </Button>
                  <Button 
                    onClick={handleSaveSpec}
                    disabled={createSpecMutation.isPending || updateSpecMutation.isPending}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {language === 'jp' ? '保存' : 
                     language === 'ko' ? '저장' : 
                     language === 'en' ? 'Save' : '保存'}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 