import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/i18n";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock, Printer } from "lucide-react";
import technopiaLogo from "@assets/technopia-logo_1752479241220.png";
import { useState } from "react";

export function Footer() {
  const { language, getLanguageRoute } = useLanguage();
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  const handleLinkClick = (linkKey: string) => {
    setClickedLink(linkKey);
    setTimeout(() => setClickedLink(null), 300);
  };

  const quickLinks = [
    { 
      key: 'about', 
      path: '/about',
      title: {
        jp: '会社紹介',
        ko: '회사소개',
        en: 'About Us',
        zh: '公司介绍'
      }
    },
    { 
      key: 'anniversary', 
      path: '/anniversary',
      title: {
        jp: '30周年',
        ko: '30주년',
        en: '30th Anniversary',
        zh: '30周年'
      }
    },
    { 
      key: 'business', 
      path: '/business',
      title: {
        jp: '事業紹介',
        ko: '사업소개',
        en: 'Business',
        zh: '业务介绍'
      }
    },
    { 
      key: 'medical', 
      path: '/medical',
      title: {
        jp: '－メディカル事業部',
        ko: '－메디컬 사업부',
        en: '－Medical Division',
        zh: '－医疗事业部'
      }
    },
    { 
      key: 'auto', 
      path: '/auto',
      title: {
        jp: '－AUTO事業部',
        ko: '－AUTO 사업부',
        en: '－AUTO Division',
        zh: '－汽车事业部'
      }
    },
    { 
      key: 'newbusiness', 
      path: '/newbusiness',
      title: {
        jp: '－新規事業部',
        ko: '－신규사업부',
        en: '－New Business Division',
        zh: '－新业务部'
      }
    },
    { 
      key: 'careers', 
      path: '/careers',
      title: {
        jp: '採用情報',
        ko: '채용정보',
        en: 'Careers',
        zh: '招聘信息'
      }
    },
    { 
      key: 'contact', 
      path: '/contact',
      title: {
        jp: 'お問い合わせ',
        ko: '문의하기',
        en: 'Contact',
        zh: '联系我们'
      }
    },
    { 
      key: 'news', 
      path: '/news',
      title: {
        jp: 'ニュース',
        ko: '뉴스',
        en: 'News',
        zh: '新闻'
      }
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Company Logo and Contact Info */}
          <div>
            {/* Company Logo */}
            <Link href={getLanguageRoute('/')}>
              <div className="flex items-center mb-6 hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer group">
                <img 
                  src={technopiaLogo} 
                  alt="Technopia Logo" 
                  className="h-12 w-auto mr-3 transition-transform duration-300 group-hover:rotate-3"
                />
                <h2 className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-blue-400">
                  株式会社テクノピア
                </h2>
              </div>
            </Link>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2 group cursor-pointer transition-all duration-300 hover:translate-x-1 hover:bg-slate-800/30 p-2 rounded-md -ml-2">
                <MapPin className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110" />
                <span className="text-slate-300 text-sm transition-colors duration-300 group-hover:text-white">
                  〒101-0065<br />
                  東京都千代田区西神田3-1-2 ウインド西神田ビル3F
                </span>
              </div>
              <a href="tel:03-3221-4761" className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:translate-x-1 hover:bg-slate-800/30 p-2 rounded-md -ml-2">
                <Phone className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:text-green-400 group-hover:scale-110" />
                <span className="text-slate-300 text-sm transition-colors duration-300 group-hover:text-white">03-3221-4761</span>
              </a>
              <div className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:translate-x-1 hover:bg-slate-800/30 p-2 rounded-md -ml-2">
                <Printer className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:text-orange-400 group-hover:scale-110" />
                <span className="text-slate-300 text-sm transition-colors duration-300 group-hover:text-white">03-3221-4775</span>
              </div>
              <a href="mailto:info@technopia.co.jp" className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:translate-x-1 hover:bg-slate-800/30 p-2 rounded-md -ml-2">
                <Mail className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:text-purple-400 group-hover:scale-110" />
                <span className="text-slate-300 text-sm transition-colors duration-300 group-hover:text-white">info@technopia.co.jp</span>
              </a>
            </div>
          </div>

          {/* Center: Social Media */}
          <div className="flex justify-center">
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/technopia.co.jp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 active:scale-95 hover:shadow-lg hover:shadow-blue-500/30 group overflow-hidden"
              >
                <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 bg-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute w-full h-full bg-blue-400 rounded-full opacity-0 group-active:opacity-30 scale-0 group-active:scale-150 transition-all duration-200"></span>
              </a>
              <a 
                href="https://x.com/ortho_MyEmerald" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 active:scale-95 hover:shadow-lg hover:shadow-sky-500/30 group overflow-hidden"
              >
                <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 bg-sky-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute w-full h-full bg-sky-400 rounded-full opacity-0 group-active:opacity-30 scale-0 group-active:scale-150 transition-all duration-200"></span>
              </a>
              <a 
                href="https://www.instagram.com/technopia_co_ltd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 active:scale-95 hover:shadow-lg hover:shadow-purple-500/30 group overflow-hidden"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute w-full h-full bg-purple-400 rounded-full opacity-0 group-active:opacity-30 scale-0 group-active:scale-150 transition-all duration-200"></span>
              </a>
            </div>
          </div>

          {/* Right: Quick Links */}
          <div className="flex justify-end">
            <div>
              <h4 className="text-lg font-semibold mb-6 footer-shimmer">
                {language === 'jp' && 'クイックリンク'}
                {language === 'ko' && '빠른 링크'}
                {language === 'en' && 'Quick Links'}
                {language === 'zh' && '快速链接'}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.key}>
                    <Link href={getLanguageRoute(item.path)}>
                      <span 
                        onClick={() => handleLinkClick(item.key)}
                        className={`relative text-slate-300 hover:text-white transition-all duration-300 cursor-pointer group inline-block transform hover:translate-x-2 hover:scale-105 active:scale-95 ${
                          clickedLink === item.key ? 'footer-bounce' : ''
                        }`}
                      >
                        <span className="relative z-10">{item.title[language]}</span>
                        <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transition-all duration-300 group-hover:w-full rounded-md -z-10"></span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Technopia Corporation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={getLanguageRoute('/site-policy')} className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
              {language === 'jp' && 'サイトポリシー'}
              {language === 'ko' && '사이트 정책'}
              {language === 'en' && 'Site Policy'}
              {language === 'zh' && '网站政策'}
            </Link>
            <Link href={getLanguageRoute('/privacy')} className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
              {language === 'jp' && 'プライバシーポリシー'}
              {language === 'ko' && '개인정보처리방침'}
              {language === 'en' && 'Privacy Policy'}
              {language === 'zh' && '隐私政策'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
