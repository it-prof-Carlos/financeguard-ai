import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Investigations from "./pages/Investigations";
import Reports from "./pages/Reports";

const queryClient = new QueryClient();

const Navigation = () => (
  <nav className="bg-background border-b mb-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center h-16 space-x-8">
        <Link to="/" className="text-foreground hover:text-primary transition-colors">
          Dashboard
        </Link>
        <Link to="/investigations" className="text-foreground hover:text-primary transition-colors">
          Investigations
        </Link>
        <Link to="/reports" className="text-foreground hover:text-primary transition-colors">
          Reports
        </Link>
      </div>
    </div>
  </nav>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/investigations" element={<Investigations />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;