import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { getTranslation } from "@/lib/i18n";
import { Menu } from "lucide-react";
import technopiaLogo from "@assets/technopia_logo.png";

export function Navigation() {
  const [location] = useLocation();
  const { language, getLanguageRoute } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'anniversary', path: '/anniversary' },
    { key: 'business', path: '/business' },
    { key: 'careers', path: '/careers' },
    { key: 'contact', path: '/contact' },
    { key: 'gallery', path: '/gallery' },
    { key: 'news', path: '/news' },
  ];

  const isActivePath = (path: string) => {
    const langPath = getLanguageRoute(path);
    return location === langPath || location.startsWith(langPath + '/');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={getLanguageRoute('/')}>
            <div className="flex items-center">
              <img 
                src={technopiaLogo} 
                alt="Technopia" 
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.key} href={getLanguageRoute(item.path)}>
                <span className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActivePath(item.path)
                    ? 'text-corporate-blue'
                    : 'text-slate-600 hover:text-corporate-blue'
                }`}>
                  {getTranslation(`nav.${item.key}`, language)}
                </span>
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.key} href={getLanguageRoute(item.path)}>
                      <span 
                        className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                          isActivePath(item.path)
                            ? 'text-corporate-blue'
                            : 'text-slate-600 hover:text-corporate-blue'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {getTranslation(`nav.${item.key}`, language)}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
