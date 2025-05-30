import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/lib/i18n";

const languages = [
  { code: 'jp' as Language, name: '🇯🇵 日本語', label: 'Japanese' },
  { code: 'ko' as Language, name: '🇰🇷 한국어', label: 'Korean' },
  { code: 'en' as Language, name: '🇺🇸 English', label: 'English' },
  { code: 'zh' as Language, name: '🇨🇳 中文', label: 'Chinese' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
      <SelectTrigger className="w-40 bg-white border-slate-300">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
