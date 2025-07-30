import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Building, Activity, Car, Briefcase, FileText, Bell, Eye } from 'lucide-react';

export function Sitemap() {
  const { language } = useLanguage();

  const sitemapData = {
    corporate: {
      title: {
        jp: '企業情報',
        ko: '기업정보',
        en: 'Corporate Information',
        zh: '企业信息'
      },
      items: [
        {
          name: {
            jp: '企業概要',
            ko: '기업개요',
            en: 'Company Overview',
            zh: '企业概况'
          },
          path: '/about',
          icon: Building
        },
        {
          name: {
            jp: '30周年記念',
            ko: '30주년 기념',
            en: '30th Anniversary',
            zh: '30周年纪念'
          },
          path: '/anniversary',
          icon: FileText
        },
        {
          name: {
            jp: '企業理念',
            ko: '기업이념',
            en: 'Corporate Philosophy',
            zh: '企业理念'
          },
          path: '/about',
          icon: FileText
        },
        {
          name: {
            jp: '中途採用情報',
            ko: '중도채용정보',
            en: 'Career Opportunities',
            zh: '招聘信息'
          },
          path: '/careers',
          icon: Briefcase
        },
        {
          name: {
            jp: 'お知らせ',
            ko: '공지사항',
            en: 'News',
            zh: '新闻'
          },
          path: '/news',
          icon: Bell
        },
        {
          name: {
            jp: 'お問い合わせ',
            ko: '문의하기',
            en: 'Contact Us',
            zh: '联系我们'
          },
          path: '/contact',
          icon: FileText
        },
        {
          name: {
            jp: 'ギャラリー',
            ko: '갤러리',
            en: 'Gallery',
            zh: '画廊'
          },
          path: '/gallery',
          icon: Eye
        },
        {
          name: {
            jp: 'サイトポリシー',
            ko: '사이트정책',
            en: 'Site Policy',
            zh: '网站政策'
          },
          path: '/site-policy',
          icon: FileText
        },
        {
          name: {
            jp: 'プライバシーポリシー',
            ko: '개인정보처리방침',
            en: 'Privacy Policy',
            zh: '隐私政策'
          },
          path: '/privacy',
          icon: Eye
        }
      ]
    },
    medical: {
      title: {
        jp: 'メディカル事業部',
        ko: '메디컬사업부',
        en: 'Medical Division',
        zh: '医疗事业部'
      },
      items: [
        {
          name: {
            jp: 'メディカル事業部概要',
            ko: '메디컬사업부개요',
            en: 'Medical Division Overview',
            zh: '医疗事业部概况'
          },
          path: '/medical',
          icon: Activity
        },
        {
          name: {
            jp: '学会情報',
            ko: '학회정보',
            en: 'Conference Information',
            zh: '学会信息'
          },
          path: '/medical/conference-info',
          icon: FileText
        },
        {
          name: {
            jp: '取得認証一覧',
            ko: '취득인증일람',
            en: 'Certifications & Licenses',
            zh: '取得认证一览'
          },
          path: '/medical/certifications',
          icon: FileText
        }
      ]
    },
    auto: {
      title: {
        jp: 'AUTO事業部',
        ko: 'AUTO사업부',
        en: 'AUTO Division',
        zh: 'AUTO事业部'
      },
      items: [
        {
          name: {
            jp: 'AUTO事業部概要',
            ko: 'AUTO사업부개요',
            en: 'AUTO Division Overview',
            zh: 'AUTO事业部概况'
          },
          path: '/auto',
          icon: Car
        },
        {
          name: {
            jp: 'ブランド一覧',
            ko: '브랜드 목록',
            en: 'Brand List',
            zh: '品牌列表'
          },
          path: '/auto',
          icon: Car
        },
        {
          name: {
            jp: 'カリテス (CHARITES)',
            ko: '카리테스 (CHARITES)',
            en: 'CHARITES',
            zh: '卡里特斯 (CHARITES)'
          },
          path: '/auto/brand/1',
          icon: Car
        },
        {
          name: {
            jp: 'アフロディーテ (APHRODITE)',
            ko: '아프로디테 (APHRODITE)',
            en: 'APHRODITE',
            zh: '阿芙罗狄蒂 (APHRODITE)'
          },
          path: '/auto/brand/2',
          icon: Car
        },
        {
          name: {
            jp: 'アルテミス (ARTEMIS)',
            ko: '아르테미스 (ARTEMIS)',
            en: 'ARTEMIS',
            zh: '阿尔忒弥斯 (ARTEMIS)'
          },
          path: '/auto/brand/3',
          icon: Car
        },
        {
          name: {
            jp: 'カシナ (KASHINA)',
            ko: '카시나 (KASHINA)',
            en: 'KASHINA',
            zh: '卡西纳 (KASHINA)'
          },
          path: '/auto/brand/4',
          icon: Car
        },
        {
          name: {
            jp: 'マッドクリフ (MUD CLIFF)',
            ko: '머드클리프 (MUD CLIFF)',
            en: 'MUD CLIFF',
            zh: '泥崖 (MUD CLIFF)'
          },
          path: '/auto/brand/5',
          icon: Car
        },
        {
          name: {
            jp: 'ラケシス (LACHESIS)',
            ko: '라케시스 (LACHESIS)',
            en: 'LACHESIS',
            zh: '拉克西斯 (LACHESIS)'
          },
          path: '/auto/brand/6',
          icon: Car
        },
        {
          name: {
            jp: 'アドニス (ADONIS)',
            ko: '아도니스 (ADONIS)',
            en: 'ADONIS',
            zh: '阿多尼斯 (ADONIS)'
          },
          path: '/auto/brand/7',
          icon: Car
        },
        {
          name: {
            jp: '生産終了ホイール',
            ko: '생산종료 휠',
            en: 'Discontinued Wheels',
            zh: '停产轮毂'
          },
          path: '/auto',
          icon: Car
        }
      ]
    },
    newBusiness: {
      title: {
        jp: '新規事業部',
        ko: '신규사업부',
        en: 'New Business Division',
        zh: '新业务事业部'
      },
      items: [
        {
          name: {
            jp: '新規事業部概要',
            ko: '신규사업부개요',
            en: 'New Business Division Overview',
            zh: '新业务事业部概况'
          },
          path: '/new-business',
          icon: Briefcase
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'jp' && 'サイトマップ'}
              {language === 'ko' && '사이트맵'}
              {language === 'en' && 'Sitemap'}
              {language === 'zh' && '网站地图'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === 'jp' && '弊社のサイトの閲覧にお役立てください'}
              {language === 'ko' && '저희 사이트의 이용에 도움이 되시기 바랍니다'}
              {language === 'en' && 'Please use this to help you navigate our website'}
              {language === 'zh' && '请使用此网站地图帮助您浏览我们的网站'}
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Corporate Information */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {sitemapData.corporate.title[language]}
                  </h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.corporate.items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link key={index} href={`/${language}${item.path}`}>
                        <div className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 cursor-pointer group">
                          <IconComponent className="h-5 w-5 text-slate-400 mr-3 group-hover:text-blue-600 transition-colors duration-200" />
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                            {item.name[language]}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Medical Division */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {sitemapData.medical.title[language]}
                  </h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.medical.items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link key={index} href={`/${language}${item.path}`}>
                        <div className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 cursor-pointer group">
                          <IconComponent className="h-5 w-5 text-slate-400 mr-3 group-hover:text-green-600 transition-colors duration-200" />
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                            {item.name[language]}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* AUTO Division */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {sitemapData.auto.title[language]}
                  </h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.auto.items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link key={index} href={`/${language}${item.path}`}>
                        <div className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 cursor-pointer group">
                          <IconComponent className="h-5 w-5 text-slate-400 mr-3 group-hover:text-blue-600 transition-colors duration-200" />
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                            {item.name[language]}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* New Business Division */}
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {sitemapData.newBusiness.title[language]}
                  </h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.newBusiness.items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link key={index} href={`/${language}${item.path}`}>
                        <div className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 cursor-pointer group">
                          <IconComponent className="h-5 w-5 text-slate-400 mr-3 group-hover:text-purple-600 transition-colors duration-200" />
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                            {item.name[language]}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>
    </div>
  );
} 