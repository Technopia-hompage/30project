import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Import pages
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Anniversary } from "@/pages/Anniversary";
import { Business } from "@/pages/Business";
import { Careers } from "@/pages/Careers";
import { Contact } from "@/pages/Contact";

import { News } from "@/pages/News";
import { Admin } from "@/pages/Admin";
import { Privacy } from "@/pages/Privacy";
import { SitePolicy } from "@/pages/SitePolicy";
import { CeoMessage } from "@/pages/CeoMessage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Multi-language routes */}
      <Route path="/" component={Home} />
      <Route path="/:lang" component={Home} />
      <Route path="/:lang/about" component={About} />
      <Route path="/:lang/anniversary" component={Anniversary} />
      <Route path="/:lang/business" component={Business} />
      <Route path="/:lang/careers" component={Careers} />
      <Route path="/:lang/contact" component={Contact} />

      <Route path="/:lang/news" component={News} />
      <Route path="/:lang/news/:id" component={News} />
      <Route path="/:lang/admin" component={Admin} />
      <Route path="/:lang/privacy" component={Privacy} />
      <Route path="/:lang/site-policy" component={SitePolicy} />
      <Route path="/:lang/ceo-message" component={CeoMessage} />
      
      {/* Default language routes */}
      <Route path="/about" component={About} />
      <Route path="/anniversary" component={Anniversary} />
      <Route path="/business" component={Business} /> 
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />

      <Route path="/news" component={News} />
      <Route path="/news/:id" component={News} />
      <Route path="/admin" component={Admin} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/site-policy" component={SitePolicy} />
      <Route path="/ceo-message" component={CeoMessage} />
      
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
          </div>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
