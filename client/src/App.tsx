import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import HomeMinimal from "@/pages/home-minimal";

type SiteType = 'design' | 'minimal' | 'loading';

function getSiteTypeFromUrl(): SiteType | null {
  const params = new URLSearchParams(window.location.search);
  const siteParam = params.get('site');
  if (siteParam === 'minimal' || siteParam === 'design') {
    return siteParam;
  }
  return null;
}

function getSiteTypeFromHostname(): SiteType {
  const hostname = window.location.hostname;
  
  if (hostname === 'www.idbh.com' || hostname === 'idbh.com') {
    return 'minimal';
  }
  
  if (hostname === 'design.idbh.com') {
    return 'design';
  }
  
  // Default to design for development/other domains
  return 'design';
}

function Router({ siteType }: { siteType: SiteType }) {
  if (siteType === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  const HomePage = siteType === 'minimal' ? HomeMinimal : Home;
  
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [siteType, setSiteType] = useState<SiteType>('loading');

  useEffect(() => {
    // First check URL parameter (for testing)
    const urlSiteType = getSiteTypeFromUrl();
    if (urlSiteType) {
      setSiteType(urlSiteType);
      return;
    }

    // Then use hostname-based detection
    const hostnameSiteType = getSiteTypeFromHostname();
    setSiteType(hostnameSiteType);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router siteType={siteType} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
