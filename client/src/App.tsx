import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GlobalVoiceNarration } from "@/components/GlobalVoiceNarration";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Import pages
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Anniversary } from "@/pages/Anniversary";
import { Business } from "@/pages/Business";
import { Medical } from "@/pages/Medical";
import { Auto } from "@/pages/Auto";
import { AutoAdmin } from "@/pages/AutoAdmin";
import { DiscontinuedWheels } from "@/pages/DiscontinuedWheels";
import WheelSpecs from "@/pages/WheelSpecs";
import FeaturesEditor from "@/pages/FeaturesEditor";
import { NewBusiness } from "@/pages/NewBusiness";
import { Careers } from "@/pages/Careers";
import { Contact } from "@/pages/Contact";

import { News } from "@/pages/News";
import { NewsAdmin } from "@/pages/NewsAdmin";
import { Admin } from "@/pages/Admin";
import { Privacy } from "@/pages/Privacy";
import { SitePolicy } from "@/pages/SitePolicy";
import { CeoMessage } from "@/pages/CeoMessage";
import { ConferenceInfo } from "@/pages/ConferenceInfo";
import { Certifications } from "@/pages/Certifications";
import NotFound from "@/pages/not-found";
import { Sitemap } from "@/pages/Sitemap";

function Router() {
  return (
    <Switch>
      {/* Multi-language routes */}
      <Route path="/" component={Home} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/:lang/sitemap" component={Sitemap} />
      <Route path="/:lang/about" component={About} />
      <Route path="/:lang/anniversary" component={Anniversary} />
      <Route path="/:lang/business" component={Business} />
      <Route path="/:lang/medical" component={Medical} />
      <Route path="/:lang/medical/conference-info" component={ConferenceInfo} />
      <Route path="/:lang/medical/certifications" component={Certifications} />
      <Route path="/:lang/auto" component={Auto} />
      <Route path="/:lang/auto/brand/:brandId" component={Auto} />
      <Route path="/:lang/auto/wheel/:wheelId" component={Auto} />
      <Route path="/:lang/auto-admin" component={AutoAdmin} />
      <Route path="/:lang/features-editor" component={FeaturesEditor} />
      <Route path="/:lang/discontinued-wheels" component={DiscontinuedWheels} />
      <Route path="/:lang/wheel-specs" component={WheelSpecs} />
      <Route path="/:lang/newbusiness" component={NewBusiness} />
      <Route path="/:lang/careers" component={Careers} />
      <Route path="/:lang/contact" component={Contact} />
      <Route path="/:lang/news" component={News} />
      <Route path="/:lang/news/:id" component={News} />
      <Route path="/:lang/news-admin" component={NewsAdmin} />
      <Route path="/:lang/admin" component={Admin} />
      <Route path="/:lang/privacy" component={Privacy} />
      <Route path="/:lang/site-policy" component={SitePolicy} />
      <Route path="/:lang/ceo-message" component={CeoMessage} />
      
      {/* Default language routes - features-editor를 맨 위로 */}
      <Route path="/features-editor" component={FeaturesEditor} />
      <Route path="/about" component={About} />
      <Route path="/anniversary" component={Anniversary} />
      <Route path="/business" component={Business} />
      <Route path="/medical" component={Medical} />
      <Route path="/auto" component={Auto} />
      <Route path="/auto/brand/:brandId" component={Auto} />
      <Route path="/auto/wheel/:wheelId" component={Auto} />
      <Route path="/auto-admin" component={AutoAdmin} />
      <Route path="/discontinued-wheels" component={DiscontinuedWheels} />
      <Route path="/wheel-specs" component={WheelSpecs} />
      <Route path="/newbusiness" component={NewBusiness} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/sitemap" component={Sitemap} />

      <Route path="/news" component={News} />
      <Route path="/news/:id" component={News} />
      <Route path="/news-admin" component={NewsAdmin} />
      <Route path="/admin" component={Admin} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/site-policy" component={SitePolicy} />
      <Route path="/ceo-message" component={CeoMessage} />
      
      {/* Catch-all route for language - 이 부분을 수정 */}
      <Route path="/:lang" component={Home} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <GlobalVoiceNarration />
          </div>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
