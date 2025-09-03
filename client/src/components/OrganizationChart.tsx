import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { Building2, User, Users, Briefcase } from "lucide-react";

interface Position {
  id: string;
  title: {
    jp: string;
    ko: string;
    en: string;
    zh: string;
  };
  name?: string;
  level: number;
  parent?: string;
  type: 'executive' | 'department' | 'division' | 'unit';
  members?: number;
}

const organizationData: Position[] = [
  {
    id: 'ceo',
    title: {
      jp: '代表取締役社長',
      ko: '대표이사 사장',
      en: 'CEO & President',
      zh: '代表董事社长'
    },
    level: 0,
    type: 'executive'
  },
  {
    id: 'business-dept',
    title: {
      jp: '事業部門',
      ko: '사업부문',
      en: 'Business Department',
      zh: '事业部门'
    },
    level: 1,
    parent: 'ceo',
    type: 'department'
  },
  {
    id: 'admin-dept',
    title: {
      jp: '管理部門',
      ko: '관리부문',
      en: 'Administration Department',
      zh: '管理部门'
    },
    level: 1,
    parent: 'ceo',
    type: 'department'
  },
  {
    id: 'medical-dept',
    title: {
      jp: 'メディカル事業本部',
      ko: '메디컬 사업본부',
      en: 'Medical Business Division',
      zh: '医疗事业本部'
    },
    level: 2,
    parent: 'business-dept',
    type: 'division'
  },
  {
    id: 'auto-dept',
    title: {
      jp: 'AUTO事業本部',
      ko: 'AUTO 사업본부',
      en: 'AUTO Business Division',
      zh: 'AUTO事业本部'
    },
    level: 2,
    parent: 'business-dept',
    type: 'division'
  },
  {
    id: 'management-dept',
    title: {
      jp: '管理本部',
      ko: '관리본부',
      en: 'Management Division',
      zh: '管理本部'
    },
    level: 2,
    parent: 'admin-dept',
    type: 'division'
  },
  {
    id: 'business-strategy',
    title: {
      jp: '営業企画部',
      ko: '영업기획부',
      en: 'Business Strategy Department',
      zh: '营业企划部'
    },
    level: 2,
    parent: 'admin-dept',
    type: 'division'
  },
  // Medical units
  {
    id: 'medical-planning',
    title: {
      jp: 'メディカル営業部',
      ko: '메디컬 영업부',
      en: 'Medical Sales Unit',
      zh: '医疗营业部'
    },
    level: 3,
    parent: 'medical-dept',
    type: 'unit',
    members: 8
  },
  {
    id: 'medical-management',
    title: {
      jp: 'メディカル管理部',
      ko: '메디컬 관리부',
      en: 'Medical Management Unit',
      zh: '医疗管理部'
    },
    level: 3,
    parent: 'medical-dept',
    type: 'unit',
    members: 5
  },
  // AUTO units
  {
    id: 'wheel-dept',
    title: {
      jp: 'ホイール事業部',
      ko: '휠 사업부',
      en: 'Wheel Business Unit',
      zh: '轮毂事业部'
    },
    level: 3,
    parent: 'auto-dept',
    type: 'unit',
    members: 12
  },
  {
    id: 'parts-dept',
    title: {
      jp: 'カー用品部',
      ko: '자동차용품부',
      en: 'Car Parts Unit',
      zh: '汽车用品部'
    },
    level: 3,
    parent: 'auto-dept',
    type: 'unit',
    members: 6
  },
  // Management units
  {
    id: 'accounting',
    title: {
      jp: '会計部',
      ko: '회계부',
      en: 'Accounting Unit',
      zh: '会计部'
    },
    level: 3,
    parent: 'management-dept',
    type: 'unit',
    members: 4
  },
  {
    id: 'general-affairs',
    title: {
      jp: '総務部',
      ko: '총무부',
      en: 'General Affairs Unit',
      zh: '总务部'
    },
    level: 3,
    parent: 'management-dept',
    type: 'unit',
    members: 3
  },
  // Business strategy units
  {
    id: 'business-planning',
    title: {
      jp: '営業企画部',
      ko: '영업기획부',
      en: 'Sales Planning Unit',
      zh: '营业企划部'
    },
    level: 3,
    parent: 'business-strategy',
    type: 'unit',
    members: 5
  },
  {
    id: 'new-business',
    title: {
      jp: '新規開拓部',
      ko: '신규개척부',
      en: 'New Business Development Unit',
      zh: '新业务开拓部'
    },
    level: 3,
    parent: 'business-strategy',
    type: 'unit',
    members: 4
  }
];

export function OrganizationChart() {
  const { language } = useLanguage();

  const getPositionsByLevel = (level: number) => {
    return organizationData.filter(pos => pos.level === level);
  };

  const getChildPositions = (parentId: string) => {
    return organizationData.filter(pos => pos.parent === parentId);
  };

  const getPositionColor = (type: string) => {
    switch (type) {
      case 'executive':
        return 'bg-gradient-to-r from-blue-600 to-blue-700 text-white';
      case 'department':
        return 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white';
      case 'division':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white';
      case 'unit':
        return 'bg-gradient-to-r from-emerald-500 to-green-500 text-white';
      default:
        return 'bg-slate-100 text-slate-900';
    }
  };

  const getPositionIcon = (type: string) => {
    switch (type) {
      case 'executive':
        return <User className="h-5 w-5" />;
      case 'department':
        return <Building2 className="h-4 w-4" />;
      case 'division':
        return <Briefcase className="h-4 w-4" />;
      case 'unit':
        return <Users className="h-4 w-4" />;
      default:
        return <Building2 className="h-4 w-4" />;
    }
  };

  const PositionCard = ({ position }: { position: Position }) => (
    <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border hover:border-blue-300 bg-white">
      <CardContent className="p-3">
        <div className={`${getPositionColor(position.type)} rounded-lg p-3 text-center relative overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-white/20"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-2">
              {getPositionIcon(position.type)}
            </div>
            <h3 className="font-semibold text-xs leading-tight mb-1">
              {position.title[language as keyof typeof position.title]}
            </h3>
            {position.members && (
              <Badge variant="secondary" className="mt-1 text-xs bg-white/90 text-slate-700">
                {position.members}
                {language === 'jp' && '名'}
                {language === 'ko' && '명'}
                {language === 'en' && ' members'}
                {language === 'zh' && '名'}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-slate-600 text-sm">
          {language === 'jp' && 'テクノピア企業の組織構造'}
          {language === 'ko' && '테크노피아 기업의 조직 구조'}
          {language === 'en' && 'Technopia Corporate Structure'}
          {language === 'zh' && '技术乌托邦企业组织结构'}
        </p>
      </div>

      {/* CEO Level */}
      <div className="flex justify-center mb-6">
        <div className="w-56">
          <PositionCard position={getPositionsByLevel(0)[0]} />
        </div>
      </div>

      {/* Connection Lines */}
      <div className="flex justify-center mb-4">
        <div className="w-px h-6 bg-slate-400"></div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="w-48 h-px bg-slate-400"></div>
      </div>

      {/* Department Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
        {getPositionsByLevel(1).map((position, index) => (
          <div key={position.id} className="space-y-4 relative">
            {/* Vertical connector from CEO */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-4 bg-slate-400 -mt-4"></div>
            
            <PositionCard position={position} />
            
            {/* Connection line down */}
            <div className="flex justify-center">
              <div className="w-px h-4 bg-slate-400"></div>
            </div>

            {/* Division Level */}
            <div className="grid gap-3">
              {getChildPositions(position.id).map((division) => (
                <div key={division.id} className="space-y-3">
                  <PositionCard position={division} />
                  
                  {/* Units under this division */}
                  {getChildPositions(division.id).length > 0 && (
                    <>
                      <div className="flex justify-center">
                        <div className="w-px h-3 bg-slate-400"></div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {getChildPositions(division.id).map((unit) => (
                          <PositionCard key={unit.id} position={unit} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 border-t border-slate-200 pt-4">
        <h4 className="text-base font-semibold text-slate-800 mb-3 text-center">
          {language === 'jp' && '凡例'}
          {language === 'ko' && '범례'}
          {language === 'en' && 'Legend'}
          {language === 'zh' && '图例'}
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 border">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded"></div>
            <span className="text-xs text-slate-600">
              {language === 'jp' && '経営陣'}
              {language === 'ko' && '경영진'}
              {language === 'en' && 'Executive'}
              {language === 'zh' && '管理层'}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 border">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded"></div>
            <span className="text-xs text-slate-600">
              {language === 'jp' && '部門'}
              {language === 'ko' && '부문'}
              {language === 'en' && 'Department'}
              {language === 'zh' && '部门'}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 border">
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded"></div>
            <span className="text-xs text-slate-600">
              {language === 'jp' && '事業部'}
              {language === 'ko' && '사업부'}
              {language === 'en' && 'Division'}
              {language === 'zh' && '事业部'}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 border">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded"></div>
            <span className="text-xs text-slate-600">
              {language === 'jp' && '과・계'}
              {language === 'ko' && '과・계'}
              {language === 'en' && 'Unit'}
              {language === 'zh' && '科・组'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}