import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { 
  Volume2, 
  VolumeX, 
  Pause, 
  Play, 
  Settings,
  Speaker 
} from 'lucide-react';
import { useVoiceNarration } from '@/hooks/useVoiceNarration';
import { Slider } from '@/components/ui/slider';

interface VoiceNarrationButtonProps {
  text: string;
  language: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function VoiceNarrationButton({
  text,
  language,
  variant = 'outline',
  size = 'sm',
  className = ''
}: VoiceNarrationButtonProps) {
  const { 
    isSupported, 
    isPlaying, 
    isPaused, 
    toggle, 
    stop,
    getVoiceForLanguage,
    voices
  } = useVoiceNarration();

  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(1.0);

  if (!isSupported) {
    return null;
  }

  const handleToggle = () => {
    toggle(text, language, { rate, pitch, volume });
  };

  const handleStop = () => {
    stop();
  };

  const getButtonIcon = () => {
    if (isPlaying && !isPaused) {
      return <Pause className="h-4 w-4" />;
    } else if (isPlaying && isPaused) {
      return <Play className="h-4 w-4" />;
    } else {
      return <Volume2 className="h-4 w-4" />;
    }
  };

  const getTooltipText = () => {
    const languageNames = {
      'jp': '日本語',
      'ko': '한국어',
      'en': 'English',
      'zh': '中文'
    };

    if (isPlaying && !isPaused) {
      return language === 'jp' ? '一時停止' :
             language === 'ko' ? '일시정지' :
             language === 'en' ? 'Pause' : '暂停';
    } else if (isPlaying && isPaused) {
      return language === 'jp' ? '再生' :
             language === 'ko' ? '재생' :
             language === 'en' ? 'Resume' : '继续';
    } else {
      const langName = languageNames[language as keyof typeof languageNames] || 'English';
      return language === 'jp' ? `音声読み上げ (${langName})` :
             language === 'ko' ? `음성 읽기 (${langName})` :
             language === 'en' ? `Voice narration (${langName})` : 
             `语音朗读 (${langName})`;
    }
  };

  const selectedVoice = getVoiceForLanguage(language);

  return (
    <TooltipProvider>
      <div className={`flex items-center gap-1 ${className}`}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant={variant} 
              size={size}
              onClick={handleToggle}
              className="flex items-center gap-2"
            >
              {getButtonIcon()}
              <span className="hidden sm:inline">
                {language === 'jp' && '音声'}
                {language === 'ko' && '음성'}
                {language === 'en' && 'Listen'}
                {language === 'zh' && '朗读'}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{getTooltipText()}</p>
            {selectedVoice && (
              <p className="text-xs text-slate-500 mt-1">
                {selectedVoice.name}
              </p>
            )}
          </TooltipContent>
        </Tooltip>

        {/* Settings dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="px-2">
              <Settings className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>
              {language === 'jp' && '音声設定'}
              {language === 'ko' && '음성 설정'}
              {language === 'en' && 'Voice Settings'}
              {language === 'zh' && '语音设置'}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {/* Speed Control */}
            <div className="px-2 py-2">
              <label className="text-sm font-medium mb-2 block">
                {language === 'jp' && '速度'}
                {language === 'ko' && '속도'}
                {language === 'en' && 'Speed'}
                {language === 'zh' && '速度'}
                : {rate.toFixed(1)}x
              </label>
              <Slider
                value={[rate]}
                onValueChange={(values) => setRate(values[0])}
                min={0.5}
                max={2.0}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Pitch Control */}
            <div className="px-2 py-2">
              <label className="text-sm font-medium mb-2 block">
                {language === 'jp' && '音程'}
                {language === 'ko' && '음정'}
                {language === 'en' && 'Pitch'}
                {language === 'zh' && '音调'}
                : {pitch.toFixed(1)}
              </label>
              <Slider
                value={[pitch]}
                onValueChange={(values) => setPitch(values[0])}
                min={0.5}
                max={2.0}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Volume Control */}
            <div className="px-2 py-2">
              <label className="text-sm font-medium mb-2 block">
                {language === 'jp' && '音量'}
                {language === 'ko' && '음량'}
                {language === 'en' && 'Volume'}
                {language === 'zh' && '音量'}
                : {Math.round(volume * 100)}%
              </label>
              <Slider
                value={[volume]}
                onValueChange={(values) => setVolume(values[0])}
                min={0.1}
                max={1.0}
                step={0.1}
                className="w-full"
              />
            </div>

            <DropdownMenuSeparator />
            
            {/* Voice Info */}
            {selectedVoice && (
              <div className="px-2 py-2 text-xs text-slate-600">
                <div className="flex items-center gap-1 mb-1">
                  <Speaker className="h-3 w-3" />
                  <span className="font-medium">
                    {language === 'jp' && '音声'}
                    {language === 'ko' && '음성'}
                    {language === 'en' && 'Voice'}
                    {language === 'zh' && '语音'}
                  </span>
                </div>
                <div>{selectedVoice.name}</div>
                <div className="text-slate-500">{selectedVoice.lang}</div>
              </div>
            )}

            <DropdownMenuSeparator />
            
            {/* Stop button */}
            {isPlaying && (
              <DropdownMenuItem onClick={handleStop} className="text-red-600">
                <VolumeX className="mr-2 h-4 w-4" />
                {language === 'jp' && '停止'}
                {language === 'ko' && '정지'}
                {language === 'en' && 'Stop'}
                {language === 'zh' && '停止'}
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
}