import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header language={language} onLanguageChange={setLanguage} />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index language={language} />} />
                <Route path="/services" element={<Services language={language} />} />
                <Route path="/about" element={<About language={language} />} />
                <Route path="/case-studies" element={<CaseStudies language={language} />} />
                <Route path="/faq" element={<FAQ language={language} />} />
                <Route path="/contact" element={<Contact language={language} />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer language={language} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
