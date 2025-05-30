import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { getMultiLanguageContent } from "@/lib/i18n";
import { CompanyTimelineEvent } from "@shared/schema";

export function Timeline() {
  const { language } = useLanguage();
  
  const { data: timelineEvents, isLoading } = useQuery<CompanyTimelineEvent[]>({
    queryKey: ['/api/timeline', language],
  });

  if (isLoading) {
    return (
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-slate-200"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative flex items-center justify-between mb-16">
            <div className={`w-5/12 ${i % 2 === 0 ? '' : 'order-2'}`}>
              <Card className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-6 bg-slate-200 rounded mb-3"></div>
                  <div className="h-4 bg-slate-200 rounded"></div>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-200 rounded-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!timelineEvents?.length) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-600">
          {language === 'jp' && '表示する年表イベントがありません。'}
          {language === 'ko' && '표시할 연표 이벤트가 없습니다.'}
          {language === 'en' && 'No timeline events to display.'}
          {language === 'zh' && '没有要显示的时间线事件。'}
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-corporate-blue"></div>
      
      {timelineEvents.map((event, index) => (
        <div key={event.id} className="relative flex items-center justify-between mb-16 animate-fade-in">
          <div className={`w-5/12 ${index % 2 === 0 ? '' : 'order-2'}`}>
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-corporate-blue font-bold">
                    {event.year}年
                  </Badge>
                  {event.featured && (
                    <Badge className="bg-anniversary-red">
                      {language === 'jp' && '重要'}
                      {language === 'ko' && '중요'}
                      {language === 'en' && 'Important'}
                      {language === 'zh' && '重要'}
                    </Badge>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  {getMultiLanguageContent(event.title, language)}
                </h4>
                <p className="text-slate-600">
                  {getMultiLanguageContent(event.description, language)}
                </p>
                {event.imageUrl && (
                  <img 
                    src={event.imageUrl} 
                    alt={getMultiLanguageContent(event.title, language)}
                    className="w-full h-32 object-cover rounded-lg mt-4"
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
            event.featured ? 'bg-anniversary-red animate-pulse' : 'bg-corporate-blue'
          }`}></div>
        </div>
      ))}
    </div>
  );
}
