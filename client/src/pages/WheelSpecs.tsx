import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowLeft, Plus, Edit, Trash } from 'lucide-react';
import { Link } from 'wouter';

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
  discProtrusion: string;
  hubHeight: string;
  price: number;
  color: string;
  accessories: string;
  weight?: string;
}

const WheelSpecs: React.FC = () => {
  const { language } = useLanguage();
  
  // API에서 스펙 데이터 가져오기
  const { data: specs = [] } = useQuery({
    queryKey: ['wheelSpecs'],
    queryFn: async () => {
      const response = await fetch('/api/wheels/specs');
      if (!response.ok) throw new Error('Failed to fetch wheel specs');
      return response.json();
    }
  });
  
  const [localSpecs, setLocalSpecs] = useState<WheelSpec[]>([
    // 테스트용 초기 데이터
    {
      id: 1,
      brandId: 1,
      modelId: 1,
      brandName: "CHARITES",
      modelName: "S316",
      size: "14×4.5J",
      pcd: "100",
      holes: "4",
      inset: "45",
      discProtrusion: "9.0",
      hubHeight: "29",
      price: 21000,
      color: "ブラック&ポリッシュ",
      accessories: "ハブ、エアバルブ"
    }
  ]);

  // API 데이터가 로드되면 localSpecs 업데이트
  useEffect(() => {
    console.log('useEffect triggered', { specs, localSpecs });
    if (specs && specs.length > 0) {
      console.log('Setting localSpecs from API data:', specs);
      setLocalSpecs(specs);
    }
  }, [specs]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedModel, setSelectedModel] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingSpec, setEditingSpec] = useState<WheelSpec | null>(null);
  const [formData, setFormData] = useState<Partial<WheelSpec>>({});

  // 브랜드 목록
  const brands = [
    { id: 1, name: "CHARITES", nameJp: "カリテス" },
    { id: 2, name: "APHRODITE", nameJp: "アフロディーテ" },
    { id: 3, name: "ARTEMIS", nameJp: "アルテミス" },
    { id: 4, name: "ADONIS", nameJp: "アドニス" },
    { id: 5, name: "KASHINA", nameJp: "カシナ" },
    { id: 6, name: "LACHESIS", nameJp: "ラケシス" },
    { id: 7, name: "MUD CLIFF", nameJp: "マッドクリフ" }
  ];

  // 모델 목록
  const models = [
    { id: 1, name: "S316", brandId: 1 },
    { id: 2, name: "S416", brandId: 1 },
    { id: 3, name: "S315", brandId: 1 },
    { id: 4, name: "S10", brandId: 1 },
    { id: 10, name: "MZ", brandId: 2 },
    { id: 15, name: "NS9", brandId: 3 },
    { id: 20, name: "FV7", brandId: 5 },
    { id: 21, name: "V1", brandId: 5 },
    { id: 22, name: "XV5", brandId: 5 },
    { id: 30, name: "MUD CLIFF", brandId: 7 }
  ];

  // 필터링된 스펙 목록
  const filteredSpecs = localSpecs.filter(spec => {
    if (selectedBrand !== "all" && spec.brandName !== selectedBrand) return false;
    if (selectedModel !== "all" && spec.modelName !== selectedModel) return false;
    return true;
  });

  const handleAdd = () => {
    console.log('handleAdd called', { formData, localSpecs });
    
    // 필수 필드 검증
    const requiredFields = ['brandName', 'modelName', 'size', 'pcd', 'holes', 'price'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      console.log('Validation failed - missing fields:', missingFields);
      alert(`필수 필드를 입력해주세요: ${missingFields.join(', ')}`);
      return;
    }
    
    // price가 숫자인지 확인
    const price = typeof formData.price === 'string' ? parseInt(formData.price) : (formData.price || 0);
    if (isNaN(price) || price <= 0) {
      console.log('Invalid price:', formData.price);
      alert('올바른 가격을 입력해주세요');
      return;
    }
    
    const newSpec: WheelSpec = {
      id: localSpecs.length > 0 ? Math.max(...localSpecs.map(s => s.id)) + 1 : 1,
      brandId: formData.brandId || 1,
      modelId: formData.modelId || 1,
      brandName: formData.brandName || "",
      modelName: formData.modelName || "",
      size: formData.size || "",
      pcd: formData.pcd || "",
      holes: formData.holes || "",
      inset: formData.inset || "",
      discProtrusion: formData.discProtrusion || "",
      hubHeight: formData.hubHeight || "",
      price: price,
      color: formData.color || "",
      accessories: formData.accessories || ""
    };
    
    console.log('Adding new spec:', newSpec);
    setLocalSpecs([...localSpecs, newSpec]);
    setFormData({});
    setIsAddDialogOpen(false);
    
    // 성공 메시지
    alert('스펙이 성공적으로 추가되었습니다!');
  };

  const handleEdit = (spec: WheelSpec) => {
    setEditingSpec(spec);
    setFormData(spec);
  };

  const handleSaveEdit = () => {
    if (editingSpec && formData.brandName && formData.modelName && formData.size && formData.pcd && formData.holes && formData.price) {
      const price = typeof formData.price === 'string' ? parseInt(formData.price) : (formData.price || 0);
      setLocalSpecs(localSpecs.map(s => 
        s.id === editingSpec.id 
          ? { ...s, ...formData, price }
          : s
      ));
      setEditingSpec(null);
      setFormData({});
    }
  };

  const handleDelete = (id: number) => {
    setLocalSpecs(localSpecs.filter(s => s.id !== id));
  };

  const formatPrice = (price: number) => {
    return `¥${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/jp/auto-admin">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'jp' && '管理画面に戻る'}
              {language === 'ko' && '관리 화면으로 돌아가기'}
              {language === 'en' && 'Back to Admin Panel'}
              {language === 'zh' && '返回管理面板'}
            </Button>
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {language === 'jp' && 'ホイールスペック管理'}
            {language === 'ko' && '휠 스펙 관리'}
            {language === 'en' && 'Wheel Specs Management'}
            {language === 'zh' && '轮毂规格管理'}
          </h1>
          <p className="text-blue-200">
            {language === 'jp' && 'ホイールの詳細スペックと価格を管理します'}
            {language === 'ko' && '휠의 상세 스펙과 가격을 관리합니다'}
            {language === 'en' && 'Manage detailed wheel specifications and pricing'}
            {language === 'zh' && '管理轮毂详细规格和价格'}
          </p>
        </div>

        {/* Filters and Add Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <div>
              <Label className="text-white mb-2 block">
                {language === 'jp' && 'ブランド'}
                {language === 'ko' && '브랜드'}
                {language === 'en' && 'Brand'}
                {language === 'zh' && '品牌'}
              </Label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {language === 'jp' && 'すべて'}
                    {language === 'ko' && '전체'}
                    {language === 'en' && 'All'}
                    {language === 'zh' && '全部'}
                  </SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand.id} value={brand.name}>
                      {brand.nameJp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-white mb-2 block">
                {language === 'jp' && 'モデル'}
                {language === 'ko' && '모델'}
                {language === 'en' && 'Model'}
                {language === 'zh' && '型号'}
              </Label>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {language === 'jp' && 'すべて'}
                    {language === 'ko' && '전체'}
                    {language === 'en' && 'All'}
                    {language === 'zh' && '全部'}
                  </SelectItem>
                  {models.map(model => (
                      <SelectItem key={model.id} value={model.name}>
                      {model.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
                {language === 'jp' && 'スペック追加'}
                {language === 'ko' && '스펙 추가'}
                {language === 'en' && 'Add Spec'}
                {language === 'zh' && '添加规格'}
              </Button>
        </div>

        {/* Specs Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {language === 'jp' && 'ブランド'}
                    {language === 'ko' && '브랜드'}
                    {language === 'en' && 'Brand'}
                    {language === 'zh' && '品牌'}
                  </TableHead>
                  <TableHead>
                    {language === 'jp' && 'モデル'}
                    {language === 'ko' && '모델'}
                    {language === 'en' && 'Model'}
                    {language === 'zh' && '型号'}
                  </TableHead>
                  <TableHead>SIZE</TableHead>
                  {filteredSpecs.some(spec => spec.brandName === "MUD CLIFF") ? (
                    <>
                      <TableHead>INSET</TableHead>
                      <TableHead>H-P.C.D</TableHead>
                      <TableHead>ハブ径(Φ)</TableHead>
                      <TableHead>ハブ高(mm)</TableHead>
                      <TableHead>ディスク凸(mm)</TableHead>
                    </>
                  ) : filteredSpecs.some(spec => spec.brandName === "ARTEMIS" || spec.brandName === "APHRODITE") ? (
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
                      <TableHead>H-P.C.D</TableHead>
                      <TableHead>HOLE</TableHead>
                      <TableHead>INSET</TableHead>
                      <TableHead>ディスク凸 (mm)</TableHead>
                      <TableHead>ハブ高 (mm)</TableHead>
                    </>
                  )}
                  <TableHead>本体価格</TableHead>
                  <TableHead>
                    {language === 'jp' && '操作'}
                    {language === 'ko' && '작업'}
                    {language === 'en' && 'Actions'}
                    {language === 'zh' && '操作'}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSpecs.map((spec) => (
                  <TableRow key={spec.id}>
                    <TableCell className="font-medium">{spec.brandName}</TableCell>
                    <TableCell>{spec.modelName}</TableCell>
                    <TableCell>{spec.size}</TableCell>
                    {spec.brandName === "MUD CLIFF" ? (
                      <>
                        <TableCell>{spec.inset}</TableCell>
                        <TableCell>{spec.pcd}</TableCell>
                        <TableCell>{spec.holes}</TableCell>
                        <TableCell>{spec.hubHeight}</TableCell>
                        <TableCell>{spec.discProtrusion}</TableCell>
                      </>
                    ) : spec.brandName === "ARTEMIS" || spec.brandName === "APHRODITE" ? (
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
                        <TableCell>{spec.pcd}</TableCell>
                        <TableCell>{spec.holes}</TableCell>
                        <TableCell>{spec.inset}</TableCell>
                        <TableCell>{spec.discProtrusion}</TableCell>
                        <TableCell>{spec.hubHeight}</TableCell>
                      </>
                    )}
                    <TableCell className="font-bold text-green-600">
                      {formatPrice(spec.price)}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(spec)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(spec.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Add Spec Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                {language === 'jp' && 'スペック追加'}
                {language === 'ko' && '스펙 추가'}
                {language === 'en' && 'Add Spec'}
                {language === 'zh' && '添加规格'}
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>
                    {language === 'jp' && 'ブランド'}
                    {language === 'ko' && '브랜드'}
                    {language === 'en' && 'Brand'}
                    {language === 'zh' && '品牌'}
                  </Label>
                  <Select 
                    value={formData.brandName || ''} 
                    onValueChange={(value) => {
                      const brand = brands.find(b => b.name === value);
                      setFormData({
                        ...formData, 
                        brandName: value, 
                        brandId: brand?.id || 1,
                        modelName: '',
                        modelId: 1
                      });
                    }}
                  >
                    <SelectTrigger>
                    <SelectValue placeholder={
                      language === 'jp' ? 'ブランドを選択' :
                      language === 'ko' ? '브랜드 선택' :
                      language === 'en' ? 'Select Brand' :
                      '选择品牌'
                    } />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map(brand => (
                        <SelectItem key={brand.id} value={brand.name}>
                          {brand.nameJp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>
                    {language === 'jp' && 'モデル'}
                    {language === 'ko' && '모델'}
                    {language === 'en' && 'Model'}
                    {language === 'zh' && '型号'}
                  </Label>
                  <Select 
                    value={formData.modelName || ''} 
                    onValueChange={(value) => {
                      const model = models.find(m => m.name === value);
                      setFormData({
                        ...formData, 
                        modelName: value, 
                        modelId: model?.id || 1
                      });
                    }}
                  >
                    <SelectTrigger>
                    <SelectValue placeholder={
                      language === 'jp' ? 'モデルを選択' :
                      language === 'ko' ? '모델 선택' :
                      language === 'en' ? 'Select Model' :
                      '选择型号'
                    } />
                    </SelectTrigger>
                    <SelectContent>
                      {models
                        .filter(model => !formData.brandName || brands.find(b => b.name === formData.brandName)?.id === model.brandId)
                        .map(model => (
                          <SelectItem key={model.id} value={model.name}>
                          {model.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>SIZE</Label>
                  <Input
                    value={formData.size || ''}
                    onChange={(e) => setFormData({...formData, size: e.target.value})}
                    placeholder="14×4.5J"
                  />
                </div>
                {formData.brandName === "MUD CLIFF" ? (
                  <>
                    <div>
                      <Label>INSET</Label>
                      <Input
                        value={formData.inset || ''}
                        onChange={(e) => setFormData({...formData, inset: e.target.value})}
                        placeholder="+45"
                      />
                    </div>
                    <div>
                      <Label>H-P.C.D</Label>
                      <Input
                        value={formData.pcd || ''}
                        onChange={(e) => setFormData({...formData, pcd: e.target.value})}
                        placeholder="5-114.3"
                      />
                    </div>
                    <div>
                      <Label>ハブ径(Φ)</Label>
                      <Input
                        value={formData.holes || ''}
                        onChange={(e) => setFormData({...formData, holes: e.target.value})}
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <Label>ハブ高(mm)</Label>
                      <Input
                        value={formData.hubHeight || ''}
                        onChange={(e) => setFormData({...formData, hubHeight: e.target.value})}
                        placeholder="29.0"
                      />
                    </div>
                    <div>
                      <Label>ディスク凸(mm)</Label>
                      <Input
                        value={formData.discProtrusion || ''}
                        onChange={(e) => setFormData({...formData, discProtrusion: e.target.value})}
                        placeholder="9.0"
                      />
                    </div>
                  </>
                ) : formData.brandName === "ARTEMIS" || formData.brandName === "APHRODITE" ? (
                  <>
                    <div>
                      <Label>INSET</Label>
                      <Input
                        value={formData.inset || ''}
                        onChange={(e) => setFormData({...formData, inset: e.target.value})}
                        placeholder="+45"
                      />
                    </div>
                    <div>
                      <Label>H-P.C.D</Label>
                      <Input
                        value={formData.pcd || ''}
                        onChange={(e) => setFormData({...formData, pcd: e.target.value})}
                        placeholder="5-114.3"
                      />
                    </div>
                    <div>
                      <Label>ハブ径(Φ)</Label>
                      <Input
                        value={formData.holes || ''}
                        onChange={(e) => setFormData({...formData, holes: e.target.value})}
                        placeholder="5"
                      />
                    </div>
                    <div>
                      <Label>ハブ高(mm)</Label>
                      <Input
                        value={formData.hubHeight || ''}
                        onChange={(e) => setFormData({...formData, hubHeight: e.target.value})}
                        placeholder="30.0"
                      />
                    </div>
                    <div>
                      <Label>ディスク凸(mm)</Label>
                      <Input
                        value={formData.discProtrusion || ''}
                        onChange={(e) => setFormData({...formData, discProtrusion: e.target.value})}
                        placeholder="8.5"
                      />
                    </div>
                    <div>
                      <Label>重量</Label>
                      <Input
                        value={formData.weight || ''}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                        placeholder="6.8kg"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Label>H-P.C.D</Label>
                      <Input
                        value={formData.pcd || ''}
                        onChange={(e) => setFormData({...formData, pcd: e.target.value})}
                        placeholder="100"
                      />
                    </div>
                    <div>
                      <Label>HOLE</Label>
                      <Input
                        value={formData.holes || ''}
                        onChange={(e) => setFormData({...formData, holes: e.target.value})}
                        placeholder="4"
                      />
                    </div>
                    <div>
                      <Label>INSET</Label>
                      <Input
                        value={formData.inset || ''}
                        onChange={(e) => setFormData({...formData, inset: e.target.value})}
                        placeholder="45"
                      />
                    </div>
                    <div>
                      <Label>ディスク凸 (mm)</Label>
                      <Input
                        value={formData.discProtrusion || ''}
                        onChange={(e) => setFormData({...formData, discProtrusion: e.target.value})}
                        placeholder="9.0"
                      />
                    </div>
                    <div>
                      <Label>ハブ高 (mm)</Label>
                      <Input
                        value={formData.hubHeight || ''}
                        onChange={(e) => setFormData({...formData, hubHeight: e.target.value})}
                        placeholder="29"
                      />
                    </div>
                  </>
                )}
                <div>
                <Label>本体価格</Label>
                  <Input
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                    placeholder="21000"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  {language === 'jp' && 'キャンセル'}
                  {language === 'ko' && '취소'}
                  {language === 'en' && 'Cancel'}
                  {language === 'zh' && '取消'}
                </Button>
                <Button onClick={handleAdd}>
                  {language === 'jp' && '追加'}
                  {language === 'ko' && '추가'}
                  {language === 'en' && 'Add'}
                  {language === 'zh' && '添加'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

        {/* Edit Spec Dialog */}
        {editingSpec && (
          <Dialog open={!!editingSpec} onOpenChange={() => setEditingSpec(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {language === 'jp' && 'スペック編集'}
                  {language === 'ko' && '스펙 편집'}
                  {language === 'en' && 'Edit Spec'}
                  {language === 'zh' && '编辑规格'}
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                <Label>
                  {language === 'jp' && 'ブランド'}
                  {language === 'ko' && '브랜드'}
                  {language === 'en' && 'Brand'}
                  {language === 'zh' && '品牌'}
                </Label>
                <Select 
                  value={formData.brandName || ''} 
                  onValueChange={(value) => {
                    const brand = brands.find(b => b.name === value);
                    setFormData({
                      ...formData, 
                      brandName: value, 
                      brandId: brand?.id || 1,
                      modelName: '',
                      modelId: 1
                    });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map(brand => (
                      <SelectItem key={brand.id} value={brand.name}>
                        {brand.nameJp}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>
                  {language === 'jp' && 'モデル'}
                  {language === 'ko' && '모델'}
                  {language === 'en' && 'Model'}
                  {language === 'zh' && '型号'}
                </Label>
                <Select 
                  value={formData.modelName || ''} 
                  onValueChange={(value) => {
                    const model = models.find(m => m.name === value);
                    setFormData({
                      ...formData, 
                      modelName: value, 
                      modelId: model?.id || 1
                    });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {models
                      .filter(model => !formData.brandName || brands.find(b => b.name === formData.brandName)?.id === model.brandId)
                      .map(model => (
                        <SelectItem key={model.id} value={model.name}>
                          {model.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
                <div>
                  <Label>SIZE</Label>
                  <Input
                    value={formData.size || ''}
                    onChange={(e) => setFormData({...formData, size: e.target.value})}
                  />
                </div>
                {formData.brandName === "MUD CLIFF" ? (
                  <>
                    <div>
                      <Label>INSET</Label>
                      <Input
                        value={formData.inset || ''}
                        onChange={(e) => setFormData({...formData, inset: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>H-P.C.D</Label>
                      <Input
                        value={formData.pcd || ''}
                        onChange={(e) => setFormData({...formData, pcd: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>ハブ径(Φ)</Label>
                      <Input
                        value={formData.holes || ''}
                        onChange={(e) => setFormData({...formData, holes: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>ハブ高(mm)</Label>
                      <Input
                        value={formData.hubHeight || ''}
                        onChange={(e) => setFormData({...formData, hubHeight: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>ディスク凸(mm)</Label>
                      <Input
                        value={formData.discProtrusion || ''}
                        onChange={(e) => setFormData({...formData, discProtrusion: e.target.value})}
                      />
                    </div>
                  </>
                ) : formData.brandName === "ARTEMIS" || formData.brandName === "APHRODITE" ? (
                  <>
                    <div>
                      <Label>INSET</Label>
                      <Input
                        value={formData.inset || ''}
                        onChange={(e) => setFormData({...formData, inset: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>H-P.C.D</Label>
                      <Input
                        value={formData.pcd || ''}
                        onChange={(e) => setFormData({...formData, pcd: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>ハブ径(Φ)</Label>
                      <Input
                        value={formData.holes || ''}
                        onChange={(e) => setFormData({...formData, holes: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>ハブ高(mm)</Label>
                      <Input
                        value={formData.hubHeight || ''}
                        onChange={(e) => setFormData({...formData, hubHeight: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>ディスク凸(mm)</Label>
                      <Input
                        value={formData.discProtrusion || ''}
                        onChange={(e) => setFormData({...formData, discProtrusion: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>重量</Label>
                      <Input
                        value={formData.weight || ''}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Label>H-P.C.D</Label>
                      <Input
                        value={formData.pcd || ''}
                        onChange={(e) => setFormData({...formData, pcd: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>HOLE</Label>
                      <Input
                        value={formData.holes || ''}
                        onChange={(e) => setFormData({...formData, holes: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>INSET</Label>
                      <Input
                        value={formData.inset || ''}
                        onChange={(e) => setFormData({...formData, inset: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>ディスク凸 (mm)</Label>
                      <Input
                        value={formData.discProtrusion || ''}
                        onChange={(e) => setFormData({...formData, discProtrusion: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>ハブ高 (mm)</Label>
                      <Input
                        value={formData.hubHeight || ''}
                        onChange={(e) => setFormData({...formData, hubHeight: e.target.value})}
                      />
                    </div>
                  </>
                )}
                <div>
                  <Label>本体価格</Label>
                  <Input
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setEditingSpec(null)}>
                  {language === 'jp' && 'キャンセル'}
                  {language === 'ko' && '취소'}
                  {language === 'en' && 'Cancel'}
                  {language === 'zh' && '取消'}
                </Button>
                <Button onClick={handleSaveEdit}>
                  {language === 'jp' && '保存'}
                  {language === 'ko' && '저장'}
                  {language === 'en' && 'Save'}
                  {language === 'zh' && '保存'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default WheelSpecs; 