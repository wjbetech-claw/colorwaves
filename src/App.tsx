import React from "react";
import ColorwavesTitle from "./components/ColorwavesTitle";
import ThemeToggler from "./components/ThemeToggler";
import Footer from "./components/layout/Footer";
import ExampleSection from "./components/home/ExampleSection";
import HeroSection from "./components/home/HeroSection";
import ScienceSection from "./components/home/ScienceSection";

export default function App() {
  const scrollToScience = () => {
    document.getElementById("science")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_700px_at_85%_-15%,rgba(56,189,248,0.2)_0%,transparent_55%),radial-gradient(900px_600px_at_15%_20%,rgba(16,185,129,0.12)_0%,transparent_60%),#040712] text-primary-content">
      <div className="navbar sticky top-0 z-30 border-b border-primary bg-base-200 px-4 backdrop-blur-md md:px-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <ColorwavesTitle compact />
          <ThemeToggler />
        </div>
      </div>

      <main>
        <HeroSection onViewExample={scrollToScience} />
        <ScienceSection />
        <ExampleSection />
      </main>

      <Footer />
    </div>
  );
}
