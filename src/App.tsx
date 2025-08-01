import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SupermarchesPage from "./pages/categories/SupermarchesPage";
import SportModePage from "./pages/categories/SportModePage";
import AutomobilePage from "./pages/categories/AutomobilePage";
import SassayePage from "./pages/categories/SassayePage";
import CommentCaMarchePage from "./pages/CommentCaMarchePage";
import AProposPage from "./pages/AProposPage";
import ContactPage from "./pages/ContactPage";
import DevenirAnnonceurPage from "./pages/DevenirAnnonceurPage";
import CatalogDetailPage from "./pages/CatalogDetailPage";
import Navigation from "./components/ui/navigation";
import Footer from "./components/ui/footer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 pb-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/supermarches" element={<SupermarchesPage />} />
              <Route path="/categories/sport-mode" element={<SportModePage />} />
              <Route path="/categories/automobile" element={<AutomobilePage />} />
              <Route path="/categories/sassaye" element={<SassayePage />} />
              <Route path="/comment-ca-marche" element={<CommentCaMarchePage />} />
              <Route path="/a-propos" element={<AProposPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/devenir-annonceur" element={<DevenirAnnonceurPage />} />
              <Route path="/catalogue/:id" element={<CatalogDetailPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
