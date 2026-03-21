import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import ColorwavesTitle from "./components/ColorwavesTitle";
import ThemeToggler from "./components/ThemeToggler";
import Footer from "./components/layout/Footer";
import SubNav from "./components/layout/SubNav";
import ColorPage from "./components/home/ColorPage";
import ExampleSection from "./components/home/ExampleSection";
import HeroSection from "./components/home/HeroSection";
import ScienceSection from "./components/home/ScienceSection";

export default function App() {
  const scrollToCollection = () => {
    document.getElementById("colors")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(1200px_700px_at_85%_-15%,rgba(56,189,248,0.2)_0%,transparent_55%),radial-gradient(900px_600px_at_15%_20%,rgba(16,185,129,0.12)_0%,transparent_60%),#040712] text-primary-content">
        <div className="navbar sticky top-0 z-30 border-b border-primary px-4 backdrop-blur-md md:px-8">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
            <Link to="/" aria-label="Go to Colorwaves home" className="transition-opacity hover:opacity-85">
              <ColorwavesTitle compact />
            </Link>
            <ThemeToggler />
          </div>
        </div>
        <SubNav />

        <Routes>
          <Route path="/" element={<HomeLayout onBrowseLibrary={scrollToCollection} />} />
          <Route path="/colors/:id" element={<ColorPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

function HomeLayout({ onBrowseLibrary }: { onBrowseLibrary: () => void }) {
  return (
    <main>
      <HeroSection onBrowseLibrary={onBrowseLibrary} />
      <ScienceSection />
      <ExampleSection />
    </main>
  );
}
