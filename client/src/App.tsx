import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import HomeMinimal from "@/pages/home-minimal";

function getPageByDomain() {
  const hostname = window.location.hostname;
  
  if (hostname === "design.idbh.com") {
    return Home;
  }
  
  if (hostname === "www.idbh.com" || hostname === "idbh.com") {
    return HomeMinimal;
  }
  
  return Home;
}

function Router() {
  const HomePage = getPageByDomain();
  
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
