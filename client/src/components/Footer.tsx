import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/i18n";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  const { language, getLanguageRoute } = useLanguage();

  const quickLinks = [
    { key: 'about', path: '/about' },
    { key: 'anniversary', path: '/anniversary' },
    { key: 'business', path: '/business' },
    { key: 'careers', path: '/careers' },
    { key: 'contact', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={getLanguageRoute('/')}>
              <div className="h-8 w-32 bg-white rounded flex items-center justify-center text-slate-900 text-sm font-bold mb-6">
                GlobalCorp
              </div>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              {language === 'jp' && '30年の経験と信頼で、グローバルに革新的なソリューションを提供し続けています。'}
              {language === 'ko' && '30년의 경험과 신뢰로 글로벌하게 혁신적인 솔루션을 지속적으로 제공하고 있습니다.'}
              {language === 'en' && 'With 30 years of experience and trust, we continue to provide innovative solutions globally.'}
              {language === 'zh' && '凭借30年的经验和信任，我们持续在全球范围内提供创新解决方案。'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'jp' && 'クイックリンク'}
              {language === 'ko' && '빠른 링크'}
              {language === 'en' && 'Quick Links'}
              {language === 'zh' && '快速链接'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.key}>
                  <Link href={getLanguageRoute(item.path)}>
                    <span className="text-slate-300 hover:text-white transition-colors duration-200">
                      {getTranslation(`nav.${item.key}`, language)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'jp' && 'お問い合わせ先'}
              {language === 'ko' && '연락처'}
              {language === 'en' && 'Contact Info'}
              {language === 'zh' && '联系信息'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  {language === 'jp' && '〒100-0001\n東京都千代田区千代田1-1-1\nグローバルタワー 30F'}
                  {language === 'ko' && '〒100-0001\n도쿄도 치요다구 치요다1-1-1\n글로벌 타워 30F'}
                  {language === 'en' && '〒100-0001\n1-1-1 Chiyoda, Chiyoda-ku, Tokyo\nGlobal Tower 30F'}
                  {language === 'zh' && '〒100-0001\n东京都千代田区千代田1-1-1\n全球大厦 30F'}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300 text-sm">03-1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300 text-sm">info@globalcorp.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300 text-sm">
                  {language === 'jp' && '平日 9:00 - 18:00'}
                  {language === 'ko' && '평일 9:00 - 18:00'}
                  {language === 'en' && 'Weekdays 9:00 - 18:00'}
                  {language === 'zh' && '工作日 9:00 - 18:00'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 GlobalCorp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
              {language === 'jp' && '利用規約'}
              {language === 'ko' && '이용약관'}
              {language === 'en' && 'Terms of Service'}
              {language === 'zh' && '使用条款'}
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
              {language === 'jp' && 'プライバシーポリシー'}
              {language === 'ko' && '개인정보처리방침'}
              {language === 'en' && 'Privacy Policy'}
              {language === 'zh' && '隐私政策'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
