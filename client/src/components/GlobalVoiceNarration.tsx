import { useState, useEffect } from 'react';
import { VoiceNarrationButton } from '@/components/VoiceNarrationButton';
import { useLanguage } from '@/hooks/useLanguage';
import { useVoiceNarration } from '@/hooks/useVoiceNarration';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Settings, Volume2, VolumeX } from 'lucide-react';

interface GlobalVoiceNarrationProps {
  className?: string;
}

export function GlobalVoiceNarration({ className = '' }: GlobalVoiceNarrationProps) {
  const { language } = useLanguage();
  const { isSupported, isPlaying, stop } = useVoiceNarration();
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Load saved preference from localStorage
    const saved = localStorage.getItem('voice-narration-enabled');
    setIsEnabled(saved === 'true');
  }, []);

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('voice-narration-enabled', isEnabled.toString());
  }, [isEnabled]);

  if (!isSupported) {
    return null;
  }

  const getPageContent = () => {
    // Get the main content of the current page
    const mainContent = document.querySelector('main, .main-content, article, .content');
    if (mainContent) {
      return mainContent.textContent || '';
    }
    
    // Fallback to body content but exclude navigation and footer
    const body = document.body.cloneNode(true) as HTMLElement;
    const elementsToRemove = body.querySelectorAll('nav, header, footer, .navigation, .header, .footer, script, style');
    elementsToRemove.forEach(el => el.remove());
    
    return body.textContent || '';
  };

  const handleReadPage = () => {
    const content = getPageContent();
    return content.trim();
  };

  const handleToggleGlobal = () => {
    setIsEnabled(!isEnabled);
    if (isPlaying) {
      stop();
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={isEnabled ? "default" : "outline"}
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all duration-200 rounded-full h-14 w-14 p-0"
          >
            {isEnabled && isPlaying ? (
              <VolumeX className="h-6 w-6" />
            ) : (
              <Volume2 className="h-6 w-6" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 mb-2">
          <DropdownMenuLabel>
            {language === 'jp' && '音声読み上げ'}
            {language === 'ko' && '음성 읽기'}
            {language === 'en' && 'Voice Narration'}
            {language === 'zh' && '语音朗读'}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={handleToggleGlobal}>
            <Settings className="mr-2 h-4 w-4" />
            {isEnabled ? (
              language === 'jp' ? '無効にする' :
              language === 'ko' ? '비활성화' :
              language === 'en' ? 'Disable' : '禁用'
            ) : (
              language === 'jp' ? '有効にする' :
              language === 'ko' ? '활성화' :
              language === 'en' ? 'Enable' : '启用'
            )}
          </DropdownMenuItem>

          {isEnabled && (
            <>
              <DropdownMenuSeparator />
              <div className="p-2">
                <div className="text-sm text-slate-600 mb-2">
                  {language === 'jp' && 'ページ全体を読み上げ'}
                  {language === 'ko' && '전체 페이지 읽기'}
                  {language === 'en' && 'Read entire page'}
                  {language === 'zh' && '朗读整个页面'}
                </div>
                <div className="flex justify-center">
                  <VoiceNarrationButton
                    text={getPageContent()}
                    language={language}
                    variant="outline"
                    size="sm"
                  />
                </div>
              </div>
            </>
          )}

          {isPlaying && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={stop} className="text-red-600">
                <VolumeX className="mr-2 h-4 w-4" />
                {language === 'jp' && '停止'}
                {language === 'ko' && '정지'}
                {language === 'en' && 'Stop'}
                {language === 'zh' && '停止'}
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}